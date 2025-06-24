'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

// Create context for sidebar animation state
const SidebarAnimationContext = createContext({
  showSidebars: false,
});

export const useSidebarAnimation = () => useContext(SidebarAnimationContext);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDinoUiRoute = pathname === '/resources/dino-ui';
  const isDinoApiRoute = pathname === '/resources/dino-api';
  const isDinoOpenSourceRoute = pathname === '/resources/dino-opensource';
  
  const hasResourceSidebars = isDinoUiRoute || isDinoApiRoute || isDinoOpenSourceRoute;
  const [showSidebars, setShowSidebars] = useState(false);

  // Reset sidebar visibility when route changes
  useEffect(() => {
    setShowSidebars(false);
  }, [pathname]);

  // Handle animation completion
  const handleAnimationComplete = () => {
    if (hasResourceSidebars) {
      // Small delay to ensure the transition feels organic
      setTimeout(() => {
        setShowSidebars(true);
      }, 100);
    }
  };

  return (
    <SidebarAnimationContext.Provider value={{ showSidebars }}>
      <motion.div
        animate={{
          marginLeft: hasResourceSidebars ? '16rem' : '8rem',
          marginRight: hasResourceSidebars ? '16rem' : '8rem',
        }}
        transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    </SidebarAnimationContext.Provider>
  );
};

export default AppWrapper;
