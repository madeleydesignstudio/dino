export interface MarketingCategory {
  category: string;
  tools: string[];
}

export const marketing_categories: MarketingCategory[] = [
  {
    category: "Analytics & Data",
    tools: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar", "Looker"],
  },
  {
    category: "Social Media Management",
    tools: ["Hootsuite", "Buffer", "Sprout Social", "Later", "SocialBee"],
  },
  {
    category: "Email Marketing",
    tools: [
      "Mailchimp",
      "Klaviyo",
      "SendGrid",
      "ConvertKit",
      "Campaign Monitor",
    ],
  },
  {
    category: "SEO Tools",
    tools: ["Ahrefs", "SEMrush", "Moz", "Ubersuggest", "Screaming Frog"],
  },
  {
    category: "Content Marketing",
    tools: ["WordPress", "Medium", "Contentful", "Ghost", "Substack"],
  },
  {
    category: "Advertising Platforms",
    tools: [
      "Google Ads",
      "Facebook Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "Twitter Ads",
    ],
  },
  {
    category: "CRM & Marketing Automation",
    tools: ["HubSpot", "Salesforce", "Marketo", "ActiveCampaign", "Mailerlite"],
  },
  {
    category: "Landing Page Builders",
    tools: ["Unbounce", "Instapage", "Leadpages", "ClickFunnels", "Carrd"],
  },
  {
    category: "Customer Feedback",
    tools: ["Typeform", "SurveyMonkey", "Qualtrics", "Google Forms", "Feedier"],
  },
  {
    category: "Influencer Marketing",
    tools: ["AspireIQ", "Upfluence", "Grin", "CreatorIQ", "Influence.co"],
  },
  {
    category: "Marketing Analytics",
    tools: [
      "Supermetrics",
      "Databox",
      "Tableau",
      "Power BI",
      "Google Data Studio",
    ],
  },
  {
    category: "Content Creation",
    tools: [
      "Canva",
      "Adobe Creative Suite",
      "Grammarly",
      "Hemingway Editor",
      "Loom",
    ],
  },
  {
    category: "Competitive Analysis",
    tools: ["SimilarWeb", "Alexa", "SpyFu", "Kompyte", "Crayon"],
  },
  {
    category: "Marketing Project Management",
    tools: ["Asana", "Trello", "Monday.com", "ClickUp", "Airtable"],
  },
];
