"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { useHotkeys } from "react-hotkeys-hook";

// Types
interface NavLink {
  name: string;
  href: string;
  description?: string;
}

interface SearchCommandProps {
  resourcesLinks: NavLink[];
  servicesLinks: NavLink[];
  caseStudiesLinks: NavLink[];
  companyLinks: NavLink[];
}

// Main navigation links
const MAIN_LINKS: NavLink[] = [
  { name: "Home", href: "/", description: "Return to homepage" },
  {
    name: "Resources",
    href: "/resources",
    description: "Browse our resources",
  },
  { name: "Case Studies", href: "/casestudies", description: "View our work" },
  { name: "Services", href: "/services", description: "Our service offerings" },
  { name: "Company", href: "/company", description: "About Digital Dino" },
  { name: "Start", href: "/start", description: "Begin your project" },
];

/**
 * SearchCommand component provides a searchable command palette
 * Accessible via click or keyboard shortcuts (Cmd/Ctrl + K)
 */
export function SearchCommand({
  resourcesLinks,
  servicesLinks,
  caseStudiesLinks,
  companyLinks,
}: SearchCommandProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Keyboard shortcut: Cmd/Ctrl + K to toggle search
  useHotkeys('mod+k', (e) => {
    e.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  }, {
    enableOnFormTags: true, // Allow in forms since this is a search feature
  });

  // Keyboard shortcut: Escape to close search
  useHotkeys('escape', (e) => {
    if (open) {
      e.preventDefault();
      setOpen(false);
    }
  }, {
    enableOnFormTags: true,
    enabled: open, // Only enable when dialog is open
  });

  // Handle selection
  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  // Get platform-specific shortcut text
  const getShortcutText = () => {
    if (typeof navigator !== "undefined") {
      const platform = navigator.platform.toUpperCase();
      const userAgent = navigator.userAgent.toUpperCase();
      const isMac = platform.includes("MAC") || userAgent.includes("MAC");
      const isIOS =
        platform.includes("IPHONE") ||
        platform.includes("IPAD") ||
        userAgent.includes("IPHONE") ||
        userAgent.includes("IPAD");

      if (isMac || isIOS) {
        return "⌘K";
      }
      return "Ctrl K";
    }
    return "⌘K";
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-2 py-1 bg-background border border-[#D9E0C1] rounded-sm  group w-[250px]"
      >
        <Search className="h-4 w-4 " />
        <span className="text-xs text-foreground/70 hidden sm:block">
          Search...
        </span>
        <Kbd className="hidden sm:inline-flex ml-auto">{getShortcutText()}</Kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="bg-background border border-[#D9E0C1]"
      >
        <CommandInput
          placeholder="Search pages and content..."
          className="border-none text-foreground placeholder:text-foreground/50"
        />

        <CommandList className="max-h-[400px] bg-background">
          <CommandEmpty className="py-8 text-center text-foreground/70">
            No results found.
          </CommandEmpty>

          {/* Main Navigation */}
          <CommandGroup heading="Navigation rounded-xl">
            {MAIN_LINKS.map((link) => (
              <CommandItem
                key={link.href}
                value={`${link.name} ${link.description}`}
                onSelect={() => handleSelect(link.href)}
                className="flex flex-col items-start py-3 text-foreground hover:bg-accent/10 hover:text-accent cursor-pointer"
              >
                <div className="font-semibold">{link.name}</div>
                {link.description && (
                  <div className="text-sm opacity-60">{link.description}</div>
                )}
              </CommandItem>
            ))}
          </CommandGroup>

          {/* Resources */}
          {resourcesLinks.length > 0 && (
            <CommandGroup heading="Resources">
              {resourcesLinks.map((link) => (
                <CommandItem
                  key={link.href}
                  value={`${link.name} resources`}
                  onSelect={() => handleSelect(link.href)}
                  className="text-foreground hover:bg-accent/10 hover:text-accent cursor-pointer"
                >
                  <div className="font-medium">{link.name}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Services */}
          {servicesLinks.length > 0 && (
            <CommandGroup heading="Services">
              {servicesLinks.map((link) => (
                <CommandItem
                  key={link.href}
                  value={`${link.name} services`}
                  onSelect={() => handleSelect(link.href)}
                  className="text-foreground hover:bg-accent/10 hover:text-accent cursor-pointer"
                >
                  <div className="font-medium">{link.name}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Case Studies */}
          {caseStudiesLinks.length > 0 && (
            <CommandGroup heading="Case Studies">
              {caseStudiesLinks.map((link) => (
                <CommandItem
                  key={link.href}
                  value={`${link.name} case study`}
                  onSelect={() => handleSelect(link.href)}
                  className="text-foreground hover:bg-accent/10 hover:text-accent cursor-pointer"
                >
                  <div className="font-medium">{link.name}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Company */}
          {companyLinks.length > 0 && (
            <CommandGroup heading="Company">
              {companyLinks.map((link) => (
                <CommandItem
                  key={link.href}
                  value={`${link.name} company`}
                  onSelect={() => handleSelect(link.href)}
                  className="text-foreground hover:bg-accent/10 hover:text-accent cursor-pointer"
                >
                  <div className="font-medium">{link.name}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
        <div className="flex items-center justify-between gap-4 border-t border-[#D9E0C1] bg-background px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/70">
          <span className="flex items-center gap-2">
            <Kbd>esc</Kbd>
            <span>to dismiss</span>
          </span>
          <span className="flex items-center gap-2">
            <Kbd>return</Kbd>
            <span>to select</span>
          </span>
        </div>
      </CommandDialog>
    </>
  );
}
