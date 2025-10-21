import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const CompanyAbout: GlobalConfig = {
  slug: 'company-about',
  label: 'Company About',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'About Us',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

