"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import type { NavigationItem } from "../../config/items";
import { navigationItems } from "../../config/items";

const getIcon = (selectedItem: NavigationItem) => {
  const item = navigationItems.find((item) => item.name === selectedItem);
  return item ? (
    <img src={item.icon} alt={item.name} className="w-5 h-5" />
  ) : null;
};

const ContentSection = ({ selectedItem }: { selectedItem: NavigationItem }) => (
  <div className="w-full h-full flex ">
    <div className="w-1/5 h-full border-r border-stone-900">
      <div className="p-4 border-b border-stone-900">
        <div className="flex items-center gap-3">
          <span className="text-xl">{getIcon(selectedItem)}</span>
          <h2 className="text-lg font-medium">{selectedItem}</h2>
        </div>
      </div>

      {selectedItem === "Frontend" && (
        <div>Frontend-specific content goes here</div>
      )}
      {selectedItem === "Backend" && (
        <div>Backend-specific content goes here</div>
      )}
      {selectedItem === "Design" && (
        <div>Design-specific content goes here</div>
      )}
      {selectedItem === "Market" && (
        <div>Market-specific content goes here</div>
      )}
    </div>
    <div className="w-4/5 h-full"></div>
  </div>
);

const squareVariants: Variants = {
  initial: { width: 100, height: 100 },
  animate: {
    width: "94vw",
    height: "90vh",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const contentVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.8, duration: 0.2 } },
};

interface GradientSquareProps {
  selectedItem: NavigationItem;
}

export default function GradientSquare({ selectedItem }: GradientSquareProps) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate").then(() => setIsAnimationComplete(true));
  }, [controls]);

  return (
    <div className="flex items-center justify-center min-h-screen pb-12">
      <motion.div
        variants={squareVariants}
        initial="initial"
        animate={controls}
        className="bg-stone-100/75 rounded-md overflow-hidden flex items-center justify-center border border-stone-900"
        style={{
          backgroundImage:
            "radial-gradient(circle at right center, rgba(229, 231, 235, 0.5) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      >
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate={isAnimationComplete ? "animate" : "initial"}
          className="text-gray-800 w-full h-full flex items-center justify-center"
        >
          <ContentSection selectedItem={selectedItem} />
        </motion.div>
      </motion.div>
    </div>
  );
}
