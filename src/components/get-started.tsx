"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleExpand}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isExpanded}
        aria-label="Open chat options"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, width: 0 }}
            animate={{ opacity: 1, y: 0, width: "auto" }}
            exit={{ opacity: 0, y: 20, width: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute bottom-16 right-0 flex flex-col gap-2"
          >
            <ChatOption href="/get-in-touch" text="Get in touch" />
            <ChatOption href="/book-a-call" text="Book a call" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChatOption({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="group flex w-48 items-center justify-between rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span>{text}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
