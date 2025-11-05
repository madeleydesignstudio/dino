import { ReactNode } from "react";

interface StartLayoutProps {
  children: ReactNode;
}

export default function StartLayout({ children }: StartLayoutProps) {
  return (
    <div className="h-screen flex items-center justify-center w-full relative overflow-hidden">
      <div className="w-full h-full p-12 relative">
        {/* Main container with border */}
        <div className="w-full h-full border border-[#D9E0C1] relative overflow-auto">
          {children}
        </div>

        {/* Overlapping corner elements */}
        {/* Top-left corner */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-[#D9E0C1]"></div>

        {/* Top-right corner */}
        <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-[#D9E0C1]"></div>

        {/* Bottom-left corner */}
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-[#D9E0C1]"></div>

        {/* Bottom-right corner */}
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-[#D9E0C1]"></div>
      </div>
    </div>
  );
}
