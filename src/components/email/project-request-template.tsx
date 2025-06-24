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
} from '@react-email/components';
import type * as React from 'react';

interface ProjectRequestTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  projectName: string;
  projectDescription: string;
  projectGoals: string[];
  targetAudience: string;
  pageCount: string;
  serviceType: string;
  brandStatus: string;
  websiteType: string;
  industryType: string;
  designStyle?: string[];
  colorPreferences?: string;
  existingWebsite: string;
  currentWebsiteUrl?: string;
  competitorUrls?: string;
  requiredFeatures: string[];
  ecommerceNeeds: boolean;
  ecommerceDetails?: string;
  cmsNeeds: boolean;
  integrationNeeds: string[];
  _contentReady: string;
  _contentHelp: string[];
  _photographyNeeds: string;
  _logoStatus: string;
  _hostingNeeds: string;
  _domainStatus: string;
  _analyticsNeeds: boolean;
  _seoImportance: string;
  _performanceRequirements: string[];
  projectTimeline: string;
  launchDate?: Date | string;
  isLaunchDateFlexible: boolean;
  budgetRange: string;
  paymentPreference: string;
  additionalRequirements?: string;
  inspiration?: string;
  concerns?: string;
  _howDidYouHear: string;
  preferredContactMethod: string;
  bestTimeToCall?: string;
  timezone: string;
  isForClient?: boolean;
}

export const ProjectRequestTemplate: React.FC<
  Readonly<ProjectRequestTemplateProps>
