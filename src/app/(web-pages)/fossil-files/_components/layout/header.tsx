"use client";

import Link from "next/link";
// import Search from "./search";

export function Header() {
  return (
    <header
      className="sticky h-[50px] bg-gradient-to-r from-white via-stone-50 to-white dark:from-stone-900 dark:via-stone-900/95 dark:to-stone-900 border-b border-stone-200/80 dark:border-stone-800 backdrop-blur-sm top-0 left-0 right-0 flex items-center w-full justify-between px-6 py-1 z-50"
      role="banner"
    >
      <nav className="flex items-center space-x-3" role="navigation">
        <Link
          href="/fossil-files"
          className="flex items-center space-x-2 group"
          aria-label="Go to Fossil Files home"
        >
          <img
            src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg?updatedAt=1730029736000"
            alt="Fossil Files logo"
            width={28}
            height={28}
            className="group-hover:scale-105 transition-transform duration-200"
          />
          <h1 className="text-md font-semibold text-stone-800 dark:text-stone-200">
            Fossil Files
          </h1>
        </Link>
        <div
          className="h-4 w-px bg-stone-200 dark:bg-stone-700"
          aria-hidden="true"
        />
        <h2 className="text-xs text-stone-500 dark:text-stone-400">
          Powered by <span className="font-semibold">DINO</span>
        </h2>
      </nav>

      <div className="w-64" role="search">
        {/* <Search /> */}
      </div>
    </header>
  );
}
