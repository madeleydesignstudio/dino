"use client";

import { Suspense } from "react";
// import { MainContent } from "./_components/content/main-content";
// import { Sidebar } from "./_components/layout/sidebar";
// import { navigationItems, type NavigationItem } from "./config/items";
import MainContentV2 from "./_components/content/main-content-v2";

function FossilFilesContent() {
  return (
    <div className="flex flex-col h-screen overflow-hidden font-karla">
      <div className="flex flex-1 overflow-hidden">
        <MainContentV2 />
      </div>
    </div>
  );
}

export default function FossilFiles() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FossilFilesContent />
    </Suspense>
  );
}
