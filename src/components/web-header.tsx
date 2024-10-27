import Link from "next/link";
import React from "react";

const WebHeader = () => {
  return (
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
            className=" h-full w-full flex items-center justify-start"
          >
            <h2 className="text-stone-900 px-4">Services</h2>
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
  );
};

export default WebHeader;
