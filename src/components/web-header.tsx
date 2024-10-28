"use client";

import Link from "next/link";
import React, { useState } from "react";

const WebHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center h-[50px] border-b border-stone-900 fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-sm font-karla">
        <div className="border-r border-stone-900 h-full w-full ">
          <Link
            href="/"
            className=" h-full w-full flex items-center justify-start"
          >
            <h1 className="text-xl font-bold font-karla px-4">DINO</h1>
          </Link>
        </div>
        <div className="border-r border-stone-900 h-full w-full">
          <div className="flex items-center justify-between h-full">
            <Link
              href="/work"
              className="border-r border-stone-900 h-full w-full flex items-center justify-start"
            >
              <h2 className="text-stone-900 px-4">Work</h2>
            </Link>
            <Link
              href="/services"
              className="group h-full w-full flex items-center justify-start"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <h2 className="text-stone-900 px-4">Services</h2>
              <span className="text-stone-900 transition-transform duration-[2000ms] group-hover:rotate-180">
                +
              </span>
            </Link>
          </div>
        </div>
        <div className=" h-full w-full">
          <div className="flex items-center justify-between h-full">
            <Link
              href="/company"
              className="border-r border-stone-900 h-full w-full flex items-center justify-start"
            >
              <h2 className="text-stone-900 px-4">Company</h2>
            </Link>
            <Link
              href="/contact"
              className=" h-full w-full flex items-center justify-start"
            >
              <h2 className="text-stone-900 px-4">Get Started</h2>
              <span className="text-stone-900">→</span>
            </Link>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-[50px] left-0 right-0 bg-stone-50/80 z-50 backdrop-blur-sm  overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded ? "max-h-[200px] border-b border-stone-900" : "max-h-0"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <ul className="flex justify-between h-[200px]">
          <li className="w-1/3 text-center">
            <Link
              href="/services/design"
              className=" py-2  border-r border-stone-900 h-full flex flex-col justify-around items-center "
            >
              <img
                src="https://ik.imagekit.io/danielcmadeley/dino/design.svg?updatedAt=1729668663385"
                alt=""
              />
              <h2 className="font-nanum text-2xl"> Design</h2>
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/services/engineer"
              className=" py-2  border-r border-stone-900 h-full flex flex-col justify-around items-center "
            >
              <img
                src="https://ik.imagekit.io/danielcmadeley/dino/backend.svg?updatedAt=1729668691498"
                alt=""
              />
              <h2 className="font-nanum text-2xl"> Engineer</h2>
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/services/design"
              className=" py-2   h-full flex flex-col justify-around items-center "
            >
              <img
                src="https://ik.imagekit.io/danielcmadeley/dino/market.svg?updatedAt=1729668676661"
                alt=""
              />
              <h2 className="font-nanum text-2xl"> Market</h2>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WebHeader;
