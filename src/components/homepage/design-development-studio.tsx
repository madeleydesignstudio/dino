"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface DesignDevelopmentStudioProps {
  className?: string;
}

export default function DesignDevelopmentStudio({
  className = "",
}: DesignDevelopmentStudioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinHeightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sentencesRef = useRef<HTMLDivElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  // Utility function to wrap letters in spans
  const wrapLettersInSpan = (element: HTMLElement) => {
    const text = element.textContent || "";
    element.innerHTML = text
      .split("")
      .map((char) => (char === " " ? "<span> </span>" : `<span>${char}</span>`))
      .join(" ");
  };

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      autoRaf: true,
    });

    const root = sectionRef.current;
    const sentences = sentencesRef.current.filter(Boolean);
    const pinHeight = pinHeightRef.current;
    const container = containerRef.current;

    if (!root || !sentences.length || !pinHeight || !container) return;

    // Wrap letters in spans for each sentence
    sentences.forEach((sentence) => {
      wrapLettersInSpan(sentence);
    });

    // Create pin animation
    ScrollTrigger.create({
      trigger: pinHeight,
      start: "top top",
      end: "bottom bottom",
      pin: container,
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinHeight,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animate sentences
    sentences.forEach((sentence, index) => {
      if (sentences[index + 1]) {
        // Move current sentence up
        tl.to(sentence, {
          yPercent: -50,
          y: "-50vh",
          ease: "power4.in",
        });

        // Move current sentence letters up with stagger
        tl.to(
          sentence.querySelectorAll("span"),
          {
            yPercent: -50,
            y: "-50vh",
            stagger: -0.02,
            ease: "power2.in",
          },
          "<",
        );

        // Move next sentence from below
        tl.from(
          sentences[index + 1],
          {
            yPercent: 50,
            y: "50vh",
            ease: "power4.out",
          },
          "<",
        );

        // Move next sentence letters from below with stagger
        tl.from(
          sentences[index + 1].querySelectorAll("span"),
          {
            yPercent: 50,
            y: "50vh",
            ease: "power2.out",
            stagger: -0.02,
          },
          "<",
        );
      }
    });

    // Cleanup function
    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Custom CSS for dynamic font sizing and letter spacing that Tailwind can't handle */}
      <style jsx>{`
        .sentence-text {
          font-size: 10vw;
          line-height: 0.9;
          letter-spacing: -0.06em;
        }
        .sentence-text span {
          display: inline-block;
          letter-spacing: -0.06em;
        }
        .description-text {
          font-size: clamp(14px, 1.15vw, 100px);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
      `}</style>

      <section ref={sectionRef} className={`${className}`}>
        <div ref={pinHeightRef} className="h-[600vh]">
          <div ref={containerRef} className="flex items-center h-screen">
            <div className="relative w-full">
              <div
                ref={(el) => {
                  if (el) sentencesRef.current[0] = el;
                }}
                className="sentence-text w-full text-center flex justify-center font-bold uppercase font-mono text-neutral-500"
              >
                "Design &
              </div>
              <div
                ref={(el) => {
                  if (el) sentencesRef.current[1] = el;
                }}
                className="sentence-text w-full text-center flex justify-center font-bold uppercase font-mono text-neutral-500 absolute left-0 top-0"
              >
                Development
              </div>
              <div
                ref={(el) => {
                  if (el) sentencesRef.current[2] = el;
                }}
                className="sentence-text w-full text-center flex justify-center font-bold uppercase font-mono text-neutral-500 absolute left-0 top-0"
              >
                that works
              </div>
              <div
                ref={(el) => {
                  if (el) sentencesRef.current[3] = el;
                }}
                className="sentence-text w-full text-center flex justify-center font-bold uppercase font-mono text-neutral-500 absolute left-0 top-0"
              >
                beautifully."
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
