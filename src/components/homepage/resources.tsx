"use client";

import Link from "next/link";
import { useRef } from "react";
import { CubeIcon } from "../universal/CubeIcon";

export const Resources = () => {
  const resourcesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={resourcesRef}
        id="resources-section"
        className="flex flex-col justify-center w-full"
      >
        <div className="flex justify-center w-full ">
          <div className="flex justify-between w-full pt-20 px-5 py-5">
            <div className="flex flex-col items-start w-full">
              <h2 className="font-black text-xl uppercase text-[#D9E0C1]">
                Resources
              </h2>
              <p className="text-sm text-[#D9E0C1]">Explore our resources</p>
            </div>

            <div className="flex items-end justify-end w-full">
              <Link href="/clients" className="text-[#D9E0C1]">
                view all resources {"----->"}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 h-screen">
          <div className="flex flex-col h-full col-span-3">
            <div className="w-full border-t border-[#D9E0C1] flex-1">
              OpenSource
            </div>
            <div className="w-full border-t border-[#D9E0C1] flex-1">UI</div>
            <div className="w-full border-t border-[#D9E0C1] flex-1">API</div>
            <div className="w-full border-t border-[#D9E0C1] flex-1">
              Compare
            </div>
          </div>
          <div className="flex flex-col h-full col-span-1">
            <div className="w-full border-l border-t border-[#D9E0C1] flex-1 flex items-center justify-center">
              <CubeIcon size={60} />
            </div>
            <div className="w-full border-l  border-[#D9E0C1] flex-1 flex items-center justify-center">
              <CubeIcon size={60} />
            </div>
            <div className="w-full border-l  border-[#D9E0C1] flex-1 flex items-center justify-center">
              <CubeIcon size={60} />
            </div>
            <div className="w-full border-l  border-[#D9E0C1] flex-1 flex items-center justify-center">
              <CubeIcon size={60} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
