import { motion } from "framer-motion";
import { Code2, Database, Lock, Rocket } from "lucide-react";

export default function EngineerHero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-stone-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05] blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-8xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-stone-50/[0.03] bg-stone-900/[0.03] border border-stone-900/[0.08] mb-8 md:mb-12"
          >
            <Code2 className="w-4 h-4" />
            <span className="text-sm text-stone-900 dark:text-stone-50 tracking-wide">
              Engineering Excellence
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-8xl font-nanum px-8">
              BUILDING THE FUTURE WITH SCALABLE SOLUTIONS
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-stone-900 dark:text-stone-50 mb-8 leading-relaxed font-light font-karla tracking-wide max-w-xl mx-auto px-4">
              From concept to deployment, we engineer robust solutions that
              stand the test of time.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-stone-900 via-transparent to-stone-50/80 dark:to-stone-900/80 pointer-events-none" />
    </div>
  );
}
