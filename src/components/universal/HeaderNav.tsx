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
      className="bg-background border border-foreground rounded-md overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        height: activeDropdown ? "264px" : "64px",
      }}
    >
      <nav className="px-4" onMouseLeave={() => setActiveDropdown(null)}>
        <div className="flex justify-between items-center h-16">
          <Link href={"/"} onClick={handleLinkClick}>
            {logo}
          </Link>

          <div className="flex gap-10 font-bold items-center">
            <ul className="flex gap-10 font-bold items-center">
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
                className="text-neutral-50 bg-[#C64B4B] px-4 py-1 rounded-tl-md rounded-tr-md rounded-br-md border-b-6 border-neutral-700 active:border-b-2 active:translate-y-1 transition-all duration-75"
                onClick={handleLinkClick}
              >
                Start
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown content area */}
        <div
          className="transition-opacity duration-300"
          style={{
            opacity: activeDropdown ? 1 : 0,
            pointerEvents: activeDropdown ? "auto" : "none",
          }}
        >
          {activeDropdown === "resources" && (
            <div className="pt-8 pb-6">
              <div className="grid grid-cols-5 gap-4">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:opacity-70 transition-opacity font-semibold text-center"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeDropdown === "company" && (
            <div className="pt-8 pb-6">
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:opacity-70 transition-opacity font-semibold text-center"
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
