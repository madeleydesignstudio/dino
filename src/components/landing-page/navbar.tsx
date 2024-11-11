import { cn } from "@/lib/utils";
import Link from "next/link";
import Nav from "./nav";

export default function Navbar() {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16  w-full">
          <Link href="/" className={cn("text-xl font-bold font-karla")}>
            DINO
          </Link>

          <Nav />
        </div>
      </div>
    </nav>
  );
}
