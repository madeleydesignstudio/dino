import { getPayload } from "payload";
import config from "@payload-config";
import type { CaseStudy } from "@/payload-types";
import { mockCaseStudies } from "./caseStudies";

/**
 * Fetches all case studies from Payload CMS with fallback to mock data
 * SERVER-SIDE ONLY - Do not import in client components
 */
export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "case-studies",
      limit: 100,
      sort: "-createdAt",
    });

    if (result.docs.length > 0) {
      return result.docs;
    } else {
      return mockCaseStudies as unknown as CaseStudy[];
    }
  } catch (error) {
    console.error("Error fetching case studies from CMS:", error);
    return mockCaseStudies as unknown as CaseStudy[];
  }
}

/**
 * Fetches a specific case study by slug from Payload CMS with fallback to mock data
 * SERVER-SIDE ONLY - Do not import in client components
 */
export async function fetchCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
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
    } else {
      // Fallback to mock data
      const mockCaseStudy = mockCaseStudies.find((cs) => cs.slug === slug);
      return mockCaseStudy ? (mockCaseStudy as unknown as CaseStudy) : null;
    }
  } catch (error) {
    console.error("Error fetching case study from CMS:", error);
    // Fallback to mock data
    const mockCaseStudy = mockCaseStudies.find((cs) => cs.slug === slug);
    return mockCaseStudy ? (mockCaseStudy as unknown as CaseStudy) : null;
  }
}

/**
 * Generates static params for case study pages
 * SERVER-SIDE ONLY - Used in generateStaticParams
 */
export async function getCaseStudyStaticParams() {
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
    console.log("CMS not available, using static params");
  }

  // Fallback to static slugs
  return [
    { slug: "ordo" },
    { slug: "form-and-function" },
    { slug: "structopia" },
    { slug: "madeleydesignstudio" },
  ];
}

/**
 * Fetches case studies for navigation from Payload CMS
 * SERVER-SIDE ONLY - Used to populate navigation menus
 * Only includes case studies where isNav is true
 */
export async function fetchCaseStudiesNavigation() {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "case-studies",
      where: {
        isNav: {
          equals: true,
        },
      },
      limit: 100,
      sort: "-createdAt",
      select: {
        title: true,
        slug: true,
      },
    });

    const navigationLinks = result.docs.map((caseStudy) => ({
      name: caseStudy.title,
      href: `/casestudies/${caseStudy.slug}`,
    }));

    // Always add "View All" link at the end
    return [...navigationLinks, { name: "View All", href: "/casestudies" }];
  } catch (error) {
    console.error("Error fetching case studies navigation:", error);

    // Fallback to just "View All" if CMS fails
    return [{ name: "View All", href: "/casestudies" }];
  }
}
