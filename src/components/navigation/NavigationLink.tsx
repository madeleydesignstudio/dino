"use client";

import Link from "next/link";
import { useNavigation } from "./NavigationContext";
import { ReactNode, MouseEvent } from "react";

/**
 * Props for the NavigationLink component
 * Extends standard anchor element attributes
 */
interface NavigationLinkProps {
  /** The destination URL */
  href: string;
  /** Content to render inside the link */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Any additional props to pass to the Link component */
  [key: string]: any;
}

/**
 * NavigationLink component that integrates with the navigation transition system
 *
 * This component automatically detects section-level navigation changes and
 * triggers the appropriate loading animations. It serves as a drop-in replacement
 * for Next.js Link components throughout the application.
 *
 * @param href - The destination URL
 * @param children - Content to render inside the link
 * @param className - Additional CSS classes
 * @param onClick - Optional click handler
 * @param props - Additional props passed to Next.js Link
 */
export const NavigationLink = ({
  href,
  children,
  className,
  onClick,
  ...props
}: NavigationLinkProps) => {
  const { currentSection } = useNavigation();

  /**
   * Extracts the main section from a given path
   * Used to determine if navigation will trigger a section change
   *
   * @param path - The URL path to analyze
   * @returns The main section name or 'home' for root
   */
  const getSectionFromPath = (path: string): string => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "home";
    return segments[0];
  };

  /**
   * Handles link clicks and executes any provided onClick handler
   * The NavigationContext automatically handles transition detection
   * based on the href destination
   */
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Execute custom onClick handler if provided
    if (onClick) {
      onClick();
    }

    // Note: The NavigationContext automatically detects section changes
    // based on pathname changes, so no manual transition triggering is needed
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};
