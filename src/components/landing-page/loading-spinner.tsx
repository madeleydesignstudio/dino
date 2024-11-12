"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Component() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Changed from 3000ms to 2500ms

    return () => clearTimeout(timer);
  }, []);

  const ringVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: (i: number) => ({
      scale: [0.5, 1, 0.5],
      opacity: [0, 0.5, 0],
      transition: {
        duration: 1.5 + i * 0.25, // Adjusted proportionally from 1.8 + i * 0.3
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-stone-900/95 backdrop-blur-lg z-[9999] transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className="relative w-64 h-64">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 border border-white rounded-full"
            style={{ borderWidth: "1px" }}
            variants={ringVariants}
            custom={index}
            initial="initial"
            animate="animate"
          />
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.5, // Adjusted from 3 to match new total duration
            times: [0, 0.2, 0.7, 1],
            ease: "easeInOut",
          }}
        >
          <span className="text-white text-5xl font-karla font-bold tracking-wider">
            DINO
          </span>
        </motion.div>
      </div>
    </div>
  );
}
