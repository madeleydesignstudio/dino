"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Header } from "./_components/layout/header";
import { MainContent } from "./_components/content/main-content";
import { Sidebar } from "./_components/layout/sidebar";
import { navigationItems, type NavigationItem } from "./config/items";

function FossilFilesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<NavigationItem | "">("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const item = searchParams.get("item") as NavigationItem | null;
    if (item && navigationItems.some((i) => i.name === item)) {
      setSelectedItem(item);
    }
    setIsLoading(false);
  }, [searchParams]);

  const handleItemClick = useCallback(
    (name: NavigationItem) => {
      setSelectedItem(name);
      router.push(`/fossil-files?item=${name}`);
    },
    [router]
  );

  const handleLogoClick = useCallback(() => {
    setSelectedItem("");
    router.push("/fossil-files");
  }, [router]);

  return (
    <div className="flex flex-col h-screen overflow-hidden font-karla">
      <Header onLogoClick={handleLogoClick} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          items={navigationItems}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
        <MainContent isLoading={isLoading} selectedItem={selectedItem} />
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