> = ({
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
  websiteType,
  industryType,
  requiredFeatures,
  ecommerceNeeds,
  ecommerceDetails,
  cmsNeeds,
  integrationNeeds,
  projectTimeline,
  launchDate,
  isLaunchDateFlexible,
  budgetRange,
  paymentPreference,
  additionalRequirements,
  inspiration,
  concerns,
  preferredContactMethod,
  bestTimeToCall,
  timezone,
  isForClient = true,
}) => {
  const previewText = isForClient
    ? `Your project request for ${projectName} has been received`
    : `New detailed project request from ${fullName} at ${company}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto max-w-2xl px-4 py-5">
            {/* Header Section */}
            <Section className="mb-8 border-gray-200 border-b-2 pb-5">
              <Heading className="mt-0 mb-2 font-bold text-2xl text-gray-800">
                {isForClient
                  ? 'Your Project Request Received'
                  : 'New Project Request'}
              </Heading>
              <Text className="m-0 text-base text-gray-600">
                {isForClient
                  ? 'Thank you for your detailed project request! We&apos;ll review everything and get back to you within 24 hours.'
                  : `Detailed project request from ${fullName} at ${company}`}
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Contact Information
              </Heading>
              <div className="rounded-lg bg-gray-50 p-5">
                <Text className="mt-0 mb-2 text-gray-700 text-sm">
                  <strong>Name:</strong> {fullName}
                </Text>
                <Text className="mt-0 mb-2 text-gray-700 text-sm">
                  <strong>Email:</strong> {email}
                </Text>
                <Text className="mt-0 mb-2 text-gray-700 text-sm">
                  <strong>Phone:</strong> {phone}
                </Text>
                <Text className="mt-0 mb-2 text-gray-700 text-sm">
                  <strong>Company:</strong> {company}
                </Text>
                <Text className="mt-0 mb-2 text-gray-700 text-sm">
                  <strong>Job Title:</strong> {jobTitle}
                </Text>
                <Text className="mt-0 mb-2 text-gray-700 text-sm">
                  <strong>Timezone:</strong> {timezone}
                </Text>
                <Text className="mt-0 mb-0 text-gray-700 text-sm">
                  <strong>Preferred Contact:</strong> {preferredContactMethod}
                  {bestTimeToCall && ` (Best time to call: ${bestTimeToCall})`}
                </Text>
              </div>
            </Section>

            {/* Project Overview */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Project Overview
              </Heading>

              <div className="mb-4 rounded-lg bg-blue-50 p-5">
                <Heading className="mt-0 mb-2 font-semibold text-base text-blue-800">
                  {projectName}
                </Heading>
                <Text className="mt-0 mb-3 text-blue-700 text-sm">
                  {projectDescription}
                </Text>
                <Text className="mt-0 mb-2 text-blue-700 text-sm">
                  <strong>Target Audience:</strong> {targetAudience}
                </Text>
                <Text className="mt-0 mb-0 text-blue-700 text-sm">
                  <strong>Project Goals:</strong> {projectGoals.join(', ')}
                </Text>
              </div>
            </Section>

            {/* Website Specifications */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Website Specifications
              </Heading>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <Text className="mt-0 mb-1 text-gray-700 text-sm">
                    <strong>Page Count:</strong>
                  </Text>
                  <Text className="mt-0 mb-0 text-gray-600 text-sm">
                    {pageCount}
                  </Text>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <Text className="mt-0 mb-1 text-gray-700 text-sm">
                    <strong>Service Type:</strong>
                  </Text>
                  <Text className="mt-0 mb-0 text-gray-600 text-sm">
                    {serviceType === 'design-only'
                      ? 'Design Only'
                      : 'Design & Development'}
                  </Text>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <Text className="mt-0 mb-1 text-gray-700 text-sm">
                    <strong>Website Type:</strong>
                  </Text>
                  <Text className="mt-0 mb-0 text-gray-600 text-sm">
                    {websiteType}
                  </Text>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <Text className="mt-0 mb-1 text-gray-700 text-sm">
                    <strong>Industry:</strong>
                  </Text>
                  <Text className="mt-0 mb-0 text-gray-600 text-sm">
                    {industryType}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Features & Requirements */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Features & Requirements
              </Heading>

              <div className="mb-4 rounded-lg bg-green-50 p-5">
                <Text className="mt-0 mb-2 text-green-800 text-sm">
                  <strong>Required Features:</strong>
                </Text>
                <Text className="mt-0 mb-3 text-green-700 text-sm">
                  {requiredFeatures.join(', ')}
                </Text>

                <Text className="mt-0 mb-2 text-green-800 text-sm">
                  <strong>E-commerce Needed:</strong>{' '}
                  {ecommerceNeeds ? 'Yes' : 'No'}
                </Text>
                {ecommerceNeeds && ecommerceDetails && (
                  <Text className="mt-0 mb-3 text-green-700 text-sm">
                    Details: {ecommerceDetails}
                  </Text>
                )}

                <Text className="mt-0 mb-2 text-green-800 text-sm">
                  <strong>CMS Needed:</strong> {cmsNeeds ? 'Yes' : 'No'}
                </Text>

                {integrationNeeds.length > 0 && (
                  <Text className="mt-0 mb-0 text-green-700 text-sm">
                    <strong>Integrations:</strong> {integrationNeeds.join(', ')}
                  </Text>
                )}
              </div>
            </Section>

            {/* Timeline & Budget */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Timeline & Budget
              </Heading>

              <div className="rounded-lg bg-amber-50 p-5">
                <Text className="mt-0 mb-2 text-amber-800 text-sm">
                  <strong>Preferred Timeline:</strong> {projectTimeline}
                </Text>
                {launchDate && (
                  <Text className="mt-0 mb-2 text-amber-700 text-sm">
                    <strong>Target Launch Date:</strong>{' '}
                    {typeof launchDate === 'string'
                      ? new Date(launchDate).toLocaleDateString()
                      : launchDate.toLocaleDateString()}
                    {isLaunchDateFlexible && ' (Flexible)'}
                  </Text>
                )}
                <Text className="mt-0 mb-2 text-amber-800 text-sm">
                  <strong>Budget Range:</strong> {budgetRange}
                </Text>
                <Text className="mt-0 mb-0 text-amber-700 text-sm">
                  <strong>Payment Preference:</strong> {paymentPreference}
                </Text>
              </div>
            </Section>

            {/* Additional Information */}
            {(additionalRequirements || inspiration || concerns) && (
              <Section className="mb-8">
                <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                  Additional Information
                </Heading>

                <div className="rounded-lg bg-purple-50 p-5">
                  {additionalRequirements && (
                    <div className="mb-3">
                      <Text className="mt-0 mb-1 text-purple-800 text-sm">
                        <strong>Additional Requirements:</strong>
                      </Text>
                      <Text className="mt-0 mb-0 text-purple-700 text-sm">
                        {additionalRequirements}
                      </Text>
                    </div>
                  )}

                  {inspiration && (
                    <div className="mb-3">
                      <Text className="mt-0 mb-1 text-purple-800 text-sm">
                        <strong>Inspiration:</strong>
                      </Text>
                      <Text className="mt-0 mb-0 text-purple-700 text-sm">
                        {inspiration}
                      </Text>
                    </div>
                  )}

                  {concerns && (
                    <div>
                      <Text className="mt-0 mb-1 text-purple-800 text-sm">
                        <strong>Concerns:</strong>
                      </Text>
                      <Text className="mt-0 mb-0 text-purple-700 text-sm">
                        {concerns}
                      </Text>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {/* Next Steps */}
            <Section className="mb-8">
              <Heading className="mt-0 mb-4 font-semibold text-gray-800 text-lg">
                Next Steps
              </Heading>

              {isForClient ? (
                <div className="rounded-lg bg-blue-50 p-5">
                  <Text className="mt-0 mb-2 text-blue-800 text-sm">
                    <strong>What happens next?</strong>
                  </Text>
                  <Text className="mt-0 mb-2 text-blue-700 text-sm">
                    1. We&apos;ll review your detailed requirements within 24
                    hours
                  </Text>
                  <Text className="mt-0 mb-2 text-blue-700 text-sm">
                    2. Schedule a consultation call to discuss your project in
                    detail
                  </Text>
                  <Text className="mt-0 mb-2 text-blue-700 text-sm">
                    3. Provide you with a detailed proposal and timeline
                  </Text>
                  <Text className="mt-0 mb-0 text-blue-700 text-sm">
                    4. Begin creating your amazing website!
                  </Text>
                </div>
              ) : (
                <div className="rounded-lg bg-red-50 p-5">
                  <Text className="mt-0 mb-2 text-red-800 text-sm">
                    <strong>Action Required:</strong>
                  </Text>
                  <Text className="mt-0 mb-2 text-red-700 text-sm">
                    • Review the detailed project requirements above
                  </Text>
                  <Text className="mt-0 mb-2 text-red-700 text-sm">
                    • Contact {fullName} at {email} or {phone}
                  </Text>
                  <Text className="mt-0 mb-0 text-red-700 text-sm">
                    • Schedule a consultation call to discuss the project
                  </Text>
                </div>
              )}
            </Section>

            <Hr className="my-6 border-gray-300" />

            <Section className="text-center">
              <Text className="mt-0 mb-2 text-gray-500 text-xs">
                Madeley Design Studio
              </Text>
              <Text className="mt-0 mb-0 text-gray-500 text-xs">
                Creating exceptional digital experiences
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
