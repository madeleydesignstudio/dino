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

interface TeamNotificationEmailProps {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  goals: string[];
  features: string[];
  inspiration?: string;
  contact?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const TeamNotificationEmail = ({
  name = "Client Name",
  email = "client@example.com",
  company = "",
  projectType = "Website Design",
  budget = "Under $5,000",
  timeline = "1-2 months",
  description = "Project description",
  goals = [],
  features = [],
  inspiration = "",
  contact = "",
}: TeamNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>🚀 New project inquiry from {name}</Preview>
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

          {/* Alert Section */}
          <Section style={alertSection}>
            <Text style={alertText}>
              ⚠️ <strong>Action Required:</strong> New client inquiry needs review and follow-up within 24 hours.
            </Text>
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heroHeading}>🚀 New Project Inquiry</Heading>
            <Text style={heroText}>
              A new project inquiry has been submitted through the website contact form.
            </Text>
          </Section>

          {/* Client Information Card */}
          <Section style={infoCard}>
            <Heading style={cardHeading}>👤 Client Information</Heading>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Name:</Text>
              </Column>
              <Column>
                <Text style={valueText}>{name}</Text>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Email:</Text>
              </Column>
              <Column>
                <Text style={emailText}>{email}</Text>
              </Column>
            </Row>

            {company && (
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={labelText}>Company:</Text>
                </Column>
                <Column>
                  <Text style={valueText}>{company}</Text>
                </Column>
              </Row>
            )}

            {contact && (
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={labelText}>Preferred Contact:</Text>
                </Column>
                <Column>
                  <Text style={valueText}>{contact}</Text>
                </Column>
              </Row>
            )}
          </Section>

          {/* Project Details Card */}
          <Section style={infoCard}>
            <Heading style={cardHeading}>📋 Project Details</Heading>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Project Type:</Text>
              </Column>
              <Column>
                <Text style={valueText}>{projectType}</Text>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Budget Range:</Text>
              </Column>
              <Column>
                <Text style={budgetText}>{budget}</Text>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={labelText}>Timeline:</Text>
              </Column>
              <Column>
                <Text style={valueText}>{timeline}</Text>
              </Column>
            </Row>
          </Section>

          {/* Project Description */}
          <Section style={infoCard}>
            <Heading style={cardHeading}>📝 Project Description</Heading>
            <Section style={descriptionBox}>
              <Text style={descriptionText}>{description}</Text>
            </Section>
          </Section>

          {/* Goals */}
          {goals.length > 0 && (
            <Section style={infoCard}>
              <Heading style={cardHeading}>🎯 Project Goals</Heading>
              <Section style={listContainer}>
                {goals.map((goal, index) => (
                  <Text key={index} style={listItem}>• {goal}</Text>
                ))}
              </Section>
            </Section>
          )}

          {/* Features */}
          {features.length > 0 && (
            <Section style={infoCard}>
              <Heading style={cardHeading}>⚙️ Required Features</Heading>
              <Section style={listContainer}>
                {features.map((feature, index) => (
                  <Text key={index} style={listItem}>• {feature}</Text>
                ))}
              </Section>
            </Section>
          )}

          {/* Inspiration */}
          {inspiration && (
            <Section style={infoCard}>
              <Heading style={cardHeading}>💡 Inspiration & References</Heading>
              <Section style={descriptionBox}>
                <Text style={descriptionText}>{inspiration}</Text>
              </Section>
            </Section>
          )}

          {/* Action Steps */}
          <Section style={actionSection}>
            <Heading style={cardHeading}>📋 Next Steps</Heading>

            <Text style={listItem}>• Review the project details above</Text>
            <Text style={listItem}>• Schedule a discovery call with the client</Text>
            <Text style={listItem}>• Prepare initial questions and scope estimate</Text>

            <Section style={ctaSection}>
              <Button
                style={ctaButton}
                href={`mailto:${email}?subject=Re: Your Project Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for your project inquiry. I'd love to discuss your ${projectType} project in more detail.%0D%0A%0D%0AWhen would be a good time for a brief call this week?%0D%0A%0D%0ABest regards,%0D%0ADaniel`}
              >
                Reply to Client
              </Button>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This notification was generated automatically from the Madeley Design Studio contact form.
            </Text>
            <Text style={timestampText}>
              <strong>Submitted:</strong> {new Date().toLocaleString()}
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
  success: "#059669",
  warning: "#d97706",
  danger: "#dc2626",
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
  fontFamily: '"Azeret Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "700px",
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

const alertSection = {
  backgroundColor: "#fef2f2",
  border: "2px solid #fecaca",
  borderRadius: "8px",
  padding: "16px",
  margin: "24px 32px",
};

const alertText = {
  fontSize: "14px",
  color: colors.danger,
  margin: "0",
  textAlign: "center" as const,
};

const heroSection = {
  padding: "24px 32px",
  textAlign: "center" as const,
};

const heroHeading = {
  fontSize: "28px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 12px",
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

const infoCard = {
  backgroundColor: colors.gray[50],
  border: `2px solid ${colors.secondary}`,
  borderRadius: "8px",
  padding: "24px",
  margin: "20px 32px",
};

const cardHeading = {
  fontSize: "18px",
  fontWeight: "900",
  color: colors.foreground,
  margin: "0 0 16px",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.01em",
};

const infoRow = {
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
  fontWeight: "700",
};

const valueText = {
  fontSize: "14px",
  color: colors.foreground,
  margin: "0",
  fontWeight: "600",
};

const emailText = {
  fontSize: "14px",
  color: colors.primary,
  margin: "0",
  fontWeight: "600",
  textDecoration: "underline",
};

const budgetText = {
  fontSize: "14px",
  color: colors.success,
  margin: "0",
  fontWeight: "700",
};

const descriptionBox = {
  backgroundColor: "#ffffff",
  border: `1px solid ${colors.gray[300]}`,
  borderRadius: "4px",
  padding: "16px",
};

const descriptionText = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: colors.foreground,
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const listContainer = {
  marginTop: "12px",
};

const listItem = {
  fontSize: "14px",
  color: colors.foreground,
  margin: "0 0 8px",
  lineHeight: "1.5",
};

const actionSection = {
  backgroundColor: "#f1f5f9",
  border: `2px solid ${colors.secondary}`,
  borderRadius: "8px",
  padding: "24px",
  margin: "32px 32px",
};

const ctaSection = {
  textAlign: "center" as const,
  marginTop: "24px",
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

const footerText = {
  fontSize: "12px",
  color: colors.gray[600],
  margin: "0 0 8px",
  fontStyle: "italic",
};

const timestampText = {
  fontSize: "12px",
  color: colors.gray[500],
  margin: "0",
};

export default TeamNotificationEmail;
