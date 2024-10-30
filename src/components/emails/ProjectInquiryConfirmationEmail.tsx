import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ProjectInquiryConfirmationEmailProps {
  fullname: string;
  projectName: string;
  budget: string;
}

export const ProjectInquiryConfirmationEmail: React.FC<
  ProjectInquiryConfirmationEmailProps
> = ({ fullname, projectName, budget }) => (
  <Html>
    <Head />
    <Preview>Thanks for your project inquiry, {fullname}! 🦖</Preview>
    <Tailwind>
      <Body className="bg-stone-950 font-karla">
        <Container className="mx-auto py-10 px-5">
          {/* Header Section */}
          <Section className="border-b border-stone-800 pb-8">
            <Text className="text-7xl font-bold font-karla text-stone-50">
              DINO
            </Text>
            <Text className="text-xs text-stone-500">
              51.5072° N, 0.1276° W
              <br />
              UK DESIGN STUDIO
            </Text>
          </Section>

          {/* Confirmation Message */}
          <Section className="mt-12">
            <Text className="font-nanum text-4xl font-normal mb-6 text-stone-100">
              Thank you for your inquiry, {fullname}!
            </Text>
            <Text className="text-base leading-7 text-stone-300">
              We&apos;ve received your project inquiry and we&apos;re excited to
              learn more about your vision. Our team will review the details and
              get back to you shortly.
            </Text>
          </Section>

          {/* Project Details */}
          <Section className="mt-8 bg-stone-900/50 p-6 rounded-lg">
            <Text className="font-nanum text-2xl text-stone-100 mb-4">
              Project Details
            </Text>
            <Hr className="border-stone-800 mb-4" />
            <Text className="text-stone-300 mb-2">
              <span className="text-stone-500">Project Name:</span>{" "}
              {projectName}
            </Text>
            <Text className="text-stone-300">
              <span className="text-stone-500">Budget Range:</span> {budget}
            </Text>
          </Section>

          {/* Next Steps */}
          <Section className="mt-12">
            <Text className="font-nanum text-2xl text-stone-100 mb-4">
              What&apos;s Next?
            </Text>
            <Text className="text-base leading-7 text-stone-300">
              1. Our team will review your project requirements
              <br />
              2. We&apos;ll prepare a tailored response to your inquiry
              <br />
              3. Expect to hear from us within 1-2 business days
            </Text>
          </Section>

          {/* Footer */}
          <Section className="mt-12 border-t border-stone-800 pt-8">
            <Text className="text-xs text-stone-500 text-center">
              If you have any immediate questions, feel free to reach out to us
              at{" "}
              <span className="text-stone-400">hello@thedigitaldino.com</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
