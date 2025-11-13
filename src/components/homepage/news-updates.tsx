"use client";

import { useState } from "react";
import { Separator } from "@/components/universal/separator";

export const NewsUpdates = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex justify-center w-full py-20 px-5">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <div className="flex h-full justify-between w-full items-end">
            <div className="w-1/3 flex flex-col justify-between h-full">
              <h2 className="font-black text-xl uppercase max-w-[175px] pb-12">
                News, Updates &{" "}
                <span className="text-neutral-500">Thoughts</span>
              </h2>
            </div>
            <div className="w-full md:w-2/3 gap-6 text-right flex flex-col font-bold"></div>
          </div>
          <div className="flex flex-col md:flex-row h-full justify-between w-full items-end gap-5">
            <div className="h-[500px] border w-full rounded-md"></div>
            <div className="h-[500px] border w-full rounded-md"></div>
            <div className="h-[500px] border w-full rounded-md"></div>
            <div className="h-[500px] border w-full rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};
