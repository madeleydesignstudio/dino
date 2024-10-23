"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navbar";
import Component from "@/components/landing-page";
import Image from "next/image";
import Link from "next/link";
import VerticalFooter from "@/components/vertical-footer";
import ComicCover from "@/components/comic-cover";

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
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if it's the first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (hasVisited) {
      setIsFirstVisit(false);
      setLoading(false);
    } else {
      // Set the flag for future visits
      localStorage.setItem("hasVisitedBefore", "true");
    }

    // Simulate loading progress only on first visit
    if (isFirstVisit) {
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
    }
  }, [isFirstVisit]);

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
          <section className="h-[1080px] w-[1080px] flex items-center justify-center">
            <div className="relative h-full w-full border-r border-l border-stone-900">
              <Image
                src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_httpss.mj.runc-amOZgo1bo_httpss.mj.runqJ0F4h1q-_8_htt_d739a603-ef51-482a-98eb-fd688d6e5b8b_1.png?updatedAt=1729148536236"
                alt="Desert landscape"
                layout="fill"
                objectFit="cover"
                className="opacity-50 -z-10"
              />
              <div className="absolute inset-0 bg-stone-50/30 -z-5" />

              {/* Overlay divs */}
              <div className="flex flex-col h-screen">
                <div className=" h-full border-b border-stone-900">
                  <h1>Hello</h1>
                </div>
                <div className=" h-full">
                  <h1>Bye</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="h-screen items-center justify-center px-12 py-14 border-r border-stone-900">
            <h2 className="text-6xl font-nanum">Projects</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {["Structopia", "QuantumLeap", "NeoVerse", "EchoSphere"].map(
                (project, index) => (
                  <div key={index} className="mb-6">
                    <div className="border border-stone-900 w-[450px] h-[600px]"></div>
                    <h3 className="mt-2 text-2xl font-nanum">{project}</h3>
                  </div>
                )
              )}
            </div>
            <Link href="/portfolio">
              <p className="text-end font-nanum text-4xl ">
                All work <span className="ml-2">→</span>
              </p>
            </Link>
          </section>
          <section className="h-screen w-[900px] flex items-center justify-center">
            <div className="h-[900px] w-[900px] flex items-center justify-center">
              <ComicCover />
            </div>
          </section>
          <section className="h-screen w-[38rem] flex items-center justify-center">
            <VerticalFooter />
          </section>
        </div>
      </div>
    </div>
  );
}
