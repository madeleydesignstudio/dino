import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";

interface ClientConfirmationEmailProps {
  name: string;
  projectType: string;
  budget: string;
  timeline: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const ClientConfirmationEmail = ({
  name = "Client",
  projectType = "Website Design",
  budget = "Under $5,000",
  timeline = "1-2 months",
}: ClientConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for your project inquiry - We'll be in touch soon!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <Img
                  src={`${baseUrl}/logo.png`}
                  width="120"
                  height="40"
                  alt="Madeley Design Studio"
                  style={logo}
                />
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heroHeading}>Thank You, {name}!</Heading>
            <Text style={heroText}>
              We've received your project inquiry and are excited about the
              possibility of working together. Our team is already reviewing
              your requirements.
            </Text>
          </Section>

          {/* Project Summary Card */}
          <Section style={summaryCard}>
            <Heading style={cardHeading}>📋 Project Summary</Heading>

            <Row style={summaryRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Project Type:</Text>
              </Column>
              <Column>
                <Text style={valueText}>{projectType}</Text>
              </Column>
            </Row>

            <Row style={summaryRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Budget Range:</Text>
              </Column>
              <Column>
                <Text style={valueText}>{budget}</Text>
              </Column>
            </Row>

            <Row style={summaryRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Timeline:</Text>
              </Column>
              <Column>
                <Text style={valueText}>{timeline}</Text>
              </Column>
            </Row>
          </Section>

          {/* Next Steps */}
          <Section style={stepsSection}>
            <Heading style={sectionHeading}>What happens next?</Heading>

            <Section style={stepItem}>
              <Row>
                <Column style={stepNumber}>
                  <Text style={stepNumberText}>1</Text>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Review (24 hours)</Text>
                  <Text style={stepDescription}>
                    We'll carefully review your project details and
                    requirements.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepItem}>
              <Row>
                <Column style={stepNumber}>
                  <Text style={stepNumberText}>2</Text>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Discovery Call</Text>
                  <Text style={stepDescription}>
                    We'll schedule a call to discuss your project in detail.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepItem}>
              <Row>
                <Column style={stepNumber}>
                  <Text style={stepNumberText}>3</Text>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Proposal & Timeline</Text>
                  <Text style={stepDescription}>
                    You'll receive a detailed proposal with scope and timeline.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Text style={ctaText}>
              In the meantime, feel free to explore our recent work and case
              studies to get a better sense of our approach and capabilities.
            </Text>
            <Button style={ctaButton} href={`${baseUrl}/casestudies`}>
              View Our Work
            </Button>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerTitle}>Best regards,</Text>
            <Text style={footerName}>Daniel Madeley</Text>
            <Text style={footerCompany}>Madeley Design Studio</Text>

            <Text style={contactInfo}>
              📧 daniel@madeleydesignstudio.com
              <br />🌐 madeleydesignstudio.com
              <br />📱 Follow us for updates and insights
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Brand Colors
const colors = {
  primary: "#C64B4B", // Accent red from your site
  secondary: "#D9E0C1", // Border green from your site
  background: "#bac0a4", // Background from your site
  foreground: "#404040", // Text color from your site
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    900: "#111827",
  },
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '"Azeret Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
  border: `1px solid ${colors.secondary}`,
};

const header = {
  padding: "32px 32px 16px",
  borderBottom: `2px solid ${colors.secondary}`,
  backgroundColor: colors.background,
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const heroSection = {
  padding: "40px 32px",
  textAlign: "center" as const,
};

const heroHeading = {
  fontSize: "32px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 16px",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "-0.02em",
};

const heroText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: colors.gray[600],
  margin: "0",
  textAlign: "center" as const,
};

const summaryCard = {
  backgroundColor: colors.gray[50],
  border: `2px solid ${colors.secondary}`,
  borderRadius: "8px",
  padding: "24px",
  margin: "32px 32px",
};

const cardHeading = {
  fontSize: "20px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 20px",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.01em",
};

const summaryRow = {
  marginBottom: "12px",
};

const labelColumn = {
  width: "140px",
  verticalAlign: "top",
};

const labelText = {
  fontSize: "14px",
  color: colors.gray[600],
  margin: "0",
  fontWeight: "600",
};

const valueText = {
  fontSize: "14px",
  color: colors.foreground,
  margin: "0",
  fontWeight: "700",
};

const stepsSection = {
  padding: "0 32px",
  margin: "32px 0",
};

const sectionHeading = {
  fontSize: "24px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 24px",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.01em",
};

const stepItem = {
  marginBottom: "24px",
};

const stepNumber = {
  width: "48px",
  verticalAlign: "top",
};

const stepNumberText = {
  backgroundColor: colors.primary,
  color: "#ffffff",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  textAlign: "center" as const,
  fontSize: "14px",
  fontWeight: "900",
  lineHeight: "32px",
  margin: "0",
  display: "inline-block",
};

const stepContent = {
  paddingLeft: "16px",
};

const stepTitle = {
  fontSize: "16px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 4px",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.01em",
};

const stepDescription = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: colors.gray[600],
  margin: "0",
};

const ctaSection = {
  padding: "32px",
  textAlign: "center" as const,
  backgroundColor: colors.gray[50],
  margin: "32px 32px 0",
};

const ctaText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: colors.gray[600],
  margin: "0 0 24px",
  textAlign: "center" as const,
};

const ctaButton = {
  backgroundColor: colors.primary,
  color: "#ffffff",
  padding: "16px 32px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "900",
  display: "inline-block",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.01em",
};

const divider = {
  borderColor: colors.secondary,
  margin: "32px 0",
};

const footer = {
  padding: "32px",
  textAlign: "center" as const,
  backgroundColor: colors.background,
};

const footerTitle = {
  fontSize: "16px",
  color: colors.foreground,
  margin: "0 0 8px",
  fontWeight: "600",
};

const footerName = {
  fontSize: "20px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 4px",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.01em",
};

const footerCompany = {
  fontSize: "14px",
  color: colors.gray[600],
  margin: "0 0 24px",
  fontWeight: "600",
};

const contactInfo = {
  fontSize: "12px",
  color: colors.gray[500],
  margin: "0",
  lineHeight: "1.6",
};

export default ClientConfirmationEmail;
