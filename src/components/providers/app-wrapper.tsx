'use client'

import { usePathname } from 'next/navigation'
import type React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

// Create context for sidebar animation state
const SidebarAnimationContext = createContext({
  showSidebars: false,
  shouldAnimateSidebars: false,
  animationComplete: false,
})

export const useSidebarAnimation = () => useContext(SidebarAnimationContext)

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  // Check if we're on any route that should have sidebars
  const isDinoUiRoute = pathname.startsWith('/resources/dino-ui')
  const isDinoApiRoute = pathname.startsWith('/resources/dino-api')
  const isDinoOpenSourceRoute = pathname.startsWith('/resources/dino-opensource')

  const hasResourceSidebars = isDinoUiRoute || isDinoApiRoute || isDinoOpenSourceRoute
  const [showSidebars, setShowSidebars] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [shouldAnimateSidebars, setShouldAnimateSidebars] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [previousHadSidebars, setPreviousHadSidebars] = useState(false)

  // Check if margins will actually change (to determine if main animation is needed)
  const marginsWillChange = previousHadSidebars !== hasResourceSidebars

  // Handle sidebar visibility when route changes
  useEffect(() => {
    const isNavigatingWithinResources = previousHadSidebars && hasResourceSidebars
    const isNavigatingToResources = !previousHadSidebars && hasResourceSidebars
    const isNavigatingAwayFromResources = previousHadSidebars && !hasResourceSidebars

    if (isNavigatingWithinResources) {
      // Navigation within resource routes - show sidebars immediately (no main animation)
      setShowSidebars(true)
      setShouldAnimateSidebars(false)
      setAnimationComplete(true)
    } else if (isNavigatingToResources) {
      // Navigation from non-resource to resource route - coordinate animation
      setShowSidebars(false)
      setShouldAnimateSidebars(true)
      setAnimationComplete(false)

      // Use explicit timer to show sidebars after main nav animation
      setTimeout(() => {
        setAnimationComplete(true)
        setShowSidebars(true)
      }, 1100) // 1000ms for main nav + 100ms buffer
    } else if (isNavigatingAwayFromResources) {
      // Navigation away from resource routes - hide sidebars immediately
      setShowSidebars(false)
      setShouldAnimateSidebars(false)
      setAnimationComplete(false)
    }

    // Update previous state
    setPreviousHadSidebars(hasResourceSidebars)

    // Mark that we're no longer on initial load
    if (isInitialLoad) {
      setIsInitialLoad(false)
    }
  }, [pathname, hasResourceSidebars, isInitialLoad, previousHadSidebars])

  // Handle animation completion - backup in case timer doesn't work
  const handleAnimationComplete = () => {
    // Timer approach should handle this, but keeping as backup
  }

  return (
    <SidebarAnimationContext.Provider
      value={{ showSidebars, shouldAnimateSidebars, animationComplete }}
    >
      <div
        className={`w-full transition-all duration-1000 ease-out ${
          hasResourceSidebars ? 'lg:pl-64 lg:pr-64' : 'lg:pl-32 lg:pr-32'
        }`}
      >
        {children}
      </div>
    </SidebarAnimationContext.Provider>
  )
}

export default AppWrapper
