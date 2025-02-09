"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your business goals, target audience, and current marketing performance.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Creating a customized marketing plan aligned with your objectives and market opportunities.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Executing the strategy across chosen channels with continuous optimization and refinement.",
  },
  {
    number: "04",
    title: "Measurement & Optimization",
    description:
      "Regular monitoring and adjustments to ensure maximum ROI and campaign effectiveness.",
  },
];

export default function MarketingProcess() {
  return (
    <div className="py-24 bg-stone-900 dark:bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-nanum text-stone-50 dark:text-stone-900 mb-6">
            Our Process
          </h2>
          <p className="text-stone-400 dark:text-stone-600 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional marketing results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-6 left-0 text-6xl font-bold text-stone-800/10 dark:text-stone-200/10">
                {step.number}
              </div>
              <div className="pt-8 p-6 rounded-lg border border-stone-800 dark:border-stone-200 bg-stone-800/50 dark:bg-stone-100/50 backdrop-blur-sm">
                <h3 className="text-xl font-nanum text-stone-50 dark:text-stone-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-400 dark:text-stone-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
