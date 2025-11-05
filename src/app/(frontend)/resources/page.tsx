import { StackedDiamonds } from "@/components/homepage/stacked-diamonds";

export default function DiamondPage() {
  return (
    <div className="w-full h-full relative flex">
      {/* Centered Stacked Diamonds */}

      <div className="absolute inset-0 flex items-center justify-start pl-8">
        <div className="scale-75">
          <StackedDiamonds />
        </div>
      </div>

      {/* Text Section - Bottom Right */}

      <div className="flex-1 flex items-end justify-end">
        <p className="font-black text-[6vw] leading-[0.8] tracking-[-0.05em] uppercase p-8">
          <span className="block">Select</span>
          <span>a</span>

          <span className="block pl-[8vw] text-[#C64B4B]">Resource</span>
          <span className="flex justify-between pl-[4vw]">
            <span>to find</span>
            <span>out</span>
          </span>
          <span className="block text-right">More</span>
        </p>
      </div>
    </div>
  );
}
