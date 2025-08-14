import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import type { Company as CompanyType } from '@/payload-types'

// Temporary type definition until types are regenerated
interface CompanyData {
  id: number
  title: string
  subtitle?: string
  description?: any // Rich text content
  heroImage?: {
    id: number
    url?: string
    alt: string
  }
  stats?: Array<{
    label: string
    value: string
  }>
  teamMembers?: Array<{
    name: string
    role: string
    bio?: string
    image?: {
      id: number
      url?: string
      alt: string
    }
  }>
  values?: Array<{
    title: string
    description: string
  }>
  updatedAt: string
  createdAt: string
}

async function getCompanyData(): Promise<CompanyData | null> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'company',
      limit: 1,
    })

    return result.docs.length > 0 ? (result.docs[0] as CompanyData) : null
  } catch (error) {
    console.error('Error fetching company data:', error)
    return null
  }
}

function renderRichText(content: any): string {
  if (!content) return ''

  if (Array.isArray(content)) {
    return content
      .map((block) => {
        if (block.children) {
          return block.children.map((child: any) => child.text || '').join('')
        }
        return ''
      })
      .join(' ')
  }

  return String(content)
}

export default async function DynamicCompany() {
  const companyData = await getCompanyData()

  // If no company data exists, show a setup message
  if (!companyData) {
    return (
      <div className="w-full">
        <section className="px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Setup Required
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Our Company</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Welcome to our company page. To display dynamic content here, please add company
              information through the admin panel.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-2">How to set up your company content:</h3>
              <ol className="text-left text-sm text-neutral-600 space-y-2">
                <li>
                  1. Go to the{' '}
                  <a href="/admin" className="text-violet-600 hover:text-violet-700 underline">
                    admin panel
                  </a>
                </li>
                <li>2. Navigate to the "Company" collection</li>
                <li>3. Click "Create New" to add your company information</li>
                <li>4. Fill in your company details and save</li>
                <li>5. Return to this page to see your content displayed</li>
              </ol>
            </div>
            <Badge variant="outline">
              <a href="/admin" className="text-violet-600 hover:text-violet-700">
                Go to Admin Panel →
              </a>
            </Badge>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {companyData.heroImage?.url && (
            <div className="mb-8">
              <Image
                src={companyData.heroImage.url}
                alt={companyData.heroImage.alt || companyData.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{companyData.title}</h1>
            {companyData.subtitle && (
              <p className="text-xl text-neutral-600 mb-8">{companyData.subtitle}</p>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center">
            <div className="text-lg leading-relaxed text-neutral-700">
              {renderRichText(companyData.description)}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Stats Section */}
      {companyData.stats && companyData.stats.length > 0 && (
        <>
          <section className="px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
                <p className="text-lg text-neutral-600">
                  Numbers that showcase our journey and achievements
                </p>
              </div>
              <div
                className={`grid gap-8 ${
                  companyData.stats.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
                }`}
              >
                {companyData.stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-neutral-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <Separator />
        </>
      )}

      {/* Values Section */}
      {companyData.values && companyData.values.length > 0 && (
        <>
          <section className="px-4 py-16 bg-neutral-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
                <p className="text-lg text-neutral-600">
                  The principles that guide everything we do
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyData.values.map((value, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                      <p className="text-neutral-600">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <Separator />
        </>
      )}

      {/* Team Section */}
      {companyData.teamMembers && companyData.teamMembers.length > 0 && (
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-neutral-600">The people behind our success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyData.teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    {member.image?.url && (
                      <div className="mb-4">
                        <Image
                          src={member.image.url}
                          alt={member.image.alt || member.name}
                          width={150}
                          height={150}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <div className="text-violet-600 text-sm mb-3">{member.role}</div>
                    {member.bio && <p className="text-neutral-600 text-sm">{member.bio}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Admin Integration Notice */}
      <section className="px-4 py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-violet-200 rounded-lg p-8">
            <Badge variant="outline" className="mb-4">
              Dynamic Content
            </Badge>
            <h3 className="font-semibold text-xl mb-4">✨ This content is powered by Payload CMS</h3>
            <p className="text-neutral-600 mb-6">
              All the content on this page can be edited through the admin panel. Changes will be
              reflected immediately on the website.
            </p>
            <div className="text-sm text-neutral-500 space-y-2">
              <p>• Title, subtitle, and description are editable</p>
              <p>• Statistics can be updated with new values</p>
              <p>• Company values can be added, edited, or removed</p>
              <p>• Team members can be managed with photos and bios</p>
              <p>• Hero images can be uploaded and managed</p>
            </div>
            <div className="mt-6">
              <Badge variant="outline">
                <a href="/admin" className="text-violet-600 hover:text-violet-700">
                  Edit Content in Admin Panel →
                </a>
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
