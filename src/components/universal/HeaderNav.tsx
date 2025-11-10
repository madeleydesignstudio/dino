"use client";

import { NavigationLink } from "@/components/navigation/NavigationLink";
import { Kbd } from "@/components/ui/kbd";
import { SearchCommand } from "@/components/universal/SearchCommand";
import { ReactNode, useState } from "react";

// Constants
const DROPDOWN_HEIGHT = {
  COLLAPSED: 48, // 12 in rem (48px)
  EXPANDED: 264, // Full dropdown height
} as const;

// Types
interface NavLink {
  name: string;
  href: string;
}

interface HeaderNavProps {
  resourcesLinks: NavLink[];
  servicesLinks: NavLink[];
  caseStudiesLinks: NavLink[];
  companyLinks: NavLink[];
  logo: ReactNode;
}

type DropdownType = "resources" | "services" | "casestudies" | "company" | null;

/**
 * HeaderNav component handles the main navigation with dropdown menus
 * Features hover-activated dropdowns for each main navigation section
 */
export function HeaderNav({
  resourcesLinks,
  servicesLinks,
  caseStudiesLinks,
  companyLinks,
  logo,
}: HeaderNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  /**
   * Closes the active dropdown menu
   */
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  /**
   * Sets the active dropdown menu
   */
  const openDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(dropdown);
  };

  /**
   * Renders a grid of navigation links for dropdown content
   */
  const renderDropdownLinks = (
    links: NavLink[],
    gridClass: string = "grid-cols-5",
  ) => (
    <div className={`grid ${gridClass} gap-3 flex-1 items-center h-full`}>
      {links.map((link) => (
        <NavigationLink
          key={link.href}
          href={link.href}
          className="text-foreground hover:opacity-70 transition-opacity font-normal text-center border-2 border-[#D9E0C1] h-full flex items-center justify-center px-2 py-1 text-xs leading-tight rounded-lg"
          onClick={closeDropdown}
        >
          {link.name}
        </NavigationLink>
      ))}
    </div>
  );

  /**
   * Renders dropdown content based on active dropdown type
   */
  const renderDropdownContent = () => {
    const baseClasses = "pt-4 pb-4 h-full";

    switch (activeDropdown) {
      case "resources":
        return (
          <div className={`${baseClasses} flex flex-col`}>
            {renderDropdownLinks(resourcesLinks)}
          </div>
        );

      case "services":
        return (
          <div className={`${baseClasses} flex flex-col`}>
            {renderDropdownLinks(servicesLinks)}
          </div>
        );

      case "casestudies":
        return (
          <div className={`${baseClasses} flex flex-col`}>
            {renderDropdownLinks(caseStudiesLinks)}
          </div>
        );

      case "company":
        return (
          <div className={`${baseClasses} flex items-center justify-center`}>
            {renderDropdownLinks(companyLinks, "grid-cols-3")}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header
      className={`bg-background overflow-hidden transition-all duration-300 ease-in-out`}
      style={{
        height: activeDropdown
          ? `${DROPDOWN_HEIGHT.EXPANDED}px`
          : `${DROPDOWN_HEIGHT.COLLAPSED}px`,
      }}
    >
      <nav className="px-4" onMouseLeave={closeDropdown}>
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center h-12">
          {/* Left Side - Logo and Main Navigation */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <NavigationLink href="/" onClick={closeDropdown}>
              {logo}
            </NavigationLink>

            {/* Main Navigation Links */}
            <ul className="flex gap-10 font-normal items-center text-xs">
              <li
                className="group relative"
                onMouseEnter={() => openDropdown("resources")}
              >
                <NavigationLink
                  href="/resources"
                  className="block py-2"
                  onClick={closeDropdown}
                >
                  Resources
                </NavigationLink>
              </li>

              <li
                className="group relative"
                onMouseEnter={() => openDropdown("casestudies")}
              >
                <NavigationLink
                  href="/casestudies"
                  className="block py-2"
                  onClick={closeDropdown}
                >
                  Case-Studies
                </NavigationLink>
              </li>

              <li
                className="group relative"
                onMouseEnter={() => openDropdown("services")}
              >
                <NavigationLink
                  href="/services"
                  className="block py-2"
                  onClick={closeDropdown}
                >
                  Services
                </NavigationLink>
              </li>

              <li
                className="group relative"
                onMouseEnter={() => openDropdown("company")}
              >
                <NavigationLink
                  href="/company"
                  className="block py-2"
                  onClick={closeDropdown}
                >
                  Company
                </NavigationLink>
              </li>
            </ul>
          </div>

          {/* Right Side - Search and CTA Button */}
          <div className="flex items-center gap-4">
            <SearchCommand
              resourcesLinks={resourcesLinks}
              servicesLinks={servicesLinks}
              caseStudiesLinks={caseStudiesLinks}
              companyLinks={companyLinks}
            />
            <NavigationLink
              href="/start"
              className="text-neutral-50 py-1 font-normal text-xs bg-accent px-4 rounded-md"
              onClick={closeDropdown}
            >
              Start{" "}
              <Kbd className="hidden sm:inline-flex ml-auto font-normal text-neutral-50">
                S
              </Kbd>
            </NavigationLink>
          </div>
        </div>

        {/* Dropdown Content Area */}
        <div
          className={`transition-opacity duration-300 h-[212px] ${
            activeDropdown
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {renderDropdownContent()}
        </div>
      </nav>
    </header>
  );
}
