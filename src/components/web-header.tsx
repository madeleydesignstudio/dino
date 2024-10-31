"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const WebHeader = () => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setServicesExpanded(false);
        setCompanyExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={headerRef}>
      <header className="flex items-center h-[50px] border-b border-stone-900 fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-sm font-karla">
        <div className="border-r border-stone-900 h-full w-1/3 ">
          <Link
            href="/"
            className=" h-full w-full flex items-center justify-start"
          >
            <h1 className="text-xl font-bold font-karla px-4">DINO</h1>
          </Link>
        </div>
        <div className="border-r border-stone-900 h-full w-1/3">
          <div className="flex items-center justify-between h-full">
            <Link
              href="/work"
              className="border-r border-stone-900 h-full w-full flex items-center justify-start"
            >
              <h2 className="text-stone-900 px-4">Work</h2>
            </Link>
            <div
              className="group h-full w-full flex items-center justify-start"
              onClick={() => {
                setServicesExpanded(!servicesExpanded);
                setCompanyExpanded(false);
              }}
            >
              <h2 className="text-stone-900 px-4">Services</h2>
              <span className="text-stone-900">+</span>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3">
          <div className="flex items-center justify-between h-full">
            <div
              className="group border-r border-stone-900 h-full w-full flex items-center justify-start"
              onClick={() => {
                setCompanyExpanded(!companyExpanded);
                setServicesExpanded(false);
              }}
            >
              <h2 className="text-stone-900 px-4">Company</h2>
              <span className="text-stone-900">+</span>
            </div>
            <Link
              href="/contact"
              className="h-full w-full flex items-center justify-start font-bold"
            >
              <h2 className="text-[#2EA8A9] px-4">Get Started</h2>
              <span className="text-[#2EA8A9]">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Services dropdown */}
      <div
        className={`fixed top-[50px] left-0 right-0 bg-stone-50/80 z-50 backdrop-blur-sm overflow-hidden transition-all duration-200 ease-in-out ${
          servicesExpanded
            ? "max-h-[200px] border-b border-stone-900"
            : "max-h-0"
        }`}
      >
        <ul className="flex justify-between h-[200px]">
          <li className="w-1/3 text-center">
            <Link
              href="/services/design"
              className="py-2 border-r border-stone-900 h-full flex flex-col justify-around items-center"
            >
              <div className="w-24 h-24 flex-1 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/design.svg?updatedAt=1729668663385"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="font-nanum text-2xl">Design</h2>
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/services/engineer"
              className="py-2 border-r border-stone-900 h-full flex flex-col justify-around items-center"
            >
              <div className="w-24 h-24 flex-1 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/backend.svg?updatedAt=1729668691498"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="font-nanum text-2xl">Engineer</h2>
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/services/market"
              className="py-2 h-full flex flex-col justify-around items-center"
            >
              <div className="w-24 h-24 flex-1 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/market.svg?updatedAt=1729668676661"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="font-nanum text-2xl">Market</h2>
            </Link>
          </li>
        </ul>
      </div>

      {/* Company dropdown */}
      <div
        className={`fixed top-[50px] left-0 right-0 bg-stone-50/80 z-50 backdrop-blur-sm overflow-hidden transition-all duration-200 ease-in-out ${
          companyExpanded
            ? "max-h-[200px] border-b border-stone-900"
            : "max-h-0"
        }`}
      >
        <ul className="flex justify-between h-[200px]">
          <li className="w-1/3 text-center">
            <Link
              href="/company/about"
              className="py-2 border-r border-stone-900 h-full flex flex-col justify-around items-center"
            >
              <div className="w-24 h-24 flex-1 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/icons8-about-500.svg?updatedAt=1730393666505"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="font-nanum text-2xl">About</h2>
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/company/careers"
              className="py-2 border-r border-stone-900 h-full flex flex-col justify-around items-center"
            >
              <div className="w-24 h-24 flex-1 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/job-seeker.png?updatedAt=1730393888811"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="font-nanum text-2xl">Careers</h2>
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/company/blog"
              className="py-2 h-full flex flex-col justify-around items-center"
            >
              <div className="w-24 h-24 flex-1 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/danielcmadeley/dino/blog.png?updatedAt=1730393880092"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="font-nanum text-2xl">Blog</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebHeader;
