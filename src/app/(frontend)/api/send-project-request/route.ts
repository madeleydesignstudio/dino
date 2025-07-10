import { Resend } from 'resend'
import { ProjectRequestTemplate } from '@/components/email/project-request-template'
import { getValidatedEnv } from '@/lib/env-validation'
import {
  withSecureErrorHandling,
  validateEmailField,
  validateRequired,
  enforceRateLimit,
  SecureApiError,
  secureLog,
} from '@/lib/error-handling'

// Get validated environment variables
const env = getValidatedEnv()
const resend = new Resend(env.RESEND_API_KEY)

export const POST = withSecureErrorHandling(async (request: Request) => {
  const body = await request.json()

  // Rate limiting based on email
  enforceRateLimit(`project_request_${body.email}`, 2, 3600000) // 2 requests per hour

  // Validate required fields
  const requiredFields = [
    'fullName',
    'email',
    'company',
    'projectName',
    'projectDescription',
    'pageCount',
    'serviceType',
    'brandStatus',
    'websiteType',
  ]

  for (const field of requiredFields) {
    validateRequired(body[field], field)
  }

  // Validate email format
  validateEmailField(body.email)

  // Validate that numeric fields are reasonable
  if (body.pageCount && (isNaN(body.pageCount) || body.pageCount < 1 || body.pageCount > 10000)) {
    throw new SecureApiError(
      'Page count must be a valid number between 1 and 10000',
      400,
      'VALIDATION_ERROR',
    )
  }

  // Sanitize string fields to prevent XSS
  const sanitizedBody = {
    ...body,
    fullName: String(body.fullName).trim(),
    company: String(body.company).trim(),
    projectName: String(body.projectName).trim(),
    projectDescription: String(body.projectDescription).trim(),
    serviceType: String(body.serviceType).trim(),
    brandStatus: String(body.brandStatus).trim(),
    websiteType: String(body.websiteType).trim(),
  }

  // Send confirmation email to the client
  const clientEmailResult = await resend.emails.send({
    from: 'Madeley Design Studio <mail@madeleydesignstudio.com>',
    to: [sanitizedBody.email],
    subject: 'Your Project Request Received - Madeley Design Studio',
    react: ProjectRequestTemplate({
      ...sanitizedBody,
      isForClient: true,
    }) as React.ReactElement,
  })

  // Send detailed project request to Daniel
  const danielEmailResult = await resend.emails.send({
    from: 'Project Requests <mail@madeleydesignstudio.com>',
    to: ['daniel@madeleydesignstudio.com'],
    subject: `New Detailed Project Request from ${sanitizedBody.fullName} (${sanitizedBody.company})`,
    react: ProjectRequestTemplate({
      ...sanitizedBody,
      isForClient: false,
    }) as React.ReactElement,
  })

  // Check for errors in either email
  if (clientEmailResult.error) {
    secureLog('error', 'Failed to send client confirmation email', {
      error: clientEmailResult.error.message,
      email: sanitizedBody.email,
      projectName: sanitizedBody.projectName,
    })
    throw new SecureApiError('Failed to send confirmation email', 500, 'EMAIL_SEND_ERROR')
  }

  if (danielEmailResult.error) {
    secureLog('error', 'Failed to send notification email', {
      error: danielEmailResult.error.message,
      email: sanitizedBody.email,
      projectName: sanitizedBody.projectName,
    })
    throw new SecureApiError('Failed to send notification email', 500, 'EMAIL_SEND_ERROR')
  }

  // Log successful project request
  secureLog('info', 'New project request submitted', {
    email: sanitizedBody.email,
    projectName: sanitizedBody.projectName,
    company: sanitizedBody.company,
    serviceType: sanitizedBody.serviceType,
    clientEmailId: clientEmailResult.data?.id,
    danielEmailId: danielEmailResult.data?.id,
  })

  return Response.json({
    success: true,
    message:
      'Project request submitted successfully! You will receive a confirmation email shortly.',
    clientEmailId: clientEmailResult.data?.id,
    danielEmailId: danielEmailResult.data?.id,
  })
})
