import { getPayload } from "payload";
import config from "@payload-config";
import type { CaseStudy } from "@/payload-types";
import { mockCaseStudies, mockResources, mockServices } from "./caseStudies";

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
 * Fetches resources for navigation from Payload CMS
 * SERVER-SIDE ONLY - Used to populate navigation menus
 * Only includes resources where isNav is true and isPublished is true
 */
export async function fetchResourcesNavigation() {
  try {
    console.log("🔍 Fetching resources navigation...");
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "resources",
      where: {
        and: [
          {
            isNav: {
              equals: true,
            },
          },
          {
            isPublished: {
              equals: true,
            },
          },
        ],
      },
      limit: 100,
      sort: "-createdAt",
      select: {
        title: true,
        slug: true,
      },
    });

    const navigationLinks = result.docs.map((resource) => ({
      name: resource.title,
      href: `/resources/${resource.slug}`,
    }));

    console.log(`📄 Found ${navigationLinks.length} resources for navigation`);

    // If no navigation links found, return static fallback
    if (navigationLinks.length === 0) {
      console.log("⚠️ No resources found, using static fallback");
      return [
        { name: "Opensource", href: "/resources/opensource" },
        { name: "UI", href: "/resources/ui" },
        { name: "API", href: "/resources/api" },
        { name: "Compare", href: "/resources/compare" },
        { name: "Blog", href: "/resources/blog" },
      ];
    }

    console.log("✅ Returning dynamic resources navigation");
    return navigationLinks;
  } catch (error) {
    console.error("❌ Error fetching resources navigation:", error);

    // Fallback to static navigation
    return [
      { name: "Opensource", href: "/resources/opensource" },
      { name: "UI", href: "/resources/ui" },
      { name: "API", href: "/resources/api" },
      { name: "Compare", href: "/resources/compare" },
      { name: "Blog", href: "/resources/blog" },
    ];
  }
}

/**
 * Fetches services for navigation from Payload CMS
 * SERVER-SIDE ONLY - Used to populate navigation menus
 * Only includes services where isNav is true and isPublished is true
 */
export async function fetchServicesNavigation() {
  try {
    console.log("🔍 Fetching services navigation...");
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "services",
      where: {
        and: [
          {
            isNav: {
              equals: true,
            },
          },
          {
            isPublished: {
              equals: true,
            },
          },
        ],
      },
      limit: 100,
      sort: "-createdAt",
      select: {
        title: true,
        slug: true,
      },
    });

    const navigationLinks = result.docs.map((service) => ({
      name: service.title,
      href: `/services/${service.slug}`,
    }));

    console.log(`📄 Found ${navigationLinks.length} services for navigation`);

    // If no navigation links found, return static fallback
    if (navigationLinks.length === 0) {
      console.log("⚠️ No services found, using static fallback");
      return [
        { name: "Website Design", href: "/services/website-design" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "Creative Design", href: "/services/creative-design" },
        { name: "Agentic AI", href: "/services/agentic-ai" },
        { name: "Product Design", href: "/services/product-design" },
      ];
    }

    console.log("✅ Returning dynamic services navigation");
    return navigationLinks;
  } catch (error) {
    console.error("❌ Error fetching services navigation:", error);

    // Fallback to static navigation
    return [
      { name: "Website Design", href: "/services/website-design" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Creative Design", href: "/services/creative-design" },
      { name: "Agentic AI", href: "/services/agentic-ai" },
      { name: "Product Design", href: "/services/product-design" },
    ];
  }
}

/**
 * Fetches all published resources from Payload CMS
 * SERVER-SIDE ONLY
 */
export async function fetchResources() {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "resources",
      where: {
        isPublished: {
          equals: true,
        },
      },
      limit: 100,
      sort: "-createdAt",
    });

    if (result.docs.length > 0) {
      return result.docs;
    } else {
      return mockResources as unknown as any[];
    }
  } catch (error) {
    console.error("Error fetching resources from CMS:", error);
    return mockResources as unknown as any[];
  }
}

/**
 * Fetches a specific resource by slug from Payload CMS
 * SERVER-SIDE ONLY
 */
export async function fetchResourceBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "resources",
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            isPublished: {
              equals: true,
            },
          },
        ],
      },
      limit: 1,
    });

    if (result.docs[0]) {
      return result.docs[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching resource from CMS:", error);
    return null;
  }
}

/**
 * Fetches all published services from Payload CMS
 * SERVER-SIDE ONLY
 */
export async function fetchServices() {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "services",
      where: {
        isPublished: {
          equals: true,
        },
      },
      limit: 100,
      sort: "-createdAt",
    });

    if (result.docs.length > 0) {
      return result.docs;
    } else {
      return mockServices as unknown as any[];
    }
  } catch (error) {
    console.error("Error fetching services from CMS:", error);
    return mockServices as unknown as any[];
  }
}

/**
 * Fetches a specific service by slug from Payload CMS
 * SERVER-SIDE ONLY
 */
export async function fetchServiceBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "services",
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            isPublished: {
              equals: true,
            },
          },
        ],
      },
      limit: 1,
    });

    if (result.docs[0]) {
      return result.docs[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching service from CMS:", error);
    return null;
  }
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
