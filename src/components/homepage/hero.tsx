import { ServerImage } from "@/components/universal/ServerImage";
import SlidingText from "@/components/homepage/SlidingText";
import { MusicPlayer } from "./music-player";

export const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden h-screen flex flex-col items-center justify-end ">
        {/* Top Left - ID 4 */}
        {/*<div className="absolute top-0 left-0">
          <ServerImage id={4} width={200} height={200} priority quality={100} />
        </div>*/}

        {/* Top Right - ID 5 */}
        {/*<div className="absolute top-0 right-0">
          <ServerImage id={5} width={300} height={300} priority quality={100} />
        </div>*/}

        <div className="flex flex-col items-center justify-center gap-5 max-w-7xl w-full  ">
          <div className="flex flex-col font-black uppercase ">
            <h1 className="text-8xl leading-none text-center">We make</h1>
            <h1 className="text-[170px] text-accent leading-none -mt-8 text-center">
              Damn
            </h1>
          </div>
          <div>
            <ServerImage
              id={9}
              width={625}
              height={625}
              priority
              quality={100}
            />
          </div>
          <div className="flex flex-col font-black uppercase items-center justify-center">
            <h1 className="text-8xl text-center">Good Websites.</h1>
          </div>
        </div>
        {/*<div className="absolute right-10 bottom-50">
          <MusicPlayer />
        </div>*/}
      </section>
    </>
  );
};
