"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface GradientSquareProps {
  selectedItem: string | null;
}

export default function GradientSquare({
  selectedItem = "Frontend",
}: GradientSquareProps) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const animateSquare = async () => {
      await controls.start({
        width: "94vw",
        height: "83vh",
        transition: { duration: 1, ease: "easeInOut" },
      });
      setIsAnimationComplete(true);
    };

    animateSquare();
  }, [controls]);

  const renderContent = () => {
    switch (selectedItem) {
      case "Frontend":
      default:
        return <div>Frontend-specific content goes here</div>;
      case "Backend":
        return <div>Backend-specific content goes here</div>;
      case "Design":
        return <div>Design-specific content goes here</div>;
      case "Market":
        return <div>Market-specific content goes here</div>;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-6">
      <motion.div
        initial={{ width: 100, height: 100 }}
        animate={controls}
        className="bg-stone-100/75 rounded-md overflow-hidden flex items-center justify-center border border-stone-900"
        style={{
          backgroundImage:
            "radial-gradient(circle at right center, rgba(229, 231, 235, 0.5) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimationComplete ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.2 }}
          className="text-gray-800 w-full h-full flex items-center justify-center"
        >
          <div className="w-1/5 h-full border-r border-stone-900">
            {renderContent()}
          </div>
          <div className="w-4/5 h-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
