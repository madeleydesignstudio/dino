"use client";

import { Copy, Github, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

export default function DinoUI() {
  const { setTheme } = useTheme();

  return (
    <div className="relative h-screen w-full bg-stone-900">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
        <h1 className="mb-6 text-4xl font-bold text-white">Coming Soon</h1>
        <Button
          variant="outline"
          className="border-white text-stone-900 hover:bg-white hover:text-black"
        >
          Sign up for newsletter updates
        </Button>
      </div>

      <div className="grid h-full lg:grid-cols-[240px_1fr_240px]">
        <div className="hidden border-r border-stone-800 bg-stone-900/95 lg:block">
          <div className="flex h-[60px] items-center px-6">
            <Link
              className="flex items-center gap-2 font-semibold text-stone-200"
              href="#"
            >
              <span className="text-xl">DINO UI</span>
              <span className="text-xs text-stone-400">Powered by DINO</span>
            </Link>
          </div>
          <ScrollArea className="h-[calc(100vh-60px)] px-3">
            <div className="flex flex-col gap-2 p-3">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium leading-none text-stone-400">
                  Basics
                </h4>
                <Button
                  className="justify-start bg-stone-800/50 px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                  variant="ghost"
                >
                  Getting Started
                </Button>
                <Button
                  className="justify-start px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                  variant="ghost"
                >
                  API
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium leading-none text-stone-400">
                  Examples
                </h4>
                {["Default", "Snap Points", "Inputs", "Other"].map((item) => (
                  <Button
                    key={item}
                    className="justify-start px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                    variant="ghost"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b border-stone-800 bg-stone-900/95 px-6 lg:h-[60px]">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="lg:hidden" size="icon" variant="ghost">
                  <Menu className="h-6 w-6 text-stone-200" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-stone-900 border-stone-800"
              >
                <div className="flex flex-col gap-2 p-3">
                  {/* Sheet content mirrors sidebar content */}
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-medium leading-none text-stone-400">
                      Basics
                    </h4>
                    <Button
                      className="justify-start bg-stone-800/50 px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                      variant="ghost"
                    >
                      Getting Started
                    </Button>
                    <Button
                      className="justify-start px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                      variant="ghost"
                    >
                      API
                    </Button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-medium leading-none text-stone-400">
                      Examples
                    </h4>
                    {["Default", "Snap Points", "Inputs", "Other"].map(
                      (item) => (
                        <Button
                          key={item}
                          className="justify-start px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                          variant="ghost"
                        >
                          {item}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-stone-200">
                Getting Started
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setTheme("light")}
                size="icon"
                variant="ghost"
                className="text-stone-200"
              >
                <Sun className="h-5 w-5" />
                <span className="sr-only">Light theme</span>
              </Button>
              <Button
                onClick={() => setTheme("dark")}
                size="icon"
                variant="ghost"
                className="text-stone-200"
              >
                <Moon className="h-5 w-5" />
                <span className="sr-only">Dark theme</span>
              </Button>
              <Separator className="h-6" orientation="vertical" />
              <Button size="icon" variant="ghost" className="text-stone-200">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-stone-900">
            <div className="container max-w-3xl py-6 lg:py-10">
              <div className="prose prose-stone prose-invert max-w-none">
                <h1 className="text-stone-200">Getting Started</h1>
                <p className="text-stone-300">
                  Vaul is a drawer component for React. You can read about how
                  it was built here.
                </p>
                <h2 className="text-stone-200">Installation</h2>
                <p className="text-stone-300">
                  Simply pnpm/npm/yarn install the package.
                </p>
                <div className="not-prose">
                  <div className="relative">
                    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border border-stone-800 bg-stone-950 py-4">
                      <code className="relative rounded bg-stone-900 px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        <span className="text-purple-400">pnpm</span>{" "}
                        <span className="text-blue-400">i</span>{" "}
                        <span className="text-green-400">vaul</span>
                      </code>
                    </pre>
                    <Button
                      className="absolute right-4 top-4 text-stone-400"
                      size="icon"
                      variant="ghost"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </div>
                </div>
                <h2 className="text-stone-200">Create a Drawer component</h2>
                <p className="text-stone-300">
                  It can be placed anywhere in your app.
                </p>
                <div className="not-prose">
                  <div className="relative">
                    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border border-stone-800 bg-stone-950 py-4">
                      <code className="relative rounded bg-stone-900 px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        <span className="text-blue-400">{"'use client';"}</span>
                        {"\n\n"}
                        <span className="text-purple-400">import</span>{" "}
                        <span className="text-blue-400">{"{ Drawer }"}</span>{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">&apos;vaul&apos;</span>
                        {";"}
                      </code>
                    </pre>
                    <Button
                      className="absolute right-4 top-4 text-stone-400"
                      size="icon"
                      variant="ghost"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden border-l border-stone-800 lg:block">
          <ScrollArea className="h-full py-6">
            <div className="px-6">
              <h4 className="mb-4 text-sm font-medium leading-none text-stone-200">
                On this page
              </h4>
              <div className="flex flex-col gap-2">
                {["Installation", "Create a Drawer component"].map((item) => (
                  <Button
                    key={item}
                    className="justify-start px-2 py-1.5 font-normal text-stone-200 hover:text-stone-300"
                    variant="ghost"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
