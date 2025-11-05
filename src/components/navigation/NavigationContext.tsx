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

interface NavigationContextType {
  isTransitioning: boolean;
  currentSection: string;
  previousSection: string;
  shouldBlockContent: boolean;
}

const NavigationContext = createContext<NavigationContextType>({
  isTransitioning: false,
  currentSection: "",
  previousSection: "",
  shouldBlockContent: false,
});

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [previousSection, setPreviousSection] = useState("");
  const [shouldBlockContent, setShouldBlockContent] = useState(false);
  const previousPathnameRef = useRef("");

  // Extract the main section from the pathname
  const getSectionFromPath = (path: string): string => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "home";
    return segments[0];
  };

  // Check if this is a section-level navigation (not sub-route navigation)
  const isSectionTransition = (oldPath: string, newPath: string): boolean => {
    // If no previous path, don't transition (initial load)
    if (!oldPath) return false;

    const oldSection = getSectionFromPath(oldPath);
    const newSection = getSectionFromPath(newPath);

    // Only transition if the main section changes
    return oldSection !== newSection;
  };

  useEffect(() => {
    const previousPath = previousPathnameRef.current;
    const currentPath = pathname;

    // Update the ref to current path for next comparison
    previousPathnameRef.current = currentPath;

    // Check if this is a section-level change
    if (isSectionTransition(previousPath, currentPath)) {
      const oldSection = getSectionFromPath(previousPath);
      const newSection = getSectionFromPath(currentPath);

      // Block content immediately to prevent flash
      setShouldBlockContent(true);

      // Small delay to ensure content is blocked before transition starts
      setTimeout(() => {
        setIsTransitioning(true);
        setPreviousSection(oldSection);
        setCurrentSection(newSection);
      }, 50);

      // Transition duration
      const transitionDuration = 800; // 800ms

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setShouldBlockContent(false);
      }, transitionDuration + 50);

      return () => clearTimeout(timer);
    } else {
      // Just update current section without transition
      setCurrentSection(getSectionFromPath(currentPath));
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider
      value={{
        isTransitioning,
        currentSection,
        previousSection,
        shouldBlockContent,
      }}
    >
      {shouldBlockContent ? (
        <div className="fixed inset-0 z-40 bg-background" />
      ) : null}
      {children}
    </NavigationContext.Provider>
  );
};
