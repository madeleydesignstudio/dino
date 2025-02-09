"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📊",
    title: "Analytics & Data",
    description:
      "Transform raw data into actionable insights with comprehensive analytics solutions.",
    features: [
      "User Behavior Analysis",
      "Conversion Tracking",
      "Performance Metrics",
      "Custom Reporting",
    ],
  },
  {
    icon: "✉️",
    title: "Email Marketing",
    description:
      "Build meaningful relationships with your audience through targeted email campaigns.",
    features: [
      "Campaign Strategy",
      "Automation Flows",
      "A/B Testing",
      "Performance Analytics",
    ],
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description:
      "Improve your search visibility and drive organic traffic to your website.",
    features: [
      "Technical SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
  },
  {
    icon: "📱",
    title: "Social Media",
    description:
      "Engage your audience where they are with compelling social media strategies.",
    features: [
      "Content Creation",
      "Community Management",
      "Paid Advertising",
      "Performance Tracking",
    ],
  },
];

export default function MarketingServices() {
  return (
    <div className="py-24 bg-stone-900 dark:bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-xl border border-stone-800 dark:border-stone-200 hover:border-stone-700 dark:hover:border-stone-300 transition-colors"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-nanum text-stone-50 dark:text-stone-900 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-400 dark:text-stone-600 mb-6">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-stone-500 dark:text-stone-500 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-stone-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
