import { Separator } from "@/components/ui/separator";
import { ServerImage } from "@/components/universal/ServerImage";
import Image from "next/image";
import Link from "next/link";

export const SelectedWorkCaseStudies = () => {
  return (
    <>
      <div className="flex justify-center w-full py-20 px-5">
        <div className="w-full  flex h-full flex-col gap-10">
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full">
              <h2 className="font-black text-xl uppercase max-w-[190px]">
                Selected Work &{" "}
                <span className="text-neutral-500">Case Studies</span>
              </h2>
            </div>
            <div className="w-2/3 gap-6 text-right flex flex-col font-normal text-sm">
              <p>
                Every collaboration leads to something distinctive. By blending
                bold ideas, creative thinking, and strategic goals, we craft
                digital platforms that not only stand out — they help businesses
                grow.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full justify-center w-full items-center gap-5">
            <div className="flex w-full flex-col gap-5">
              <ServerImage
                id={15}
                width={1400}
                height={1400}
                priority
                quality={100}
              />
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">Structopia</h3>
                  <p>Creative Direction, Development</p>
                </div>
                <Link href="/casestudies/structopia" className="text-accent cursor-pointer">
                  {"----->"}
                </Link>
              </div>
            </div>
            <div className="items-center flex justify-center gap-5">
              <div className="flex flex-col gap-5">
                <ServerImage
                  id={14}
                  width={1200}
                  height={1200}
                  priority
                  quality={100}
                />
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">Ordo</h3>
                    <p>Creative Direction, Development</p>
                  </div>
                  <Link href="/casestudies/ordo" className="text-accent cursor-pointer">
                    {"----->"}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <ServerImage
                  id={16}
                  width={1200}
                  height={1200}
                  priority
                  quality={100}
                />
                <div className="flex justify-between ">
                  <div>
                    <h3 className="font-bold">Form + Function</h3>
                    <p>Creative Direction, Development</p>
                  </div>
                  <Link href="/casestudies/formfunction" className="text-accent ">
                    {"----->"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
