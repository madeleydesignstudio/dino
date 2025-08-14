import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

// Force dynamic rendering to get fresh data from CMS
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getCompanyData() {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'company' as any,
      limit: 1,
    })
    return result.docs.length > 0 ? result.docs[0] : null
  } catch (error) {
    console.error('Error fetching company data:', error)
    return null
  }
}

function renderRichText(description: any): string {
  if (!description?.root?.children) return ''
  return description.root.children
    .map((child: any) => {
      if (child.children) {
        return child.children.map((textChild: any) => textChild.text || '').join('')
      }
      return ''
    })
    .join(' ')
}

export default async function Company() {
  const companyData = await getCompanyData()

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
                  <Link href="/admin" className="text-violet-600 hover:text-violet-700 underline">
                    admin panel
                  </Link>
                </li>
                <li>2. Navigate to the &quot;Company&quot; collection</li>
                <li>3. Click &quot;Create New&quot; to add your company information</li>
                <li>4. Fill in your company details and save</li>
                <li>5. Return to this page to see your content displayed</li>
              </ol>
            </div>
            <div className="space-y-4">
              <Badge variant="outline">
                <Link href="/admin" className="text-violet-600 hover:text-violet-700">
                  Go to Admin Panel →
                </Link>
              </Badge>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Or seed some initial data:</p>
                <form action="/api/seed" method="POST" className="inline">
                  <button
                    type="submit"
                    className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 text-sm"
                  >
                    🌱 Seed Sample Data
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const heroImage = typeof companyData.heroImage === 'object' ? companyData.heroImage : null

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {heroImage?.url && (
            <div className="mb-8">
              <Image
                src={heroImage.url}
                alt={heroImage.alt || companyData.title}
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
              {companyData.description
                ? renderRichText(companyData.description)
                : 'We are a creative digital studio dedicated to building beautiful, functional, and user-centered digital experiences. Our team combines strategic thinking with cutting-edge design and development to help businesses grow and connect with their audiences.'}
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyData.stats.map((stat: any, index: number) => (
                  <Card key={stat.id || index} className="text-center">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyData.values.map((value: any, index: number) => (
                  <Card key={value.id || index}>
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
              {companyData.teamMembers.map((member: any, index: number) => {
                const memberImage = typeof member.image === 'object' ? member.image : null
                return (
                  <Card key={member.id || index}>
                    <CardContent className="p-6 text-center">
                      {memberImage?.url && (
                        <div className="mb-4">
                          <Image
                            src={memberImage.url}
                            alt={memberImage.alt || member.name}
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
                )
              })}
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
            <h3 className="font-semibold text-xl mb-4">
              ✨ This content is powered by Payload CMS
            </h3>
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
                <Link href="/admin" className="text-violet-600 hover:text-violet-700">
                  Edit Content in Admin Panel →
                </Link>
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
