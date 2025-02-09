"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MarketingCTA() {
  return (
    <div className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm" />

          <div className="relative p-12 md:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-nanum mb-6">
                Ready to Grow Your Digital Presence?
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
                Let's create a marketing strategy that drives results and
                delivers real business value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                >
                  Start Your Project
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-stone-900 dark:border-stone-50 text-stone-900 dark:text-stone-50 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
