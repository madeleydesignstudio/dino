// Client-safe case studies configuration
export interface CaseStudyLink {
  name: string;
  href: string;
}

// Client-safe utility functions (no Payload imports)
export const getCaseStudyBySlug = (
  slug: string,
  links: CaseStudyLink[],
): CaseStudyLink | undefined => {
  return links.find((study) => study.href === `/casestudies/${slug}`);
};

export const getAllCaseStudies = (links: CaseStudyLink[]): CaseStudyLink[] => {
  return links.filter((study) => study.href !== "/casestudies");
};

// Mock data for fallback (client-safe)
export const mockCaseStudies = [
  {
    id: 1,
    slug: "ordo",
    title: "Ordo",
    description:
      "A comprehensive e-commerce platform built for a luxury fashion brand.",
    image: { url: "/1.png", alt: "Ordo Screenshot" },
    isNav: true,
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: 2,
    slug: "form-and-function",
    title: "Form + Function",
    description: "A comprehensive analytics dashboard for a B2B SaaS company.",
    image: { url: "/2.png", alt: "Form + Function Screenshot" },
    isNav: true,
    createdAt: "2024-02-20T00:00:00.000Z",
    updatedAt: "2024-02-20T00:00:00.000Z",
  },
  {
    id: 3,
    slug: "structopia",
    title: "Structopia",
    description:
      "A cross-platform mobile application for a healthcare startup.",
    image: { url: "/3.png", alt: "Structopia Screenshot" },
    isNav: true,
    createdAt: "2024-03-10T00:00:00.000Z",
    updatedAt: "2024-03-10T00:00:00.000Z",
  },
  {
    id: 4,
    slug: "madeleydesignstudio",
    title: "madeleydesignstudio",
    description: "A complete redesign and development of a corporate website.",
    image: { url: "/4.png", alt: "madeleydesignstudio Screenshot" },
    isNav: true,
    createdAt: "2024-03-25T00:00:00.000Z",
    updatedAt: "2024-03-25T00:00:00.000Z",
  },
];
