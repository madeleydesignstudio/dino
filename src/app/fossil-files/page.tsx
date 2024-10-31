"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Input } from "@/components/ui/input";
import GradientSquare from "./_components/gradient-square";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import IconGrid from "./_components/icon_grid";
import { ScrollArea } from "@/components/ui/scroll-area";

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

function FossilFilesContent() {
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    const item = searchParams.get("item");
    if (item && items.some((i) => i.name === item)) {
      setSelectedItem(item);
    }
  }, [searchParams]);

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  const handleLogoClick = () => {
    setSelectedItem("");
  };

  const selectedItemObject = items.find((item) => item.name === selectedItem);

  return (
    <div className="flex flex-col h-screen overflow-hidden font-karla">
      <header className="h-fit border-b flex items-center  w-full justify-between px-4 py-1">
        <div className="flex items-center space-x-2">
          {" "}
          <Link
            href="/fossil-files"
            className="flex items-center space-x-2"
            onClick={handleLogoClick}
          >
            <img
              src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg?updatedAt=1730029736000"
              alt="Fossil Files logo"
              width={28}
              height={28}
            />
            <h1 className="text-md font-semibold">Fossil Files</h1>
          </Link>
          <h2 className="text-xs text-stone-400">
            Powered by <span className="font-semibold">DINO</span>
          </h2>
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
        <aside className="w-fit border-r flex flex-col justify-between items-center pt-8 pb-2 ">
          <div className="flex-1"></div>
          <div className="flex flex-col items-center space-y-8">
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
                  width={28}
                  height={28}
                />
              </button>
            ))}
          </div>
          <div className="flex-1 flex items-end">
            <Link href="/">
              <img
                src="https://ik.imagekit.io/danielcmadeley/dino/dino-logo.svg?updatedAt=1729715034860"
                alt="DINO logo"
                width={28}
                height={28}
              />
            </Link>
          </div>
        </aside>

        <main className="flex-1 relative">
          {selectedItem ? (
            <>
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
            </>
          ) : (
            <ScrollArea className="h-full w-full">
              <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8 space-y-12 py-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl mb-4">Our Mission</h2>
                  <p className="text-stone-600 leading-relaxed">
                    Embarking on a new project and unsure which tech stack fits
                    best? We&apos;re here to help you make that crucial decision
                    with confidence.
                  </p>
                </div>
                <IconGrid />

                <div className="space-y-4">
                  <h3 className="text-2xl mb-2">What We Offer</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Discover our curated collection of tools, frameworks, and
                    services designed to build modern web applications. Whether
                    it&apos;s known as Jamstack, MACH, Composable, or simply
                    &quot;Stack,&quot; we bring it all together for you.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full">
                  <div className="space-y-2">
                    <h3 className="text-xl ">Digital Experience Managers</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Keep your company&apos;s website up-to-date, secure, and
                      blazing fast. This guide is tailored to help you enhance
                      your digital presence effortlessly.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl ">Architects</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Make informed decisions for your team with ease. We
                      simplify the complexities of technology choices and assist
                      you in communicating these decisions effectively.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-stone-200 pt-8">
                  <h3 className="text-2xl mb-2">
                    Unlock the Power of Composable Architecture
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    No need to replace your entire tech stack at once.
                    Composable architecture allows you to start small—one
                    project at a time. As you grow, seamlessly add more tools
                    and scale your capabilities. Embrace flexibility and let
                    your technology evolve with your needs.
                  </p>
                </div>
              </div>
            </ScrollArea>
          )}
        </main>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FossilFilesContent />
    </Suspense>
  );
}
