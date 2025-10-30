"use client";

import Link from "next/link";
import { StackedDiamonds } from "./stacked-diamonds";
import { Separator } from "../universal/separator";
import CubeScrollAnimation from "./cube";
import { useRef } from "react";

export const Resources = () => {
  const resourcesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={resourcesRef}
        id="resources-section"
        className="flex justify-center w-full"
      >
        <div className="w-full flex h-full flex-col">
          <div className="flex flex-col items-start justify-between w-full">
            <h2 className="font-black text-xl uppercase text-[#D9E0C1]">
              Resources
            </h2>
            <p className="text-sm text-[#D9E0C1]">Explore our resources</p>
            <div />
            <div className="flex items-center justify-between w-full">
              <h2 className="font-black text-xl uppercase"></h2>
              <Link href="/clients" className="text-[#D9E0C1]">
                view all resources {"----->"}
              </Link>
            </div>
          </div>
          <div>
            <CubeScrollAnimation />
          </div>
        </div>
      </div>
    </>
  );
};
