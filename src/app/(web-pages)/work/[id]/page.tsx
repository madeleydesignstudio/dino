"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "../_components/project-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const currentIndex = projects.findIndex((p) => p.id.toString() === params.id);
  const project = projects[currentIndex];

  const navigateToProject = (direction: "prev" | "next") => {
    let newIndex = currentIndex;
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    } else {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    }
    router.push(`/work/${projects[newIndex].id}`);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-nanum">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full border-b border-stone-900 dark:border-stone-400">
        {/* Navigation Buttons */}
        <button
          onClick={() => navigateToProject("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 text-stone-50 hover:text-stone-300 transition-colors"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => navigateToProject("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 text-stone-50 hover:text-stone-300 transition-colors"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute inset-0">
          <Image
            src={`/placeholder.svg?height=1080&width=1920&text=${project.id}`}
            alt={project.name}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-stone-950/30 backdrop-blur-sm" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-nanum text-stone-50"
            >
              {project.name}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-xl font-karla text-stone-600 dark:text-stone-400 leading-relaxed">
            {project.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
