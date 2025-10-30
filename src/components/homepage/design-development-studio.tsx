import { Separator } from "@/components/universal/separator";
import Link from "next/link";

export const DesignDevelopmentStudio = () => {
  return (
    <>
      <div className="flex justify-center w-full py-20 px-5 bg-[#D9E0C1]">
        <div className="w-full flex h-full flex-col gap-10">
          <p className="text-6xl font-black text-center">
            A DESIGN AND DEVELOPMENT STUDIO, INTENTIONALLY{" "}
            <span className="text-[#C64B4B]">SMALL</span>, INHERENTLY{" "}
            <span className="text-[#C64B4B]">BOLD</span>. WE PARTNER WITH BRANDS
            TO SHAPE DIGITAL EXPERIENCES THAT{" "}
            <span className="text-[#C64B4B]">ENGAGE</span>,{" "}
            <span className="text-[#C64B4B]">INSPIRE</span>, AND LEAVE A{" "}
            <span className="text-[#C64B4B]">LASTING IMPRESSION</span>.
          </p>
        </div>
      </div>
    </>
  );
};
