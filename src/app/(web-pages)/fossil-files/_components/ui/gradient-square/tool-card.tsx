import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "motion/react";
import { useState } from "react";
import { toolCardVariants } from "./animations";

interface ToolCardProps {
  tool:
    | string
    | {
        name: string;
        url: string;
        description: string;
        logo?: string;
      };
}

export function ToolCard({ tool }: ToolCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle case where tool is a string
  if (typeof tool === "string") {
    return (
      <>
        <motion.div
          key={tool}
          className="group relative p-6 bg-gradient-to-br from-white/50 to-white/30 dark:from-stone-800/50 dark:to-stone-800/30 backdrop-blur-sm rounded-2xl border border-stone-200/50 dark:border-stone-700/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          variants={toolCardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 400 }}
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex items-center gap-4">
            {tool && (
              <div className="relative flex-shrink-0 w-12 h-12 bg-stone-50 dark:bg-stone-700 rounded-xl p-2.5 shadow-sm group-hover:shadow transition-shadow duration-300">
                <img
                  src={tool}
                  alt={`${tool} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300">
                {tool}
              </h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400 line-clamp-1">
                {tool}
              </p>
            </div>
          </div>
        </motion.div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader className="space-y-4">
              <DialogTitle className="flex items-center gap-4">
                {tool && (
                  <div className="relative flex-shrink-0 w-14 h-14 bg-stone-50 dark:bg-stone-700 rounded-xl p-3 shadow-sm">
                    <img
                      src={tool}
                      alt={`${tool} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
                    {tool}
                  </h2>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                {tool}
              </p>

              <div className="flex justify-end">
                <a
                  href={tool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
