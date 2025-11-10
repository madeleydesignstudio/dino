import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";

interface StartLayoutProps {
  children: ReactNode;
}

export default function StartLayout({ children }: StartLayoutProps) {
  return (
    <div className="h-screen flex items-center justify-center w-full relative overflow-hidden">
      <PageTransition
        className="w-full h-full p-4 relative"
        contentClassName="w-full h-full border border-[#D9E0C1] relative overflow-auto"
      >
        {children}
      </PageTransition>
    </div>
  );
}
