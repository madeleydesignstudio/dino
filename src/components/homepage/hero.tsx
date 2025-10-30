import { ServerImage } from "@/components/universal/ServerImage";
import SlidingText from "@/components/homepage/SlidingText";
import { MusicPlayer } from "./music-player";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2.5 max-w-7xl w-full h-screen ">
        <div className="flex flex-col font-black uppercase ">
          <h1 className="text-8xl leading-none text-center">We make</h1>
          <h1 className="text-[170px] text-accent leading-none -mt-8 text-center">
            Damn
          </h1>
        </div>
        <div>
          <ServerImage id={9} width={625} height={625} priority quality={100} />
        </div>
        <div className="flex flex-col font-black uppercase items-center justify-center">
          <h1 className="text-8xl text-center">Good Websites.</h1>
        </div>
      </div>
    </>
  );
};
