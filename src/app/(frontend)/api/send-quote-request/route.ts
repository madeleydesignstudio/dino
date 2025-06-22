import { QuoteTemplate } from '@/components/email/quote-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { pageCount, serviceType, brandStatus, email, timestamp } = body

    // Validate required fields
    if (!pageCount || !serviceType || !brandStatus || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Calculate approximate pricing
    const pricing = calculateApproximatePricing(pageCount, serviceType, brandStatus)

    // Send email to the client with pricing
    const clientEmailResult = await resend.emails.send({
      from: 'Madeley Design Studio <mail@madeleydesignstudio.com>',
      to: [email],
      subject: 'Your Website Quote & Pricing - Madeley Design Studio',
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
      subject: `New Quote Request from ${email}`,
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
      console.error('Error sending client email:', clientEmailResult.error)
      return Response.json({ error: 'Failed to send confirmation email' }, { status: 500 })
    }

    if (danielEmailResult.error) {
      console.error('Error sending notification email:', danielEmailResult.error)
      return Response.json({ error: 'Failed to send notification email' }, { status: 500 })
    }

    return Response.json({
      success: true,
      clientEmailId: clientEmailResult.data?.id,
      danielEmailId: danielEmailResult.data?.id,
    })
  } catch (error) {
    console.error('Quote request error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
