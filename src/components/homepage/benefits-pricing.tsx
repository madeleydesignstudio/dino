import { Separator } from "@/components/universal/separator";
import { ClientInput } from "@/components/universal/ClientInput";
import Link from "next/link";

export const BenefitsPricing = () => {
  return (
    <>
      <div className="flex justify-center w-full py-20 px-5">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full">
              <h2 className="font-black text-xl uppercase max-w-[150px] pb-12">
                Benefits & <span className="text-neutral-500">Pricing</span>
              </h2>
            </div>
            <div className="w-2/3 gap-6 text-right flex flex-col font-normal text-sm">
              <p>
                Web design pricing can feel confusing and opaque, especially for
                startups. We’ve made it simple with a transparent, per-page
                pricing model. No hidden fees, no guesswork, just a clear quote
                you can trust, making budgeting easy and stress-free.
              </p>
            </div>
          </div>
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full">
              {" "}
              <div className="text-sm text-[#C64B4B] font-semibold max-w-xs gap-4 flex flex-col">
                Estimate Glossary Page Count  An approximate number of pages
                your site will include (not counting the homepage).  Common
                examples: About Us, Contact, How It Works, Our Team, Support.
                What We Deliver 
                <p> You can choose from two delivery options:</p>
                <ul className="text-xs list-disc list-inside flex flex-col gap-2">
                  <li>
                    Design Only – Perfect if you’ve got the skills to build it
                    yourself.
                  </li>
                  <li>
                    Design & Development – Best for those who want a complete,
                    done-for-you solution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-2/3 gap-6 text-right flex flex-col font-bold">
              <div className="grid grid-cols-3 border border-neutral-700 h-full">
                <div className="border-r border-b border-neutral-700 p-4 aspect-square">
                  Item 1
                </div>
                <div className="border-r border-b border-neutral-700 p-4 aspect-square">
                  Item 2
                </div>
                <div className="border-b border-neutral-700 p-4 aspect-square">
                  Item 3
                </div>
                <div className="border-r  border-neutral-700 p-4 aspect-square">
                  Item 4
                </div>
                <div className="border-r  border-neutral-700 p-4 aspect-square">
                  Item 5
                </div>
                <div className=" p-4 aspect-square">Item 6</div>
              </div>
            </div>
          </div>
          <div className="flex h-full justify-between w-full items-end">
            <div className="hidden w-1/3 md:flex flex-col justify-between h-full"></div>
            <div className="w-2/3 gap-6 text-left flex flex-col font-bold">
              <div>
                <h3>See your estimate right away</h3>
              </div>
              <div>
                <Separator className="w-full bg-foreground" />
                <div className="flex items-center justify-between pt-6 w-full">
                  <div className="flex flex-col items-start w-2/3">
                    <h4>Page Count</h4>
                    <p className="text-neutral-500 text-xs">
                      (Excluding your homepage)
                    </p>
                  </div>
                  <div className="bg-[#D9E0C1] h-12 w-1/3 flex justify-center">
                    <ClientInput
                      type="number"
                      placeholder="Enter page count"
                      className="all-unset appearance-none border-0 outline-0 bg-transparent p-0 m-0 shadow-none focus:ring-0 focus:border-0 focus:outline-0"
                      fallbackContent="Enter page count"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Separator className="w-full bg-foreground" />
                <div className="flex items-center justify-between pt-6 w-full">
                  <div className="flex flex-col items-start w-2/3">
                    <h4>Pick what you need</h4>
                    <p className="text-neutral-500 text-xs">
                      Design only or full build — your choice.
                    </p>
                  </div>
                  <div className="bg-[#D9E0C1] h-12 w-1/3 flex justify-center">
                    <ClientInput
                      type="text"
                      placeholder="Select option"
                      className="all-unset appearance-none border-0 outline-0 bg-transparent p-0 m-0 shadow-none focus:ring-0 focus:border-0 focus:outline-0"
                      fallbackContent="Select option"
                    />
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Separator className="w-full bg-foreground" />
                <div className="flex items-center justify-between pt-6 w-full">
                  <div className="flex flex-col items-start w-2/3">
                    <h4>Where’s your brand at right now?</h4>
                    <p className="text-neutral-500 text-xs">
                      Need help defining your style? We’re here to guide
                      you.{" "}
                    </p>
                  </div>
                  <div className="bg-[#D9E0C1] h-12 w-1/3 flex justify-center">
                    <ClientInput
                      type="text"
                      placeholder="Select brand status"
                      className="all-unset appearance-none border-0 outline-0 bg-transparent p-0 m-0 shadow-none focus:ring-0 focus:border-0 focus:outline-0"
                      fallbackContent="Select brand status"
                    />
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Separator className="w-full bg-foreground" />
                <div className="flex items-center justify-between pt-6 w-full">
                  <div className="flex flex-col items-start w-2/3">
                    <h4>Tell us where to send your estimate.</h4>
                    <p className="text-neutral-500 text-xs">
                      Your quote will arrive within 5 minutes.{" "}
                    </p>
                  </div>
                  <div className="bg-[#D9E0C1] h-12 w-1/3 flex justify-center">
                    <ClientInput
                      type="email"
                      placeholder="Enter your email"
                      className="all-unset appearance-none border-0 outline-0 bg-transparent p-0 m-0 shadow-none focus:ring-0 focus:border-0 focus:outline-0"
                      fallbackContent="Enter your email"
                    />
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Separator className="w-full bg-foreground" />
                <div className="flex items-center justify-between pt-6 w-full">
                  <div className="flex flex-col items-start w-2/3"></div>
                  <div className="bg-[#D9E0C1] h-12 w-1/3 flex justify-center">
                    <ClientInput
                      type="submit"
                      value="Get Estimate"
                      className="all-unset appearance-none border-0 outline-0 bg-transparent p-0 m-0 shadow-none focus:ring-0 focus:border-0 focus:outline-0 cursor-pointer font-bold"
                      fallbackContent="Get Estimate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
