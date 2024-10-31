import Image from "next/image";
import Link from "next/link";
import HyperText from "../ui/hyper-text";

export default function Component() {
  return (
    <>
      <div className="relative h-screen">
        {/* White background (1/3 width) */}
        <div className="absolute left-0 top-0 h-full w-1/3 bg-white border-r border-stone-900" />

        {/* Photo background (2/3 width) */}
        <div className="absolute left-1/3 top-0 h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_httpss.mj.runmHocz22p-iQ_Rick_and_morty_styled_pixel__95d55bd2-f449-4bc4-9ea9-ade80d3360c9_0.png?updatedAt=1729106463251"
              alt="Desert landscape"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
            <div className="absolute inset-0 bg-stone-50/30" />{" "}
          </div>
        </div>

        <div className="relative z-10 flex h-full w-screen -mr-6 flex-col justify-between">
          <main className="">
            <h2 className="pt-[1.5rem] text-[10.41rem] font-nanum pr-12 pl-6 text-center">
              <HyperText text="Architects of the web." className="font-nanum" />
            </h2>
            <div className=" border-b border-stone-900 mr-6"></div>
            <p className="text-7xl font-nanum pl-[34%] max-w-[65%] pt-6">
              &quot;Big agency thinking, small agency attitude.&quot;
            </p>
          </main>

          <footer className="flex items-center justify-between">
            <div className="flex">
              <p className="font-bold text-7xl font-karla">DINO</p>
              <div className="flex flex-col">
                <p className="text-xs font-karla">51.5072° N, 0.1276° W</p>
                <p className="text-xs font-karla">UK DESIGN STUDIO</p>
              </div>
            </div>
            <p className="text-4xl mr-12 font-nanum">
              Scroll <span className="ml-2">→</span>
            </p>
          </footer>
        </div>
      </div>
      <div className=" w-[568px] h-screen border-r border-l border-stone-900 z-10">
        <Link href="/services/design">
          <div className="h-1/3 flex flex-col justify-end pb-6 px-6 border-b border-stone-900 hover:bg-stone-200/50">
            <h2 className="text-7xl  mb-2 font-nanum">Design</h2>
            <p className="text-xs">
              Elevate your digital experience and delight every user. It all
              starts here.
            </p>
          </div>
        </Link>

        <Link href="/services/engineer">
          <div className="h-1/3 flex flex-col justify-end pb-6 px-6 border-b border-stone-900 hover:bg-stone-200/50">
            <h2 className="text-7xl  mb-2 font-nanum">Engineer</h2>
            <p className="text-xs">
              Make zero comprises when implementing your vision, using a
              powerful tech stack.
            </p>
          </div>
        </Link>

        <Link href="/services/market">
          <div className="h-1/3 flex flex-col justify-end pb-6 px-6 border-b border-stone-900 hover:bg-stone-200/50">
            <h2 className="text-7xl  mb-2 font-nanum">Market</h2>
            <p className="text-xs">
              Your deadline is our deadline. Your success is our success.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
