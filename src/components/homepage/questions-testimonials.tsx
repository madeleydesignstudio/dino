import { Separator } from "@/components/universal/separator";

export const QuestionsTestimonials = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full">
              <h2 className="font-black text-xl uppercase max-w-[150px] pb-12">
                Questions &{" "}
                <span className="text-neutral-500">Testimonials</span>
              </h2>
            </div>
            <div className="w-2/3 gap-6 text-right flex flex-col font-bold">
              <p>
                Starting a web design project often comes with plenty of
                questions and rightly so. It’s a big move for any startup.
                That’s why we priorities clarity and openness, giving you all
                the details you need to feel confident and make the right choice
                for your business.
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
        </div>
      </div>
      <Separator className="my-20 bg-foreground max-w-7xl mx-auto" />
    </>
  );
};
