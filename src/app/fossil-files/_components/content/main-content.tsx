import React, { useState, useEffect, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { frontend_categories } from "../../config/frontend-data";
import { backend_categories } from "../../config/backend-data";
import { design_categories } from "../../config/design-data";
import { marketing_categories } from "../../config/marketing-data";
import Link from "next/link";
import { frontendFacts } from "../../config/frontend-facts";
import { ChevronDown, HomeIcon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const introductions = {
  Frontend: {
    title: "Frontend Development Tools",
    description:
      "Welcome to our curated collection of frontend development tools. Here you'll find everything you need to build modern, responsive, and interactive web applications. From frameworks and libraries to testing and optimization tools, we've organized the essential resources that every frontend developer should know about.",
    keyFeatures: [
      "UI Frameworks and Libraries",
      "State Management Solutions",
      "Testing Tools",
      "Build Tools and Bundlers",
      "Performance Optimization",
    ],
  },
  Backend: {
    title: "Backend Development Tools",
    description:
      "Discover powerful backend development tools that help you build robust server-side applications. Our collection includes databases, server frameworks, API tools, and everything you need for scalable backend development.",
    keyFeatures: [
      "Server Frameworks",
      "Database Management",
      "API Development Tools",
      "Authentication Solutions",
      "Cloud Services",
    ],
  },
  Design: {
    title: "Design Tools",
    description:
      "Explore our selection of design tools that bridge the gap between design and development. From prototyping to asset management, these tools will help you create beautiful and functional user interfaces.",
    keyFeatures: [
      "UI/UX Design Tools",
      "Prototyping Solutions",
      "Asset Management",
      "Color and Typography Tools",
      "Design Systems",
    ],
  },
  Marketing: {
    title: "Marketing Tools",
    description:
      "Access a comprehensive suite of marketing tools to grow your digital presence. These tools will help you analyze, optimize, and expand your reach across various digital channels.",
    keyFeatures: [
      "Analytics Platforms",
      "SEO Tools",
      "Social Media Management",
      "Email Marketing",
      "Content Marketing",
    ],
  },
};

interface Tool {
  name: string;
  url: string;
  description: string;
  documentation?: string;
  logo?: string;
  creator?: string;
  created?: string;
}

interface Category {
  category: string;
  tools: Tool[];
}

const MainContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState(0);
  const [currentFact, setCurrentFact] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [factKey, setFactKey] = useState(0);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Frontend",
  ]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
    number | null
  >(null);

  // Combine all categories
  const allCategories: Record<string, Category[]> = {
    Frontend: frontend_categories as Category[],
    Backend: backend_categories as Category[],
    Design: design_categories as Category[],
    Marketing: marketing_categories as Category[],
  } as const;

  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof introductions>("Frontend");

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="flex w-full h-screen font-karla bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50">
      <div className="md:hidden fixed top-2 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-40 md:hidden"
          >
            <div className="h-full flex flex-col p-4 pt-16">
              <ScrollArea className="flex-1">
                <h2 className="text-xl font-bold pb-6">Categories</h2>
                <div className="space-y-1.5">
                  {Object.entries(allCategories).map(([mainCategory]) => (
                    <div key={mainCategory} className="relative">
                      <button
                        onClick={() => {
                          if (selectedCategory === mainCategory) {
                            toggleCategory(mainCategory);
                          } else {
                            setSelectedCategory(
                              mainCategory as keyof typeof introductions
                            );
                            setExpandedCategories([mainCategory]);
                            setShowIntroduction(true);
                            setSelectedCategoryIndex(null);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className={`
                          w-full flex items-center justify-between px-3 py-2 rounded-lg
                          text-sm font-medium transition-colors
                          hover:bg-stone-200 dark:hover:bg-stone-800
                          ${
                            selectedCategory === mainCategory
                              ? "bg-stone-200 dark:bg-stone-800"
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
                      {/* ... rest of your categories content ... */}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="border-t border-stone-200 dark:border-stone-800 pt-4 mt-4 flex items-center justify-between">
                <ModeToggle />
                <Link href="/">
                  <div className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Left sidebar with categories */}
      <aside className=" hidden md:inline w-1/5 h-full p-4 border-r border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 backdrop-blur">
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
                      mainCategory as keyof typeof introductions
                    );
                    setExpandedCategories([mainCategory]);
                    setShowIntroduction(true);
                    setSelectedCategoryIndex(null);
                  }
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg
                  text-sm font-medium transition-colors
                  hover:bg-stone-200 dark:hover:bg-stone-800
                  ${
                    selectedCategory === mainCategory
                      ? "bg-stone-200 dark:bg-stone-800"
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
                          block px-3 py-1.5 rounded-lg text-stone-600 
                          dark:text-stone-400 hover:text-stone-900 
                          dark:hover:text-stone-100 hover:bg-stone-100 
                          dark:hover:bg-stone-800 transition-colors
                          gap-1
                          ${
                            selectedCategoryIndex === i
                              ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                              : ""
                          }
                        `}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTool(null);
                          setShowIntroduction(false);
                          setSelectedCategoryIndex(i);
                          document
                            .getElementById(`${mainCategory}-category-${i}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <h3 className="text-xs">{cat.category}</h3>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-12 left-0 flex items-center justify-between w-full p-2 border-t border-stone-200 dark:border-stone-800">
          <ModeToggle />
          <Link href="/">
            <div className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
              <HomeIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="md:w-3/5 w-full h-full p-4">
        <ScrollArea className="h-full">
          <div className="pt-2">
            {selectedTool ? (
              // Detailed View
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={handleBackClick}
                  className="group mb-8 px-4 py-2 -ml-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 flex items-center gap-2"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform duration-200">
                    ←
                  </span>
                  <span>Back to tools</span>
                </button>
                <div className="space-y-8">
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 relative flex-shrink-0 bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                      {selectedTool.logo ? (
                        <img
                          src={selectedTool.logo}
                          alt={`${selectedTool.name} logo`}
                          className="w-4/5 h-4/5 object-contain"
                        />
                      ) : (
                        <span className="text-4xl">🔧</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-stone-900 to-stone-700 dark:from-stone-100 dark:to-stone-300 bg-clip-text text-transparent">
                        {selectedTool.name}
                      </h1>
                      <div className="flex flex-wrap gap-4 items-center">
                        <a
                          href={selectedTool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          Visit Website
                          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </a>
                        {selectedTool.documentation && (
                          <a
                            href={selectedTool.documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 dark:bg-stone-800 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors duration-200"
                          >
                            Documentation →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                      {selectedTool.description}
                    </p>
                    {(selectedTool.creator || selectedTool.created) && (
                      <div className="mt-8 p-4 rounded-lg bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800">
                        <p className="text-sm text-stone-500 dark:text-stone-400">
                          {selectedTool.creator &&
                            `Created by ${selectedTool.creator}`}
                          {selectedTool.creator &&
                            selectedTool.created &&
                            " in "}
                          {selectedTool.created}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : showIntroduction ? (
              // Introduction View
              <div className="max-w-4xl mx-auto space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-stone-900 to-stone-700 dark:from-stone-100 dark:to-stone-300 bg-clip-text text-transparent">
                    {introductions[selectedCategory].title}
                  </h1>
                  <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                    {introductions[selectedCategory].description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-stone-800 dark:text-stone-200">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {introductions[selectedCategory].keyFeatures.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
                        >
                          <p className="text-stone-800 dark:text-stone-200">
                            {feature}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // List View
              <>
                {allCategories[selectedCategory]
                  .filter(
                    (_, i) =>
                      selectedCategoryIndex === null ||
                      i === selectedCategoryIndex
                  )
                  .map((category, i) => (
                    <div
                      key={i}
                      className="mb-16"
                      id={`${selectedCategory}-category-${i}`}
                    >
                      <h2 className="text-2xl font-semibold mb-6 text-stone-800 dark:text-stone-200">
                        {category.category}
                      </h2>
                      <div className="grid gap-6">
                        {category.tools.map((tool, j) => (
                          <div
                            key={j}
                            onClick={(e) => handleToolClick(e, tool)}
                            className="group relative border rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:-translate-y-0.5"
                          >
                            <div className="flex items-start gap-6">
                              <div className="w-16 h-16 relative flex-shrink-0 bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-xl flex items-center justify-center overflow-hidden">
                                {tool.logo ? (
                                  <img
                                    src={tool.logo}
                                    alt={`${tool.name} logo`}
                                    className="w-4/5 h-4/5 object-contain"
                                  />
                                ) : (
                                  <span className="text-2xl">🔧</span>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                    {tool.name}
                                  </h3>
                                  <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                  >
                                    <span className="sr-only">
                                      Visit website
                                    </span>
                                    →
                                  </a>
                                </div>
                                <p className="text-stone-600 dark:text-stone-400 line-clamp-2">
                                  {tool.description}
                                </p>
                                {(tool.creator || tool.created) && (
                                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-3">
                                    {tool.creator &&
                                      `Created by ${tool.creator}`}
                                    {tool.creator && tool.created && " in "}
                                    {tool.created}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </ScrollArea>
      </main>

      {/* Right sidebar */}
      <aside className="w-1/5 hidden md:inline h-full p-4 border-l border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
        {/* Did You Know section */}
        <div className="pb-6">
          <h2 className="text-xl font-bold mb-4">Did You Know?</h2>
          <div className="relative p-4 rounded-lg border bg-card text-card-foreground shadow-sm min-h-[80px] flex items-center">
            <div className="w-full">
              <p
                key={factKey}
                className={`
                  text-sm text-stone-600 dark:text-stone-400
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
          <div className="rounded-xl p-6 bg-accent text-accent-foreground">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Design Tools</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
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
                    className="group p-3 rounded-lg border border-accent-foreground/10 hover:border-accent-foreground/20 transition-all duration-200 bg-accent-foreground/5 text-center hover:bg-accent-foreground/10"
                  >
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/dino-ui"
                className="block w-full text-center bg-background text-foreground py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-accent-foreground/10 active:bg-accent-foreground/20 transition-colors"
              >
                Explore DINO UI →
              </Link>
            </div>
          </div>
        </div>

        {/* Start a Project Section */}
        <div className="pt-6">
          <div className="rounded-xl p-6 bg-primary text-primary-foreground">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ready to Start?</h3>
              <p className="text-sm opacity-90">
                Let&apos;s bring your project to life with modern frontend
                solutions.
              </p>
              <Link
                href="/company/contact"
                className="block w-full text-center bg-background text-primary py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-primary-foreground/10 active:bg-primary-foreground/20 transition-all duration-200"
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

export default MainContent;
