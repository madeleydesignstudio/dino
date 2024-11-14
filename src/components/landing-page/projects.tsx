import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <section className="h-full items-center justify-center px-12 py-14 border-r border-stone-900 dark:border-stone-400">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-nanum"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {["Structopia", "HJB Coaching", "Intor"].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-6"
            >
              <div className="border border-stone-900 dark:border-stone-400 w-[300px] sm:w-[450px] h-[400px] sm:h-[600px]"></div>
              <h3 className="mt-2 text-2xl font-nanum">{project}</h3>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/work">
            <p className="text-end font-nanum text-4xl">
              All work <span className="ml-2">→</span>
            </p>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
