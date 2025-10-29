import { StackedDiamonds } from "@/components/homepage/stacked-diamonds";

export default function DiamondPage() {
  return (
    <main className="h-screen relative flex overflow-hidden">
      {/* Centered Stacked Diamonds */}
      <div className="absolute flex items-center justify-start ">
        <div className="scale-75 ">
          <StackedDiamonds />
        </div>
      </div>

      {/* Text Section - Bottom Right */}
      <div className="flex-1 flex items-end justify-end ">
        <p className="font-black text-[8vw] leading-[0.8] tracking-[-0.05em] uppercase p-4">
          <span className="block">Select</span>
          <span>a</span>
          <span className="block pl-[10vw] text-[#C64B4B]">Resource</span>
          <span className="flex justify-between pl-[6vw]">
            <span>to find</span>
            <span>out</span>
          </span>
          <span className="block text-right">More</span>
        </p>
      </div>
    </main>
  );
}
