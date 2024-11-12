import GetStarted from "@/components/get-started";
import LoadingSpinner from "@/components/landing-page/loading-spinner";
import Navbar from "@/components/landing-page/navbar";
import React from "react";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <LoadingSpinner />
      <Navbar />
      {children}
      <div className="hidden md:block">
        <GetStarted />
      </div>
    </div>
  );
}
