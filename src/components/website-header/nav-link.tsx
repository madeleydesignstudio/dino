import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <Link
    href={href}
    className={`group h-full w-full flex items-center justify-start hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-200 dark:hover:from-stone-900 dark:hover:to-stone-800 transition-colors duration-200 ${className}`}
  >
    {children}
  </Link>
);
