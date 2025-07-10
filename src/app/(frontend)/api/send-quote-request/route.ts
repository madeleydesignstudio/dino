import { Resend } from 'resend'
import { QuoteTemplate } from '@/components/email/quote-template'
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

// Pricing calculation function
function calculateApproximatePricing(pageCount: string, serviceType: string, brandStatus: string) {
  let basePrice = 0
  let designPrice = 0
  let developmentPrice = 0
  let brandingPrice = 0

  // Base pricing by page count
  switch (pageCount) {
    case '1-3':
      basePrice = 2500
      break
    case '4-6':
      basePrice = 4000
      break
    case '7-10':
      basePrice = 6500
      break
    case '10+':
      basePrice = 9000
      break
    default:
      basePrice = 2500
  }

  // Service type pricing
  if (serviceType === 'design-only') {
    designPrice = basePrice * 0.6 // Design only is 60% of full price
    developmentPrice = 0
  } else {
    designPrice = basePrice * 0.6
    developmentPrice = basePrice * 0.4
  }

  // Brand status pricing
  switch (brandStatus) {
    case 'no-brand':
      brandingPrice = 1500
      break
    case 'basic-brand':
      brandingPrice = 750
      break
    case 'established-brand':
      brandingPrice = 0
      break
    default:
      brandingPrice = 0
  }

  const totalPrice = designPrice + developmentPrice + brandingPrice

  return {
    designPrice: Math.round(designPrice),
    developmentPrice: Math.round(developmentPrice),
    brandingPrice: Math.round(brandingPrice),
    totalPrice: Math.round(totalPrice),
    breakdown: {
      pageCount,
      serviceType,
      brandStatus,
    },
  }
}

export const POST = withSecureErrorHandling(async (request: Request) => {
  const body = await request.json()
  const { pageCount, serviceType, brandStatus, email } = body

  // Rate limiting based on email
  enforceRateLimit(`quote_request_${email}`, 5, 3600000) // 5 requests per hour

  // Validate required fields
  validateRequired(pageCount, 'pageCount')
  validateRequired(serviceType, 'serviceType')
  validateRequired(brandStatus, 'brandStatus')
  validateEmailField(email)

  // Validate field values
  const validPageCounts = ['1-3', '4-6', '7-10', '10+']
  const validServiceTypes = ['design-only', 'design-and-development']
  const validBrandStatuses = ['no-brand', 'basic-brand', 'established-brand']

  if (!validPageCounts.includes(pageCount)) {
    throw new SecureApiError('Invalid page count selection', 400, 'VALIDATION_ERROR')
  }

  if (!validServiceTypes.includes(serviceType)) {
    throw new SecureApiError('Invalid service type selection', 400, 'VALIDATION_ERROR')
  }

  if (!validBrandStatuses.includes(brandStatus)) {
    throw new SecureApiError('Invalid brand status selection', 400, 'VALIDATION_ERROR')
  }

  // Calculate approximate pricing
  const pricing = calculateApproximatePricing(pageCount, serviceType, brandStatus)

  // Send email to the client with pricing
  const clientEmailResult = await resend.emails.send({
    from: 'Madeley Design Studio <mail@madeleydesignstudio.com>',
    to: [email],
    subject: 'Your Quick Quote Estimate - Madeley Design Studio',
    react: QuoteTemplate({
      pageCount,
      serviceType,
      brandStatus,
      email,
      isForClient: true,
      pricing,
    }) as React.ReactElement,
  })

  // Send notification email to Daniel
  const danielEmailResult = await resend.emails.send({
    from: 'Quote Requests <mail@madeleydesignstudio.com>',
    to: ['daniel@madeleydesignstudio.com'],
    subject: `New Quick Quote Request from ${email}`,
    react: QuoteTemplate({
      pageCount,
      serviceType,
      brandStatus,
      email,
      isForClient: false,
      pricing,
    }) as React.ReactElement,
  })

  // Check for errors in either email
  if (clientEmailResult.error) {
    secureLog('error', 'Failed to send client quote email', {
      error: clientEmailResult.error.message,
      email,
      pageCount,
      serviceType,
    })
    throw new SecureApiError('Failed to send confirmation email', 500, 'EMAIL_SEND_ERROR')
  }

  if (danielEmailResult.error) {
    secureLog('error', 'Failed to send notification email', {
      error: danielEmailResult.error.message,
      email,
      pageCount,
      serviceType,
    })
    throw new SecureApiError('Failed to send notification email', 500, 'EMAIL_SEND_ERROR')
  }

  // Log successful quote request
  secureLog('info', 'New quote request submitted', {
    email,
    pageCount,
    serviceType,
    brandStatus,
    estimatedPrice: pricing.totalPrice,
    clientEmailId: clientEmailResult.data?.id,
    danielEmailId: danielEmailResult.data?.id,
  })

  return Response.json({
    success: true,
    message: 'Quote request submitted successfully! Check your email for the estimate.',
    pricing,
    clientEmailId: clientEmailResult.data?.id,
    danielEmailId: danielEmailResult.data?.id,
  })
})
