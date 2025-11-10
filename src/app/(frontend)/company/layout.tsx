import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";

interface CompanyLayoutProps {
  children: ReactNode;
}

export default function CompanyLayout({ children }: CompanyLayoutProps) {
  return (
    <div className="h-screen flex items-center justify-center w-full relative overflow-hidden">
      <PageTransition
        className="w-full h-full px-4 py-6 relative"
        contentClassName="w-full h-full border border-[#D9E0C1] relative overflow-auto"
      >
        {children}
      </PageTransition>
      <LocationTimeDisplay />
    </div>
  );
}
