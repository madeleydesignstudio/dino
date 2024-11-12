import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const Tagline = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex items-center justify-center max-w-3xl mx-auto h-screen border-r border-stone-900 dark:border-stone-300 backdrop-blur-sm ">
        <h2 className="text-7xl font-nanum px-6 text-center">
          Visionary Innovators Shaping the Future of the Internet through
          Artificial Intelligence.
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Tagline;
