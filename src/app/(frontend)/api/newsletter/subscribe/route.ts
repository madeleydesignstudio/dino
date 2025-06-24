import { LoopsClient } from 'loops';
import { Resend } from 'resend';
import { WelcomeTemplate } from '@/components/email/welcome-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

// Your newsletter audience ID - you'll need to create this in Resend dashboard first
const NEWSLETTER_AUDIENCE_ID =
  process.env.RESEND_NEWSLETTER_AUDIENCE_ID || 'your-audience-id';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName } = body;

    // Validate required fields
    if (!email) {
      return Response.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // First, ensure the audience exists (create if it doesn't)
    let audienceId = NEWSLETTER_AUDIENCE_ID;

    if (!audienceId || audienceId === 'your-audience-id') {
      // Create a new audience for newsletters
      const audienceResult = await resend.audiences.create({
        name: 'Newsletter Subscribers',
      });

      if (audienceResult.error) {
        console.error('Error creating audience:', audienceResult.error);
        return Response.json(
          { error: 'Failed to set up newsletter system' },
          { status: 500 }
        );
      }

      if (!audienceResult.data?.id) {
        console.error('No audience ID returned from creation');
        return Response.json(
          { error: 'Failed to create newsletter audience' },
          { status: 500 }
        );
      }

      audienceId = audienceResult.data.id;
      console.log('Created new audience with ID:', audienceId);
      console.log(
        'Please add RESEND_NEWSLETTER_AUDIENCE_ID to your environment variables:',
        audienceId
      );
    }

    // Add contact to Resend audience
    const contactResult = await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      audienceId,
    });

    // Track if this is a new subscription or existing
    let isAlreadySubscribed = false;

    if (contactResult.error) {
      // Check if contact already exists
      if (contactResult.error.message?.includes('Contact already exists')) {
        console.log(
          'Contact already exists in Resend, continuing with Loops...'
        );
        isAlreadySubscribed = true;
      } else {
        console.error('Error adding contact to Resend:', contactResult.error);
        return Response.json(
          { error: 'Failed to subscribe to newsletter' },
          { status: 500 }
        );
      }
    }

    // Add contact to Loops (this will create or update)
    const loopsResult = await loops.updateContact(email, {
      firstName: firstName || undefined,
      source: 'website_newsletter',
      subscriptionSource: 'footer_form',
      subscriptionDate: new Date().toISOString(),
    });

    if (loopsResult.success) {
      console.log('Contact synced to Loops successfully:', loopsResult.id);
    } else {
      console.error('Error adding contact to Loops:', loopsResult);
      // Don't fail the subscription if Loops fails, but log it
      console.log('Newsletter subscription successful but Loops sync failed');
    }

    // If already subscribed to both services, return appropriate message
    if (isAlreadySubscribed && loopsResult.success) {
      return Response.json(
        { error: 'You&apos;re already subscribed to our newsletter!' },
        { status: 409 }
      );
    }

    // Send welcome email to the new subscriber
    const welcomeEmailResult = await resend.emails.send({
      from: 'Madeley Design Studio <mail@madeleydesignstudio.com>',
      to: [email],
      subject: 'Welcome to our newsletter! 🎉',
      react: WelcomeTemplate({
        firstName: firstName || undefined,
        email,
      }) as React.ReactElement,
    });

    if (welcomeEmailResult.error) {
      console.error('Error sending welcome email:', welcomeEmailResult.error);
      // Don't fail the subscription if welcome email fails
      console.log(
        'Newsletter subscription successful but welcome email failed'
      );
    } else {
      console.log(
        'Welcome email sent successfully:',
        welcomeEmailResult.data?.id
      );
    }

    // Log successful subscription
    console.log('New newsletter subscription:', {
      email,
      firstName,
      resendContactId: contactResult.data?.id,
      loopsContactId: loopsResult.success ? loopsResult.id : null,
      audienceId,
      welcomeEmailId: welcomeEmailResult.data?.id,
    });

    return Response.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      resendContactId: contactResult.data?.id,
      loopsContactId: loopsResult.success ? loopsResult.id : null,
      welcomeEmailSent: !welcomeEmailResult.error,
      loopsSynced: loopsResult.success,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
