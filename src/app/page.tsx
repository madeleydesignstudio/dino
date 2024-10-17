"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navbar";
import Component from "@/components/landing-page";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const LoadingSpinner = ({ progress }: { progress: number }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-4 border-stone-200 border-t-stone-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-stone-200 text-xl">{Math.round(progress)}%</p>
    </div>
  </div>
);

export default function HorizontalScrollLanding() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Delay to show 100%
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );

      return () => {
        pin.kill();
      };
    }
  }, [loading]);

  if (loading) {
    return <LoadingSpinner progress={progress} />;
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div ref={triggerRef} className="h-screen">
        <div ref={sectionRef} className="flex h-screen w-[400vw]">
          <section className="h-full flex items-center">
            <Component />
          </section>
          <section className="h-full flex items-center justify-center">
            <h2 className="text-7xl font-nanum max-w-3xl px-6  text-center">
              Visionary Innovators Shaping the Future of the Internet through
              Artificial Intelligence.
            </h2>
          </section>
          <section className="h-[1080px] w-[1080px]  flex items-center justify-center">
            <div className="relative h-full w-full border-r border-l border-stone-900">
              <Image
                src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_httpss.mj.runc-amOZgo1bo_httpss.mj.runqJ0F4h1q-_8_htt_d739a603-ef51-482a-98eb-fd688d6e5b8b_1.png?updatedAt=1729148536236"
                alt="Desert landscape"
                layout="fill"
                objectFit="cover"
                className="opacity-50 -z[9999]"
              />
              <div className="absolute inset-0 bg-stone-50/30 -z-[1000]" />
            </div>
          </section>
          <section className="h-full  items-center justify-center px-12 py-12 border-r border-stone-900">
            <h2 className="text-6xl font-nanum ">Projects</h2>
            <div className="flex items-center justify-center gap-6">
              <div className="border border-stone-900 w-[450px] h-[650px] mt-12"></div>
              <div className="border border-stone-900 w-[450px] h-[650px]"></div>
              <div className="border border-stone-900 w-[450px] h-[650px] mt-12"></div>
              <div className="border border-stone-900 w-[450px] h-[650px]"></div>
            </div>
            <p className="text-end font-nanum text-4xl">
              All work <span className="ml-2">→</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
