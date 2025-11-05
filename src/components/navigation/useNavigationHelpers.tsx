"use client";

import { useNavigation } from "./NavigationContext";
import { useRouter, usePathname } from "next/navigation";

/**
 * Custom hook that provides navigation utilities and helpers
 *
 * Offers convenient methods for checking navigation state, section information,
 * and programmatic navigation with transition awareness.
 *
 * @returns Object containing navigation utilities and state information
 */
export const useNavigationHelpers = () => {
  const { currentSection, isTransitioning } = useNavigation();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Extracts the main section from a given path
   *
   * @param path - The URL path to analyze
   * @returns The main section name or 'home' for root path
   *
   * @example
   * getSectionFromPath('/services/web-design') // returns 'services'
   * getSectionFromPath('/') // returns 'home'
   */
  const getSectionFromPath = (path: string): string => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "home";
    return segments[0];
  };

  /**
   * Determines if navigation to a target path would trigger a section transition
   *
   * @param targetPath - The destination path to check
   * @returns True if navigation would trigger a transition, false otherwise
   *
   * @example
   * // Current path: /services/web-design
   * wouldTriggerTransition('/services/mobile-app') // returns false
   * wouldTriggerTransition('/company/about') // returns true
   */
  const wouldTriggerTransition = (targetPath: string): boolean => {
    const targetSection = getSectionFromPath(targetPath);
    const currentSectionName = currentSection || getSectionFromPath(pathname);
    return targetSection !== currentSectionName;
  };

  /**
   * Programmatically navigates to a specified path
   * Transitions will be automatically handled by the NavigationContext
   *
   * @param path - The destination path
   *
   * @example
   * navigateTo('/services/web-design')
   * navigateTo('/company/about')
   */
  const navigateTo = (path: string): void => {
    router.push(path);
  };

  /**
   * Gets the current section name
   * Falls back to extracting from pathname if context is not available
   *
   * @returns The current section name
   */
  const getCurrentSection = (): string => {
    return currentSection || getSectionFromPath(pathname);
  };

  /**
   * Checks if the current route is within a specific section
   *
   * @param sectionName - The section name to check against
   * @returns True if currently in the specified section
   *
   * @example
   * // Current path: /services/web-design
   * isInSection('services') // returns true
   * isInSection('company') // returns false
   */
  const isInSection = (sectionName: string): boolean => {
    const current = getCurrentSection();
    return current === sectionName;
  };

  return {
    // State
    currentSection: getCurrentSection(),
    isTransitioning,

    // Utilities
    wouldTriggerTransition,
    navigateTo,
    isInSection,
    getSectionFromPath,
  };
};
