"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "./nav-link";
import { DropdownButton } from "./dropdown-button";
import { NavigationDropdown } from "./navigation-dropdown";
import { SERVICES_ITEMS, COMPANY_ITEMS } from "./navigation";

export const WebHeader = () => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const closeDropdowns = () => {
    setServicesExpanded(false);
    setCompanyExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current?.contains(event.target as Node)) return;
      setServicesExpanded(false);
      setCompanyExpanded(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={headerRef}>
      <header className="fixed inset-x-0 top-0 z-50 h-[50px] border-b border-stone-900 dark:border-stone-500 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-sm font-karla">
        <nav className="flex h-full">
          <div className="border-r border-stone-900 dark:border-stone-500 h-full w-1/3">
            <NavLink href="/">
              <h1 className="text-xl font-bold font-karla px-4">DINO</h1>
            </NavLink>
          </div>

          <div className="border-r border-stone-900 dark:border-stone-500 h-full w-1/3">
            <div className="flex items-center h-full">
              <NavLink
                href="/work"
                className="border-r border-stone-900 dark:border-stone-500"
              >
                <span className="text-stone-900 dark:text-stone-50 px-4">
                  Work
                </span>
              </NavLink>
              <DropdownButton
                label="Services"
                isExpanded={servicesExpanded}
                onClick={() => {
                  setServicesExpanded(!servicesExpanded);
                  setCompanyExpanded(false);
                }}
              />
            </div>
          </div>

          <div className="h-full w-1/3">
            <div className="flex items-center h-full">
              <DropdownButton
                label="Company"
                isExpanded={companyExpanded}
                onClick={() => {
                  setCompanyExpanded(!companyExpanded);
                  setServicesExpanded(false);
                }}
              />
              <NavLink
                href="/contact"
                className="font-bold border-l border-stone-900 dark:border-stone-500"
              >
                <span className="text-[#2EA8A9] px-4">Get Started</span>
                <span className="text-[#2EA8A9]">→</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <NavigationDropdown
        items={SERVICES_ITEMS}
        isExpanded={servicesExpanded}
        onLinkClick={closeDropdowns}
      />
      <NavigationDropdown
        items={COMPANY_ITEMS}
        isExpanded={companyExpanded}
        onLinkClick={closeDropdowns}
      />
    </div>
  );
};

export default WebHeader;
