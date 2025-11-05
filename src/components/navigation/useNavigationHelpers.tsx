"use client";

import { useNavigation } from './NavigationContext';
import { useRouter, usePathname } from 'next/navigation';

export const useNavigationHelpers = () => {
  const { currentSection, isTransitioning } = useNavigation();
  const router = useRouter();
  const pathname = usePathname();

  // Extract the main section from a path
  const getSectionFromPath = (path: string): string => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'home';
    return segments[0];
  };

  // Check if a navigation would trigger a section change
  const wouldTriggerTransition = (targetPath: string): boolean => {
    const targetSection = getSectionFromPath(targetPath);
    const currentSectionName = currentSection || getSectionFromPath(pathname);
    return targetSection !== currentSectionName;
  };

  // Navigate with conditional transition
  const navigateTo = (path: string) => {
    router.push(path);
  };

  // Get current section info
  const getCurrentSection = () => {
    return currentSection || getSectionFromPath(pathname);
  };

  // Check if currently within a specific section
  const isInSection = (sectionName: string): boolean => {
    const current = getCurrentSection();
    return current === sectionName;
  };

  return {
    currentSection: getCurrentSection(),
    isTransitioning,
    wouldTriggerTransition,
    navigateTo,
    isInSection,
    getSectionFromPath,
  };
};
