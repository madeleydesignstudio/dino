/**
 * Navigation Module
 *
 * This module provides a comprehensive navigation system with smooth transitions
 * between different sections of the application. It includes:
 *
 * - NavigationProvider: Global state management for navigation transitions
 * - NavigationLink: Enhanced Link component with transition awareness
 * - TransitionLoader: Beautiful loading animation during section changes
 * - LayoutContent: Content visibility management during transitions
 * - Navigation hooks: Utilities for programmatic navigation control
 *
 * Features:
 * - Automatic section detection (/, /services, /company, etc.)
 * - Smart transition triggering (only between different sections)
 * - GSAP-powered smooth animations
 * - Accessibility support with proper ARIA attributes
 * - TypeScript support with comprehensive type definitions
 *
 * @example Basic Usage
 * ```tsx
 * // Wrap your app with NavigationProvider
 * <NavigationProvider>
 *   <TransitionLoader />
 *   <LayoutContent>
 *     <YourAppContent />
 *   </LayoutContent>
 * </NavigationProvider>
 *
 * // Use NavigationLink instead of Next.js Link
 * <NavigationLink href="/services">Services</NavigationLink>
 *
 * // Access navigation state in components
 * const { isTransitioning, currentSection } = useNavigation();
 * ```
 */

// Core context and provider
export { NavigationProvider, useNavigation } from "./NavigationContext";

// Navigation components
export { NavigationLink } from "./NavigationLink";
export { TransitionLoader } from "./TransitionLoader";
export { LayoutContent } from "./LayoutContent";

// Navigation utilities and hooks
export { useNavigationHelpers } from "./useNavigationHelpers";

// Note: Type definitions are available in individual module files
