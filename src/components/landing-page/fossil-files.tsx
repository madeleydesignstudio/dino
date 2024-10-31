import Link from "next/link";
import Image from "next/image";

const FossilFiles = () => {
  return (
    <div>
      <div className="relative h-full w-full border-r border-l border-stone-900">
        <Image
          src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_pixar_styled_32bit_pixelated_dinosaur_themed_notice_b_ef872751-925f-4cff-8282-dde37a3891b2_3.png?updatedAt=1730037137765"
          alt="Desert landscape"
          layout="fill"
          objectFit="cover"
          className="opacity-50 -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 to-stone-950/30 -z-5" />

        {/* Overlay divs */}
        <div className="absolute w-full h-screen flex items-end z-10">
          <div className="flex flex-col p-4">
            <h1 className="text-8xl text-stone-50  font-nanum">Fossil Files</h1>
            <p className="text-stone-50 text-sm max-w-sm">
              Fossil Files is our comprehensive knowledge hub dedicated to all
              facets of the web industry.
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-end">
            <Link href="/fossil-files">
              <img
                src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg?updatedAt=1730029736000"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <section className="flex">
        <Link href="/fossil-files?item=Frontend">
          <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[8rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
            <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
              Frontend.
            </h1>
          </div>
        </Link>
        <Link href="/fossil-files?item=Backend">
          <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[8rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
            <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
              Backend.
            </h1>
          </div>
        </Link>
        <Link href="/fossil-files?item=Design">
          <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[6.5rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
            <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
              Design.
            </h1>
          </div>
        </Link>
        <Link href="/fossil-files?item=Market">
          <div className="w-[100px] h-screen bg-[#F9E4B3] border-r border-stone-900 flex items-end py-[9rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors">
            <h1 className="text-stone-900 text-6xl font-nanum -rotate-90">
              Marketing.
            </h1>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default FossilFiles;
