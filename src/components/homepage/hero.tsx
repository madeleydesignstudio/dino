import { ServerImage } from "@/components/universal/ServerImage";
import SlidingText from "@/components/homepage/SlidingText";
import { MusicPlayer } from "./music-player";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden h-full flex flex-col items-center justify-center">
        {/* Top Left - ID 4 */}
        <div className="absolute top-0 left-0">
          <ServerImage id={4} width={500} height={500} priority quality={100} />
        </div>

        {/* Top Right - ID 5 */}
        <div className="absolute top-0 right-0">
          <ServerImage id={5} width={600} height={600} priority quality={100} />
        </div>

        <div className="flex flex-col items-center justify-center gap-10 max-w-7xl">
          <div className="flex flex-col font-black uppercase ">
            <h1 className="text-9xl leading-none">We make</h1>
            <h1 className="text-[225px] text-accent leading-none -mt-8">
              Damn
            </h1>
          </div>
          <div>
            <ServerImage
              id={9}
              width={700}
              height={700}
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col font-black uppercase">
            <h1 className="text-9xl">Good Websites.</h1>
          </div>
        </div>
        <div className="absolute right-10 bottom-50">
          <MusicPlayer />
        </div>
      </section>
      <div className="absolute bottom-0 w-full">
        <SlidingText />
      </div>
    </>
  );
};
