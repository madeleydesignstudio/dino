"use client";

import { useEffect, useRef } from "react";
import { useNavigation } from "./NavigationContext";
import { gsap } from "gsap";

// Animation constants
const ANIMATION_CONFIG = {
  // Timing
  OVERLAY_FADE_IN: 0.3,
  OVERLAY_FADE_OUT: 0.3,
  TEXT_SLIDE_DURATION: 60, // Duration for continuous sliding
  TEXT_FADE_IN: 0.4,

  // Delays
  TEXT_DELAY: -0.1,

  // Easing
  OVERLAY_EASE_IN: "power2.out",
  OVERLAY_EASE_OUT: "power2.inOut",
  TEXT_EASE: "none", // Linear movement for sliding text
} as const;

// Text configuration
const TEXT_CONFIG = {
  CONTENT: "NEVER GO EXTINCT",
  REPEAT_COUNT: 20, // Enough repetitions for continuous scrolling
  FONT_SIZE: "4rem", // text-6xl equivalent
  FONT_WEIGHT: "bold",
  COLOR: "#D9E0C1", // Brand primary color
  LETTER_SPACING: "0.1em",
} as const;

/**
 * TransitionLoader component displays a sliding text animation during section transitions
 *
 * Features:
 * - "Never Go Extinct" text sliding from left to right
 * - Smooth GSAP-powered animations
 * - Brand-consistent design with company colors
 * - Accessible markup with proper ARIA attributes
 * - Responsive to both content blocking and transition states
 *
 * The loader appears immediately when content is blocked and shows the sliding
 * text animation when transitioning between different main sections.
 */
export const TransitionLoader = () => {
  const { isTransitioning, shouldBlockContent } = useNavigation();

  // DOM element references
  const loaderRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  /**
   * Creates repeated text for continuous sliding effect
   */
  const createRepeatedText = (text: string): string => {
    return Array(TEXT_CONFIG.REPEAT_COUNT).fill(`${text} `).join("");
  };

  /**
   * Creates and configures GSAP timeline for show animations
   */
  const createShowAnimation = (): gsap.core.Timeline => {
    const tl = gsap.timeline();

    if (!loaderRef.current || !overlayRef.current) return tl;

    // Show loader container and fade in overlay
    tl.set(loaderRef.current, { display: "flex" }).fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: shouldBlockContent
          ? ANIMATION_CONFIG.OVERLAY_FADE_IN * 0.3
          : ANIMATION_CONFIG.OVERLAY_FADE_IN,
        ease: ANIMATION_CONFIG.OVERLAY_EASE_IN,
      },
    );

    // Add sliding text animation only during actual transitions
    if (isTransitioning && textRef.current) {
      // Text fade in
      tl.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: ANIMATION_CONFIG.TEXT_FADE_IN,
        },
        ANIMATION_CONFIG.TEXT_DELAY,
      );

      // Start sliding animation after fonts are loaded
      tl.call(() => {
        if (textRef.current) {
          document.fonts.ready.then(() => {
            // Sliding animation - move from right to left to create left-to-right scrolling effect
            gsap.to(textRef.current, {
              x: () => -textRef.current!.scrollWidth / 2,
              ease: ANIMATION_CONFIG.TEXT_EASE,
              duration: ANIMATION_CONFIG.TEXT_SLIDE_DURATION,
              repeat: -1,
            });
          });
        }
      });
    }

    return tl;
  };

  /**
   * Creates and configures GSAP timeline for hide animations
   */
  const createHideAnimation = (): gsap.core.Timeline => {
    const tl = gsap.timeline();

    if (!loaderRef.current || !overlayRef.current) return tl;

    // Fade out overlay and hide container
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: ANIMATION_CONFIG.OVERLAY_FADE_OUT,
      ease: ANIMATION_CONFIG.OVERLAY_EASE_OUT,
    }).set(loaderRef.current, { display: "none" });

    return tl;
  };

  /**
   * Main animation effect that responds to navigation state changes
   */
  useEffect(() => {
    // Early return if required DOM elements are not available
    if (!loaderRef.current || !overlayRef.current || !textRef.current) {
      return;
    }

    // Create appropriate animation based on current state
    const timeline =
      shouldBlockContent || isTransitioning
        ? createShowAnimation()
        : createHideAnimation();

    // Cleanup function to kill timeline on unmount/state change
    return () => {
      timeline.kill();
    };
  }, [isTransitioning, shouldBlockContent]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 hidden items-center justify-center"
      style={{ display: "none" }}
      role="dialog"
      aria-modal="true"
      aria-label="Loading content"
    >
      {/* Background overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Sliding text content */}
      <div className="relative z-10 w-full overflow-hidden">
        <div
          ref={textRef}
          className="whitespace-nowrap opacity-0"
          style={{
            fontSize: TEXT_CONFIG.FONT_SIZE,
            fontWeight: TEXT_CONFIG.FONT_WEIGHT,
            color: TEXT_CONFIG.COLOR,
            letterSpacing: TEXT_CONFIG.LETTER_SPACING,
          }}
          aria-hidden="true"
        >
          {createRepeatedText(TEXT_CONFIG.CONTENT)}
        </div>

        {/* Screen reader accessible loading text */}
        <div className="sr-only" role="status" aria-live="polite">
          Loading content, please wait...
        </div>
      </div>
    </div>
  );
};
