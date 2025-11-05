"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

// Constants
const TRANSITION_DURATION = 800; // milliseconds
const CONTENT_BLOCK_DELAY = 50; // milliseconds
const HOME_SECTION = "home";

// Types
interface NavigationContextType {
  /** Whether a section transition is currently in progress */
  isTransitioning: boolean;
  /** The current main section name */
  currentSection: string;
  /** The previous main section name */
  previousSection: string;
  /** Whether page content should be blocked during transition */
  shouldBlockContent: boolean;
}

/**
 * React context for managing global navigation state and transitions
 */
const NavigationContext = createContext<NavigationContextType>({
  isTransitioning: false,
  currentSection: "",
  previousSection: "",
  shouldBlockContent: false,
});

/**
 * Hook to access navigation context values
 *
 * @throws Error if used outside of NavigationProvider
 * @returns Navigation context values and state
 */
export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};

// Provider component props
interface NavigationProviderProps {
  children: ReactNode;
}

/**
 * NavigationProvider manages global navigation state and transitions
 *
 * Automatically detects when users navigate between different main sections
 * and triggers appropriate loading animations. Sub-route navigation within
 * the same section does not trigger transitions.
 *
 * Section changes detected:
 * - / → /services ✅ (triggers transition)
 * - /services → /company ✅ (triggers transition)
 * - /services → /services/web-design ❌ (no transition)
 *
 * @param children - Child components to wrap with navigation context
 */
export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  // State management
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [previousSection, setPreviousSection] = useState("");
  const [shouldBlockContent, setShouldBlockContent] = useState(false);

  // Ref to track previous pathname for comparison
  const previousPathnameRef = useRef("");

  /**
   * Extracts the main section name from a pathname
   *
   * @param path - The pathname to analyze
   * @returns The main section name or 'home' for root path
   *
   * @example
   * getSectionFromPath('/services/web-design') // returns 'services'
   * getSectionFromPath('/company') // returns 'company'
   * getSectionFromPath('/') // returns 'home'
   */
  const getSectionFromPath = (path: string): string => {
    const segments = path.split("/").filter(Boolean);
    return segments.length === 0 ? HOME_SECTION : segments[0];
  };

  /**
   * Determines if navigation represents a section-level change
   *
   * Only transitions when the main section changes, not for sub-route navigation
   *
   * @param oldPath - The previous pathname
   * @param newPath - The new pathname
   * @returns True if this represents a section-level change
   */
  const isSectionTransition = (oldPath: string, newPath: string): boolean => {
    // No transition on initial load
    if (!oldPath) return false;

    const oldSection = getSectionFromPath(oldPath);
    const newSection = getSectionFromPath(newPath);

    // Only transition when main section changes
    return oldSection !== newSection;
  };

  /**
   * Initiates a section transition with proper timing and state management
   *
   * @param oldSection - The section being navigated from
   * @param newSection - The section being navigated to
   * @returns Cleanup function to clear timers
   */
  const initiateTransition = (
    oldSection: string,
    newSection: string,
  ): (() => void) => {
    // Block content immediately to prevent flash
    setShouldBlockContent(true);

    // Start transition animation after brief delay
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
      setPreviousSection(oldSection);
      setCurrentSection(newSection);
    }, CONTENT_BLOCK_DELAY);

    // Complete transition and unblock content
    const completionTimer = setTimeout(() => {
      setIsTransitioning(false);
      setShouldBlockContent(false);
    }, TRANSITION_DURATION + CONTENT_BLOCK_DELAY);

    // Return cleanup function for timers
    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(completionTimer);
    };
  };

  // Effect to handle pathname changes and trigger transitions
  useEffect(() => {
    const previousPath = previousPathnameRef.current;
    const currentPath = pathname;

    // Update pathname reference for next comparison
    previousPathnameRef.current = currentPath;

    // Check if this represents a section-level change
    if (isSectionTransition(previousPath, currentPath)) {
      const oldSection = getSectionFromPath(previousPath);
      const newSection = getSectionFromPath(currentPath);

      // Initiate transition and return cleanup function
      return initiateTransition(oldSection, newSection);
    } else {
      // Update current section without transition for sub-route navigation
      setCurrentSection(getSectionFromPath(currentPath));
    }
  }, [pathname]);

  // Context value object
  const contextValue: NavigationContextType = {
    isTransitioning,
    currentSection,
    previousSection,
    shouldBlockContent,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {/* Content blocker overlay */}
      {shouldBlockContent && (
        <div className="fixed inset-0 z-40 bg-background" aria-hidden="true" />
      )}
      {children}
    </NavigationContext.Provider>
  );
};
