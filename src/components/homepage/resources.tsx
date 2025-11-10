"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cube3D } from "../universal/Cube3D";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const Resources = () => {
  const resourcesRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const cubeRotationRef = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (!resourcesRef.current || !cubeRef.current) return;

    const cube = cubeRef.current;
    const sections = sectionsRef.current;

    console.log(
      "🎲 Setting up cube animation with",
      sections.length,
      "sections",
    );

    // Set initial position to first section
    gsap.set(cube, { y: 0 });

    // Calculate the height of each section (25% of container)
    const container = cube.parentElement;
    const sectionHeight = container ? container.offsetHeight / 4 : 0;

    console.log("📏 Section height:", sectionHeight);

    // Create scroll triggers for each section
    sections.forEach((section, index) => {
      if (!section) return;

      console.log(`🎯 Creating trigger for section ${index}:`, section);

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        // markers: true, // Add visual markers for debugging
        onEnter: () => {
          console.log(`✅ Entering section ${index}`);
          const targetY = index * sectionHeight;

          gsap.to(cube, {
            y: targetY,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        onEnterBack: () => {
          console.log(`⬅️ Entering back section ${index}`);
          const targetY = index * sectionHeight;

          gsap.to(cube, {
            y: targetY,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });

      triggersRef.current.push(trigger);
    });

    // Cleanup function
    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  // Helper function to add section refs
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
      console.log(`📌 Added section ${index} to refs:`, el);
    }
  };

  return (
    <>
      <div
        ref={resourcesRef}
        id="resources-section"
        className="flex flex-col justify-center w-full"
      >
        <div className="flex justify-center w-full ">
          <div className="flex justify-between w-full pt-20 px-5 py-5">
            <div className="flex flex-col items-start w-full">
              <h2 className="font-black text-xl uppercase text-[#D9E0C1]">
                Resources
              </h2>
              <p className="text-sm text-[#D9E0C1]">Explore our resources</p>
            </div>

            <div className="flex items-end justify-end w-full">
              <Link href="/resources" className="text-[#D9E0C1]">
                view all resources {"----->"}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 h-screen">
          <div className="flex flex-col h-full col-span-3">
            <div
              ref={(el) => addToRefs(el, 0)}
              className="w-full border-t border-[#D9E0C1] flex-1 flex items-center px-8 text-2xl font-bold text-[#D9E0C1]"
            >
              OpenSource
            </div>
            <div
              ref={(el) => addToRefs(el, 1)}
              className="w-full border-t border-[#D9E0C1] flex-1 flex items-center px-8 text-2xl font-bold text-[#D9E0C1]"
            >
              UI
            </div>
            <div
              ref={(el) => addToRefs(el, 2)}
              className="w-full border-t border-[#D9E0C1] flex-1 flex items-center px-8 text-2xl font-bold text-[#D9E0C1]"
            >
              API
            </div>
            <div
              ref={(el) => addToRefs(el, 3)}
              className="w-full border-t border-[#D9E0C1] flex-1 flex items-center px-8 text-2xl font-bold text-[#D9E0C1]"
            >
              Compare
            </div>
          </div>
          <div className="flex flex-col h-full col-span-1 relative ">
            {/* Static border containers */}
            <div className="w-full border-l border-t border-[#D9E0C1] flex-1"></div>
            {/*<div className="w-full border-l border-t border-[#D9E0C1] flex-1"></div>
            <div className="w-full border-l border-t border-[#D9E0C1] flex-1"></div>*/}
            {/*<div className="w-full border-l border-t border-[#D9E0C1] flex-1"></div>*/}

            {/* Single animated cube */}
            <div
              ref={cubeRef}
              className="absolute top-0 left-0 w-full flex items-center justify-center pointer-events-none z-10"
              style={{ height: "25%" }} // 25% = 1/4 of the container height
            >
              <Cube3D
                size={120}
                color="#ffffff"
                autoRotate={true}
                rotationSpeed={0.015}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
