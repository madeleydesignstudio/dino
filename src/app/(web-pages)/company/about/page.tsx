"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants remain the same
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-stone-50 dark:bg-stone-900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Hero Section */}
      <div className="relative h-[30vh] border-b border-stone-900 dark:border-stone-500 overflow-hidden">
        <motion.div
          className="absolute w-1/3 h-full border-r border-stone-900 dark:border-stone-500 bg-stone-50/30 dark:bg-stone-800/30"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-2/3 h-full border-r border-stone-900 dark:border-stone-500 bg-stone-50/20 dark:bg-stone-800/20"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <div className="relative z-10 h-full flex items-center justify-center pt-[50px]">
          <motion.h1
            className="text-8xl font-nanum text-stone-900 dark:text-stone-50 px-8 text-center tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div className="space-y-16" variants={staggerChildren}>
          {/* Introduction */}
          <motion.div className="space-y-6" variants={slideUp}>
            <p className="text-xl font-nanum leading-relaxed text-stone-800 dark:text-stone-200 backdrop-blur-sm">
              The digital landscape is constantly evolving, with countless tools
              and technologies shaping how we create for the web. From content
              management systems like WordPress to design tools like Figma, and
              development frameworks that power modern applications - each plays
              a crucial role in crafting digital experiences.
            </p>
          </motion.div>

          {/* Main Story */}
{/*           <motion.div
            className="space-y-8 text-stone-600 dark:text-stone-400"
            variants={staggerChildren}
          >
            {[
              "In Cardiff, 2022, an unexpected partnership formed between a structural engineer with a background in technology and a marketing strategist with international experience. Their diverse backgrounds - his in engineering and web development, hers in strategic marketing with award-winning academic research - revealed a gap in the digital industry.",
              "They noticed that while many agencies excelled in either design, development, or marketing, few successfully integrated all three. This observation led to the founding of The Digital Dino in London, built on the principle that exceptional digital presence requires expertise across all these domains.",
              "Starting from a small London apartment, they bootstrapped their agency from the ground up. Every aspect of the business, including their website, was crafted in-house - a testament to their hands-on approach and technical capabilities. This foundation of self-reliance and technical expertise continues to define their work today.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="leading-relaxed text-sm hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-300"
                variants={slideUp}
              >
                {text}
              </motion.p>
            ))}
          </motion.div> */}

          {/* Conclusion */}
          <motion.div
            className="pt-8 border-t border-stone-200 dark:border-stone-700"
            variants={slideUp}
          >
            <p className="text-lg font-nanum leading-relaxed text-stone-800 dark:text-stone-200 backdrop-blur-sm">
              The Digital Dino now operates as a boutique digital agency,
              offering comprehensive solutions that bridge the gap between
              design, engineering, and marketing. Their approach remains deeply
              rooted in their original vision: creating digital experiences that
              are technically sound, visually compelling, and strategically
              effective.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
