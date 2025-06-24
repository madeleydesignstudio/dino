import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type * as React from 'react';

interface PricingData {
  designPrice: number;
  developmentPrice: number;
  brandingPrice: number;
  totalPrice: number;
  breakdown: {
    pageCount: string;
    serviceType: string;
    brandStatus: string;
  };
}

interface QuoteTemplateProps {
  pageCount: string;
  serviceType: string;
  brandStatus: string;
  email: string;
  isForClient?: boolean;
  pricing?: PricingData;
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
    : `New quote request from ${email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto max-w-xl px-4 py-5">
            {/* Header Section */}
            <Section className="mb-8 border-gray-200 border-b-2 pb-5">
              <Heading className="mt-0 mb-2 font-bold text-2xl text-gray-800">
                {isForClient
                  ? 'Your Website Quote Request'
                  : 'New Quote Request'}
              </Heading>
              <Text className="m-0 text-base text-gray-600">
                {isForClient
                  ? "Thank you for your interest! Here's a summary of your request:"
                  : `New quote request from ${email}`}
              </Text>
            </Section>

            {/* Project Details Section */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Project Details
              </Heading>

              {/* Page Count */}
              <Section className="mb-4 rounded-lg bg-gray-50 p-5">
                <Heading className="mt-0 mb-2 font-semibold text-base text-gray-800">
                  Page Count
                </Heading>
                <Text className="m-0 text-gray-600 text-sm">
                  {pageCount} (excluding homepage)
                </Text>
              </Section>

              {/* Service Type */}
              <Section className="mb-4 rounded-lg bg-gray-50 p-5">
                <Heading className="mt-0 mb-2 font-semibold text-base text-gray-800">
                  Service Type
                </Heading>
                <Text className="m-0 text-gray-600 text-sm">
                  {serviceType === 'design-only'
                    ? 'Design Only'
                    : 'Design & Development'}
                </Text>
              </Section>

              {/* Brand Status */}
              <Section className="mb-4 rounded-lg bg-gray-50 p-5">
                <Heading className="mt-0 mb-2 font-semibold text-base text-gray-800">
                  Brand Status
                </Heading>
                <Text className="m-0 text-gray-600 text-sm">
                  {brandStatus === 'no-brand' && 'No brand yet'}
                  {brandStatus === 'basic-brand' && 'Basic brand elements'}
                  {brandStatus === 'established-brand' && 'Established brand'}
                </Text>
              </Section>

              {/* Contact Email */}
              <Section className="rounded-lg bg-gray-50 p-5">
                <Heading className="mt-0 mb-2 font-semibold text-base text-gray-800">
                  Contact Email
                </Heading>
                <Text className="m-0 text-gray-600 text-sm">{email}</Text>
              </Section>
            </Section>

            {/* Pricing Section (Client Only) */}
            {isForClient && pricing && (
              <Section className="mb-8">
                <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                  Approximate Pricing
                </Heading>

                {/* Pricing Breakdown */}
                <Section className="mb-4 rounded-lg bg-blue-50 p-5">
                  <Heading className="mt-0 mb-3 font-semibold text-base text-blue-800">
                    Investment Breakdown
                  </Heading>

                  {pricing.designPrice > 0 && (
                    <Section className="mb-2 flex justify-between">
                      <Text className="mt-0 mb-0 text-blue-700 text-sm">
                        Design & UX:
                      </Text>
                      <Text className="mt-0 mb-0 font-semibold text-blue-700 text-sm">
                        ${pricing.designPrice.toLocaleString()}
                      </Text>
                    </Section>
                  )}

                  {pricing.developmentPrice > 0 && (
                    <Section className="mb-2 flex justify-between">
                      <Text className="mt-0 mb-0 text-blue-700 text-sm">
                        Development:
                      </Text>
                      <Text className="mt-0 mb-0 font-semibold text-blue-700 text-sm">
                        ${pricing.developmentPrice.toLocaleString()}
                      </Text>
                    </Section>
                  )}

                  {pricing.brandingPrice > 0 && (
                    <Section className="mb-2 flex justify-between">
                      <Text className="mt-0 mb-0 text-blue-700 text-sm">
                        Brand Development:
                      </Text>
                      <Text className="mt-0 mb-0 font-semibold text-blue-700 text-sm">
                        ${pricing.brandingPrice.toLocaleString()}
                      </Text>
                    </Section>
                  )}

                  <Hr className="my-3 border-blue-200" />

                  <Section className="flex justify-between">
                    <Text className="mt-0 mb-0 font-bold text-base text-blue-800">
                      Total Investment:
                    </Text>
                    <Text className="mt-0 mb-0 font-bold text-base text-blue-800">
                      ${pricing.totalPrice.toLocaleString()}
                    </Text>
                  </Section>
                </Section>

                <Section className="rounded-lg bg-amber-50 p-4">
                  <Text className="mt-0 mb-0 text-amber-800 text-sm">
                    💡 <strong>This is an approximate estimate</strong> based on
                    your selections. Your final quote may vary based on specific
                    requirements, complexity, and additional features discussed
                    during our consultation.
                  </Text>
                </Section>
              </Section>
            )}

            {/* Book a Call Section (Client Only) */}
            {isForClient && (
              <Section className="mb-8 text-center">
                <Section className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <Heading className="mt-0 mb-2 font-semibold text-gray-800 text-lg">
                    Ready to discuss your project?
                  </Heading>
                  <Text className="mt-0 mb-4 text-base text-gray-600">
                    Let&apos;s schedule a call to discuss your requirements,
                    timeline, and next steps.
                  </Text>
                  <Button
                    className="rounded-md bg-blue-600 px-6 py-3 font-medium text-base text-white no-underline hover:bg-blue-700"
                    href="https://cal.com/madeleydesignstudio"
                  >
                    📅 Book a Free Consultation
                  </Button>
                  <Text className="mt-3 mb-0 text-gray-500 text-xs">
                    Choose a time that works for you - typically 30 minutes
                  </Text>
                </Section>
              </Section>
            )}

            {/* Next Steps Section (Client Only) */}
            {isForClient && (
              <Section className="mb-8 rounded-lg bg-green-50 p-5">
                <Heading className="mt-0 mb-3 font-semibold text-base text-green-800">
                  What happens next?
                </Heading>
                <Section className="text-green-700 text-sm">
                  <Text className="mt-0 mb-2">
                    • We&apos;ll review your requirements within 24 hours
                  </Text>
                  <Text className="mt-0 mb-2">
                    • You&apos;ll receive a detailed quote via email
                  </Text>
                  <Text className="mt-0 mb-0">
                    • We&apos;ll schedule a call to discuss your project
                  </Text>
                </Section>
              </Section>
            )}

            {/* Footer Section */}
            <Hr className="my-5 border-gray-200" />
            <Section className="text-center">
              <Text className="mt-0 mb-2 text-gray-600 text-sm">
                {isForClient
                  ? 'Questions? Reply to this email or contact us directly.'
                  : 'Quote request submitted at ' + new Date().toLocaleString()}
              </Text>
              {isForClient && (
                <Text className="m-0 text-gray-500 text-xs">
                  Madeley Design Studio | daniel@madeleydesignstudio.com
                </Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
