"use client";
import { HeaderNav } from "@/components/universal/HeaderNav";
import { useState, useEffect } from "react";
import Image from "next/image";

// Types
interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  resourcesLinks: NavLink[];
  servicesLinks: NavLink[];
  caseStudiesLinks: NavLink[];
  companyLinks: NavLink[];
}

// Constants
const HEADER_HEIGHT = 80;
const RED_SECTION_ID = "red-resources-section";

/**
 * Main header component that handles navigation and visibility based on page sections
 * Hides when overlapping with the red resources section
 */
export function MusicPlay({
  resourcesLinks,
  servicesLinks,
  caseStudiesLinks,
  companyLinks,
}: HeaderProps) {
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
      className={`fixed bottom-0 left-0 bg-background right-0 z-50 transition-opacity duration-300 ${
        isInRedRegion ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="hidden md:block w-full border-t border-[#D9E0C1]">
        <div className="mx-auto w-full max-w-360 px-4 border-x border-[#D9E0C1]">
          <HeaderNav
            resourcesLinks={resourcesLinks}
            servicesLinks={servicesLinks}
            caseStudiesLinks={caseStudiesLinks}
            companyLinks={companyLinks}
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
      </div>
    </header>
  );
}
