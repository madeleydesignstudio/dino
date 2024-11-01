"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";

export default function DinoUiTag() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <div className="fixed left-[-0.25rem] top-1/2 z-50 -rotate-90 -translate-x-[calc(50%-1.5rem)] transition-transform hover:scale-110">
          <RainbowButton className="font-bold rounded-t-none font-karla">
            DINO UI
          </RainbowButton>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-stone-900/40" />
        <Drawer.Content
          className="left-0 top-2 bottom-2 fixed z-[99999] outline-none w-[310px] flex"
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div
            className={cn(
              "relative h-full w-full grow p-5 flex flex-col rounded-r-xl",
              // Base background with rainbow border effect (only top, right, bottom)
              "animate-rainbow bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
              "[border-top:calc(0.08*1rem)_solid_transparent] [border-right:calc(0.08*1rem)_solid_transparent] [border-bottom:calc(0.08*1rem)_solid_transparent]",
              // Dark theme colors (similar to rainbow-button)
              "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
              // Glow effect from right side - moved to lower z-index
              "before:absolute before:right-[-2%] before:top-0 before:z-[-1] before:h-full before:w-1/5 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]"
            )}
          >
            <div className="max-w-md mx-auto relative z-10 font-karla">
              <Drawer.Title className="font-medium mb-2 text-stone-50 text-2xl">
                DINO UI
              </Drawer.Title>
              <Drawer.Description className="space-y-6 text-stone-400">
                {/* Introduction */}
                <div className="space-y-2">
                  <h3 className="text-stone-200 font-medium text-lg">
                    Unleash Your Inner Design Engineer
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Welcome to DINO UI, a UI library built with React and
                    Tailwind CSS, crafted by design engineers for design
                    engineers.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🦖</span>
                      <h4 className="text-stone-200 font-medium">
                        Modern Powerhouse
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Combine React&apos;s robustness with Tailwind&apos;s
                      simplicity for stunning interfaces
                    </p>
                  </div>

                  <div className="space-y-2 p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🚀</span>
                      <h4 className="text-stone-200 font-medium">Accelerate</h4>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Jumpstart projects with modular, customizable components
                    </p>
                  </div>

                  <div className="space-y-2 p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🎨</span>
                      <h4 className="text-stone-200 font-medium">
                        Effortless Design
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Build intuitive interfaces focusing on usability and
                      aesthetics
                    </p>
                  </div>

                  <div className="space-y-2 p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🌐</span>
                      <h4 className="text-stone-200 font-medium">Community</h4>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Join a thriving network of design engineers to share and
                      grow
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-stone-200 font-medium">
                    Get Started Today
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Ready to make your projects stand out? Dive into DINO UI and
                    experience a fusion of fun, creativity, and professionalism.
                  </p>
                </div>
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
