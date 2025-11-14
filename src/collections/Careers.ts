import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Careers: CollectionConfig = {
  slug: "careers",
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
        description: 'URL-friendly version (e.g., "senior-designer")',
      },
    },
    {
      name: "description",
      type: "richText",
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Full-time", value: "full-time" },
        { label: "Part-time", value: "part-time" },
        { label: "Contract", value: "contract" },
        { label: "Internship", value: "internship" },
      ],
    },
    {
      name: "isOpen",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Toggle to show/hide this job listing",
      },
    },
  ],
};
