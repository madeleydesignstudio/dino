import React, { useState, useEffect, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { frontend_categories } from "../../config/frontend-data";
import { backend_categories } from "../../config/backend-data";
import { design_categories } from "../../config/design-data";
import { marketing_categories } from "../../config/marketing-data";
import Link from "next/link";
import { frontendFacts } from "../../config/frontend-facts";
import { ChevronDown } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

interface Tool {
  name: string;
  url: string;
  description: string;
  documentation?: string;
}

const MainContentV2 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [currentFact, setCurrentFact] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [factKey, setFactKey] = useState(0);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Frontend",
  ]);

  // Combine all categories
  const allCategories = {
    Frontend: frontend_categories,
    Backend: backend_categories,
    Design: design_categories,
    Marketing: marketing_categories,
  } as const;

  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof allCategories>("Frontend");

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? [] : [category]
    );
  };

  const getNewRandomFact = useCallback(() => {
    const availableFacts = frontendFacts.filter((fact) => fact !== currentFact);
    return availableFacts[Math.floor(Math.random() * availableFacts.length)];
  }, [currentFact]);

  useEffect(() => {
    const initialFact =
      frontendFacts[Math.floor(Math.random() * frontendFacts.length)];
    setCurrentFact(initialFact);
  }, []);

  useEffect(() => {
    const rotateFact = () => {
      setIsAnimating(true);
      const newFact = getNewRandomFact();

      setTimeout(() => {
        setCurrentFact(newFact);
        setIsAnimating(false);
        setFactKey((prev) => prev + 1);
      }, 500);
    };

    const intervalId = setInterval(rotateFact, 10000);
    return () => clearInterval(intervalId);
  }, [getNewRandomFact]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        `[id^="${selectedCategory}-category-"]`
      );
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    const mainContent = document.querySelector("main");
    mainContent?.addEventListener("scroll", handleScroll);
    return () => mainContent?.removeEventListener("scroll", handleScroll);
  }, [selectedCategory]);

  const handleToolClick = (e: React.MouseEvent, tool: Tool) => {
    e.preventDefault();
    setSelectedTool(tool);
  };

  const handleBackClick = () => {
    setSelectedTool(null);
  };

  return (
    <div className="flex w-full h-screen font-karla">
      {/* Left sidebar with categories */}
      <aside className="w-1/5 h-full p-4 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h2 className="text-xl font-bold pb-6">Categories</h2>
        <div className="space-y-1.5">
          {Object.entries(allCategories).map(([mainCategory, categories]) => (
            <div key={mainCategory} className="relative">
              <button
                onClick={() => {
                  if (selectedCategory === mainCategory) {
                    toggleCategory(mainCategory);
                  } else {
                    setSelectedCategory(
                      mainCategory as keyof typeof allCategories
                    );
                    setExpandedCategories([mainCategory]);
                  }
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg
                  text-sm font-medium transition-colors
                  hover:bg-accent hover:text-accent-foreground
                  ${
                    selectedCategory === mainCategory
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }
                `}
              >
                <span>{mainCategory}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200
                    ${
                      expandedCategories.includes(mainCategory)
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    expandedCategories.includes(mainCategory) &&
                    selectedCategory === mainCategory
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <ul className="pt-2 pl-4 space-y-1">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <a
                        href={`#${mainCategory}-category-${i}`}
                        className={`
                          block px-3 py-2 rounded-md text-sm transition-colors
                          hover:bg-accent hover:text-accent-foreground
                          ${
                            activeSection === i
                              ? "font-medium bg-accent/50 text-accent-foreground"
                              : "text-muted-foreground"
                          }
                        `}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTool(null);
                          document
                            .getElementById(`${mainCategory}-category-${i}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {cat.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-14 left-0 flex items-center justify-between  w-full p-2 border-t border-stone-200">
          <ModeToggle />
          <Link href="/">
            <div className="text-sm text-stone-500 hover:text-stone-600 transition-colors">
              Go Home
            </div>
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="w-3/5 h-full p-4">
        <ScrollArea className="h-full">
          {selectedTool ? (
            <>
              <button
                onClick={handleBackClick}
                className="mb-6 text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
              >
                ← Back to list
              </button>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 relative flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      {selectedTool.name}
                    </h1>
                    <a
                      href={selectedTool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600">{selectedTool.description}</p>
                  <div className="mt-6 flex gap-4">
                    {selectedTool.documentation && (
                      <a
                        href={selectedTool.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Documentation
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-6">
                {selectedCategory} Development Tools
              </h1>
              {allCategories[selectedCategory].map((category, i) => (
                <div
                  key={i}
                  className="mb-12"
                  id={`${selectedCategory}-category-${i}`}
                >
                  <h2 className="text-2xl font-semibold mb-6">
                    {category.category}
                  </h2>
                  <div className="grid gap-6">
                    {category.tools.map((tool, j) => (
                      <div
                        key={j}
                        className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={(e) => handleToolClick(e, tool)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 relative flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-xl">🔧</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              <a
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {tool.name}
                              </a>
                            </h3>
                            <p className="text-gray-600">{tool.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </ScrollArea>
      </main>

      {/* Right sidebar with fact display and Dino UI */}
      <aside className="w-1/5 h-full p-4  border-l divide-y divide-stone-200">
        {/* Did You Know section */}
        <div className="pb-6">
          <h2 className="text-xl font-semibold mb-4">Did You Know?</h2>
          <div className="relative p-4 bg-white rounded-lg ring-1 ring-gray-200 min-h-[80px] flex items-center">
            <div className="w-full">
              <p
                key={factKey}
                className={`
                  text-sm text-gray-600
                  transition-all duration-300 ease-in-out
                  ${
                    isAnimating
                      ? "opacity-0 translate-y-[-1rem]"
                      : "opacity-100 translate-y-0"
                  }
                `}
              >
                {currentFact}
              </p>
            </div>
          </div>
        </div>

        {/* Dino UI Section */}
        <div className="py-6">
          <div className="bg-stone-900 rounded-xl p-6 text-stone-50 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Design Tools</h3>
              <p className="text-sm text-stone-300/90">
                Enhance your frontend development with our prehistoric-powered
                UI components.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🦖", label: "Components" },
                  { icon: "🎨", label: "Styles" },
                  { icon: "🚀", label: "Templates" },
                  { icon: "🌐", label: "Resources" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group p-3 rounded-lg border border-stone-700/50 hover:border-stone-500 transition-all duration-200 bg-stone-800/30 text-center hover:bg-stone-800/50"
                  >
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-xs text-stone-300/90 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/dino-ui"
                className="block w-full text-center bg-stone-50 text-stone-900 py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-stone-100 active:bg-stone-200 transition-colors"
              >
                Explore DINO UI →
              </Link>
            </div>
          </div>
        </div>

        {/* Start a Project Section */}
        <div className="pt-6">
          <div className="bg-blue-600 rounded-xl p-6 text-white shadow-sm">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Ready to Start?</h3>
              <p className="text-sm text-blue-100/90">
                Let&apos;s bring your project to life with modern frontend
                solutions.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-600 py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-blue-50 active:bg-blue-100 transition-all duration-200"
              >
                Start a New Project →
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MainContentV2;
