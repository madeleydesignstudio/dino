import { Header } from "@/components/universal/Header";
import { fetchCaseStudiesNavigation } from "@/lib/caseStudiesServer";

// Navigation link constants
const STATIC_NAVIGATION_LINKS = {
  resources: [
    { name: "Opensource", href: "/resources/opensource" },
    { name: "UI", href: "/resources/ui" },
    { name: "API", href: "/resources/api" },
    { name: "Compare", href: "/resources/compare" },
    { name: "Blog", href: "/resources/blog" },
  ],
  services: [
    { name: "Website Design", href: "/services/website-design" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Creative Design", href: "/services/creative-design" },
    { name: "Agentic AI", href: "/services/agentic-ai" },
    { name: "Product Design", href: "/services/product-design" },
  ],
  company: [
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ],
};

/**
 * Server wrapper component that fetches navigation data from Payload CMS
 * and passes it to the client Header component
 */
export async function HeaderWrapper() {
  // Fetch case studies navigation from Payload CMS
  const caseStudiesLinks = await fetchCaseStudiesNavigation();

  return (
    <Header
      resourcesLinks={STATIC_NAVIGATION_LINKS.resources}
      servicesLinks={STATIC_NAVIGATION_LINKS.services}
      caseStudiesLinks={caseStudiesLinks}
      companyLinks={STATIC_NAVIGATION_LINKS.company}
    />
  );
}
