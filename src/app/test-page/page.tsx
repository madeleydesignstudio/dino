"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      width: "w-screen md:w-[50vh]",
      bg: "bg-red-200",
      mobileHeight: "h-[50vh]", // Changed from h-screen
      content: "Section 1",
    },
    {
      id: 2,
      width: "w-screen md:w-[100vh]",
      bg: "bg-blue-200",
      mobileHeight: "h-screen", // Full height
      content: "Section 2",
    },
    {
      id: 3,
      width: "w-screen md:w-[100vh]",
      bg: "bg-green-200",
      mobileHeight: "h-[75vh]", // 75% of viewport height
      content: "Section 3",
    },
    {
      id: 4,
      width: "w-screen md:w-[20vh]",
      bg: "bg-yellow-200",
      mobileHeight: "h-[40vh]", // 40% of viewport height
      content: "Section 4",
    },
    {
      id: 5,
      width: "w-screen md:w-[100vh]",
      bg: "bg-purple-200",
      mobileHeight: "h-[90vh]", // 90% of viewport height
      content: "Section 5",
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
              transform md:transform-none translate-x-0
            `}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{section.content}</h2>
              <div className="md:hidden">
                <p className="text-lg">
                  Mobile-specific content for {section.content}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
