"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Component() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-stone-50 dark:bg-stone-900 z-[99999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Loading bar container */}
            <div className="relative w-[300px] h-[1.5em]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                className="absolute inset-0 bg-stone-900 dark:bg-stone-50"
                style={{
                  transformOrigin: "left center",
                }}
              />
              {/* Percentage text */}
              <div
                className={`absolute inset-0 flex items-center justify-center font-mono text-lg font-bold transition-colors duration-300 ${
                  progress > 45
                    ? "text-stone-50 dark:text-stone-900"
                    : "text-stone-900 dark:text-stone-50"
                }`}
              >
                {progress}%
              </div>
            </div>

            {/* DINO text */}
            <div className="flex items-center justify-center text-[150px] font-bold text-stone-900 dark:text-stone-50 tracking-tighter">
              <h1 className="text-center">DINO</h1>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
