import { Separator } from "@/components/universal/separator";
import { ServerImage } from "@/components/universal/ServerImage";
import Link from "next/link";

export const Clients = () => {
  return (
    <>
      <div className="flex justify-center p-4">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-black text-xl uppercase">Clients</h2>
            <Link href="/clients" className="text-accent">
              work with us {"----->"}
            </Link>
          </div>
          <div className="flex w-full justify-between max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-64 h-64 bg-accent rounded-xl">
                {" "}
                <ServerImage
                  id={23}
                  width={300}
                  height={300}
                  priority
                  quality={100}
                />
              </div>
              <h3>madeleydesignstudio</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-64 h-64 bg-accent rounded-xl">
                {" "}
                <ServerImage
                  id={25}
                  width={300}
                  height={300}
                  priority
                  quality={100}
                />
              </div>
              <h3>Form + Function</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-64 h-64 bg-accent rounded-xl">
                {" "}
                <ServerImage
                  id={26}
                  width={300}
                  height={300}
                  priority
                  quality={100}
                />
              </div>
              <h3>Ordo</h3>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-20 bg-[#D9E0C1] max-w-7xl mx-auto" />
    </>
  );
};
