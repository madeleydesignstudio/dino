import React from "react";
import ProjectCarousel from "./_components/project-carousel";
const Portfolio = () => {
  return (
    <div className=" w-screen h-screen items-center justify-center flex flex-col">
      <h1 className="text-6xl font-bold mt-20 font-nanum">Work</h1>
      <p className="text-md font-karla mt-4">
        We are a team of designers and developers who are passionate about
        creating beautiful and functional websites.
      </p>
      <ProjectCarousel />
    </div>
  );
};

export default Portfolio;
