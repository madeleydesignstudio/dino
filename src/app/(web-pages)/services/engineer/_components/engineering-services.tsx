import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Lock,
  Rocket,
  Cloud,
  Smartphone,
  Cog,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function EngineeringServices() {
  return (
    <div className="min-h-screen bg-stone-900 dark:bg-stone-50">
      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-nanum text-stone-50 dark:text-stone-900">
            Our Engineering Expertise
          </h2>
          <p className="text-stone-300 dark:text-stone-600 leading-relaxed max-w-2xl">
            We specialize in building scalable, secure, and performant
            applications that drive business growth. Our engineering team
            combines technical excellence with innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Full-Stack Development",
              description:
                "End-to-end development using modern frameworks like Next.js, React, and Node.js. We build responsive, performant applications that scale.",
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Database Architecture",
              description:
                "Robust database design and implementation using SQL and NoSQL solutions. We ensure your data is structured, secure, and efficient.",
            },
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "Cloud Solutions",
              description:
                "Cloud-native development and migration services using AWS, Azure, or GCP. We optimize for scalability and cost-efficiency.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Security & Authentication",
              description:
                "Implementation of robust security measures and authentication systems to protect your applications and user data.",
            },
            {
              icon: <Smartphone className="w-6 h-6" />,
              title: "API Development",
              description:
                "Design and development of RESTful APIs and GraphQL endpoints that power your applications and enable seamless integration.",
            },
            {
              icon: <Cog className="w-6 h-6" />,
              title: "DevOps & CI/CD",
              description:
                "Automated deployment pipelines and infrastructure management to ensure smooth, reliable operations.",
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              title: "Performance Optimization",
              description:
                "Advanced optimization techniques to ensure your applications run at peak performance under any load.",
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: "Technical Consultation",
              description:
                "Expert guidance on architecture decisions, technology selection, and best practices for your projects.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-stone-700 hover:border-stone-600 transition-colors bg-stone-800/50 backdrop-blur-sm dark:bg-stone-100/50"
            >
              <div className="text-stone-50 dark:text-stone-900 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-nanum text-stone-50 dark:text-stone-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-stone-300 dark:text-stone-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 pt-12 border-t border-stone-700">
          <h2 className="text-3xl font-nanum text-stone-50 dark:text-stone-900">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-stone-300 dark:text-stone-600 max-w-2xl mx-auto">
            Let's collaborate to create powerful, scalable solutions that drive
            your business forward.
          </p>
          <Link href="/contact">
            <button className="bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-50 px-8 py-4 rounded-lg font-karla hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors">
              Start Your Project →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
