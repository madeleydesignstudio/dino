import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { CaseStudy, Media } from "@/payload-types";
import Image from "next/image";

// Mock case studies data
const mockCaseStudies = {
  "project-alpha": {
    id: 1,
    slug: "project-alpha",
    title: "Project Alpha: E-commerce Platform",
    description: `A comprehensive e-commerce platform built for a luxury fashion brand. We created a seamless shopping experience that increased conversions by 45% and reduced cart abandonment by 30%.

Key Features:
• Custom product configurator
• Advanced filtering and search
• Mobile-first responsive design
• Integrated payment processing
• Real-time inventory management

Technologies Used:
Next.js, TypeScript, Tailwind CSS, Stripe, PostgreSQL

Results:
The new platform launched successfully and exceeded all performance metrics within the first quarter.`,
    image: { url: "/1.png", alt: "Project Alpha Screenshot" },
    createdAt: "2024-01-15T00:00:00.000Z",
  },
  "project-beta": {
    id: 2,
    slug: "project-beta",
    title: "Project Beta: SaaS Dashboard",
    description: `A comprehensive analytics dashboard for a B2B SaaS company. The project involved designing and building a complex data visualization platform that helps users make data-driven decisions.

Key Features:
• Real-time data visualization
• Customizable dashboard widgets
• Advanced reporting system
• Multi-tenant architecture
• API integrations

Technologies Used:
React, D3.js, Node.js, GraphQL, MongoDB

Results:
User engagement increased by 60% and customer satisfaction scores improved significantly.`,
    image: { url: "/2.png", alt: "Project Beta Screenshot" },
    createdAt: "2024-02-20T00:00:00.000Z",
  },
  "project-gamma": {
    id: 3,
    slug: "project-gamma",
    title: "Project Gamma: Mobile App",
    description: `A cross-platform mobile application for a healthcare startup. We designed and developed a user-friendly app that connects patients with healthcare providers.

Key Features:
• Video consultation platform
• Appointment scheduling
• Electronic health records
• Push notifications
• Offline capabilities

Technologies Used:
React Native, Firebase, WebRTC, TypeScript

Results:
The app gained 10k+ downloads in the first month and received 4.8/5 stars in app stores.`,
    image: { url: "/3.png", alt: "Project Gamma Screenshot" },
    createdAt: "2024-03-10T00:00:00.000Z",
  },
  "project-delta": {
    id: 4,
    slug: "project-delta",
    title: "Project Delta: Corporate Website",
    description: `A complete redesign and development of a corporate website for a Fortune 500 company. The project focused on improving user experience and modernizing the brand presence.

Key Features:
• Modern responsive design
• Content management system
• Multi-language support
• SEO optimization
• Performance optimization

Technologies Used:
Next.js, Payload CMS, Tailwind CSS, Vercel

Results:
Page load times improved by 70% and organic traffic increased by 120% within 6 months.`,
    image: { url: "/4.png", alt: "Project Delta Screenshot" },
    createdAt: "2024-03-25T00:00:00.000Z",
  },
};

async function getCaseStudy(slug: string) {
  // First try to get from CMS
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "case-studies",
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });

    if (result.docs[0]) {
      return result.docs[0];
    }
  } catch (error) {
    console.log("CMS not available, using mock data");
  }

  // Fallback to mock data
  return mockCaseStudies[slug as keyof typeof mockCaseStudies] || null;
}

export async function generateStaticParams() {
  // Try CMS first, fallback to mock data
  try {
    const payload = await getPayload({ config });

    const caseStudies = await payload.find({
      collection: "case-studies",
      limit: 100,
    });

    if (caseStudies.docs.length > 0) {
      return caseStudies.docs.map((caseStudy) => ({
        slug: caseStudy.slug,
      }));
    }
  } catch (error) {
    console.log("CMS not available, using mock data for static params");
  }

  // Fallback to mock case studies
  return Object.keys(mockCaseStudies).map((slug) => ({
    slug: slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const image = caseStudy.image as Media;

  console.log("Image data:", image);
  console.log("Image URL:", image?.url);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 border-x border-[#D9E0C1]">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-gray-500 mb-4">
            <Link href="/casestudies" className="hover:underline">
              Case Studies
            </Link>{" "}
            / {caseStudy.title}
          </div>

          <article>
            <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>

            {image?.url && (
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={image.url}
                  alt={image.alt || caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
                {caseStudy.description}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#D9E0C1]">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/start"
                  className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-center"
                >
                  Start Similar Project
                </Link>
                <Link
                  href="/casestudies"
                  className="border border-[#D9E0C1] px-8 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold text-center"
                >
                  View More Case Studies
                </Link>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Published:{" "}
                  {new Date(caseStudy.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
