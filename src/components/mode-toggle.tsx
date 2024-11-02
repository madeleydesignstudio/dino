"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="inline-flex gap-2 items-center rounded-lg bg:stone-50 dark:bg-stone-900 border p-1 px-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 px-0 hover:bg-background"
        onClick={() => setTheme("light")}
      >
        <Sun
          className={`h-4 w-4 ${
            theme === "light" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 px-0 hover:bg-background"
        onClick={() => setTheme("dark")}
      >
        <Moon
          className={`h-4 w-4 ${
            theme === "dark" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <span className="sr-only">Dark mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 px-0 hover:bg-background"
        onClick={() => setTheme("system")}
      >
        <Monitor
          className={`h-4 w-4 ${
            theme === "system" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <span className="sr-only">System theme</span>
      </Button>
    </div>
  );
}
