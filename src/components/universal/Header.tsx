"use client";

import { HeaderNav } from "@/components/universal/HeaderNav";
import { useState, useEffect } from "react";
import Image from "next/image";

// Navigation link constants
const NAVIGATION_LINKS = {
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
  caseStudies: [
    { name: "Project Alpha", href: "/casestudies/project-alpha" },
    { name: "Project Beta", href: "/casestudies/project-beta" },
    { name: "Project Gamma", href: "/casestudies/project-gamma" },
    { name: "Project Delta", href: "/casestudies/project-delta" },
    { name: "View All", href: "/casestudies" },
  ],
  company: [
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ],
};

// Constants
const HEADER_HEIGHT = 80;
const RED_SECTION_ID = "red-resources-section";

/**
 * Main header component that handles navigation and visibility based on page sections
 * Hides when overlapping with the red resources section
 */
export function Header() {
  const [isInRedRegion, setIsInRedRegion] = useState(false);

  /**
   * Checks if header overlaps with the red resources section
   * Updates header visibility state accordingly
   */
  const checkRedRegionOverlap = () => {
    const redSection = document.getElementById(RED_SECTION_ID);

    if (redSection) {
      const rect = redSection.getBoundingClientRect();
      const isOverlapping = rect.top <= HEADER_HEIGHT && rect.bottom > 0;
      setIsInRedRegion(isOverlapping);
    }
  };

  useEffect(() => {
    // Initial check
    checkRedRegionOverlap();

    // Add event listeners for scroll and resize
    window.addEventListener("scroll", checkRedRegionOverlap);
    window.addEventListener("resize", checkRedRegionOverlap);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", checkRedRegionOverlap);
      window.removeEventListener("resize", checkRedRegionOverlap);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-opacity duration-300 ${
        isInRedRegion ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-7xl border-b border-x border-[#D9E0C1]">
        <HeaderNav
          resourcesLinks={NAVIGATION_LINKS.resources}
          servicesLinks={NAVIGATION_LINKS.services}
          caseStudiesLinks={NAVIGATION_LINKS.caseStudies}
          companyLinks={NAVIGATION_LINKS.company}
          logo={
            <Image
              src="/logo.png"
              alt="Madeley Design Studio Logo"
              width={40}
              height={25}
              priority
            />
          }
        />
      </div>
    </header>
  );
}
