import type { CollectionConfig } from 'payload'

export const CompanySimple: CollectionConfig = {
  slug: 'company-simple',
  admin: {
    useAsTitle: 'title',
    description: 'Simplified company collection for testing',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'About Our Company',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
    },
    {
      name: 'simpleDescription',
      type: 'textarea',
      required: false,
    },
    {
      name: 'stats',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'values',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
