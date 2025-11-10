import type { CollectionConfig } from "payload";

export const Resources: CollectionConfig = {
  slug: "resources",
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
          'URL-friendly version of the title (e.g., "my-resource")',
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
        description: "Main content for the resource page",
      },
    },
    {
      name: "category",
      type: "select",
      options: [
        {
          label: "Open Source",
          value: "opensource",
        },
        {
          label: "UI Components",
          value: "ui",
        },
        {
          label: "API Documentation",
          value: "api",
        },
        {
          label: "Comparisons",
          value: "compare",
        },
        {
          label: "Blog Posts",
          value: "blog",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional featured image for the resource",
      },
    },
    {
      name: "externalUrl",
      type: "text",
      admin: {
        description: "External link if this resource points to another website",
      },
    },
    {
      name: "isNav",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Include this resource in the header navigation",
      },
    },
    {
      name: "isPublished",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Publish this resource (unpublished items won't be visible)",
      },
    },
  ],
  defaultSort: "-createdAt",
};
