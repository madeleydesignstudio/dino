'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Timeline from '../ui/timeline';

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (logoRef.current) {
      // Create scroll-triggered spinning animation
      gsap.to(logoRef.current, {
        rotation: 360,
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Makes the animation smooth and tied to scroll position
        },
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const timelineData = [
    {
      title: '66 Million Years Ago - Cretaceous-Paleogene Extinction Event',
      description:
        'A 6-mile-wide asteroid crashes the dinosaurs; 165-million-year house party in spectacular fashion. T-Rex, who had finally figured out how to open doors with those tiny arms, becomes very upset about the timing. Mammals emerge from hiding like "Finally, our moment has come!"',
    },
    {
      title: '1993 - Jurassic Park Released',
      description:
        'Steven Spielberg convinces the world that dinosaurs were terrifying murder machines instead of the feathered bird-ancestors they actually were. Velociraptors everywhere roll over in their fossil beds as Hollywood makes them 3 times bigger and infinitely more dramatic than they ever were in real life.',
    },
    {
      title: '2025-Present - Dino was born',
      description:
        'Dinos have been resurrected with vengeance to help guarantee you digital success. The design and build you lighting fast websites to optimise your digital presence.',
    },
  ];

  return (
    <div>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Description - Mobile */}
        <div className="flex flex-col gap-4 px-4 pb-6">
          <p className="text-sm">
            We&apos;re <span className="font-bold">Dino</span> — a creative team
            focused on crafting bespoke websites that launch startups swiftly,
            seamlessly, and with refined style.
          </p>
          <p className="text-sm">
            Driven by your goals and powered by our inventive thinking, we build
            digital experiences that stand out, leave a lasting impression, and
            reflect your unique vision and ambition.
          </p>
          <p className="text-[10px] text-neutral-500">
            We&apos;re now welcoming new projects and partnerships for 2025.{' '}
            <br />
            <span className="font-bold underline">Let&apos;s connect.</span>
          </p>
        </div>

        {/* Timeline - Mobile */}
        <div className="flex justify-center px-4 pb-6">
          <Timeline items={timelineData} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mx-4 hidden items-end justify-between md:flex">
        {/* Description - Desktop */}
        <div className="flex w-1/3 flex-col gap-4 pb-4">
          <p className="text-neutral-900 text-sm">
            We&apos;re <span className="font-bold">Dino</span> — a creative team
            focused on crafting bespoke websites that launch startups swiftly,
            seamlessly, and with refined style.
          </p>
          <p className="text-neutral-500 text-sm">
            Driven by your goals and powered by our inventive thinking, we build
            digital experiences that stand out, leave a lasting impression, and
            reflect your unique vision and ambition.
          </p>
          <p className="text-[10px] text-neutral-500">
            We&apos;re now welcoming new projects and partnerships for 2025.{' '}
            <br />
            <span className="font-bold underline">Let&apos;s connect.</span>
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="flex w-2/3 translate-y-[25px] items-end justify-center">
          <Timeline items={timelineData} />
        </div>
      </div>

      {/* Image - Both Mobile and Desktop */}
      <AspectRatio className="mx-4" ratio={16 / 9}>
        <Image
          alt="Ordo Banner"
          fill
          src={'https://storage.dev-0af.workers.dev/ordo-mockup3.jpeg'}
        />
      </AspectRatio>

      {/* Bottom Section - Both Mobile and Desktop */}
      <div className="flex w-full items-start justify-between px-4 pt-8">
        <h2 className="max-w-2xl text-3xl">
          A design and development studio — intentionally small, inherently
          bold. We partner with brands to shape digital experiences that engage,
          inspire, and leave a lasting impression.
        </h2>
        <Image
          alt="Ordo Banner"
          height={50}
          ref={logoRef}
          src={'https://storage.dev-0af.workers.dev/dino-logo.png'}
          width={50}
        />
      </div>
    </div>
  );
};

export default Hero;
