"use client";
import { HeaderNav } from "@/components/universal/HeaderNav";
import { NavigationLink } from "@/components/navigation/NavigationLink";
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
 * Includes responsive mobile navigation with hamburger menu
 */
export function Header({
  resourcesLinks,
  servicesLinks,
  caseStudiesLinks,
  companyLinks,
}: HeaderProps) {
  const [isInRedRegion, setIsInRedRegion] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  /**
   * Toggles mobile menu open/closed state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Closes mobile menu
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Renders mobile navigation links for a section
   */
  const renderMobileNavSection = (title: string, links: NavLink[]) => (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4 text-foreground">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <NavigationLink
              href={link.href}
              className="block text-foreground hover:text-accent transition-colors font-normal"
              onClick={closeMobileMenu}
            >
              {link.name}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </div>
  );

  useEffect(() => {
    // Initial check
    checkRedRegionOverlap();

    // Add event listeners for scroll and resize
    window.addEventListener("scroll", checkRedRegionOverlap);
    window.addEventListener("resize", checkRedRegionOverlap);

    // Close mobile menu on resize to desktop
    const handleResize = () => {
      checkRedRegionOverlap();
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Handle escape key to close mobile menu
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", checkRedRegionOverlap);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 bg-background right-0 z-50 transition-opacity duration-300 ${
        isInRedRegion ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:block w-full border-b border-[#D9E0C1]">
        <div className="mx-auto w-full max-w-360 px-4 border-x border-[#D9E0C1]">
          <HeaderNav
            resourcesLinks={resourcesLinks}
            servicesLinks={servicesLinks}
            caseStudiesLinks={caseStudiesLinks}
            companyLinks={companyLinks}
            logo={
              <Image
                src="/dino-logo.svg"
                alt="Dino Logo"
                width={40}
                height={25}
                priority
                quality={100}
              />
            }
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden w-full border-b border-[#D9E0C1]">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavigationLink href="/" onClick={closeMobileMenu}>
              <Image
                src="/dino-logo.svg"
                alt="Dino Logo"
                width={40}
                height={25}
                priority
                quality={100}
              />
            </NavigationLink>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-[#D9E0C1]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center">
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          />
        )}

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-x-0 top-20 bg-background border-b border-[#D9E0C1] transition-all duration-300 ease-in-out z-10 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <nav
            id="mobile-menu"
            className="px-4 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            {/* Main Navigation Links */}
            <div className="mb-8">
              <ul className="space-y-4">
                <li>
                  <NavigationLink
                    href="/resources"
                    className="block text-xl font-bold text-foreground hover:text-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Resources
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/casestudies"
                    className="block text-xl font-bold text-foreground hover:text-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Case Studies
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/services"
                    className="block text-xl font-bold text-foreground hover:text-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/company"
                    className="block text-xl font-bold text-foreground hover:text-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Company
                  </NavigationLink>
                </li>
              </ul>
            </div>

            {/* Detailed Navigation Sections */}
            {renderMobileNavSection("Resources", resourcesLinks)}
            {renderMobileNavSection("Services", servicesLinks)}
            {renderMobileNavSection("Case Studies", caseStudiesLinks)}
            {renderMobileNavSection("Company", companyLinks)}

            {/* CTA Button */}
            <div className="pt-6 border-t border-[#D9E0C1]">
              <NavigationLink
                href="/start"
                className="block w-full text-center text-neutral-50 py-3 font-normal bg-accent rounded-sm border-b-2 border-red-900 hover:bg-red-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Start Project
              </NavigationLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
