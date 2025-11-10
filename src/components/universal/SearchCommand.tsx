"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Keyboard shortcut handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    },
    [open],
  );

  // Set up keyboard listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
        className="flex items-center gap-2 px-2 py-1 bg-background border border-[#D9E0C1] rounded-lg  group w-[250px]"
      >
        <Search className="h-4 w-4 " />
        <span className="text-xs text-foreground/70 hidden sm:block">
          Search...
        </span>
        <Kbd className="hidden sm:inline-flex ml-auto">{getShortcutText()}</Kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="bg-background border-2 border-[#D9E0C1]">
          <CommandInput
            placeholder="Search pages and content..."
            className="border-none text-foreground placeholder:text-foreground/50"
          />

          <CommandList className="max-h-[400px] bg-background">
            <CommandEmpty className="py-8 text-center text-foreground/70">
              No results found.
            </CommandEmpty>

            {/* Main Navigation */}
            <CommandGroup heading="Navigation">
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
        </div>
      </CommandDialog>
    </>
  );
}
