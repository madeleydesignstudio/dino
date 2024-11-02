"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-[50px] bg-stone-100 border-b  top-0 left-0 right-0 flex items-center w-full justify-between px-4 py-1 z-50">
      <div className="flex items-center space-x-2">
        <Link href="/fossil-files" className="flex items-center space-x-2">
          <img
            src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg?updatedAt=1730029736000"
            alt="Fossil Files logo"
            width={28}
            height={28}
          />
          <h1 className="text-md font-semibold">Fossil Files</h1>
        </Link>
        <h2 className="text-xs text-stone-400">
          Powered by <span className="font-semibold">DINO</span>
        </h2>
      </div>

      <div className="w-64">
        <Input
          type="search"
          placeholder="Search Fossil Files..."
          className="w-full"
        />
      </div>
    </header>
  );
}
