"use client";

import { useState, useEffect } from "react";

interface HeroClientProps {
  children: React.ReactNode;
}

export default function HeroClient({ children }: HeroClientProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center gap-2.5 w-full pt-16 pb-4 overflow-hidden">
      {/* Checkered background with fade and mouse interaction */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
                  linear-gradient(to bottom, var(--background) 0%, transparent 40%, transparent 100%),
                  repeating-linear-gradient(
                    0deg,
                    transparent 0px,
                    transparent calc(10px - 0.5px),
                    rgba(217, 224, 193, 0.45) calc(10px - 0.5px),
                    rgba(217, 224, 193, 0.45) 10px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent 0px,
                    transparent calc(10px - 0.5px),
                    rgba(217, 224, 193, 0.45) calc(10px - 0.5px),
                    rgba(217, 224, 193, 0.45) 10px
                  )
                `,
          backgroundPosition: "0 0, 0 0, 0 0",
          backgroundSize: "100% 100%, 10px 10px, 10px 10px",
        }}
      />
      {/* Radial gradient overlay for mouse interaction */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
                  radial-gradient(
                    400px circle at ${mousePos.x}px ${mousePos.y}px,
                    rgba(217, 224, 193, 0.6) 0%,
                    transparent 100%
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent 0px,
                    transparent calc(10px - 0.5px),
                    rgba(217, 224, 193, 0) calc(10px - 0.5px),
                    rgba(217, 224, 193, 0) 10px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent 0px,
                    transparent calc(10px - 0.5px),
                    rgba(217, 224, 193, 0) calc(10px - 0.5px),
                    rgba(217, 224, 193, 0) 10px
                  )
                `,
          backgroundPosition: "0 0, 0 0, 0 0",
          backgroundSize: "100% 100%, 10px 10px, 10px 10px",
          maskImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent 0px,
                    transparent calc(10px - 0.5px),
                    black calc(10px - 0.5px),
                    black 10px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent 0px,
                    transparent calc(10px - 0.5px),
                    black calc(10px - 0.5px),
                    black 10px
                  )
                `,
          maskSize: "10px 10px, 10px 10px",
          maskComposite: "add",
        }}
      />

      {children}
    </section>
  );
}
