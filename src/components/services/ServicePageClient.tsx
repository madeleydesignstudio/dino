"use client";

import { useRef, ReactNode } from "react";
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

  // Variables to maintain state between renders
  const varsRef = useRef({
    incrTick: 0,
    interactionTimeout: null as NodeJS.Timeout | null,
    yTo: null as gsap.QuickToFunc | null,
    scaleTo: null as gsap.QuickToFunc | null,
  });

  useGSAP(
    () => {
      if (!contentRef.current || !containerRef.current) return;

      const content = contentRef.current;
      const container = containerRef.current;
      const half = content.getBoundingClientRect().height / 2;
      const wrap = gsap.utils.wrap(-half, 0);

      // Create quickTo functions
      varsRef.current.yTo = gsap.quickTo(content, "y", {
        duration: 1,
        ease: "power4",
        modifiers: {
          y: gsap.utils.unitize(wrap),
        },
      });

      varsRef.current.scaleTo = gsap.quickTo(container, "scaleY", {
        duration: 0.6,
        ease: "power4",
      });

      // Handle interaction function
      const handleInteraction = (e: any) => {
        if (e.event.type === "wheel") {
          varsRef.current.incrTick -= e.deltaY;
        } else {
          varsRef.current.incrTick += e.deltaY;
        }

        // Returns a value between 0.8 and 1.2
        const valSc = 1 - gsap.utils.clamp(-0.2, 0.2, e.deltaY / 300);
        if (varsRef.current.scaleTo) {
          varsRef.current.scaleTo(valSc);
        }

        // Clear existing timeout
        if (varsRef.current.interactionTimeout) {
          clearTimeout(varsRef.current.interactionTimeout);
        }

        // Set new timeout
        varsRef.current.interactionTimeout = setTimeout(() => {
          if (varsRef.current.scaleTo) {
            varsRef.current.scaleTo(1);
          }
        }, 66);
      };

      // Tick function for automatic scrolling
      const tick = (time: number, dt: number) => {
        varsRef.current.incrTick += dt / 30;
        if (varsRef.current.yTo) {
          varsRef.current.yTo(varsRef.current.incrTick);
        }
      };

      // Create Observer
      const observer = Observer.create({
        target: window,
        type: "wheel,pointer,touch",
        onChange: handleInteraction,
      });

      // Add ticker
      gsap.ticker.add(tick);

      // Cleanup function
      return () => {
        observer.kill();
        gsap.ticker.remove(tick);
        if (varsRef.current.interactionTimeout) {
          clearTimeout(varsRef.current.interactionTimeout);
        }
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="min-h-screen font-medium text-[22px] leading-[1.3] overflow-hidden">
      <section className="flex items-end select-none">
        {/* Text Section - Left Side */}
        <p className="font-black text-[8vw] leading-[0.8] tracking-[-0.05em] flex-1 p-6 uppercase">
          <span className="block">Select</span>
          <span>a</span>
          <span className="block pl-[10vw] text-[#C64B4B]">Service</span>
          <span className="flex justify-between pl-[6vw]">
            <span>to find</span>
            <span>out</span>
          </span>
          <span className="block text-right">More</span>
        </p>

        {/* Container with images - Right Side */}
        <div ref={containerRef} className="w-[40vw] h-screen mr-6">
          <div
            ref={contentRef}
            className="flex flex-col gap-6 h-max mx-auto pb-6"
          >
            {/* First set of service images */}
            {serviceImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="aspect-[1.7] rounded-[0.4em] overflow-hidden pointer-events-none  flex items-center justify-center relative group"
              >
                <div className="w-full h-full flex items-center justify-center">
                  {image}
                </div>
                <div className="absolute inset-0  transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-neutral-700 text-6xl font-bold uppercase tracking-wider text-center px-4">
                    {serviceLabels[index]}
                  </h3>
                </div>
              </div>
            ))}

            {/* Duplicate set for infinite scroll effect */}
            {serviceImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="aspect-[1.7] rounded-[0.4em] overflow-hidden pointer-events-none flex items-center justify-center relative group"
              >
                <div className="w-full h-full flex items-center justify-center">
                  {image}
                </div>
                <div className="absolute inset-0  transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-neutral-700 text-6xl font-bold uppercase tracking-wider text-center px-4">
                    {serviceLabels[index]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
