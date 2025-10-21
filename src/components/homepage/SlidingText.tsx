"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SlidingTextProps {
  sentence1Text?: string;
  sentence2Text?: string;
  className?: string;
}

const SlidingText: React.FC<SlidingTextProps> = ({
  sentence1Text = "NEVER GO EXTINCT",
  sentence2Text = "NEVER GO EXTINCT",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinHeightRef = useRef<HTMLDivElement>(null);
  const sentence1Ref = useRef<HTMLParagraphElement>(null);
  const sentence2Ref = useRef<HTMLParagraphElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      const sentence1 = sentence1Ref.current;
      const sentence2 = sentence2Ref.current;
      const pinHeight = pinHeightRef.current;
      const container = containerRef.current;

      if (!sentence1 || !sentence2 || !pinHeight || !container) return;

      // Wait for fonts to load, then start animations
      document.fonts.ready.then(() => {
        // Forward sliding animation for sentence1 (left to right)
        gsap.to(sentence1, {
          x: () => -sentence1.scrollWidth / 2,
          ease: "none",
          duration: 60,
          repeat: -1,
        });

        // Backward sliding animation for sentence2 (right to left)
        // Set initial position and animate in opposite direction
        gsap.set(sentence2, { x: () => -sentence2.scrollWidth / 2 });
        gsap.to(sentence2, {
          x: 0,
          ease: "none",
          duration: 60,
          repeat: -1,
        });
      });
    },
    { scope: containerRef },
  );

  // Create repeated text to fill the width
  const createRepeatedText = (text: string) => {
    const repeatCount = 15; // Enough repetitions to fill screen width
    return Array(repeatCount)
      .fill(text + " ")
      .join("");
  };

  return (
    <div
      className={`mwg_effect024 w-full relative overflow-hidden ${className}`}
      ref={containerRef}
    >
      <div className="pin-height w-full h-60" ref={pinHeightRef}>
        <div className="container w-full h-full flex flex-col justify-center items-center gap-4">
          <div className="sentence1 w-full whitespace-nowrap">
            <p
              ref={sentence1Ref}
              className="m-0 text-3xl font-bold text-center text-[#D9E0C1]"
            >
              {createRepeatedText(sentence1Text)}
            </p>
          </div>
          <div className="sentence2 w-full whitespace-nowrap">
            <p
              ref={sentence2Ref}
              className="m-0 text-3xl font-bold text-center text-[#D9E0C1]"
            >
              {createRepeatedText(sentence2Text)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
