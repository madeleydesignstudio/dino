"use client";

import { HeaderNav } from "@/components/universal/HeaderNav";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isInRedRegion, setIsInRedRegion] = useState(false);

  useEffect(() => {
    const checkRedRegion = () => {
      const redSection = document.getElementById("red-resources-section");
      if (redSection) {
        const rect = redSection.getBoundingClientRect();
        const headerHeight = 80; // Approximate header height

        // Header is considered "in" the red region when it overlaps
        const isInRegion = rect.top <= headerHeight && rect.bottom > 0;
        setIsInRedRegion(isInRegion);
      }
    };

    checkRedRegion();
    window.addEventListener("scroll", checkRedRegion);
    window.addEventListener("resize", checkRedRegion);

    return () => {
      window.removeEventListener("scroll", checkRedRegion);
      window.removeEventListener("resize", checkRedRegion);
    };
  }, []);

  const resourcesLinks = [
    { name: "Opensource", href: "/resources/opensource" },
    { name: "UI", href: "/resources/ui" },
    { name: "API", href: "/resources/api" },
    { name: "Compare", href: "/resources/compare" },
    { name: "Blog", href: "/resources/blog" },
  ];

  const servicesLinks = [
    { name: "Website Design", href: "/services/website-design" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Creative Design", href: "/services/creative-design" },
    { name: "Agentic AI", href: "/services/agentic-ai" },
    { name: "Product Design", href: "/services/product-design" },
  ];

  const caseStudiesLinks = [
    { name: "Project Alpha", href: "/casestudies/project-alpha" },
    { name: "Project Beta", href: "/casestudies/project-beta" },
    { name: "Project Gamma", href: "/casestudies/project-gamma" },
    { name: "Project Delta", href: "/casestudies/project-delta" },
    { name: "View All", href: "/casestudies" },
  ];

  const companyLinks = [
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-opacity duration-300 ${
        isInRedRegion ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-7xl border-b border-x border-[#D9E0C1]">
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
  );
}
