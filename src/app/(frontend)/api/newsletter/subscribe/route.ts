import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Your newsletter audience ID - you'll need to create this in Resend dashboard first
const NEWSLETTER_AUDIENCE_ID = process.env.RESEND_NEWSLETTER_AUDIENCE_ID || 'your-audience-id'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, firstName } = body

    // Validate required fields
    if (!email) {
      return Response.json({ error: 'Email address is required' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Please enter a valid email address' }, { status: 400 })
    }

    // First, ensure the audience exists (create if it doesn't)
    let audienceId = NEWSLETTER_AUDIENCE_ID

    if (!audienceId || audienceId === 'your-audience-id') {
      // Create a new audience for newsletters
      const audienceResult = await resend.audiences.create({
        name: 'Newsletter Subscribers',
      })

      if (audienceResult.error) {
        console.error('Error creating audience:', audienceResult.error)
        return Response.json({ error: 'Failed to set up newsletter system' }, { status: 500 })
      }

      if (!audienceResult.data?.id) {
        console.error('No audience ID returned from creation')
        return Response.json({ error: 'Failed to create newsletter audience' }, { status: 500 })
      }

      audienceId = audienceResult.data.id
      console.log('Created new audience with ID:', audienceId)
      console.log(
        'Please add RESEND_NEWSLETTER_AUDIENCE_ID to your environment variables:',
        audienceId,
      )
    }

    // Add contact to the audience
    const contactResult = await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      audienceId,
    })

    if (contactResult.error) {
      // Check if contact already exists
      if (contactResult.error.message?.includes('Contact already exists')) {
        return Response.json(
          { error: 'You&apos;re already subscribed to our newsletter!' },
          { status: 409 },
        )
      }

      console.error('Error adding contact:', contactResult.error)
      return Response.json({ error: 'Failed to subscribe to newsletter' }, { status: 500 })
    }

    // Log successful subscription
    console.log('New newsletter subscription:', {
      email,
      firstName,
      contactId: contactResult.data?.id,
      audienceId,
    })

    return Response.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      contactId: contactResult.data?.id,
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
