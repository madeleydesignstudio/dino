import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <section className="h-screen items-center justify-center px-12 py-14 border-r border-stone-900">
        <h2 className="text-6xl font-nanum">Projects</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {["Structopia", "HJB Coaching", "Intor"].map((project, index) => (
            <div key={index} className="mb-6">
              <div className="border border-stone-900 w-[450px] h-[600px]"></div>
              <h3 className="mt-2 text-2xl font-nanum">{project}</h3>
            </div>
          ))}
        </div>
        <Link href="/portfolio">
          <p className="text-end font-nanum text-4xl">
            All work <span className="ml-2">→</span>
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Projects;
