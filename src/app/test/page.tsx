"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navbar";
import RedNavbar from "@/components/red-navbar";
import Component from "@/components/landing-page";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollLanding() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const verticalSectionRef = useRef(null);
  const redSectionRef = useRef(null);
  const [isVerticalSection, setIsVerticalSection] = useState(false);
  const [isRedSection, setIsRedSection] = useState(false);

  useEffect(() => {
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

    const verticalScroll = ScrollTrigger.create({
      trigger: verticalSectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => setIsVerticalSection(true),
      onLeaveBack: () => setIsVerticalSection(false),
      scrub: true,
    });

    const redSection = ScrollTrigger.create({
      trigger: redSectionRef.current,
      start: "top center",
      end: "bottom bottom",
      onEnter: () => setIsRedSection(true),
      onLeaveBack: () => setIsRedSection(false),
      scrub: true,
    });

    return () => {
      pin.kill();
      verticalScroll.kill();
      redSection.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar
        isVerticalSection={isVerticalSection}
        isRedSection={isRedSection}
      />
      <RedNavbar isRedSection={isRedSection} />
      <div ref={triggerRef} className="h-screen">
        <div ref={sectionRef} className="flex h-screen w-[400vw]">
          <section className="h-full flex items-center">
            <Component />
          </section>
          <section className="h-full w-screen flex items-center justify-center ">
            <h2 className="text-3xl font-semibold">Discover Our Features</h2>
          </section>
          <section className="h-full w-screen flex items-center justify-center bg-accent text-accent-foreground">
            <h2 className="text-3xl font-semibold">See Our Products</h2>
          </section>
          <section className="h-full w-screen flex items-center justify-center bg-muted text-muted-foreground">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
          </section>
        </div>
      </div>
      <div ref={verticalSectionRef} className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Vertical Scrolling Content
          </h2>
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
                Sed aliquam dictum sapien, id sagittis augue malesuada eu.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">
                Consectetur adipiscing elit. Nullam id felis et ipsum bibendum
                ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien,
                id sagittis augue malesuada eu.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div ref={redSectionRef} className="min-h-screen bg-red-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-red-800">
            Red Section Content
          </h2>
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-red-700">
                New Features
              </h3>
              <p className="text-red-600">
                Explore our latest features designed to enhance your experience.
                We&apos;ve listened to your feedback and implemented
                cutting-edge solutions to meet your needs.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-red-700">
                Success Stories
              </h3>
              <p className="text-red-600">
                Read about how our clients have achieved remarkable results
                using our platform. Their success stories inspire us to
                continually innovate and improve our offerings.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-red-700">
                Future Plans
              </h3>
              <p className="text-red-600">
                Get a sneak peek into our roadmap for the future. We&apos;re
                committed to staying ahead of the curve and bringing you the
                most advanced solutions in the industry.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
