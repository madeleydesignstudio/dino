"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

// Sample project data
export const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A groundbreaking AI initiative",
  },
  {
    id: 2,
    name: "Project Beta",
    description: "Revolutionary blockchain solution",
  },
  { id: 3, name: "Project Gamma", description: "Next-gen IoT platform" },
  { id: 4, name: "Project Delta", description: "Cutting-edge VR experience" },
  {
    id: 5,
    name: "Project Epsilon",
    description: "Advanced data analytics tool",
  },
  {
    id: 6,
    name: "Project Zeta",
    description: "Innovative cloud computing service",
  },
  {
    id: 7,
    name: "Project Eta",
    description: "State-of-the-art cybersecurity system",
  },
  {
    id: 8,
    name: "Project Theta",
    description: "Futuristic autonomous vehicle tech",
  },
  {
    id: 9,
    name: "Project Iota",
    description: "Breakthrough in quantum computing",
  },
  {
    id: 10,
    name: "Project Kappa",
    description: "Pioneering space exploration tech",
  },
];

// Duplicate the projects array to create a seamless loop
const loopProjects = [...projects, ...projects, ...projects];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  // const [selectedIndex, setSelectedIndex] = React.useState(0);
  const cardsRef = React.useRef<(HTMLDivElement | null)[]>([]);
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    lenisRef.current = new Lenis();

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const handleMouseEnter = React.useCallback(() => {
    lenisRef.current?.stop();
    document.body.style.overflow = "hidden";
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    lenisRef.current?.start();
    document.body.style.overflow = "";
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener("mouseenter", handleMouseEnter);
    rootNode.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      rootNode.removeEventListener("mouseenter", handleMouseEnter);
      rootNode.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [emblaApi, handleMouseEnter, handleMouseLeave]);

  const onWheel = React.useCallback(
    (event: WheelEvent) => {
      if (!emblaApi) return;
      event.preventDefault();
      event.stopPropagation();
      if (event.deltaY > 0) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    // setSelectedIndex(newIndex);

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(
        (index - newIndex + loopProjects.length) % loopProjects.length
      );
      const wrappedDistance = Math.min(
        distance,
        loopProjects.length - distance
      );

      gsap.to(card, {
        scale: wrappedDistance === 0 ? 1 : wrappedDistance <= 1 ? 0.8 : 0.6,
        opacity: 1 - wrappedDistance * 0.2,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.rootNode().addEventListener("wheel", onWheel);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.rootNode().removeEventListener("wheel", onWheel);
    };
  }, [emblaApi, onSelect, onWheel]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full items-end justify-center flex mx-auto overflow-hidden"
    >
      <div className="overflow-hidden h-[600px]" ref={emblaRef}>
        <div className="flex items-center h-full">
          {loopProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex-[0_0_25%] min-w-0 px-2"
              initial={{ scale: 0.6, opacity: 0.6 }}
            >
              <Link href={`/work/${project.id}`}>
                <Card className="h-full shadow-lg cursor-pointer transition-shadow hover:shadow-xl">
                  <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${project.id}`}
                      alt={project.name}
                      width={650}
                      height={650}
                      className="rounded-full"
                    />
                    <h3 className="font-semibold text-lg mb-2 text-center">
                      {project.name}
                    </h3>
                    <p className="text-sm text-center text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
