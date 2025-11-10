"use client";

import { useRef, ReactNode, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

// Register plugins
gsap.registerPlugin(Observer);

interface ServicePageClientProps {
  serviceImages: ReactNode[];
  serviceLabels: string[];
}

export default function ServicePageClient({
  serviceImages,
  serviceLabels,
}: ServicePageClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Variables to maintain state between renders (like the example)
  const varsRef = useRef({
    incrTick: 0,
    interactionTimeout: null as NodeJS.Timeout | null,
    yTo: null as gsap.QuickToFunc | null,
    scaleTo: null as gsap.QuickToFunc | null,
  });

  // Handle interaction function (replicated from example)
  const handleInteraction = (e: any) => {
    if (e.event.type === "wheel") {
      varsRef.current.incrTick -= e.deltaY;
    } else {
      varsRef.current.incrTick += e.deltaY;
    }

    // Returns a value between 0.8 and 1.2 (scale effect)
    const valSc = 1 - gsap.utils.clamp(-0.2, 0.2, e.deltaY / 300);
    if (varsRef.current.scaleTo) {
      varsRef.current.scaleTo(valSc);
    }

    // Kill previous timeout
    if (varsRef.current.interactionTimeout) {
      clearTimeout(varsRef.current.interactionTimeout);
    }

    // Reset scale after interaction stops
    varsRef.current.interactionTimeout = setTimeout(() => {
      if (varsRef.current.scaleTo) {
        varsRef.current.scaleTo(1);
      }
    }, 66);
  };

  // Tick function for automatic scrolling (replicated from example)
  const tick = (time: number, dt: number) => {
    varsRef.current.incrTick += dt / 30; // Adjust the speed of automatic scrolling
    if (varsRef.current.yTo) {
      varsRef.current.yTo(varsRef.current.incrTick);
    }
  };

  useGSAP(
    () => {
      if (!contentRef.current || !containerRef.current) return;

      const content = contentRef.current;
      const container = containerRef.current;

      // Wait for DOM to be ready and measure
      setTimeout(() => {
        // Ensure content is visible and properly sized
        if (!content || !container) return;

        // Calculate half height for wrapping (like the example)
        const half = content.getBoundingClientRect().height / 2;

        // If height is 0, try again after a longer delay
        if (half === 0) {
          setTimeout(() => {
            if (!content || !container) return;
            const halfRetry = content.getBoundingClientRect().height / 2;
            if (halfRetry === 0) return; // Give up if still no height

            setupInfiniteScroll(halfRetry);
          }, 300);
          return;
        }

        setupInfiniteScroll(half);
      }, 200);

      const setupInfiniteScroll = (half: number) => {
        const wrap = gsap.utils.wrap(-half, 0);

        // Create yTo quickTo function (replicated from example)
        varsRef.current.yTo = gsap.quickTo(content, "y", {
          duration: 1, // Will vary over 1s
          ease: "power4", // Non-linear
          modifiers: {
            y: gsap.utils.unitize(wrap),
          },
        });

        // Create scaleTo quickTo function (replicated from example)
        varsRef.current.scaleTo = gsap.quickTo(container, "scaleY", {
          duration: 0.6, // Will vary over 0.6s
          ease: "power4", // Non-linear
        });

        // Create Observer (replicated from example)
        const observer = Observer.create({
          target: window, // Capture events on the window
          type: "wheel,pointer,touch", // Types of events to listen for
          onChange: handleInteraction, // We use onChange to listen for all events
        });

        // Add ticker for automatic scrolling
        gsap.ticker.add(tick);

        // Store references for cleanup
        (container as any)._observer = observer;
      };

      // Cleanup function
      return () => {
        const container = containerRef.current;
        if (container) {
          const observer = (container as any)?._observer;
          if (observer) {
            observer.kill();
          }
        }
        gsap.ticker.remove(tick);
        if (varsRef.current.interactionTimeout) {
          clearTimeout(varsRef.current.interactionTimeout);
        }
      };
    },
    { scope: containerRef },
  );

  // Create mapping from service labels to their slug URLs
  const getServiceSlug = (label: string) => {
    const slugMap: { [key: string]: string } = {
      "Website Design": "/services/website-design",
      "Website Development": "/services/website-development",
      "Creative Design": "/services/creative-design",
      "Agentic AI": "/services/agentic-ai",
      "Product Design": "/services/product-design",
      "View All": "/services",
    };
    return slugMap[label] || "/services";
  };

  return (
    <div className="w-full h-full font-medium text-[22px] leading-[1.3] overflow-hidden">
      <section className="flex items-end h-full overflow-hidden pointer-events-none">
        {/* Text Section - Left Side */}
        <p className="font-black text-[6vw] leading-[0.8] tracking-[-0.05em] flex-1 p-8 uppercase">
          <span className="block">Select</span>
          <span>a</span>
          <span className="block pl-[8vw] text-[#C64B4B]">Service</span>
          <span className="flex justify-between pl-[4vw]">
            <span>to find</span>
            <span>out</span>
          </span>
          <span className="block text-right">More</span>
        </p>

        {/* Container with images - Right Side (this gets the scaleY effect) */}
        <div
          ref={containerRef}
          className="w-[40vw] h-full mr-8 will-change-transform pointer-events-none relative"
        >
          <div
            ref={contentRef}
            className="flex flex-col gap-6 pointer-events-none absolute top-0 left-0 w-full"
            style={{ height: "max-content", minHeight: "200vh" }}
          >
            {/* First set of service images */}
            {serviceImages.map((image, index) => (
              <Link
                key={`first-${index}`}
                href={getServiceSlug(serviceLabels[index])}
                className="aspect-[1.7] rounded-[0.4em] overflow-visible pointer-events-auto relative group transform scale-50 origin-center hover:scale-[0.52] transition-transform duration-200 cursor-pointer select-none"
              >
                <div className="w-full h-full flex items-center bg-white/90 backdrop-blur-sm rounded-[0.4em] shadow-lg">
                  <div className="w-1/2 h-full flex items-center justify-center p-4">
                    {image}
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <h3 className="text-neutral-700 text-4xl font-bold uppercase tracking-wider text-center px-4 group-hover:text-[#C64B4B] transition-colors duration-200">
                      {serviceLabels[index]}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}

            {/* Second set for infinite scroll effect */}
            {serviceImages.map((image, index) => (
              <Link
                key={`second-${index}`}
                href={getServiceSlug(serviceLabels[index])}
                className="aspect-[1.7] rounded-[0.4em] overflow-visible pointer-events-auto relative group transform scale-50 origin-center hover:scale-[0.52] transition-transform duration-200 cursor-pointer select-none"
              >
                <div className="w-full h-full flex items-center bg-white/90 backdrop-blur-sm rounded-[0.4em] shadow-lg">
                  <div className="w-1/2 h-full flex items-center justify-center p-4">
                    {image}
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <h3 className="text-neutral-700 text-4xl font-bold uppercase tracking-wider text-center px-4 group-hover:text-[#C64B4B] transition-colors duration-200">
                      {serviceLabels[index]}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
