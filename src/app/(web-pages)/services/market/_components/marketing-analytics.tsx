"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    icon: "📈",
    title: "Performance Tracking",
    description:
      "Real-time monitoring of your marketing campaigns with detailed analytics and insights.",
  },
  {
    icon: "🎯",
    title: "Conversion Optimization",
    description:
      "Data-driven strategies to improve your conversion rates and ROI.",
  },
  {
    icon: "📊",
    title: "Custom Reporting",
    description:
      "Comprehensive reports tailored to your business goals and KPIs.",
  },
  {
    icon: "🔍",
    title: "Competitor Analysis",
    description:
      "Stay ahead with detailed market research and competitor benchmarking.",
  },
];

export default function MarketingAnalytics() {
  return (
    <div className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-nanum mb-6">Data-Driven Success</h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Our analytics-first approach ensures every marketing decision is
            backed by solid data, helping you achieve measurable results and
            sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-stone-100 dark:bg-stone-800/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">{metric.icon}</div>
              <h3 className="text-xl font-nanum text-stone-900 dark:text-stone-50 mb-2">
                {metric.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
