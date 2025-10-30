"use client";

import { useState } from "react";
import { Separator } from "@/components/universal/separator";

export const QuestionsTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "How long does a typical web design project take?",
      content:
        "Most projects take 2-4 weeks depending on complexity. Simple sites can be completed in 1-2 weeks, while more complex projects with custom features may take 4-6 weeks.",
    },
    {
      title: "What's included in the design package?",
      content:
        "Our design package includes wireframes, high-fidelity designs, mobile responsiveness, and all necessary assets. You'll receive Figma files and exported assets ready for development.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      content:
        "Yes! We offer 30 days of free support after launch, including bug fixes and minor adjustments. We also provide ongoing maintenance packages for long-term support.",
    },
    {
      title: "Can I see examples of your previous work?",
      content:
        "Absolutely! Check out our case studies section to see detailed breakdowns of recent projects, including the challenges we solved and results achieved.",
    },
    {
      title: "What information do you need to get started?",
      content:
        "We'll need your brand assets (logo, colors, fonts), content for each page, any specific functionality requirements, and examples of sites you like.",
    },
    {
      title: "Do you work with existing brands or create new ones?",
      content:
        "We work with both! If you have existing brand guidelines, we'll follow them closely. If you need branding help, we can recommend trusted brand designers or provide basic brand consultation.",
    },
    {
      title: "What's your revision process like?",
      content:
        "We include 2 rounds of revisions in our standard package. Each round allows for comprehensive feedback and adjustments to ensure the final design meets your vision.",
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full py-20 px-5">
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
              <div className="flex flex-col border border-neutral-700">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className={
                      index < faqData.length - 1
                        ? "border-b border-neutral-700"
                        : ""
                    }
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 text-left transition-colors duration-200 flex justify-between items-center"
                    >
                      <span className="font-bold">{item.title}</span>
                      <span
                        className={`transform transition-transform duration-200 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-4 pt-0 text-neutral-600 font-normal text-left">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
