"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, Media } from "@/payload-types";

// Register plugins
gsap.registerPlugin(Observer);

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Variables to maintain state between renders
  const varsRef = useRef({
    incrX: 0,
    incrY: 0,
    xTo: null as gsap.QuickToFunc | null,
    yTo: null as gsap.QuickToFunc | null,
  });

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      // Setup X-axis wrapping and quickTo
      const halfX = container.clientWidth / 2;
      const wrapX = gsap.utils.wrap(-halfX, 0);
      varsRef.current.xTo = gsap.quickTo(container, "x", {
        duration: 1.5,
        ease: "power4",
        modifiers: {
          x: gsap.utils.unitize(wrapX),
        },
      });

      // Setup Y-axis wrapping and quickTo
      const halfY = container.clientHeight / 2;
      const wrapY = gsap.utils.wrap(-halfY, 0);
      varsRef.current.yTo = gsap.quickTo(container, "y", {
        duration: 1.5,
        ease: "power4",
        modifiers: {
          y: gsap.utils.unitize(wrapY),
        },
      });

      // Create Observer for wheel and drag events
      const observer = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        onChangeX: (self) => {
          if (self.event.type === "wheel") {
            varsRef.current.incrX -= self.deltaX;
          } else {
            varsRef.current.incrX += self.deltaX * 2;
          }

          if (varsRef.current.xTo) {
            varsRef.current.xTo(varsRef.current.incrX);
          }
        },
        onChangeY: (self) => {
          if (self.event.type === "wheel") {
            varsRef.current.incrY -= self.deltaY;
          } else {
            varsRef.current.incrY += self.deltaY * 2;
          }

          if (varsRef.current.yTo) {
            varsRef.current.yTo(varsRef.current.incrY);
          }
        },
      });

      // Cleanup function
      return () => {
        observer.kill();
      };
    },
    { scope: containerRef },
  );

  // Create content component
  const ContentGrid = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div
      className="grid grid-cols-5 gap-[10vw] p-[5vw] w-max items-center justify-center"
      aria-hidden={ariaHidden}
    >
      {caseStudies.slice(0, 3).map((caseStudy) => {
        const image = caseStudy.image as Media;
        return (
          <Link
            key={caseStudy.id}
            href={`/casestudies/${caseStudy.slug}`}
            className="w-[25vw] aspect-square select-none pointer-events-auto hover:scale-105 transition-transform duration-200 group"
          >
            <Image
              src={image?.url || `/placeholder.png`}
              alt={ariaHidden ? "" : (image?.alt || caseStudy.title)}
              width={600}
              height={600}
              className="w-full h-full block object-contain group-hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
        );
      })}

      {/* Plus button that links to /start */}
      <div className="w-[25vw] aspect-square select-none pointer-events-auto flex items-center justify-center">
        <div className="w-32 h-32">
          <div className="w-full h-full border border-neutral-700 border-dashed flex items-center justify-center rounded-md">
            <Link
              href="/start"
              className="w-full h-full flex items-center justify-center group hover:bg-gray-50 transition-colors duration-200"
              aria-label={ariaHidden ? undefined : "Start a new project"}
            >
              <svg
                width="20%"
                height="20%"
                viewBox="0 0 24 24"
                fill="none"
                className="text-neutral-700 group-hover:text-accent transition-colors duration-200"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Fourth image */}
      {caseStudies.length > 3 && (
        <Link
          href={`/casestudies/${caseStudies[3].slug}`}
          className="w-[25vw] aspect-square select-none pointer-events-auto hover:scale-105 transition-transform duration-200 group"
        >
          <Image
            src={(caseStudies[3].image as Media)?.url || `/placeholder.png`}
            alt={ariaHidden ? "" : ((caseStudies[3].image as Media)?.alt || caseStudies[3].title)}
            width={600}
            height={600}
            className="w-full h-full block object-contain group-hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      )}
    </div>
  );

  return (
    <div className="w-full h-full overflow-hidden overscroll-x-none">
      <section className="h-full w-full overflow-hidden pointer-events-none">
        <div
          ref={containerRef}
          className="grid grid-cols-2 w-max will-change-transform"
        >
          {/* Main content */}
          <ContentGrid />

          {/* Duplicates for seamless scrolling */}
          <ContentGrid ariaHidden={true} />
          <ContentGrid ariaHidden={true} />
          <ContentGrid ariaHidden={true} />
        </div>
      </section>
      <div className="absolute right-0 bottom-0 select-none pointer-events-none z-0">
        <p className="font-black text-[6vw] leading-[0.8] tracking-[-0.05em] flex-1 p-8 uppercase">
          <span className="text-right">Read a</span>
          <span className="block pl-[8vw] text-[#C64B4B]">Case Study</span>
        </p>
      </div>
    </div>
  );
}
