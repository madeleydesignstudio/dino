import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email/email-template'
import { getValidatedEnv } from '@/lib/env-validation'
import { withSecureErrorHandling, SecureApiError, secureLog } from '@/lib/error-handling'

// Get validated environment variables
const env = getValidatedEnv()
const resend = new Resend(env.RESEND_API_KEY)

export const POST = withSecureErrorHandling(async () => {
  // Send test email
  const { data, error } = await resend.emails.send({
    from: 'Madeley Design Studio <mail@madeleydesignstudio.com>',
    to: ['daniel@madeleydesignstudio.com'],
    subject: 'Test Email from Dino Studio',
    react: EmailTemplate({ firstName: 'Test User' }) as React.ReactElement,
  })

  if (error) {
    secureLog('error', 'Failed to send test email', {
      error: error.message,
    })
    throw new SecureApiError('Failed to send test email', 500, 'EMAIL_SEND_ERROR')
  }

  secureLog('info', 'Test email sent successfully', {
    emailId: data?.id,
  })

  return Response.json({
    success: true,
    message: 'Test email sent successfully',
    emailId: data?.id,
  })
})
