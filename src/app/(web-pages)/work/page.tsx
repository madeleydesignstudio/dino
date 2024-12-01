import React from "react";
import ProjectCarousel from "./_components/project-carousel";

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className=" max-w-7xl mx-auto justify-start w-full flex flex-col">
        <h1 className="text-4xl pt-[75px] font-nanum ">Work</h1>
        <p className="text-xs pt-4 max-w-md font-karla">
          We are a design studio based in London, UK. We specialise in creating
          beautiful, functional websites and apps.
        </p>
        <p className="text-xs pt-4 max-w-md font-karla">
          Check out some of our work below.
        </p>
      </div>
      <ProjectCarousel />
    </div>
  );
};

export default Portfolio;
