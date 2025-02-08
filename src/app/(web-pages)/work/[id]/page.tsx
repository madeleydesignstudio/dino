"use client";

import { useParams } from "next/navigation";
import { projects } from "../_components/project-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.id.toString() === params.id);

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
