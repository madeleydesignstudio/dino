'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useSidebarAnimation } from '@/components/providers/app-wrapper'
import { useEffect, useState } from 'react'

// Custom hook to detect mobile screens
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

interface AnimatedSidebarProps {
  position: 'left' | 'right'
  children: React.ReactNode
  className?: string
}

export const AnimatedSidebar = ({ position, children, className = '' }: AnimatedSidebarProps) => {
  const { showSidebars, shouldAnimateSidebars, animationComplete } = useSidebarAnimation()
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Always hide sidebars on mobile
    if (isMobile) {
      setIsVisible(false)
      return
    }

    if (showSidebars && !shouldAnimateSidebars) {
      // Show immediately without animation (navigation within resources)
      setIsVisible(true)
    } else if (showSidebars && shouldAnimateSidebars && animationComplete) {
      // Show with animation after main nav completes (entering resources)
      setIsVisible(true)
    } else {
      // Hide
      setIsVisible(false)
    }
  }, [showSidebars, shouldAnimateSidebars, animationComplete, isMobile])

  const variants = {
    hidden: {
      opacity: 0,
      x: position === 'left' ? -20 : 20,
      transition: {
        duration: 0.2,
        ease: 'easeInOut' as const,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: shouldAnimateSidebars ? (position === 'left' ? 0 : 0.1) : 0,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={`${position}-sidebar`}
          variants={variants}
          initial={shouldAnimateSidebars ? 'hidden' : 'visible'}
          animate="visible"
          exit="hidden"
          className={`fixed top-[40px] h-[calc(100vh-40px)] w-64 border-neutral-200 bg-neutral-50/80 backdrop-blur-sm z-10 hidden lg:block ${
            position === 'left' ? 'left-0 border-r' : 'right-0 border-l'
          } ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
