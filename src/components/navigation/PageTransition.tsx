"use client";

import { ReactNode, useRef, useEffect } from "react";
import { useNavigation } from "./NavigationContext";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  disableScaling?: boolean;
}

// Animation constants
const TRANSITION_CONFIG = {
  EXPANSION_DURATION: 1.0,
  EXPANSION_DELAY: 0.2, // Delay after loader fades out (coordinates with TransitionLoader OVERLAY_FADE_OUT: 0.4)
  EXPANSION_EASE: "power3.out",
  INITIAL_SCALE: 0,
  FINAL_SCALE: 1,
} as const;

/**
 * PageTransition component provides smooth content expansion animation
 *
 * Features:
 * - Starts as a small centered box (scale: 0)
 * - Expands smoothly to full size after loader fades
 * - Coordinates with TransitionLoader timing
 * - Reusable across different page layouts
 * - Maintains proper aspect ratio during scaling
 *
 * Animation Sequence:
 * 1. TransitionLoader: Text slides + background fades out
 * 2. PageTransition: Small box appears and expands to full size
 * 3. Content: Revealed inside the expanded container
 */
export const PageTransition = ({
  children,
  className = "",
  contentClassName = "",
  disableScaling = false,
}: PageTransitionProps) => {
  const { isTransitioning } = useNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  /**
   * Set initial hidden state immediately on mount
   * This ensures GSAP takes control of the animation from the CSS initial state
   */
  useEffect(() => {
    if (!containerRef.current) return;

    // Override inline styles with GSAP for better control
    if (disableScaling) {
      gsap.set(containerRef.current, {
        opacity: 0,
        clearProps: "visibility", // Clear any visibility overrides
      });
    } else {
      gsap.set(containerRef.current, {
        scale: TRANSITION_CONFIG.INITIAL_SCALE,
        opacity: 0,
        transformOrigin: "center center",
        clearProps: "visibility", // Clear any visibility overrides
      });
    }
  }, []);

  /**
   * Main animation effect that triggers when transitioning stops
   */
  useEffect(() => {
    if (!containerRef.current) return;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Only animate expansion when transition ends
    if (!isTransitioning) {
      timelineRef.current = gsap.timeline();

      if (disableScaling) {
        timelineRef.current.to(containerRef.current, {
          opacity: 1,
          duration: TRANSITION_CONFIG.EXPANSION_DURATION,
          ease: TRANSITION_CONFIG.EXPANSION_EASE,
          delay: TRANSITION_CONFIG.EXPANSION_DELAY,
        });
      } else {
        timelineRef.current.to(containerRef.current, {
          scale: TRANSITION_CONFIG.FINAL_SCALE,
          opacity: 1,
          duration: TRANSITION_CONFIG.EXPANSION_DURATION,
          ease: TRANSITION_CONFIG.EXPANSION_EASE,
          delay: TRANSITION_CONFIG.EXPANSION_DELAY,
        });
      }
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [isTransitioning]);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`origin-center opacity-0 ${className}`}
      style={{
        transformOrigin: "center center",
        transform: disableScaling ? "none" : "scale(0)",
        visibility: "visible", // Ensure it's visible for GSAP
      }}
    >
      <div className={contentClassName}>{children}</div>
    </div>
  );
};
