import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access Digital Dino's collection of design resources, insights, guides, and tools for web design, development, and creative projects. Learn from our expertise.",
  keywords: [
    "design resources",
    "web design guides",
    "development tools",
    "design insights",
    "creative resources",
    "UI/UX resources",
    "design tutorials",
    "web development resources",
    "design inspiration",
    "digital tools",
  ],
  openGraph: {
    title: "Resources - Digital Dino",
    description:
      "Access our collection of design resources, insights, guides, and tools for web design and development.",
    url: "https://digitaldino.com/resources",
    images: [
      {
        url: "/og-resources.png",
        width: 1200,
        height: 630,
        alt: "Digital Dino Resources - Design Tools & Guides",
      },
    ],
  },
  twitter: {
    title: "Resources - Digital Dino",
    description:
      "Access our collection of design resources, insights, guides, and tools for web design and development.",
    images: ["/og-resources.png"],
  },
  alternates: {
    canonical: "/resources",
  },
};

interface ResourcesLayoutProps {
  children: ReactNode;
}

export default function ResourcesLayout({ children }: ResourcesLayoutProps) {
  return (
    <div className="h-screen flex items-center justify-center w-full relative overflow-hidden">
      <PageTransition
        className="w-full h-full px-4 pb-4 pt-12 relative"
        contentClassName="w-full h-full border-l border-r border-b border-[#D9E0C1] relative overflow-auto"
        disableScaling={true}
      >
        {children}
      </PageTransition>
      {/*<LocationTimeDisplay />*/}
    </div>
  );
}
