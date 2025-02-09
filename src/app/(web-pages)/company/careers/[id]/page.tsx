"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jobPositions } from "../jobPositions";

export default function JobPosition({ params }: { params: { id: string } }) {
  const position = jobPositions[params.id];

  if (!position) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Hero Section */}
      <div className="relative border-y border-stone-900 dark:border-stone-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-4"
          >
            <Link
              href="/company/careers"
              className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
            >
              ← Back to all positions
            </Link>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-nanum mb-6"
          >
            {position.title}
          </motion.h1>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.span
              variants={fadeInUp}
              className="px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-sm"
            >
              {position.location}
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-sm"
            >
              {position.type}
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-sm"
            >
              {position.department}
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-sm"
            >
              {position.salary}
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-nanum mb-4">About the Role</h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                {position.description}
              </p>
            </motion.section>

            <motion.section
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-nanum mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {position.responsibilities?.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start"
                  >
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-stone-600 dark:text-stone-400">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-nanum mb-4">Requirements</h2>
              <ul className="space-y-3">
                {position.requirements?.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start"
                  >
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-stone-600 dark:text-stone-400">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-stone-100 dark:bg-stone-800/50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-nanum mb-4">Benefits</h2>
              <ul className="space-y-3">
                {position.benefits?.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-stone-600 dark:text-stone-400 flex items-center"
                  >
                    <span className="text-indigo-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-stone-100 dark:bg-stone-800/50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-nanum mb-4">About the Team</h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                {position.aboutTeam}
              </p>
            </motion.section>

            <motion.section
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-stone-100 dark:bg-stone-800/50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-nanum mb-4">Application Process</h2>
              <ol className="space-y-3">
                {position.applicationProcess?.map((step, index) => (
                  <li
                    key={index}
                    className="text-stone-600 dark:text-stone-400 flex items-start"
                  >
                    <span className="text-indigo-500 mr-2 font-medium">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.section>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="sticky top-24"
            >
              <Link
                href={`/company/careers/${position.id}/apply`}
                className="block w-full text-center px-8 py-4 rounded-lg bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                Apply for this Position
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
