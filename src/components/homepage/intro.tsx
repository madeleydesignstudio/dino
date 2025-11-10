import { Separator } from "../universal/separator";
import { ServerImage } from "@/components/universal/ServerImage";

export const Intro = () => {
  return (
    <>
      <div className="flex justify-center w-full py-20 px-5 ">
        <div className="w-full md:flex h-full md:items-end gap-20">
          <div className="md:w-1/2 h-full flex flex-col gap-5 justify-end pb-5 md:pb-0">
            <div className="flex flex-col gap-5">
              <p className="font-normal">
                We’re Dino — a creative team focused on crafting bespoke
                websites that launch startups swiftly, seamlessly, and with
                refined style.
              </p>
              <p className="text-neutral-500 font-normal">
                Driven by your goals and powered by our inventive thinking, we
                build digital experiences that stand out, leave a lasting
                impression, and reflect your unique vision and ambition.
              </p>
            </div>
            <div className=" h-full bg-[#D9E0C1] rounded-xl p-4">
              <ServerImage
                id={11}
                width={600}
                height={600}
                priority
                quality={100}
              />
              <div className="p-4 text-neutral-700">
                <h3 className="uppercase text-xl font-black">Ordo</h3>
                <p className="text-sm font-normal ">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                  eget aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed euismod, nisl eget aliquam
                  aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget
                  nisl.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 h-full bg-[#D9E0C1] rounded-xl p-4 flex flex-col justify-end">
            <div className="p-4 text-neutral-700">
              <p className="text-sm font-normal ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget
                aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed euismod, nisl eget aliquam
                aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget
                nisl.
              </p>
              <h3 className="uppercase text-xl font-black">Form + Function</h3>
            </div>
            <ServerImage
              id={12}
              width={600}
              height={600}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
