'use client'

import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@/components/ui/kibo-ui/announcement'
import { cn } from '@/lib/utils'

export const ProjectAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed the announcement today
    const dismissedDate = localStorage.getItem('announcement-dismissed')
    const today = new Date().toDateString()

    if (dismissedDate === today) {
      return
    }

    // Show announcement after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Auto-hide after 30 seconds
    const hideTimer = setTimeout(() => {
      handleClose()
    }, 31_000) // 30 seconds + 1 second initial delay

    // Show again after 5 minutes (300 seconds)
    const reshowTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 331_000) // 30s + 300s + 1s initial delay

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearTimeout(reshowTimer)
    }
  }, [isDismissed])

  // No layout adjustment needed for bottom positioning

  const handleClose = () => {
    const today = new Date().toDateString()
    localStorage.setItem('announcement-dismissed', today)
    setIsDismissed(true)
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300) // Match animation duration
  }

  const handleStartProject = () => {
    window.location.href = '/contact'
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-[9999] transition-all duration-300 ease-in-out hidden lg:block',
        isClosing ? 'translate-x-[-100%] opacity-0' : 'translate-x-0 opacity-100',
      )}
    >
      <div className="relative">
        <button
          aria-label="Close announcement"
          className="-top-2 -right-2 absolute z-10 rounded-full bg-neutral-900 p-1 text-white transition-colors hover:bg-neutral-800"
          onClick={handleClose}
        >
          <X className="h-3 w-3" />
        </button>

        <Announcement
          className="cursor-pointer border-neutral-700 bg-neutral-900 text-white transition-shadow hover:shadow-lg"
          onClick={handleStartProject}
        >
          <AnnouncementTag className="bg-white/10 text-white">🚀</AnnouncementTag>
          <AnnouncementTitle className="text-white">
            Ready to start a project? Let&apos;s get started →
          </AnnouncementTitle>
        </Announcement>
      </div>
    </div>
  )
}
