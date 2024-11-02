// "use client";

// import ComicCover from "@/components/landing-page/comic-cover";
// import FossilFiles from "@/components/landing-page/fossil-files";
// import Component from "@/components/landing-page/landing-page";
// import Navbar from "@/components/landing-page/navbar";
// import NewsletterForm from "@/components/landing-page/newsletter-signup";
// import ProjectInquiryForm from "@/components/landing-page/project-inquiry-form";
// import Projects from "@/components/landing-page/projects";
// import Tagline from "@/components/landing-page/tagline";
// import VerticalFooter from "@/components/landing-page/vertical-footer";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef, useState } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const LoadingSpinner = ({ progress }: { progress: number }) => (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900">
//     <div className="text-center">
//       <div className="w-16 h-16 border-4 border-t-4 border-stone-200 border-t-stone-500 rounded-full animate-spin"></div>
//       <p className="mt-4 text-stone-200 text-xl">{Math.round(progress)}%</p>
//     </div>
//   </div>
// );

// export default function HorizontalScrollLanding() {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [isFirstVisit, setIsFirstVisit] = useState(true);

//   // Add these form handlers inside the main component before the return statement:

//   useEffect(() => {
//     // Check if it's the first visit
//     const hasVisited = localStorage.getItem("hasVisitedBefore");
//     if (hasVisited) {
//       setIsFirstVisit(false);
//       setLoading(false);
//     } else {
//       // Set the flag for future visits
//       localStorage.setItem("hasVisitedBefore", "true");
//     }

//     // Simulate loading progress only on first visit
//     if (isFirstVisit) {
//       const interval = setInterval(() => {
//         setProgress((prevProgress) => {
//           const newProgress = prevProgress + 10;
//           if (newProgress >= 100) {
//             clearInterval(interval);
//             setTimeout(() => setLoading(false), 500); // Delay to show 100%
//             return 100;
//           }
//           return newProgress;
//         });
//       }, 200);

//       return () => clearInterval(interval);
//     }
//   }, [isFirstVisit]);

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         const newProgress = prevProgress + 10;
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           setTimeout(() => setLoading(false), 500); // Delay to show 100%
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 200);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       const pin = gsap.fromTo(
//         sectionRef.current,
//         {
//           translateX: 0,
//         },
//         {
//           translateX: "-500vw",
//           ease: "none",
//           duration: 1,
//           scrollTrigger: {
//             trigger: triggerRef.current,
//             start: "top top",
//             end: "2000 top",
//             scrub: 0.6,
//             pin: true,
//           },
//         }
//       );

//       return () => {
//         pin.kill();
//       };
//     }
//   }, [loading]);

//   if (loading) {
//     return <LoadingSpinner progress={progress} />;
//   }

//   return (
//     <div className="overflow-x-hidden">
//       <Navbar />

//       <div ref={triggerRef}>
//         <div ref={sectionRef}>
//           <Component />
//           <Tagline />
//           <FossilFiles />
//           <Projects />
//           <ComicCover />
//           <NewsletterForm />
//           <ProjectInquiryForm />
//           <VerticalFooter />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import ComicCover from "@/components/landing-page/comic-cover";
import FossilFiles from "@/components/landing-page/fossil-files";
import Component from "@/components/landing-page/landing-page";
import Navbar from "@/components/landing-page/navbar";
import NewsletterForm from "@/components/landing-page/newsletter-signup";
import ProjectInquiryForm from "@/components/landing-page/project-inquiry-form";
import Projects from "@/components/landing-page/projects";
import Tagline from "@/components/landing-page/tagline";
import VerticalFooter from "@/components/landing-page/vertical-footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      const sections = gsap.utils.toArray(".section");
      const totalWidth = sections.length * 100;

      const pin = gsap.to(sectionRef.current, {
        x: `-${totalWidth - 100}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${totalWidth}%`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, [loading]);

  if (loading) {
    return <LoadingSpinner progress={progress} />;
  }

  return (
    <div className="overflow-x-hidden bg-stone-50">
      <Navbar />

      <div ref={triggerRef} className="relative">
        <div ref={sectionRef} className="flex">
          <section className="section w-screen h-screen flex-shrink-0">
            <Component />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <Tagline />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <FossilFiles />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <Projects />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <ComicCover />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <NewsletterForm />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <ProjectInquiryForm />
          </section>

          <section className="section w-screen h-screen flex-shrink-0">
            <VerticalFooter />
          </section>
        </div>
      </div>
    </div>
  );
}
