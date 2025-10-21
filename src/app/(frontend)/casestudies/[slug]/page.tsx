import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { CaseStudy, Media } from '@/payload-types'
import Image from 'next/image'

async function getCaseStudy(slug: string) {
  const payload = await getPayload({ config })
  
  const result = await payload.find({
    collection: 'case-studies',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })
  
  return result.docs[0] || null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  
  const caseStudies = await payload.find({
    collection: 'case-studies',
    limit: 100,
  })
  
  return caseStudies.docs.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const image = caseStudy.image as Media

  console.log('Image data:', image)
  console.log('Image URL:', image?.url)

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/casestudies"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Case Studies
        </Link>

        <article>
          <h1 className="text-5xl font-bold mb-6">{caseStudy.title}</h1>
          
          {image?.url && (
            <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={image.url}
                alt={image.alt || caseStudy.title}
                className='w-full h-full object-cover'
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
              {caseStudy.description}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Published: {new Date(caseStudy.createdAt).toLocaleDateString()}
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}