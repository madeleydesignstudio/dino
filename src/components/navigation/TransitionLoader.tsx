// "use client";

// import { useEffect, useRef } from "react";
// import { useNavigation } from "./NavigationContext";
// import { gsap } from "gsap";

// // Animation constants
// const ANIMATION_CONFIG = {
//   // Timing
//   OVERLAY_FADE_IN: 0.3,
//   OVERLAY_FADE_OUT: 0.4, // Slightly longer to coordinate with page expansion
//   TEXT_SLIDE_DURATION: 60, // Duration for continuous sliding
//   TEXT_FADE_IN: 0.4,

//   // Delays
//   TEXT_DELAY: -0.1,

//   // Easing
//   OVERLAY_EASE_IN: "power2.out",
//   OVERLAY_EASE_OUT: "power3.inOut", // Smoother easing to match page expansion
//   TEXT_EASE: "none", // Linear movement for sliding text
// } as const;

// // Text configuration
// const TEXT_CONFIG = {
//   CONTENT: "NEVER GO EXTINCT",
//   REPEAT_COUNT: 20, // Enough repetitions for continuous scrolling
//   FONT_SIZE: "8rem", // text-6xl equivalent
//   FONT_WEIGHT: "bold",
//   COLOR: "#D9E0C1", // Brand primary color
//   LETTER_SPACING: "0.1em",
// } as const;

// /**
//  * TransitionLoader component displays a sliding text animation during section transitions
//  *
//  * Features:
//  * - "Never Go Extinct" text sliding from left to right
//  * - Smooth GSAP-powered animations
//  * - Brand-consistent design with company colors
//  * - Accessible markup with proper ARIA attributes
//  * - Responsive to both content blocking and transition states
//  *
//  * The loader appears immediately when content is blocked and shows the sliding
//  * text animation when transitioning between different main sections.
//  */
// export const TransitionLoader = () => {
//   const { isTransitioning, shouldBlockContent } = useNavigation();

//   // DOM element references
//   const loaderRef = useRef<HTMLDivElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);

//   // Animation reference for cleanup
//   const slidingAnimationRef = useRef<gsap.core.Tween | null>(null);

//   /**
//    * Creates repeated text for continuous sliding effect
//    */
//   const createRepeatedText = (text: string): string => {
//     return Array(TEXT_CONFIG.REPEAT_COUNT).fill(`${text} `).join("");
//   };

//   /**
//    * Creates and configures GSAP timeline for show animations
//    */
//   const createShowAnimation = (): gsap.core.Timeline => {
//     const tl = gsap.timeline();

//     if (!loaderRef.current || !overlayRef.current) return tl;

//     // Show loader container and fade in overlay
//     tl.set(loaderRef.current, { display: "flex" }).fromTo(
//       overlayRef.current,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: shouldBlockContent
//           ? ANIMATION_CONFIG.OVERLAY_FADE_IN * 0.3
//           : ANIMATION_CONFIG.OVERLAY_FADE_IN,
//         ease: ANIMATION_CONFIG.OVERLAY_EASE_IN,
//       },
//     );

//     // Add sliding text animation only during actual transitions
//     if (isTransitioning && textRef.current) {
//       // Text fade in
//       tl.fromTo(
//         textRef.current,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: ANIMATION_CONFIG.TEXT_FADE_IN,
//         },
//         ANIMATION_CONFIG.TEXT_DELAY,
//       );

//       // Start sliding animation after fonts are loaded
//       tl.call(() => {
//         if (textRef.current) {
//           document.fonts.ready.then(() => {
//             // Kill any existing sliding animation
//             if (slidingAnimationRef.current) {
//               slidingAnimationRef.current.kill();
//             }

//             // Sliding animation - move from right to left to create left-to-right scrolling effect
//             slidingAnimationRef.current = gsap.to(textRef.current, {
//               x: () => -textRef.current!.scrollWidth / 2,
//               ease: ANIMATION_CONFIG.TEXT_EASE,
//               duration: ANIMATION_CONFIG.TEXT_SLIDE_DURATION,
//               repeat: -1,
//             });
//           });
//         }
//       });
//     }

//     return tl;
//   };

//   /**
//    * Creates and configures GSAP timeline for hide animations
//    */
//   const createHideAnimation = (): gsap.core.Timeline => {
//     const tl = gsap.timeline();

//     if (!loaderRef.current || !overlayRef.current) return tl;

//     // Kill any ongoing sliding animations first
//     if (slidingAnimationRef.current) {
//       slidingAnimationRef.current.kill();
//       slidingAnimationRef.current = null;
//     }

//     // Also kill any other tweens on the text element
//     if (textRef.current) {
//       gsap.killTweensOf(textRef.current);
//     }

//     // Fade out both overlay and text together
//     const fadeTargets = [overlayRef.current];
//     if (textRef.current) {
//       fadeTargets.push(textRef.current);
//     }

//     tl.to(fadeTargets, {
//       opacity: 0,
//       duration: ANIMATION_CONFIG.OVERLAY_FADE_OUT,
//       ease: ANIMATION_CONFIG.OVERLAY_EASE_OUT,
//     }).set(loaderRef.current, { display: "none" });

//     return tl;
//   };

//   /**
//    * Main animation effect that responds to navigation state changes
//    */
//   useEffect(() => {
//     // Early return if required DOM elements are not available
//     if (!loaderRef.current || !overlayRef.current || !textRef.current) {
//       return;
//     }

//     // Create appropriate animation based on current state
//     const timeline =
//       shouldBlockContent || isTransitioning
//         ? createShowAnimation()
//         : createHideAnimation();

