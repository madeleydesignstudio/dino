import { getPayload } from 'payload'
import config from '@payload-config'
import type { Media } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

async function getAboutContent() {
  const payload = await getPayload({ config })
  const about = await payload.findGlobal({
    slug: 'company-about',
  })
  return about
}

export default async function AboutPage() {
  const about = await getAboutContent()
  const heroImage = about.heroImage as Media

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">{about.title}</h1>
        
        {heroImage?.url && (
          <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={heroImage.url}
              alt={heroImage.alt || about.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <RichText data={about.description} />
        </div>
      </div>
    </div>
  )
}