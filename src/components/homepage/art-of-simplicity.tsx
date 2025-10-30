import { ServerImage } from "@/components/universal/ServerImage";
import { Separator } from "@/components/universal/separator";

export const ArtOfSimplicity = () => {
  return (
    <>
      <div className="flex justify-center w-full pb-20 px-5 pt-72">
        <div className="w-full  flex h-full flex-col gap-10 justify-center items-center">
          <div className="w-full">
            <h2 className="font-black text-3xl uppercase text-start pl-2">
              We believe in the
            </h2>
          </div>

          <div className="-mt-12 flex items-end gap-4">
            <h2 className="font-black text-6xl uppercase">art of impactful</h2>
            <ServerImage
              id={13}
              width={500}
              height={500}
              priority
              quality={100}
              className="absolute right-[18%] mb-15"
            />
            <h2 className="font-black text-7xl uppercase text-accent">
              simplicity.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
