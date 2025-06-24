import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type * as React from 'react';

interface WelcomeTemplateProps {
  firstName?: string;
  email: string;
}

export const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({
  firstName,
  email,
}) => {
  const previewText = firstName
    ? `Welcome to our newsletter, ${firstName}!`
    : 'Welcome to our newsletter!';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto max-w-xl px-4 py-5">
            {/* Header Section */}
            <Section className="mb-8 text-center">
              <Heading className="mt-0 mb-2 font-bold text-3xl text-gray-800">
                Welcome to Our Newsletter!
              </Heading>
              <Text className="m-0 text-gray-600 text-lg">
                {firstName ? `Hey ${firstName}, thanks` : 'Thanks'} for joining
                our community of design enthusiasts.
              </Text>
            </Section>

            {/* Welcome Message */}
            <Section className="mb-8">
              <Text className="mt-0 mb-4 text-base text-gray-700 leading-relaxed">
                You&apos;re now part of an exclusive community that gets the
                inside scoop on:
              </Text>

              <Section className="mb-6 rounded-lg bg-gray-50 p-6">
                <Text className="mt-0 mb-3 text-base text-gray-700">
                  ✨ <strong>Design Insights</strong> - Latest trends and best
                  practices in web design
                </Text>
                <Text className="mt-0 mb-3 text-base text-gray-700">
                  🚀 <strong>Project Updates</strong> - Behind-the-scenes look
                  at our latest work
                </Text>
                <Text className="mt-0 mb-3 text-base text-gray-700">
                  💡 <strong>Industry Tips</strong> - Practical advice for your
                  business growth
                </Text>
                <Text className="mt-0 mb-0 text-base text-gray-700">
                  🎯 <strong>Exclusive Offers</strong> - Special deals and early
                  access to new services
                </Text>
              </Section>

              <Text className="mt-0 mb-4 text-base text-gray-700 leading-relaxed">
                We promise to keep your inbox valuable and never spam you. You
                can expect to hear from us about once a week with content that
                actually helps your business.
              </Text>
            </Section>

            {/* Call to Action */}
            <Section className="mb-8 text-center">
              <Text className="mt-0 mb-4 text-base text-gray-700">
                Ready to elevate your web presence?
              </Text>
              <Button
                className="rounded-md bg-neutral-800 px-6 py-3 font-medium text-base text-white no-underline"
                href="https://madeleydesignstudio.com"
              >
                Explore Our Work
              </Button>
            </Section>

            {/* Personal Touch */}
            <Section className="mb-8 rounded-lg bg-blue-50 p-6">
              <Text className="mt-0 mb-3 text-base text-blue-800">
                <strong>A quick note from Daniel:</strong>
              </Text>
              <Text className="mt-0 mb-0 text-base text-blue-700 leading-relaxed">
                &quot;I&apos;m excited to share my passion for great design with
                you. Every email I send is crafted with care to provide real
                value. If you ever have questions or want to chat about a
                project, just reply to any of my emails!&quot;
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="my-6 border-gray-200" />
            <Section className="text-center">
              <Text className="mt-0 mb-2 text-gray-600 text-sm">
                You&apos;re receiving this because you subscribed with: {email}
              </Text>
              <Text className="mt-0 mb-4 text-gray-500 text-xs">
                Madeley Design Studio | daniel@madeleydesignstudio.com
              </Text>
              <Text className="mt-0 mb-0 text-gray-400 text-xs">
                Don&apos;t want to receive these emails?
                <Link className="ml-1 text-gray-600 underline" href="#">
                  Unsubscribe here
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
