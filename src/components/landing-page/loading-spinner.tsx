"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Component() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i: number) => ({
      pathLength: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2.5,
        times: [0, 0.5, 1],
        ease: "easeInOut",
        repeat: 0,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-stone-950/95 backdrop-blur-lg z-[9999] transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className="relative w-64 h-64">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M20,50 Q30,20 50,20 T80,50 T50,80 T20,50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            variants={pathVariants}
            custom={0}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M30,50 Q40,30 50,30 T70,50 T50,70 T30,50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            variants={pathVariants}
            custom={1}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M40,50 Q45,40 50,40 T60,50 T50,60 T40,50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            variants={pathVariants}
            custom={2}
            initial="initial"
            animate="animate"
          />
        </svg>
      </div>
    </div>
  );
}
