"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-stone-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.05] via-transparent to-indigo-500/[0.05] blur-3xl" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated 404 text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-[12rem] font-nanum leading-none text-stone-900 dark:text-stone-50">
              404
            </h1>
          </motion.div>

          {/* Dinosaur emoji with bounce animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center mb-8"
          >
            <span className="text-8xl">🦖</span>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-nanum mb-4 text-stone-900 dark:text-stone-50">
              Looks Like This Page Is Extinct
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-karla">
              The page you&apos;re looking for has vanished into the digital
              fossil record.
            </p>
          </motion.div>

          {/* Action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button
              variant="outline"
              className="border-stone-900 dark:border-stone-50 text-stone-900 dark:text-stone-50 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900"
              onClick={() => router.back()}
            >
              ← Go Back
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative border overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-px bg-stone-900/10 dark:bg-stone-50/10" />
        <div className="absolute right-0 top-0 h-full w-px bg-stone-900/10 dark:bg-stone-50/10" />
        <div className="absolute top-0 left-0 w-full h-px bg-stone-900/10 dark:bg-stone-50/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-stone-900/10 dark:bg-stone-50/10" />
      </div>
    </div>
  );
}
