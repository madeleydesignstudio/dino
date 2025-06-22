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
  Link,
  Button,
} from '@react-email/components'
import * as React from 'react'

interface WelcomeTemplateProps {
  firstName?: string
  email: string
}

export const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({ firstName, email }) => {
  const previewText = firstName
    ? `Welcome to our newsletter, ${firstName}!`
    : 'Welcome to our newsletter!'

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-5 px-4 max-w-xl">
            {/* Header Section */}
            <Section className="text-center mb-8">
              <Heading className="text-gray-800 text-3xl font-bold mb-2 mt-0">
                Welcome to Our Newsletter!
              </Heading>
              <Text className="text-gray-600 text-lg m-0">
                {firstName ? `Hey ${firstName}, thanks` : 'Thanks'} for joining our community of
                design enthusiasts.
              </Text>
            </Section>

            {/* Welcome Message */}
            <Section className="mb-8">
              <Text className="text-gray-700 text-base leading-relaxed mb-4 mt-0">
                You&apos;re now part of an exclusive community that gets the inside scoop on:
              </Text>

              <Section className="bg-gray-50 p-6 rounded-lg mb-6">
                <Text className="text-gray-700 text-base mb-3 mt-0">
                  ✨ <strong>Design Insights</strong> - Latest trends and best practices in web
                  design
                </Text>
                <Text className="text-gray-700 text-base mb-3 mt-0">
                  🚀 <strong>Project Updates</strong> - Behind-the-scenes look at our latest work
                </Text>
                <Text className="text-gray-700 text-base mb-3 mt-0">
                  💡 <strong>Industry Tips</strong> - Practical advice for your business growth
                </Text>
                <Text className="text-gray-700 text-base mb-0 mt-0">
                  🎯 <strong>Exclusive Offers</strong> - Special deals and early access to new
                  services
                </Text>
              </Section>

              <Text className="text-gray-700 text-base leading-relaxed mb-4 mt-0">
                We promise to keep your inbox valuable and never spam you. You can expect to hear
                from us about once a week with content that actually helps your business.
              </Text>
            </Section>

            {/* Call to Action */}
            <Section className="text-center mb-8">
              <Text className="text-gray-700 text-base mb-4 mt-0">
                Ready to elevate your web presence?
              </Text>
              <Button
                href="https://madeleydesignstudio.com"
                className="bg-neutral-800 text-white px-6 py-3 rounded-md text-base font-medium no-underline"
              >
                Explore Our Work
              </Button>
            </Section>

            {/* Personal Touch */}
            <Section className="bg-blue-50 p-6 rounded-lg mb-8">
              <Text className="text-blue-800 text-base mb-3 mt-0">
                <strong>A quick note from Daniel:</strong>
              </Text>
              <Text className="text-blue-700 text-base leading-relaxed mb-0 mt-0">
                &quot;I&apos;m excited to share my passion for great design with you. Every email I
                send is crafted with care to provide real value. If you ever have questions or want
                to chat about a project, just reply to any of my emails!&quot;
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border-gray-200 my-6" />
            <Section className="text-center">
              <Text className="text-gray-600 text-sm mb-2 mt-0">
                You&apos;re receiving this because you subscribed with: {email}
              </Text>
              <Text className="text-gray-500 text-xs mb-4 mt-0">
                Madeley Design Studio | daniel@madeleydesignstudio.com
              </Text>
              <Text className="text-gray-400 text-xs mt-0 mb-0">
                Don&apos;t want to receive these emails?
                <Link href="#" className="text-gray-600 underline ml-1">
                  Unsubscribe here
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
