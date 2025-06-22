import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Button,
  Link,
} from '@react-email/components'
import * as React from 'react'

interface PricingData {
  designPrice: number
  developmentPrice: number
  brandingPrice: number
  totalPrice: number
  breakdown: {
    pageCount: string
    serviceType: string
    brandStatus: string
  }
}

interface QuoteTemplateProps {
  pageCount: string
  serviceType: string
  brandStatus: string
  email: string
  isForClient?: boolean
  pricing?: PricingData
}

export const QuoteTemplate: React.FC<Readonly<QuoteTemplateProps>> = ({
  pageCount,
  serviceType,
  brandStatus,
  email,
  isForClient = true,
  pricing,
}) => {
  const previewText = isForClient
    ? pricing
      ? `Your website quote: $${pricing.totalPrice.toLocaleString()} - Request received`
      : 'Your website quote request has been received'
    : `New quote request from ${email}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-5 px-4 max-w-xl">
            {/* Header Section */}
            <Section className="border-b-2 border-gray-200 pb-5 mb-8">
              <Heading className="text-gray-800 text-2xl font-bold mb-2 mt-0">
                {isForClient ? 'Your Website Quote Request' : 'New Quote Request'}
              </Heading>
              <Text className="text-gray-600 text-base m-0">
                {isForClient
                  ? "Thank you for your interest! Here's a summary of your request:"
                  : `New quote request from ${email}`}
              </Text>
            </Section>

            {/* Project Details Section */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Project Details
              </Heading>

              {/* Page Count */}
              <Section className="bg-gray-50 p-5 rounded-lg mb-4">
                <Heading className="text-gray-800 text-base font-semibold mb-2 mt-0">
                  Page Count
                </Heading>
                <Text className="text-gray-600 text-sm m-0">{pageCount} (excluding homepage)</Text>
              </Section>

              {/* Service Type */}
              <Section className="bg-gray-50 p-5 rounded-lg mb-4">
                <Heading className="text-gray-800 text-base font-semibold mb-2 mt-0">
                  Service Type
                </Heading>
                <Text className="text-gray-600 text-sm m-0">
                  {serviceType === 'design-only' ? 'Design Only' : 'Design & Development'}
                </Text>
              </Section>

              {/* Brand Status */}
              <Section className="bg-gray-50 p-5 rounded-lg mb-4">
                <Heading className="text-gray-800 text-base font-semibold mb-2 mt-0">
                  Brand Status
                </Heading>
                <Text className="text-gray-600 text-sm m-0">
                  {brandStatus === 'no-brand' && 'No brand yet'}
                  {brandStatus === 'basic-brand' && 'Basic brand elements'}
                  {brandStatus === 'established-brand' && 'Established brand'}
                </Text>
              </Section>

              {/* Contact Email */}
              <Section className="bg-gray-50 p-5 rounded-lg">
                <Heading className="text-gray-800 text-base font-semibold mb-2 mt-0">
                  Contact Email
                </Heading>
                <Text className="text-gray-600 text-sm m-0">{email}</Text>
              </Section>
            </Section>

            {/* Pricing Section (Client Only) */}
            {isForClient && pricing && (
              <Section className="mb-8">
                <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                  Approximate Pricing
                </Heading>

                {/* Pricing Breakdown */}
                <Section className="bg-blue-50 p-5 rounded-lg mb-4">
                  <Heading className="text-blue-800 text-base font-semibold mb-3 mt-0">
                    Investment Breakdown
                  </Heading>

                  {pricing.designPrice > 0 && (
                    <Section className="flex justify-between mb-2">
                      <Text className="text-blue-700 text-sm mt-0 mb-0">Design & UX:</Text>
                      <Text className="text-blue-700 text-sm mt-0 mb-0 font-semibold">
                        ${pricing.designPrice.toLocaleString()}
                      </Text>
                    </Section>
                  )}

                  {pricing.developmentPrice > 0 && (
                    <Section className="flex justify-between mb-2">
                      <Text className="text-blue-700 text-sm mt-0 mb-0">Development:</Text>
                      <Text className="text-blue-700 text-sm mt-0 mb-0 font-semibold">
                        ${pricing.developmentPrice.toLocaleString()}
                      </Text>
                    </Section>
                  )}

                  {pricing.brandingPrice > 0 && (
                    <Section className="flex justify-between mb-2">
                      <Text className="text-blue-700 text-sm mt-0 mb-0">Brand Development:</Text>
                      <Text className="text-blue-700 text-sm mt-0 mb-0 font-semibold">
                        ${pricing.brandingPrice.toLocaleString()}
                      </Text>
                    </Section>
                  )}

                  <Hr className="border-blue-200 my-3" />

                  <Section className="flex justify-between">
                    <Text className="text-blue-800 text-base mt-0 mb-0 font-bold">
                      Total Investment:
                    </Text>
                    <Text className="text-blue-800 text-base mt-0 mb-0 font-bold">
                      ${pricing.totalPrice.toLocaleString()}
                    </Text>
                  </Section>
                </Section>

                <Section className="bg-amber-50 p-4 rounded-lg">
                  <Text className="text-amber-800 text-sm mt-0 mb-0">
                    💡 <strong>This is an approximate estimate</strong> based on your selections.
                    Your final quote may vary based on specific requirements, complexity, and
                    additional features discussed during our consultation.
                  </Text>
                </Section>
              </Section>
            )}

            {/* Book a Call Section (Client Only) */}
            {isForClient && (
              <Section className="text-center mb-8">
                <Section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <Heading className="text-gray-800 text-lg font-semibold mb-2 mt-0">
                    Ready to discuss your project?
                  </Heading>
                  <Text className="text-gray-600 text-base mb-4 mt-0">
                    Let&apos;s schedule a call to discuss your requirements, timeline, and next
                    steps.
                  </Text>
                  <Button
                    href="https://cal.com/madeleydesignstudio"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium no-underline hover:bg-blue-700"
                  >
                    📅 Book a Free Consultation
                  </Button>
                  <Text className="text-gray-500 text-xs mt-3 mb-0">
                    Choose a time that works for you - typically 30 minutes
                  </Text>
                </Section>
              </Section>
            )}

            {/* Next Steps Section (Client Only) */}
            {isForClient && (
              <Section className="bg-green-50 p-5 rounded-lg mb-8">
                <Heading className="text-green-800 text-base font-semibold mb-3 mt-0">
                  What happens next?
                </Heading>
                <Section className="text-green-700 text-sm">
                  <Text className="mb-2 mt-0">
                    • We&apos;ll review your requirements within 24 hours
                  </Text>
                  <Text className="mb-2 mt-0">
                    • You&apos;ll receive a detailed quote via email
                  </Text>
                  <Text className="mb-0 mt-0">
                    • We&apos;ll schedule a call to discuss your project
                  </Text>
                </Section>
              </Section>
            )}

            {/* Footer Section */}
            <Hr className="border-gray-200 my-5" />
            <Section className="text-center">
              <Text className="text-gray-600 text-sm mb-2 mt-0">
                {isForClient
                  ? 'Questions? Reply to this email or contact us directly.'
                  : 'Quote request submitted at ' + new Date().toLocaleString()}
              </Text>
              {isForClient && (
                <Text className="text-gray-500 text-xs m-0">
                  Madeley Design Studio | daniel@madeleydesignstudio.com
                </Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
