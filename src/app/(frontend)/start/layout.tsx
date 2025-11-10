import { ReactNode } from "react";
import { PageTransition } from "@/components/navigation/PageTransition";
import { LocationTimeDisplay } from "@/components/universal/LocationTimeDisplay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Ready to start your next web design or development project? Get in touch with Digital Dino today. Let's discuss your vision and create something amazing together.",
  keywords: [
    "start project",
    "contact digital dino",
    "web design consultation",
    "project inquiry",
    "get quote",
    "hire web designer",
    "web development services",
    "design consultation",
    "project kickoff",
    "contact form",
  ],
  openGraph: {
    title: "Start Your Project - Digital Dino",
    description:
      "Ready to start your next web design or development project? Let's discuss your vision and create something amazing.",
    url: "https://digitaldino.com/start",
    images: [
      {
        url: "/og-start.png",
        width: 1200,
        height: 630,
        alt: "Start Your Project with Digital Dino",
      },
    ],
  },
  twitter: {
    title: "Start Your Project - Digital Dino",
    description:
      "Ready to start your next web design or development project? Let's discuss your vision and create something amazing.",
    images: ["/og-start.png"],
  },
  alternates: {
    canonical: "/start",
  },
};

interface StartLayoutProps {
  children: ReactNode;
}

export default function StartLayout({ children }: StartLayoutProps) {
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
