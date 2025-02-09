"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { jobPositions } from "./jobPositions";

const openPositions = Object.values(jobPositions);

const Careers = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Hero Section */}
      <div className="relative h-[50vh] border-y border-stone-900 dark:border-stone-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-nanum text-center mb-6"
          >
            Join Our Prehistoric Revolution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg font-karla text-stone-600 dark:text-stone-400 max-w-2xl text-center"
          >
            Help us reshape the digital landscape with innovative design,
            cutting-edge technology, and prehistoric determination.
          </motion.p>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-nanum mb-4">Open Positions</h2>
          <p className="text-stone-600 dark:text-stone-400 font-karla">
            Join our pack and help us make the web prehistoric again
          </p>
        </motion.div>

        <div className="grid gap-6">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-stone-900/10 dark:border-stone-400/10 rounded-lg p-8 hover:border-stone-900/20 dark:hover:border-stone-400/20 transition-all duration-300 bg-stone-50 dark:bg-stone-900"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-nanum mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                      {position.location}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                      {position.type}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                      {position.department}
                    </span>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 text-sm max-w-2xl">
                    {position.description}
                  </p>
                </div>
                <Link
                  href={`/company/careers/${position.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors whitespace-nowrap"
                >
                  Apply Now
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
