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
    <section className="relative flex flex-col items-center justify-center gap-2.5 w-full pt-12 overflow-hidden">
      {/* Checkered background with fade and mouse interaction */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, var(--background) 0%, transparent 40%, transparent 100%),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent calc(15px - 0.5px),
              rgba(217, 224, 193, 0.45) calc(15px - 0.5px),
              rgba(217, 224, 193, 0.45) 15px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent calc(15px - 0.5px),
              rgba(217, 224, 193, 0.45) calc(15px - 0.5px),
              rgba(217, 224, 193, 0.45) 15px
            )
          `,
          backgroundPosition: "0 0, 0 0, 0 0",
          backgroundSize: "100% 100%, 15px 15px, 15px 15px",
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
              transparent calc(15px - 0.5px),
              rgba(217, 224, 193, 0) calc(15px - 0.5px),
              rgba(217, 224, 193, 0) 15px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent calc(15px - 0.5px),
              rgba(217, 224, 193, 0) calc(15px - 0.5px),
              rgba(217, 224, 193, 0) 15px
            )
          `,
          backgroundPosition: "0 0, 0 0, 0 0",
          backgroundSize: "100% 100%, 15px 15px, 15px 15px",
          maskImage: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent calc(15px - 0.5px),
              black calc(15px - 0.5px),
              black 15px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent calc(15px - 0.5px),
              black calc(15px - 0.5px),
              black 15px
            )
          `,
          maskSize: "15px 15px, 15px 15px",
          maskComposite: "add",
        }}
      />

      {children}
    </section>
  );
}
