"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ExpandableNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <ul className="flex h-[50px] items-center justify-between">
          <li>
            <Link href="/" className="text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg font-semibold">
              About
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <button className="flex items-center text-lg font-semibold">
              Services
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </li>
          <li>
            <Link href="/contact" className="text-lg font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded ? "max-h-[200px]" : "max-h-0"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="container mx-auto px-4">
          <ul className="flex justify-between py-4">
            <li className="w-1/3 text-center">
              <Link
                href="/service1"
                className="block px-4 py-2 text-lg font-semibold hover:bg-primary-foreground hover:text-primary"
              >
                Service 1
              </Link>
            </li>
            <li className="w-1/3 text-center">
              <Link
                href="/service2"
                className="block px-4 py-2 text-lg font-semibold hover:bg-primary-foreground hover:text-primary"
              >
                Service 2
              </Link>
            </li>
            <li className="w-1/3 text-center">
              <Link
                href="/service3"
                className="block px-4 py-2 text-lg font-semibold hover:bg-primary-foreground hover:text-primary"
              >
                Service 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
