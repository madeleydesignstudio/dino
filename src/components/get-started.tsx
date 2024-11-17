"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<"options" | "chat" | null>(
    null
  );
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setActiveSection(isExpanded ? null : "options");
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
      setInputValue("");

      // Simulate RAG process (replace with actual implementation)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `AI response to: "${inputValue}"`, isUser: false },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setActiveSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={chatRef} className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleExpand}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isExpanded}
        aria-label="Open chat options"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            variants={{
              open: { opacity: 1, scale: 1 },
              closed: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="absolute bottom-16 right-0 flex flex-col gap-2"
          >
            {activeSection === "options" && (
              <>
                <ChatOption href="/get-in-touch" text="Get in touch" />
                <ChatOption href="/book-a-call" text="Book a call" />
                <Button
                  onClick={() => setActiveSection("chat")}
                  className="w-48 justify-between rounded-full"
                >
                  <span>Ask AI Assistant</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </>
            )}
            {activeSection === "chat" && (
              <motion.div
                variants={{
                  open: { opacity: 1, scale: 1, y: 0 },
                  closed: {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    transition: { duration: 0.3 },
                  },
                }}
                initial="closed"
                animate={activeSection === "chat" ? "open" : "closed"}
                exit="closed"
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="w-80 rounded-lg bg-background p-4 shadow-lg"
              >
                <Button
                  onClick={() => setActiveSection("options")}
                  variant="ghost"
                  className="mb-2 px-2 py-1"
                >
                  ← Back
                </Button>
                <ScrollArea className="h-64 w-full rounded border p-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        msg.isUser ? "text-right" : "text-left"
                      }`}
                    >
                      <span
                        className={`inline-block rounded-lg px-3 py-2 ${
                          msg.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {msg.text}
                      </span>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </ScrollArea>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="mt-4 flex gap-2"
                >
                  <Input
                    type="text"
                    placeholder="Ask about our company..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </motion.div>
            )}
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
