"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "@/components/landing-page/landing-page";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this runs only on the client

    const ctx = gsap.context(() => {
      const sections = sectionRefs.current;
      const container = containerRef.current;

      if (!container || sections.some((section) => !section)) return;

      // Create a function to update the ScrollTrigger
      const updateScrollTrigger = () => {
        // Kill all existing ScrollTriggers before creating new ones
        ScrollTrigger.getAll().forEach((st) => st.kill());

        const totalWidth = sections.reduce(
          (width, section) => width + (section?.offsetWidth || 0),
          0
        );

        // Only create horizontal scroll animation for desktop
        if (window.innerWidth >= 768) {
          gsap.to(sections, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              end: () => `+=${totalWidth}`,
              invalidateOnRefresh: true,
            },
          });

          sections.forEach((section, i) => {
            ScrollTrigger.create({
              trigger: section,
              start: () => "top top-=" + window.innerWidth * i,
              end: () => "+=" + section?.offsetWidth,
              toggleClass: "active",
            });
          });
        }
      };

      // Create ResizeObserver to watch for size changes
      const resizeObserver = new ResizeObserver(() => {
        // Debounce the update to prevent too many recalculations
        gsap.delayedCall(0.1, updateScrollTrigger);
      });

      // Observe each section
      sections.forEach((section) => {
        if (section) resizeObserver.observe(section);
      });

      // Initial setup
      updateScrollTrigger();

      const mediaQuery = window.matchMedia("(min-width: 768px)");
      const handleMediaQueryChange = (
        e: MediaQueryListEvent | MediaQueryList
      ) => {
        if (e.matches) {
          updateScrollTrigger(); // Re-enable and update
        } else {
          ScrollTrigger.getAll().forEach((st) => st.kill());
          // Reset any transforms when switching to mobile
          sections.forEach((section) => {
            if (section) {
              gsap.set(section, { clearProps: "all" });
            }
          });
        }
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);

      return () => {
        resizeObserver.disconnect();
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });

    return () => ctx.revert();
  }, []);

  const sections = [
    {
      id: 1,
      width: "w-[1200px] md:w-fit",
      bg: "bg-red-200",
      mobileHeight: "h-screen",
      content: <LandingPage />,
    },
    {
      id: 2,
      width: "w-screen md:w-[100vh]",
      bg: "bg-blue-200",
      mobileHeight: "h-screen",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Section 2
        </div>
      ),
    },
    {
      id: 3,
      width: "w-screen md:w-[100vh]",
      bg: "bg-green-200",
      mobileHeight: "h-[75vh]",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Section 3
        </div>
      ),
    },
    {
      id: 4,
      width: "w-screen md:w-[20vh]",
      bg: "bg-yellow-200",
      mobileHeight: "h-[40vh]",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Section 4
        </div>
      ),
    },
    {
      id: 5,
      width: "w-screen md:w-[100vh]",
      bg: "bg-purple-200",
      mobileHeight: "h-[90vh]",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Section 5
        </div>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen md:h-screen overflow-x-hidden md:overflow-hidden"
    >
      <div className="flex flex-col md:flex-row h-full">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={` 
              ${section.mobileHeight} md:h-full
              ${section.width}
              ${section.bg}
              flex-shrink-0
              flex items-center justify-center
              ${
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? "transform-none"
                  : "transform translate-x-0"
              }
            `}
          >
            <div className="w-full h-full">{section.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
