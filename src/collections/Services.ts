import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          'URL-friendly version of the title (e.g., "website-design")',
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      admin: {
        description: "Main content for the service page",
      },
    },
    {
      name: "category",
      type: "select",
      options: [
        {
          label: "Design",
          value: "design",
        },
        {
          label: "Development",
          value: "development",
        },
        {
          label: "Strategy",
          value: "strategy",
        },
        {
          label: "Technology",
          value: "technology",
        },
        {
          label: "Consulting",
          value: "consulting",
        },
      ],
      required: true,
    },
    {
      name: "price",
      type: "group",
      fields: [
        {
          name: "startingPrice",
          type: "number",
          admin: {
            description: "Starting price for this service",
          },
        },
        {
          name: "currency",
          type: "select",
          options: [
            {
              label: "USD ($)",
              value: "usd",
            },
            {
              label: "GBP (£)",
              value: "gbp",
            },
            {
              label: "EUR (€)",
              value: "eur",
            },
          ],
          defaultValue: "usd",
        },
        {
          name: "priceType",
          type: "select",
          options: [
            {
              label: "Fixed Price",
              value: "fixed",
            },
            {
              label: "Per Hour",
              value: "hourly",
            },
            {
              label: "Per Project",
              value: "project",
            },
            {
              label: "Custom Quote",
              value: "custom",
            },
          ],
          defaultValue: "project",
        },
      ],
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
      ],
      admin: {
        description: "Key features included in this service",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Featured image for the service",
      },
    },
    {
      name: "deliverables",
      type: "array",
      fields: [
        {
          name: "deliverable",
          type: "text",
          required: true,
        },
      ],
      admin: {
        description: "What clients will receive upon completion",
      },
    },
    {
      name: "timeline",
      type: "group",
      fields: [
        {
          name: "duration",
          type: "number",
          admin: {
            description: "Typical duration for this service",
          },
        },
        {
          name: "timeUnit",
          type: "select",
          options: [
            {
              label: "Days",
              value: "days",
            },
            {
              label: "Weeks",
              value: "weeks",
            },
            {
              label: "Months",
              value: "months",
            },
          ],
          defaultValue: "weeks",
        },
      ],
    },
    {
      name: "isNav",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Include this service in the header navigation",
      },
    },
    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Feature this service on the homepage",
      },
    },
    {
      name: "isPublished",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "Publish this service (unpublished items won't be visible)",
      },
    },
  ],
  defaultSort: "-createdAt",
};
