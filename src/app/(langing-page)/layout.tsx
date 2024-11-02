import GetStarted from "@/components/get-started";
import React from "react";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}{" "}
      <div className="hidden md:block">
        <GetStarted />
      </div>
    </div>
  );
}
