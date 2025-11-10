import { Header } from "@/components/universal/Header";
import {
  fetchCaseStudiesNavigation,
  fetchResourcesNavigation,
  fetchServicesNavigation,
} from "@/lib/caseStudiesServer";

// Static navigation links (only for company section)
const STATIC_NAVIGATION_LINKS = {
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
  // Fetch all navigation data from Payload CMS
  const [resourcesLinks, servicesLinks, caseStudiesLinks] = await Promise.all([
    fetchResourcesNavigation(),
    fetchServicesNavigation(),
    fetchCaseStudiesNavigation(),
  ]);

  return (
    <Header
      resourcesLinks={resourcesLinks}
      servicesLinks={servicesLinks}
      caseStudiesLinks={caseStudiesLinks}
      companyLinks={STATIC_NAVIGATION_LINKS.company}
    />
  );
}
