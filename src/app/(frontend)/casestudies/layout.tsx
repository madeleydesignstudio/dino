import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Digital Dino's portfolio of exceptional web design and development projects. See our creative solutions and successful client collaborations.",
  keywords: [
    "web design portfolio",
    "case studies",
    "design portfolio",
    "client work",
    "web development projects",
    "UI/UX portfolio",
    "creative projects",
    "design showcase",
    "website examples",
    "digital portfolio",
  ],
  openGraph: {
    title: "Case Studies - Digital Dino",
    description:
      "Explore our portfolio of exceptional web design and development projects and creative solutions.",
    url: "https://digitaldino.com/casestudies",
    images: [
      {
        url: "/og-casestudies.png",
        width: 1200,
        height: 630,
        alt: "Digital Dino Case Studies - Our Portfolio",
      },
    ],
  },
  twitter: {
    title: "Case Studies - Digital Dino",
    description:
      "Explore our portfolio of exceptional web design and development projects and creative solutions.",
    images: ["/og-casestudies.png"],
  },
  alternates: {
    canonical: "/casestudies",
  },
};

interface CaseStudiesLayoutProps {
  children: ReactNode;
}

export default function CaseStudiesLayout({
  children,
}: CaseStudiesLayoutProps) {
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
