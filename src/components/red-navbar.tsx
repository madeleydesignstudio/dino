import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RedNavbarProps {
  isRedSection: boolean;
}

export default function RedNavbar({ isRedSection }: RedNavbarProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-red-600 text-white",
        isRedSection ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Red Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <RedNavLink href="#new-features">New Features</RedNavLink>
              <RedNavLink href="#success-stories">Success Stories</RedNavLink>
              <RedNavLink href="#future-plans">Future Plans</RedNavLink>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-red-700"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface RedNavLinkProps {
  href: string;
  children: React.ReactNode;
}

function RedNavLink({ href, children }: RedNavLinkProps) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-white hover:bg-red-700"
    >
      {children}
    </Link>
  );
}
