import { Separator } from "@/components/universal/separator";
import Link from "next/link";

export const DesignDevelopmentStudio = () => {
  return (
    <>
      <div className="flex justify-center p-4">
        <div className="w-full max-w-7xl flex h-full flex-col gap-10">
          <p className="text-5xl font-black">
            A DESIGN AND DEVELOPMENT STUDIO — INTENTIONALLY{" "}
            <span className="text-[#C64B4B]">SMALL</span>, INHERENTLY{" "}
            <span className="text-[#C64B4B]">BOLD</span>. WE PARTNER WITH BRANDS
            TO SHAPE DIGITAL EXPERIENCES THAT{" "}
            <span className="text-[#C64B4B]">ENGAGE</span>,{" "}
            <span className="text-[#C64B4B]">INSPIRE</span>, AND LEAVE A{" "}
            <span className="text-[#C64B4B]">LASTING IMPRESSION</span>.
          </p>
        </div>
      </div>
      <Separator className="my-20 bg-[#D9E0C1] max-w-7xl mx-auto" />
    </>
  );
};
