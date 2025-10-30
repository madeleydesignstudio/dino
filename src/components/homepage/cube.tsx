"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Mesh, Group } from "three";

gsap.registerPlugin(ScrollTrigger);

function CubeSection({
  position,
  color,
  index,
  isVisible,
  isComplete,
}: {
  position: [number, number, number];
  color: string;
  index: number;
  isVisible: boolean;
  isComplete: boolean;
}) {
  const meshRef = useRef<Mesh>(null);

  // All pieces are always visible, no scale animation needed

  useEffect(() => {
    if (!meshRef.current) return;

    // Each piece starts at its content row position and moves to stack when activated
    if (isVisible) {
      // Move to stacked position (pieces stack from bottom up)
      const stackedY = -1.5 + (3 - index) * 0.5; // Bottom piece at -1.5, stack upward
      gsap.to(meshRef.current.position, {
        y: stackedY,
        duration: 1.2,
        ease: "power2.out",
      });
    } else {
      // Stay at original row-aligned position
      gsap.to(meshRef.current.position, {
        y: position[1],
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  }, [isVisible, position, index]);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 0.5, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Scene({ activeSection }: { activeSection: number }) {
  const groupRef = useRef<Group>(null);
  const isComplete = activeSection >= 3;

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;

    if (isComplete) {
      gsap.fromTo(
        groupRef.current.scale,
        { x: 1, y: 1, z: 1 },
        {
          x: 1.3,
          y: 1.3,
          z: 1.3,
          duration: 0.4,
          ease: "back.out(2)",
          yoyo: true,
          repeat: 1,
        },
      );
    }
  }, [isComplete]);

  return (
    <group ref={groupRef}>
      <CubeSection
        position={[0, 2.5, 0]}
        color="#C64B4B"
        index={0}
        isVisible={activeSection >= 0}
        isComplete={isComplete}
      />
      <CubeSection
        position={[0, 0.8, 0]}
        color="#D9E0C1"
        index={1}
        isVisible={activeSection >= 1}
        isComplete={isComplete}
      />
      <CubeSection
        position={[0, -0.8, 0]}
        color="#C64B4B"
        index={2}
        isVisible={activeSection >= 2}
        isComplete={isComplete}
      />
      <CubeSection
        position={[0, -2.5, 0]}
        color="#D9E0C1"
        index={3}
        isVisible={activeSection >= 3}
        isComplete={isComplete}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
    </group>
  );
}

const resourceSections = [
  {
    title: "Open Source",
    subtitle: "COMMUNITY-DRIVEN RESOURCES",
    description: "Free tools and templates for developers",
    icon: "🔓",
  },
  {
    title: "UI Components",
    subtitle: "DESIGN SYSTEM BUILDING BLOCKS",
    description: "Pre-built components for rapid development",
    icon: "🧩",
  },
  {
    title: "API Tools",
    subtitle: "INTEGRATION MADE SIMPLE",
    description: "Documentation and testing utilities",
    icon: "⚡",
  },
  {
    title: "Compare",
    subtitle: "MAKE INFORMED DECISIONS",
    description: "Side-by-side tool and service comparisons",
    icon: "⚖️",
  },
];

export default function CubeScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(-1);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Create one scroll trigger that controls the entire animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          // Map scroll progress (0-1) to sections (-1 to 3)
          // -1 = no sections active, 0-3 = progressive activation
          const progress = self.progress;
          const sectionIndex = Math.floor(progress * 5) - 1; // -1, 0, 1, 2, 3
          setActiveSection(Math.min(sectionIndex, 3));
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative flex h-screen ">
      {/* Left side - Content */}
      <div className="w-3/4 h-full flex flex-col justify-between ">
        {resourceSections.map((section, index) => (
          <div
            key={index}
            className={`flex items-center h-full transition-all border border-[#D9E0C1] duration-500`}
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-[#D9E0C1] flex items-center justify-center text-2xl shrink-0">
              {section.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-xs text-[#D9E0C1] font-mono tracking-wider uppercase mb-1 opacity-60">
                {section.subtitle}
              </p>
              <h3 className="text-3xl font-black text-[#D9E0C1] uppercase mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-[#D9E0C1] opacity-80 leading-relaxed max-w-md">
                {section.description}
              </p>
            </div>

            {/* GitHub-style stats (placeholder) */}
            <div className="flex gap-8 text-[#D9E0C1] opacity-60 shrink-0">
              <div>
                <div className="text-xl font-bold">
                  {index === 0
                    ? "12.3k"
                    : index === 1
                      ? "8.7k"
                      : index === 2
                        ? "15.1k"
                        : "6.4k"}
                </div>
                <div className="text-xs">Stars</div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {index === 0
                    ? "245"
                    : index === 1
                      ? "189"
                      : index === 2
                        ? "367"
                        : "156"}
                </div>
                <div className="text-xs">Contributors</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Cube */}
      <div className="w-1/4 h-full flex items-center justify-center">
        <div className="w-80 h-80">
          <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
            <Scene activeSection={activeSection} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
