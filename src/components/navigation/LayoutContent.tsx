"use client";

import { useNavigation } from "./NavigationContext";
import { ReactNode } from "react";

// Constants
const TRANSITION_DURATION = 100; // milliseconds for opacity transition

/**
 * Props for the LayoutContent component
 */
interface LayoutContentProps {
  /** Child components to render within the layout content */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * LayoutContent component manages the visibility of page content during navigation transitions
 *
 * This component automatically hides all page content (including header) when a section
 * transition is in progress, preventing the flash of new content before the loading animation.
 *
 * Features:
 * - Smooth opacity transitions
 * - Accessibility support with proper ARIA attributes
 * - Pointer events management during transitions
 *
 * @param children - The content to be conditionally shown/hidden
 * @param className - Additional CSS classes for styling
 */
export const LayoutContent = ({
  children,
  className = "",
}: LayoutContentProps) => {
  const { shouldBlockContent } = useNavigation();

  return (
    <div
      className={`transition-opacity duration-100 ${
        shouldBlockContent ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${className}`}
      style={{
        transitionDuration: `${TRANSITION_DURATION}ms`,
      }}
      aria-hidden={shouldBlockContent}
    >
      {children}
    </div>
  );
};
