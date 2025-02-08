import React from "react";
import ProjectCarousel from "./_components/project-carousel";
const Portfolio = () => {
  return (
    <div className=" w-screen h-screen items-center justify-center flex flex-col">
      <h1 className="text-4xl font-bold mt-12">Work</h1>
      <ProjectCarousel />
    </div>
  );
};

export default Portfolio;
