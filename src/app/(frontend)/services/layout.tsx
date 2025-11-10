import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Digital Dino's comprehensive design and development services including website design, web development, creative design, product design, and agentic AI solutions.",
  keywords: [
    "web design services",
    "website development",
    "creative design",
    "product design",
    "UI/UX design",
    "agentic AI",
    "digital solutions",
    "responsive design",
    "branding services",
    "design agency services",
  ],
  openGraph: {
    title: "Services - Digital Dino",
    description:
      "Comprehensive design and development services from website design to agentic AI solutions.",
    url: "https://digitaldino.com/services",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "Digital Dino Services - Design & Development",
      },
    ],
  },
  twitter: {
    title: "Services - Digital Dino",
    description:
      "Comprehensive design and development services from website design to agentic AI solutions.",
    images: ["/og-services.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

interface ServicesLayoutProps {
  children: ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <div className="h-screen flex items-center justify-center w-full relative overflow-hidden">
      <PageTransition
        className="w-full h-full px-4 py-6 relative"
        contentClassName="w-full h-full border border-[#D9E0C1] relative overflow-auto"
        disableScaling={true}
      >
        {children}
      </PageTransition>
      <LocationTimeDisplay />
    </div>
  );
}