//     // Cleanup function to kill timeline and sliding animation on unmount/state change
//     return () => {
//       timeline.kill();
//       if (slidingAnimationRef.current) {
//         slidingAnimationRef.current.kill();
//         slidingAnimationRef.current = null;
//       }
//     };
//   }, [isTransitioning, shouldBlockContent]);

//   return (
//     <div
//       ref={loaderRef}
//       className="fixed inset-0 z-50 hidden items-center justify-center"
//       style={{ display: "none" }}
//       role="dialog"
//       aria-modal="true"
//       aria-label="Loading content"
//     >
//       {/* Background overlay */}
//       <div
//         ref={overlayRef}
//         className="absolute inset-0 bg-background/95 backdrop-blur-sm"
//         aria-hidden="true"
//       />

//       {/* Sliding text content */}
//       <div className="relative z-10 w-full overflow-hidden">
//         <div
//           ref={textRef}
//           className="whitespace-nowrap opacity-0"
//           style={{
//             fontSize: TEXT_CONFIG.FONT_SIZE,
//             fontWeight: TEXT_CONFIG.FONT_WEIGHT,
//             color: TEXT_CONFIG.COLOR,
//             letterSpacing: TEXT_CONFIG.LETTER_SPACING,
//           }}
//           aria-hidden="true"
//         >
//           {createRepeatedText(TEXT_CONFIG.CONTENT)}
//         </div>

//         {/* Screen reader accessible loading text */}
//         <div className="sr-only" role="status" aria-live="polite">
//           Loading content, please wait...
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import { useEffect, useRef, useCallback } from "react";
import { useNavigation } from "./NavigationContext";
import { gsap } from "gsap";

// Animation constants
const ANIMATION_CONFIG = {
  OVERLAY_FADE_IN: 0.3,
  OVERLAY_FADE_OUT: 0.4,
  TEXT_SLIDE_DURATION: 60,
  TEXT_FADE_IN: 0.4,
  TEXT_DELAY: -0.1,
  OVERLAY_EASE_IN: "power2.out",
  OVERLAY_EASE_OUT: "power3.inOut",
  TEXT_EASE: "none",
} as const;

// Text configuration
const TEXT_CONFIG = {
  CONTENT: "NEVER GO EXTINCT",
  REPEAT_COUNT: 20,
  FONT_SIZE: "8rem",
  FONT_WEIGHT: "bold",
  COLOR: "#D9E0C1",
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
 */
export const TransitionLoader = () => {
  const { isTransitioning, shouldBlockContent } = useNavigation();

  // DOM element references
  const loaderRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Animation references for cleanup
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const slidingAnimationRef = useRef<gsap.core.Tween | null>(null);

  /**
   * Creates repeated text for continuous sliding effect
   */
  const createRepeatedText = useCallback((text: string): string => {
    return Array(TEXT_CONFIG.REPEAT_COUNT).fill(`${text} `).join("");
  }, []);

  /**
   * Starts the sliding text animation
   */
  const startSlidingAnimation = useCallback(() => {
    if (!textRef.current) return;

    document.fonts.ready.then(() => {
      if (!textRef.current || (!shouldBlockContent && !isTransitioning)) return;

      // Kill any existing sliding animation
      slidingAnimationRef.current?.kill();

      // Sliding animation - move from right to left to create left-to-right scrolling effect
      slidingAnimationRef.current = gsap.to(textRef.current, {
        x: () => -textRef.current!.scrollWidth / 2,
        ease: ANIMATION_CONFIG.TEXT_EASE,
        duration: ANIMATION_CONFIG.TEXT_SLIDE_DURATION,
        repeat: -1,
      });
    });
  }, [shouldBlockContent, isTransitioning]);

  /**
   * Creates and configures GSAP timeline for show animations
   */
  const createShowAnimation = useCallback((): gsap.core.Timeline => {
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

      // Start sliding animation
      tl.call(startSlidingAnimation);
    }

    return tl;
  }, [shouldBlockContent, isTransitioning, startSlidingAnimation]);

  /**
   * Creates and configures GSAP timeline for hide animations
   */
  const createHideAnimation = useCallback((): gsap.core.Timeline => {
    const tl = gsap.timeline();

    if (!loaderRef.current || !overlayRef.current) return tl;

    // Kill any ongoing sliding animations first
    slidingAnimationRef.current?.kill();
    slidingAnimationRef.current = null;

    // Kill any other tweens on the text element
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
    }

    // Fade out both overlay and text together
    const fadeTargets = [overlayRef.current];
    if (textRef.current) {
      fadeTargets.push(textRef.current);
    }

    tl.to(fadeTargets, {
      opacity: 0,
      duration: ANIMATION_CONFIG.OVERLAY_FADE_OUT,
      ease: ANIMATION_CONFIG.OVERLAY_EASE_OUT,
    }).set(loaderRef.current, { display: "none" });

    return tl;
  }, []);

  /**
   * Main animation effect that responds to navigation state changes
   */
  useEffect(() => {
    // Early return if required DOM elements are not available
    if (!loaderRef.current || !overlayRef.current || !textRef.current) {
      return;
    }

    // Kill previous timeline if it exists
    timelineRef.current?.kill();

    // Create appropriate animation based on current state
    timelineRef.current =
      shouldBlockContent || isTransitioning
        ? createShowAnimation()
        : createHideAnimation();

    // Cleanup function to kill timeline and sliding animation on unmount/state change
    return () => {
      timelineRef.current?.kill();
      slidingAnimationRef.current?.kill();
      slidingAnimationRef.current = null;
    };
  }, [
    isTransitioning,
    shouldBlockContent,
    createShowAnimation,
    createHideAnimation,
  ]);

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
