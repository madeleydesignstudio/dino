import { ServerImage } from "@/components/universal/ServerImage";
import SlidingText from "@/components/homepage/SlidingText";
import { MusicPlayer } from "./music-player";

/**
 * Hero section component for the homepage
 * Features the main heading, central diamond image, and call-to-action
 */
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2.5 w-full h-screen">
      {/* Main heading - top part */}
      <header className="flex flex-col font-black uppercase">
        <h1 className="md:text-8xl leading-none text-center">We make</h1>
        <h1 className="md:text-[170px] text-accent leading-none -mt-8 text-center">
          Damn
        </h1>
      </header>

      {/* Central diamond image */}
      <div className="flex items-center justify-center">
        <ServerImage id={9} width={625} height={625} priority quality={100} />
      </div>

      {/* Main heading - bottom part */}
      <div className="flex flex-col font-black uppercase items-center justify-center">
        <h1 className="md:text-8xl text-center">Good Websites.</h1>
      </div>
    </section>
  );
};
