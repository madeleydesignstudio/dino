import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
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
          'URL-friendly version of the title (e.g., "my-case-study")',
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "isNav",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Include this case study in the header navigation",
      },
    },
  ],
};
