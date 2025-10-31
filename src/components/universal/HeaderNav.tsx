"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";

interface NavLink {
  name: string;
  href: string;
}

interface HeaderNavProps {
  resourcesLinks: NavLink[];
  companyLinks: NavLink[];
  logo: ReactNode;
}

export function HeaderNav({
  resourcesLinks,
  companyLinks,
  logo,
}: HeaderNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`bg-background overflow-hidden transition-all duration-300 ease-in-out ${
        activeDropdown ? "h-[264px]" : "h-12"
      }`}
    >
      <nav className="px-4" onMouseLeave={() => setActiveDropdown(null)}>
        <div className="flex justify-between items-center h-12">
          <Link href={"/"} onClick={handleLinkClick}>
            {logo}
          </Link>

          <div className="flex gap-10 font-bold items-center">
            <ul className="flex gap-10 font-bold items-center text-sm">
              <li
                className="group relative"
                onMouseEnter={() => setActiveDropdown("resources")}
              >
                <Link
                  href={"/resources"}
                  className="block py-2"
                  onClick={handleLinkClick}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link href={"/casestudies"} onClick={handleLinkClick}>
                  Case-Studies
                </Link>
              </li>
              <li>
                <Link href={"/services"} onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li
                className="group relative"
                onMouseEnter={() => setActiveDropdown("company")}
              >
                <Link
                  href={"/company"}
                  className="block py-2"
                  onClick={handleLinkClick}
                >
                  Company
                </Link>
              </li>
            </ul>
            <div>
              <Link
                href={"/start"}
                className="text-neutral-50 py-2"
                onClick={handleLinkClick}
              >
                Start
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown content area */}
        <div
          className={`transition-opacity  duration-300 h-[212px] ${
            activeDropdown
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {activeDropdown === "resources" && (
            <div className="pt-4 pb-4 h-full  flex flex-col">
              <div className="grid grid-cols-5 gap-3 flex-1 items-center h-full">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:opacity-70 transition-opacity font-semibold text-center border-2 border-[#D9E0C1] h-full flex items-center justify-center px-2 py-1 text-sm leading-tight rounded-lg"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeDropdown === "company" && (
            <div className="pt-4 pb-4 h-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:opacity-70 transition-opacity font-semibold text-center h-[36px] flex items-center justify-center px-3 py-2 text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
