import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";
import { MaxWidthContainer } from "@/components/providers/7-max-width";

interface CompanyLayoutProps {
  children: ReactNode;
}

export default function CompanyLayout({ children }: CompanyLayoutProps) {
  return (
    <div className="min-h-screen w-full relative">
      <MaxWidthContainer>
        <PageTransition
          className="w-full min-h-screen px-4 py-6 relative"
          contentClassName="w-full min-h-screen relative"
        >
          {children}
        </PageTransition>
      </MaxWidthContainer>
      <LocationTimeDisplay />
    </div>
  );
}
