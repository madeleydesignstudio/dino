"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import GradientSquare from "./_components/gradient-square";
import { useSearchParams } from "next/navigation";

const items = [
  {
    name: "Frontend",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/frontend.svg?updatedAt=1729668704121",
  },
  {
    name: "Backend",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/backend.svg?updatedAt=1729668691498",
  },
  {
    name: "Design",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/design.svg?updatedAt=1729668663385",
  },
  {
    name: "Market",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/market.svg?updatedAt=1729668676661",
  },
];

export default function Component() {
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<string>("Frontend");

  useEffect(() => {
    const item = searchParams.get("item");
    if (item && items.some((i) => i.name === item)) {
      setSelectedItem(item);
    }
  }, [searchParams]);

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  const selectedItemObject = items.find((item) => item.name === selectedItem);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="h-16 border-b flex items-center bg-stone-50 w-full justify-between px-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg?updatedAt=1730029736000"
            alt="Fossil Files logo"
            className="w-6 h-6"
          />
          <h1 className="text-xl font-semibold">Fossil Files</h1>
        </div>
        <div className="w-64">
          <Input
            type="search"
            placeholder="Search Fossil Files..."
            className="w-full"
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-16 border-r flex flex-col justify-center items-center space-y-8">
          {items.map((item, index) => (
            <button
              key={index}
              className={`p-2 hover:bg-gray-100 rounded-md ${
                selectedItem === item.name ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                width={24}
                height={24}
              />
            </button>
          ))}
        </aside>

        <main className="flex-1 relative">
          <div className="flex items-center space-x-2 px-6 pt-4">
            {selectedItemObject && (
              <img
                src={selectedItemObject.icon}
                alt={`${selectedItemObject.name} icon`}
                width={32}
                height={32}
              />
            )}
            <h1 className="text-2xl font-semibold">{selectedItem}</h1>
          </div>
          <div className="absolute inset-0">
            <GradientSquare selectedItem={selectedItem} />
          </div>
        </main>
      </div>
    </div>
  );
}
