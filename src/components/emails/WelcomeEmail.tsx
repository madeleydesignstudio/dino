import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  fullname: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ fullname }) => (
  <Html>
    <Head />
    <Preview>Welcome to the Digital Dinosaur Era 🦖</Preview>
    <Tailwind>
      <Body className="bg-stone-950 font-karla">
        <Container className="mx-auto py-10 px-5">
          {/* Header Section */}
          <Row className="border-b border-stone-800 pb-8">
            <Column>
              <Text className="text-7xl font-bold font-karla text-stone-50">
                DINO
              </Text>
              <Text className="text-xs text-stone-500">
                51.5072° N, 0.1276° W
                <br />
                UK DESIGN STUDIO
              </Text>
            </Column>
          </Row>

          {/* Welcome Section */}
          <Section className="mt-12">
            <Text className="font-nanum text-4xl font-normal mb-6 text-stone-100">
              Welcome to the future, {fullname}!
            </Text>
            <Text className="text-base leading-7 text-stone-300">
              Thank you for joining the Digital Dinosaur revolution. As
              architects of the web, we&apos;re excited to share our journey in
              reshaping the digital landscape with you.
            </Text>
          </Section>

          {/* Services Grid */}
          <Section className="mt-12">
            <Row className="border-t border-b border-stone-800 py-8">
              <Column className="px-4 w-1/3">
                <Text className="font-nanum text-2xl text-stone-100 mb-2 text-left">
                  Design
                </Text>
                <Text className="text-xs text-stone-400 text-left leading-relaxed">
                  Elevate your digital experience and delight every user.
                </Text>
              </Column>
              <Column className="px-4 w-1/3">
                <Text className="font-nanum text-2xl text-stone-100 mb-2 text-left">
                  Engineer
                </Text>
                <Text className="text-xs text-stone-400 text-left leading-relaxed">
                  Make zero compromises when implementing your vision.
                </Text>
              </Column>
              <Column className="px-4 w-1/3">
                <Text className="font-nanum text-2xl text-stone-100 mb-2 text-left">
                  Market
                </Text>
                <Text className="text-xs text-stone-400 text-left leading-relaxed">
                  Amplify your reach and engage your target audience.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section className="text-center mt-12">
            <Button
              href="https://www.thedigitaldino.com/"
              className="bg-stone-100 text-stone-950 px-8 py-4 rounded text-base font-semibold no-underline inline-block hover:bg-stone-200 font-karla"
            >
              Explore Our Digital Habitat →
            </Button>
          </Section>

          {/* Footer */}
          <Section className="mt-12 border-t border-stone-800 pt-8">
            <Text className="text-xs text-stone-500 text-center">
              Stay tuned for our Fossil Files - comprehensive insights into web
              design, engineering, and digital marketing.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
