import { Separator } from "@/components/universal/separator";
import { ServerImage } from "@/components/universal/ServerImage";

export const StudioServices = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full">
              <h2 className="font-black text-xl uppercase max-w-[150px] pb-12">
                Our Studio & <span className="text-neutral-500">Services</span>
              </h2>
              <div className="text-sm text-neutral-500 font-semibold">
                Our promises
                <ul className="text-xs list-disc list-inside">
                  <li>Transparent Pricing</li>
                  <li>Quality Assured</li>
                  <li>Fast Delivery</li>
                  <li>Unique Designs</li>
                  <li>Full Support</li>
                  <li>Hands-Off Experience</li>
                </ul>
              </div>
            </div>
            <div className="w-2/3 gap-6 text-right flex flex-col font-bold">
              <p>
                Driven by a commitment to quality and a mindset that questions
                convention, our intentionally small studio thrives on agility.
                This lean structure allows us to stay adaptable and bring in
                specialist expertise tailored to each project, keeping our
                process fluid and exploratory.
              </p>
              <p>
                Our flexible way of working is a natural fit for startups and
                entrepreneurs at critical growth points. We work side by side
                with them to translate their goals, values, and vision into a
                compelling digital identity.
              </p>
            </div>
          </div>
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full" />
            <div className="w-2/3 gap-6 text-right flex flex-col font-bold">
              <div className="grid grid-cols-2 gap-16 h-full">
                <div className=" flex justify-start gap-8">
                  <ServerImage
                    id={17}
                    width={200}
                    height={200}
                    priority
                    quality={100}
                  />
                  <h3 className="text-3xl uppercase font-bold">
                    Website Design
                  </h3>
                </div>
                <div className=" flex justify-end gap-8">
                  <h3 className="text-3xl uppercase font-bold">
                    Website Development
                  </h3>
                  <ServerImage
                    id={22}
                    width={200}
                    height={200}
                    priority
                    quality={100}
                  />
                </div>
                <div className=" flex justify-start gap-8">
                  <ServerImage
                    id={21}
                    width={150}
                    height={150}
                    priority
                    quality={100}
                  />
                  <h3 className="text-3xl uppercase font-bold">
                    Creative Design
                  </h3>
                </div>
                <div className=" flex justify-end gap-8">
                  <h3 className="text-3xl uppercase font-bold">Agentic AI</h3>
                  <ServerImage
                    id={20}
                    width={150}
                    height={150}
                    priority
                    quality={100}
                  />
                </div>
                <div className=" flex justify-start gap-8">
                  {" "}
                  <ServerImage
                    id={19}
                    width={200}
                    height={200}
                    priority
                    quality={100}
                  />
                  <h3 className="text-3xl uppercase font-bold">
                    Product Design
                  </h3>
                </div>
                <div className=" flex justify-end gap-8">
                  <h3 className="text-3xl uppercase font-bold">View All</h3>
                  <ServerImage
                    id={18}
                    width={200}
                    height={200}
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-20 bg-foreground max-w-7xl mx-auto" />
    </>
  );
};
