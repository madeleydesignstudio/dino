"use client";

import { useEffect, useRef } from "react";
import { useNavigation } from "./NavigationContext";
import { gsap } from "gsap";

export const TransitionLoader = () => {
  const { isTransitioning, shouldBlockContent } = useNavigation();
  const loaderRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !loaderRef.current ||
      !overlayRef.current ||
      !logoRef.current ||
      !progressRef.current
    )
      return;

    const tl = gsap.timeline();

    if (shouldBlockContent || isTransitioning) {
      // Show loader immediately when content is blocked or transitioning
      tl.set(loaderRef.current, { display: "flex" }).fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: shouldBlockContent ? 0.1 : 0.3,
          ease: "power2.out",
        },
      );

      if (isTransitioning) {
        // Add animated elements only when actually transitioning
        tl.fromTo(
          logoRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
          "-=0.1",
        ).fromTo(
          progressRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
          "-=0.2",
        );
      }
    } else {
      // Hide loader
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }).set(loaderRef.current, { display: "none" });
    }

    return () => {
      tl.kill();
    };
  }, [isTransitioning, shouldBlockContent]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 hidden items-center justify-center"
      style={{ display: "none" }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo/Brand */}
        <div ref={logoRef} className="mb-8 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#D9E0C1] to-[#A8B577] flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-background"
            >
              <path
                d="M16 4L28 12L16 20L4 12L16 4Z"
                fill="currentColor"
                opacity="0.8"
              />
              <path
                d="M16 12L28 20L16 28L4 20L16 12Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">Loading...</h3>
          <p className="text-sm text-foreground/70">
            Preparing your experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-foreground/20 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#D9E0C1] to-[#A8B577] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
};
