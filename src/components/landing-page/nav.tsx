"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ModeToggle from "../mode-toggle";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Add this line
    } else {
      document.body.classList.remove("overflow-hidden"); // Add this line
    }
  }, [isOpen]); // Add this dependency

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const menuItems = ["Home", "Work", "Services", "Company", "Contact"];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="fixed z-[60]"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex flex-col items-center"
          >
            <div className="flex-1 flex items-center justify-center">
              <ul className="space-y-6 text-left">
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 * menuItems.indexOf(item) }}
                  >
                    <a
                      href={
                        item.toLowerCase() === "home"
                          ? "/"
                          : `/${item.toLowerCase()}`
                      }
                      className="md:text-8xl text-5xl font-bold text-left transition-colors font-karla hover:text-stone-900/50 text-stone-900 dark:text-stone-50 dark:hover:text-stone-50/50"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <footer className="mb-2">
              <div className="flex">
                <p className="font-bold md:text-7xl text-5xl font-karla">
                  DINO
                </p>
                <div className="flex flex-col text-xs font-karla">
                  <p>51.5072° N, 0.1276° W</p>
                  <p>UK DESIGN STUDIO</p>
                </div>
              </div>
            </footer>
            <div className="absolute bottom-4 left-4">
              <ModeToggle />
            </div>
            <div className="absolute bottom-4 right-4 font-karla text-xs">
              powered by{" "}
              <span className="font-bold">
                <Link href="https://www.madeleydesignstudio.org/">
                  madeleyedesignstudio
                </Link>
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
