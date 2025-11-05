"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

/**
 * Separator component props extending Radix UI Separator
 */
interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string;
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

/**
 * A versatile separator component built on Radix UI
 * Used to visually divide content sections with customizable orientation
 *
 * @param className - Additional CSS classes to apply
 * @param orientation - Direction of the separator line (horizontal or vertical)
 * @param decorative - Whether separator is purely decorative (affects accessibility)
 */
export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}
