"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Constants
const DEFAULT_TEXT = "NEVER GO EXTINCT";
const ANIMATION_DURATION = 60; // seconds
const TEXT_REPEAT_COUNT = 15; // Enough repetitions to fill screen width
const CONTAINER_HEIGHT = 240; // 60 in rem (240px)

interface SlidingTextProps {
  /** Text for the first sliding line */
  sentence1Text?: string;
  /** Text for the second sliding line */
  sentence2Text?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SlidingText component creates animated text that slides horizontally
 * Features two lines of text moving in opposite directions
 *
 * @param sentence1Text - Text for first line (slides left to right)
 * @param sentence2Text - Text for second line (slides right to left)
 * @param className - Additional styling classes
 */
const SlidingText: React.FC<SlidingTextProps> = ({
  sentence1Text = DEFAULT_TEXT,
  sentence2Text = DEFAULT_TEXT,
  className = "",
}) => {
  // Refs for DOM elements
  const containerRef = useRef<HTMLDivElement>(null);
  const pinHeightRef = useRef<HTMLDivElement>(null);
  const sentence1Ref = useRef<HTMLParagraphElement>(null);
  const sentence2Ref = useRef<HTMLParagraphElement>(null);

  /**
   * Creates repeated text to ensure continuous scrolling effect
   */
  const createRepeatedText = (text: string): string => {
    return Array(TEXT_REPEAT_COUNT).fill(`${text} `).join("");
  };

  /**
   * Initialize GSAP animations after fonts are loaded
   */
  useGSAP(
    () => {
      const sentence1 = sentence1Ref.current;
      const sentence2 = sentence2Ref.current;
      const pinHeight = pinHeightRef.current;
      const container = containerRef.current;

      // Early return if any required elements are missing
      if (!sentence1 || !sentence2 || !pinHeight || !container) return;

      // Wait for fonts to load before starting animations
      document.fonts.ready.then(() => {
        // First line: slides left to right
        gsap.to(sentence1, {
          x: () => -sentence1.scrollWidth / 2,
          ease: "none",
          duration: ANIMATION_DURATION,
          repeat: -1,
        });

        // Second line: slides right to left
        gsap.set(sentence2, { x: () => -sentence2.scrollWidth / 2 });
        gsap.to(sentence2, {
          x: 0,
          ease: "none",
          duration: ANIMATION_DURATION,
          repeat: -1,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      className={`w-full relative border-y border-[#D9E0C1] overflow-hidden ${className}`}
      ref={containerRef}
      aria-label="Animated text banner"
    >
      <div
        className="w-full h-60"
        ref={pinHeightRef}
        style={{ height: `${CONTAINER_HEIGHT}px` }}
      >
        <div className="container w-full h-full flex flex-col justify-center items-center gap-4">
          {/* First sliding text line */}
          <div className="w-full whitespace-nowrap" aria-hidden="true">
            <p
              ref={sentence1Ref}
              className="m-0 text-3xl font-bold text-center text-[#D9E0C1]"
            >
              {createRepeatedText(sentence1Text)}
            </p>
          </div>

          {/* Second sliding text line */}
          <div className="w-full whitespace-nowrap" aria-hidden="true">
            <p
              ref={sentence2Ref}
              className="m-0 text-3xl font-bold text-center text-[#D9E0C1]"
            >
              {createRepeatedText(sentence2Text)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingText;
