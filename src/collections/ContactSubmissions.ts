import type { CollectionConfig } from "payload";
import { render } from "@react-email/render";
import { ClientConfirmationEmail } from "../emails/ClientConfirmationEmail";
import { TeamNotificationEmail } from "../emails/TeamNotificationEmail";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "name",
    defaultColumns: [
      "name",
      "email",
      "projectType",
      "budget",
      "status",
      "createdAt",
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "company",
      type: "text",
    },
    {
      name: "projectType",
      type: "select",
      required: true,
      options: [
        { label: "Website Design", value: "website-design" },
        { label: "Website Development", value: "website-development" },
        { label: "Mobile App", value: "mobile-app" },
        { label: "E-commerce Platform", value: "ecommerce-platform" },
        { label: "SaaS Application", value: "saas-application" },
        { label: "Corporate Website", value: "corporate-website" },
        { label: "Creative Design", value: "creative-design" },
        { label: "AI Integration", value: "ai-integration" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "budget",
      type: "select",
      required: true,
      options: [
        { label: "Under $5,000", value: "under-5k" },
        { label: "$5,000 - $15,000", value: "5k-15k" },
        { label: "$15,000 - $50,000", value: "15k-50k" },
        { label: "$50,000 - $100,000", value: "50k-100k" },
        { label: "Over $100,000", value: "over-100k" },
        { label: "I'm not sure yet", value: "not-sure" },
      ],
    },
    {
      name: "timeline",
      type: "select",
      required: true,
      options: [
        { label: "ASAP (Rush project)", value: "asap" },
        { label: "1-2 months", value: "1-2-months" },
        { label: "3-6 months", value: "3-6-months" },
        { label: "6-12 months", value: "6-12-months" },
        { label: "More than a year", value: "more-than-year" },
        { label: "Flexible timeline", value: "flexible" },
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "goals",
      type: "select",
      hasMany: true,
      options: [
        { label: "Increase online sales", value: "increase-sales" },
        { label: "Improve brand awareness", value: "improve-brand" },
        { label: "Better user experience", value: "better-ux" },
        { label: "Mobile optimization", value: "mobile-optimization" },
        { label: "SEO improvement", value: "seo-improvement" },
        { label: "Streamline processes", value: "streamline-processes" },
        { label: "Generate more leads", value: "generate-leads" },
        { label: "Showcase portfolio/work", value: "showcase-portfolio" },
      ],
    },
    {
      name: "features",
      type: "select",
      hasMany: true,
      options: [
        { label: "Contact forms", value: "contact-forms" },
        { label: "E-commerce functionality", value: "ecommerce" },
        { label: "User accounts/login", value: "user-accounts" },
        { label: "Content management", value: "content-management" },
        { label: "Payment processing", value: "payment-processing" },
        { label: "Social media integration", value: "social-media" },
        { label: "Analytics tracking", value: "analytics" },
        { label: "Multi-language support", value: "multi-language" },
        { label: "API integrations", value: "api-integrations" },
        { label: "Custom animations", value: "custom-animations" },
      ],
    },
    {
      name: "inspiration",
      type: "textarea",
    },
    {
      name: "contact",
      type: "select",
      options: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Video call", value: "video" },
        { label: "In-person meeting", value: "in-person" },
      ],
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      admin: {
        position: "sidebar",
      },
      options: [
        { label: "New", value: "new" },
        { label: "In Progress", value: "in-progress" },
        { label: "Proposal Sent", value: "proposal-sent" },
        { label: "Client Accepted", value: "accepted" },
        { label: "Client Declined", value: "declined" },
        { label: "Completed", value: "completed" },
      ],
    },
    {
      name: "notes",
      type: "textarea",
      admin: {
        position: "sidebar",
        description: "Internal notes about this submission",
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        // Only send emails for new submissions
        if (operation === "create") {
          try {
            // Create label mapping objects
            const goalsLabels: Record<string, string> = {
              "increase-sales": "Increase online sales",
              "improve-brand": "Improve brand awareness",
              "better-ux": "Better user experience",
              "mobile-optimization": "Mobile optimization",
              "seo-improvement": "SEO improvement",
              "streamline-processes": "Streamline processes",
              "generate-leads": "Generate more leads",
              "showcase-portfolio": "Showcase portfolio/work",
            };

            const featuresLabels: Record<string, string> = {
              "contact-forms": "Contact forms",
              ecommerce: "E-commerce functionality",
              "user-accounts": "User accounts/login",
              "content-management": "Content management",
              "payment-processing": "Payment processing",
              "social-media": "Social media integration",
              analytics: "Analytics tracking",
              "multi-language": "Multi-language support",
              "api-integrations": "API integrations",
              "custom-animations": "Custom animations",
            };

            const projectTypeLabels: Record<string, string> = {
              "website-design": "Website Design",
              "website-development": "Website Development",
              "mobile-app": "Mobile App",
              "ecommerce-platform": "E-commerce Platform",
              "saas-application": "SaaS Application",
              "corporate-website": "Corporate Website",
              "creative-design": "Creative Design",
              "ai-integration": "AI Integration",
              other: "Other",
            };

            const budgetLabels: Record<string, string> = {
              "under-5k": "Under $5,000",
              "5k-15k": "$5,000 - $15,000",
              "15k-50k": "$15,000 - $50,000",
              "50k-100k": "$50,000 - $100,000",
              "over-100k": "Over $100,000",
              "not-sure": "I'm not sure yet",
            };

            const timelineLabels: Record<string, string> = {
              asap: "ASAP (Rush project)",
              "1-2-months": "1-2 months",
              "3-6-months": "3-6 months",
              "6-12-months": "6-12 months",
              "more-than-year": "More than a year",
              flexible: "Flexible timeline",
            };

            const contactLabels: Record<string, string> = {
              email: "Email",
              phone: "Phone",
              video: "Video call",
              "in-person": "In-person meeting",
            };

            // Convert arrays to readable strings
            const goalsText =
              doc.goals && doc.goals.length > 0
                ? doc.goals.map((goal: string) => goalsLabels[goal] || goal)
                : [];

            const featuresText =
              doc.features && doc.features.length > 0
                ? doc.features.map(
                    (feature: string) => featuresLabels[feature] || feature,
                  )
                : [];

            // Get display labels for select fields
            const getSelectLabel = (fieldName: string, value: string) => {
              switch (fieldName) {
                case "projectType":
                  return projectTypeLabels[value] || value;
                case "budget":
                  return budgetLabels[value] || value;
                case "timeline":
                  return timelineLabels[value] || value;
                case "contact":
                  return contactLabels[value] || value;
                default:
                  return value;
              }
            };

            // Render client confirmation email using React Email
            const clientEmailHtml = await render(
              ClientConfirmationEmail({
                name: doc.name,
                projectType: getSelectLabel("projectType", doc.projectType),
                budget: getSelectLabel("budget", doc.budget),
                timeline: getSelectLabel("timeline", doc.timeline),
              }),
            );

            // Send confirmation email to the client
            await req.payload.sendEmail({
              to: doc.email,
              from: "daniel@madeleydesignstudio.com",
              subject: "We've received your project inquiry!",
              html: clientEmailHtml,
            });

            // Render team notification email using React Email
            const teamEmailHtml = await render(
              TeamNotificationEmail({
                name: doc.name,
                email: doc.email,
                company: doc.company || undefined,
                projectType: getSelectLabel("projectType", doc.projectType),
                budget: getSelectLabel("budget", doc.budget),
                timeline: getSelectLabel("timeline", doc.timeline),
                description: doc.description,
                goals: goalsText,
                features: featuresText,
                inspiration: doc.inspiration || undefined,
                contact: doc.contact
                  ? getSelectLabel("contact", doc.contact)
                  : undefined,
              }),
            );

            // Send notification email to Daniel
            await req.payload.sendEmail({
              to: "daniel@madeleydesignstudio.com",
              from: "daniel@madeleydesignstudio.com",
              subject: `🚀 New Project Inquiry from ${doc.name}`,
              html: teamEmailHtml,
              replyTo: doc.email,
            });

            req.payload.logger.info(
              `Contact form emails sent successfully for ${doc.email}`,
            );
          } catch (error) {
            req.payload.logger.error(
              `Failed to send contact emails: ${error instanceof Error ? error.message : String(error)}`,
            );
          }
        }
      },
    ],
  },
};
