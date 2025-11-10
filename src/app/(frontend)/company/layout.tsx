import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";
import { MaxWidthContainer } from "@/components/providers/7-max-width";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Digital Dino - our story, team, values, and career opportunities. Discover what makes our creative design studio unique.",
  keywords: [
    "about digital dino",
    "company culture",
    "design team",
    "careers",
    "contact",
    "creative studio team",
    "agency culture",
  ],
  openGraph: {
    title: "Company - Digital Dino",
    description:
      "Learn about Digital Dino - our story, team, values, and career opportunities.",
    url: "https://digitaldino.com/company",
    images: [
      {
        url: "/og-company.png",
        width: 1200,
        height: 630,
        alt: "Digital Dino Company - About Our Team",
      },
    ],
  },
  twitter: {
    title: "Company - Digital Dino",
    description:
      "Learn about Digital Dino - our story, team, values, and career opportunities.",
    images: ["/og-company.png"],
  },
  alternates: {
    canonical: "/company",
  },
};

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
