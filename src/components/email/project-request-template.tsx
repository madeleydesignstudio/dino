import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ProjectRequestTemplateProps {
  fullName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  projectName: string
  projectDescription: string
  projectGoals: string[]
  targetAudience: string
  pageCount: string
  serviceType: string
  brandStatus: string
  websiteType: string
  industryType: string
  designStyle?: string[]
  colorPreferences?: string
  existingWebsite: string
  currentWebsiteUrl?: string
  competitorUrls?: string
  requiredFeatures: string[]
  ecommerceNeeds: boolean
  ecommerceDetails?: string
  cmsNeeds: boolean
  integrationNeeds: string[]
  contentReady: string
  contentHelp: string[]
  photographyNeeds: string
  logoStatus: string
  hostingNeeds: string
  domainStatus: string
  analyticsNeeds: boolean
  seoImportance: string
  performanceRequirements: string[]
  projectTimeline: string
  launchDate?: Date | string
  isLaunchDateFlexible: boolean
  budgetRange: string
  paymentPreference: string
  additionalRequirements?: string
  inspiration?: string
  concerns?: string
  howDidYouHear: string
  preferredContactMethod: string
  bestTimeToCall?: string
  timezone: string
  isForClient?: boolean
}

export const ProjectRequestTemplate: React.FC<Readonly<ProjectRequestTemplateProps>> = ({
  fullName,
  email,
  phone,
  company,
  jobTitle,
  projectName,
  projectDescription,
  projectGoals,
  targetAudience,
  pageCount,
  serviceType,
  brandStatus,
  websiteType,
  industryType,
  designStyle,
  colorPreferences,
  existingWebsite,
  currentWebsiteUrl,
  competitorUrls,
  requiredFeatures,
  ecommerceNeeds,
  ecommerceDetails,
  cmsNeeds,
  integrationNeeds,
  contentReady,
  contentHelp,
  photographyNeeds,
  logoStatus,
  hostingNeeds,
  domainStatus,
  analyticsNeeds,
  seoImportance,
  performanceRequirements,
  projectTimeline,
  launchDate,
  isLaunchDateFlexible,
  budgetRange,
  paymentPreference,
  additionalRequirements,
  inspiration,
  concerns,
  howDidYouHear,
  preferredContactMethod,
  bestTimeToCall,
  timezone,
  isForClient = true,
}) => {
  const previewText = isForClient
    ? `Your project request for ${projectName} has been received`
    : `New detailed project request from ${fullName} at ${company}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-5 px-4 max-w-2xl">
            {/* Header Section */}
            <Section className="border-b-2 border-gray-200 pb-5 mb-8">
              <Heading className="text-gray-800 text-2xl font-bold mb-2 mt-0">
                {isForClient ? 'Your Project Request Received' : 'New Project Request'}
              </Heading>
              <Text className="text-gray-600 text-base m-0">
                {isForClient
                  ? 'Thank you for your detailed project request! We&apos;ll review everything and get back to you within 24 hours.'
                  : `Detailed project request from ${fullName} at ${company}`}
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Contact Information
              </Heading>
              <div className="bg-gray-50 p-5 rounded-lg">
                <Text className="text-gray-700 text-sm mb-2 mt-0">
                  <strong>Name:</strong> {fullName}
                </Text>
                <Text className="text-gray-700 text-sm mb-2 mt-0">
                  <strong>Email:</strong> {email}
                </Text>
                <Text className="text-gray-700 text-sm mb-2 mt-0">
                  <strong>Phone:</strong> {phone}
                </Text>
                <Text className="text-gray-700 text-sm mb-2 mt-0">
                  <strong>Company:</strong> {company}
                </Text>
                <Text className="text-gray-700 text-sm mb-2 mt-0">
                  <strong>Job Title:</strong> {jobTitle}
                </Text>
                <Text className="text-gray-700 text-sm mb-2 mt-0">
                  <strong>Timezone:</strong> {timezone}
                </Text>
                <Text className="text-gray-700 text-sm mb-0 mt-0">
                  <strong>Preferred Contact:</strong> {preferredContactMethod}
                  {bestTimeToCall && ` (Best time to call: ${bestTimeToCall})`}
                </Text>
              </div>
            </Section>

            {/* Project Overview */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Project Overview
              </Heading>

              <div className="bg-blue-50 p-5 rounded-lg mb-4">
                <Heading className="text-blue-800 text-base font-semibold mb-2 mt-0">
                  {projectName}
                </Heading>
                <Text className="text-blue-700 text-sm mb-3 mt-0">{projectDescription}</Text>
                <Text className="text-blue-700 text-sm mb-2 mt-0">
                  <strong>Target Audience:</strong> {targetAudience}
                </Text>
                <Text className="text-blue-700 text-sm mb-0 mt-0">
                  <strong>Project Goals:</strong> {projectGoals.join(', ')}
                </Text>
              </div>
            </Section>

            {/* Website Specifications */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Website Specifications
              </Heading>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text className="text-gray-700 text-sm mb-1 mt-0">
                    <strong>Page Count:</strong>
                  </Text>
                  <Text className="text-gray-600 text-sm mb-0 mt-0">{pageCount}</Text>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text className="text-gray-700 text-sm mb-1 mt-0">
                    <strong>Service Type:</strong>
                  </Text>
                  <Text className="text-gray-600 text-sm mb-0 mt-0">
                    {serviceType === 'design-only' ? 'Design Only' : 'Design & Development'}
                  </Text>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text className="text-gray-700 text-sm mb-1 mt-0">
                    <strong>Website Type:</strong>
                  </Text>
                  <Text className="text-gray-600 text-sm mb-0 mt-0">{websiteType}</Text>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text className="text-gray-700 text-sm mb-1 mt-0">
                    <strong>Industry:</strong>
                  </Text>
                  <Text className="text-gray-600 text-sm mb-0 mt-0">{industryType}</Text>
                </div>
              </div>
            </Section>

            {/* Features & Requirements */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Features & Requirements
              </Heading>

              <div className="bg-green-50 p-5 rounded-lg mb-4">
                <Text className="text-green-800 text-sm mb-2 mt-0">
                  <strong>Required Features:</strong>
                </Text>
                <Text className="text-green-700 text-sm mb-3 mt-0">
                  {requiredFeatures.join(', ')}
                </Text>

                <Text className="text-green-800 text-sm mb-2 mt-0">
                  <strong>E-commerce Needed:</strong> {ecommerceNeeds ? 'Yes' : 'No'}
                </Text>
                {ecommerceNeeds && ecommerceDetails && (
                  <Text className="text-green-700 text-sm mb-3 mt-0">
                    Details: {ecommerceDetails}
                  </Text>
                )}

                <Text className="text-green-800 text-sm mb-2 mt-0">
                  <strong>CMS Needed:</strong> {cmsNeeds ? 'Yes' : 'No'}
                </Text>

                {integrationNeeds.length > 0 && (
                  <Text className="text-green-700 text-sm mb-0 mt-0">
                    <strong>Integrations:</strong> {integrationNeeds.join(', ')}
                  </Text>
                )}
              </div>
            </Section>

            {/* Timeline & Budget */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Timeline & Budget
              </Heading>

              <div className="bg-amber-50 p-5 rounded-lg">
                <Text className="text-amber-800 text-sm mb-2 mt-0">
                  <strong>Preferred Timeline:</strong> {projectTimeline}
                </Text>
                {launchDate && (
                  <Text className="text-amber-700 text-sm mb-2 mt-0">
                    <strong>Target Launch Date:</strong>{' '}
                    {typeof launchDate === 'string'
                      ? new Date(launchDate).toLocaleDateString()
                      : launchDate.toLocaleDateString()}
                    {isLaunchDateFlexible && ' (Flexible)'}
                  </Text>
                )}
                <Text className="text-amber-800 text-sm mb-2 mt-0">
                  <strong>Budget Range:</strong> {budgetRange}
                </Text>
                <Text className="text-amber-700 text-sm mb-0 mt-0">
                  <strong>Payment Preference:</strong> {paymentPreference}
                </Text>
              </div>
            </Section>

            {/* Additional Information */}
            {(additionalRequirements || inspiration || concerns) && (
              <Section className="mb-8">
                <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                  Additional Information
                </Heading>

                <div className="bg-purple-50 p-5 rounded-lg">
                  {additionalRequirements && (
                    <div className="mb-3">
                      <Text className="text-purple-800 text-sm mb-1 mt-0">
                        <strong>Additional Requirements:</strong>
                      </Text>
                      <Text className="text-purple-700 text-sm mb-0 mt-0">
                        {additionalRequirements}
                      </Text>
                    </div>
                  )}

                  {inspiration && (
                    <div className="mb-3">
                      <Text className="text-purple-800 text-sm mb-1 mt-0">
                        <strong>Inspiration:</strong>
                      </Text>
                      <Text className="text-purple-700 text-sm mb-0 mt-0">{inspiration}</Text>
                    </div>
                  )}

                  {concerns && (
                    <div>
                      <Text className="text-purple-800 text-sm mb-1 mt-0">
                        <strong>Concerns:</strong>
                      </Text>
                      <Text className="text-purple-700 text-sm mb-0 mt-0">{concerns}</Text>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {/* Next Steps */}
            <Section className="mb-8">
              <Heading className="text-gray-800 text-lg font-semibold mb-4 mt-0">
                Next Steps
              </Heading>

              {isForClient ? (
                <div className="bg-blue-50 p-5 rounded-lg">
                  <Text className="text-blue-800 text-sm mb-2 mt-0">
                    <strong>What happens next?</strong>
                  </Text>
                  <Text className="text-blue-700 text-sm mb-2 mt-0">
                    1. We'll review your detailed requirements within 24 hours
                  </Text>
                  <Text className="text-blue-700 text-sm mb-2 mt-0">
                    2. Schedule a consultation call to discuss your project in detail
                  </Text>
                  <Text className="text-blue-700 text-sm mb-2 mt-0">
                    3. Provide you with a detailed proposal and timeline
                  </Text>
                  <Text className="text-blue-700 text-sm mb-0 mt-0">
                    4. Begin creating your amazing website!
                  </Text>
                </div>
              ) : (
                <div className="bg-red-50 p-5 rounded-lg">
                  <Text className="text-red-800 text-sm mb-2 mt-0">
                    <strong>Action Required:</strong>
                  </Text>
                  <Text className="text-red-700 text-sm mb-2 mt-0">
                    • Review the detailed project requirements above
                  </Text>
                  <Text className="text-red-700 text-sm mb-2 mt-0">
                    • Contact {fullName} at {email} or {phone}
                  </Text>
                  <Text className="text-red-700 text-sm mb-0 mt-0">
                    • Schedule a consultation call to discuss the project
                  </Text>
                </div>
              )}
            </Section>

            <Hr className="border-gray-300 my-6" />

            <Section className="text-center">
              <Text className="text-gray-500 text-xs mb-2 mt-0">Madeley Design Studio</Text>
              <Text className="text-gray-500 text-xs mb-0 mt-0">
                Creating exceptional digital experiences
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
