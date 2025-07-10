import { LoopsClient } from 'loops'
import { Resend } from 'resend'
import { WelcomeTemplate } from '@/components/email/welcome-template'
import { getValidatedEnv } from '@/lib/env-validation'
import {
  withSecureErrorHandling,
  validateEmailField,
  enforceRateLimit,
  SecureApiError,
  secureLog,
} from '@/lib/error-handling'

// Get validated environment variables
const env = getValidatedEnv()
const resend = new Resend(env.RESEND_API_KEY)
const loops = new LoopsClient(env.LOOPS_API_KEY)

// Your newsletter audience ID - you'll need to create this in Resend dashboard first
const NEWSLETTER_AUDIENCE_ID = env.RESEND_NEWSLETTER_AUDIENCE_ID || 'your-audience-id'

export const POST = withSecureErrorHandling(async (request: Request) => {
  const body = await request.json()
  const { email, firstName } = body

  // Rate limiting based on email
  enforceRateLimit(`newsletter_${email}`, 3, 300000) // 3 requests per 5 minutes

  // Validate required fields
  validateEmailField(email)

  // Optional: validate firstName if provided
  if (firstName && typeof firstName !== 'string') {
    throw new SecureApiError('First name must be a string', 400, 'VALIDATION_ERROR')
  }

  // First, ensure the audience exists (create if it doesn't)
  let audienceId = NEWSLETTER_AUDIENCE_ID

  if (!audienceId || audienceId === 'your-audience-id') {
    // Create a new audience for newsletters
    const audienceResult = await resend.audiences.create({
      name: 'Newsletter Subscribers',
    })

    if (audienceResult.error) {
      secureLog('error', 'Failed to create newsletter audience', {
        error: audienceResult.error.message,
        email: email, // Safe to log email for newsletter operations
      })
      throw new SecureApiError('Failed to set up newsletter system', 500, 'AUDIENCE_CREATION_ERROR')
    }

    if (!audienceResult.data?.id) {
      secureLog('error', 'No audience ID returned from creation')
      throw new SecureApiError(
        'Failed to create newsletter audience',
        500,
        'AUDIENCE_CREATION_ERROR',
      )
    }

    audienceId = audienceResult.data.id
    secureLog('info', 'Created new newsletter audience', { audienceId })
  }

  // Add contact to Resend audience
  const contactResult = await resend.contacts.create({
    email,
    firstName: firstName || undefined,
    audienceId,
  })

  // Track if this is a new subscription or existing
  let isAlreadySubscribed = false

  if (contactResult.error) {
    // Check if contact already exists
    if (contactResult.error.message?.includes('Contact already exists')) {
      secureLog('info', 'Contact already exists in Resend', { email })
      isAlreadySubscribed = true
    } else {
      secureLog('error', 'Failed to add contact to Resend', {
        error: contactResult.error.message,
        email,
      })
      throw new SecureApiError('Failed to subscribe to newsletter', 500, 'CONTACT_CREATION_ERROR')
    }
  }

  // Add contact to Loops (this will create or update)
  const loopsResult = await loops.updateContact(email, {
    firstName: firstName || undefined,
    source: 'website_newsletter',
    subscriptionSource: 'footer_form',
    subscriptionDate: new Date().toISOString(),
  })

  if (loopsResult.success) {
    secureLog('info', 'Contact synced to Loops successfully', {
      email,
      loopsId: loopsResult.id,
    })
  } else {
    secureLog('warn', 'Failed to sync contact to Loops', {
      email,
      error: loopsResult,
    })
    // Don't fail the subscription if Loops fails, but log it
  }

  // If already subscribed to both services, return appropriate message
  if (isAlreadySubscribed && loopsResult.success) {
    throw new SecureApiError(
      "You're already subscribed to our newsletter!",
      409,
      'ALREADY_SUBSCRIBED',
    )
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
  })

  if (welcomeEmailResult.error) {
    secureLog('warn', 'Failed to send welcome email', {
      error: welcomeEmailResult.error.message,
      email,
    })
    // Don't fail the subscription if welcome email fails
  } else {
    secureLog('info', 'Welcome email sent successfully', {
      email,
      emailId: welcomeEmailResult.data?.id,
    })
  }

  // Log successful subscription
  secureLog('info', 'New newsletter subscription completed', {
    email,
    firstName,
    resendContactId: contactResult.data?.id,
    loopsContactId: loopsResult.success ? loopsResult.id : null,
    audienceId,
    welcomeEmailId: welcomeEmailResult.data?.id,
  })

  return Response.json({
    success: true,
    message: 'Successfully subscribed to newsletter!',
    resendContactId: contactResult.data?.id,
    loopsContactId: loopsResult.success ? loopsResult.id : null,
    welcomeEmailSent: !welcomeEmailResult.error,
    loopsSynced: loopsResult.success,
  })
})
