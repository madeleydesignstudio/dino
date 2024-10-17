import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Nav from "./nav";

// interface NavbarProps {
//   isVerticalSection: boolean;
//   isRedSection: boolean;
// }

export default function Navbar() {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
        // isVerticalSection ? " text-foreground shadow-md" : "  text-foreground",
        // isRedSection && "opacity-0 pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={cn("text-xl font-bold font-karla")}>
              DINO
            </Link>
          </div>
          <div className="">
            <Nav />
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// interface NavLinkProps {
//   href: string;
//   children: React.ReactNode;
//   isVerticalSection: boolean;
// }

// function NavLink({ href, children, isVerticalSection }: NavLinkProps) {
//   return (
//     <Link
//       href={href}
//       className={cn(
//         "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
//         isVerticalSection
//           ? "text-foreground/70 hover:text-foreground hover:bg-accent"
//           : "text-foreground/70 hover:text-foreground hover:bg-background/50"
//       )}
//     >
//       {children}
//     </Link>
//   );
// }
