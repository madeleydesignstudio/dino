"use client";

import ComicCover from "@/components/comic-cover";
import Component from "@/components/landing-page";
import Navbar from "@/components/navbar";
import NewsletterForm from "@/components/newsletter-signup";
import ProjectInquiryForm from "@/components/project-inquiry-form";
import VerticalFooter from "@/components/vertical-footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

  // Add these form handlers inside the main component before the return statement:

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
          translateX: "-500vw",
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
        <div ref={sectionRef} className="flex h-screen w-[500vw]">
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
                src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_pixar_styled_32bit_pixelated_dinosaur_themed_notice_b_ef872751-925f-4cff-8282-dde37a3891b2_3.png?updatedAt=1730037137765"
                alt="Desert landscape"
                layout="fill"
                objectFit="cover"
                className="opacity-50 -z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 to-stone-950/30 -z-5" />

              {/* Overlay divs */}
              <div className="absolute w-full h-screen flex items-end z-10">
                <div className="flex flex-col p-4">
                  <h1 className="text-8xl text-stone-50  font-nanum">
                    Fossil Files
                  </h1>
                  <p className="text-stone-50 text-sm max-w-sm">
                    Fossil Files is our comprehensive knowledge hub dedicated to
                    all facets of the web industry.
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 flex items-end">
                  <Link href="/fossil-files">
                    <img
                      src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg?updatedAt=1730029736000"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="h-screen flex items-center justify-center ">
            <Link href="/fossil-files?item=Frontend">
              <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[8rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
                <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
                  Frontend.
                </h1>
              </div>
            </Link>
            <Link href="/fossil-files?item=Backend">
              <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[8rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
                <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
                  Backend.
                </h1>
              </div>
            </Link>
            <Link href="/fossil-files?item=Design">
              <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[6.5rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
                <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
                  Design.
                </h1>
              </div>
            </Link>
            <Link href="/fossil-files?item=Market">
              <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[9rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
                <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
                  Marketing.
                </h1>
              </div>
            </Link>
          </section>
          <section className="h-screen items-center justify-center px-12 py-14 border-r border-stone-900">
            <h2 className="text-6xl font-nanum">Projects</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {["Structopia", "HJB Coaching", "Intor"].map((project, index) => (
                <div key={index} className="mb-6">
                  <div className="border border-stone-900 w-[450px] h-[600px]"></div>
                  <h3 className="mt-2 text-2xl font-nanum">{project}</h3>
                </div>
              ))}
            </div>
            <Link href="/portfolio">
              <p className="text-end font-nanum text-4xl ">
                All work <span className="ml-2">→</span>
              </p>
            </Link>
          </section>
          <section className="h-screen w-[900px] flex items-center justify-center p-12 ">
            <ComicCover />
          </section>
          <section className="h-screen flex flex-col items-center justify-center p-12">
            <NewsletterForm />
          </section>
          <section className="h-screen flex items-center justify-center p-12">
            <ProjectInquiryForm />
          </section>

          <section className=" h-screen flex items-center justify-center right-0">
            <VerticalFooter />
          </section>
        </div>
      </div>
    </div>
  );
}
