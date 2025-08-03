'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface MobileResourceNavProps {
  sections: Array<{
    title: string
    items: Array<{
      title: string
      href: string
    }>
  }>
  resourceTitle: string
  resourceIcon: string
  resourceDescription: string
}

export const MobileResourceNav = ({
  sections,
  resourceTitle,
  resourceIcon,
  resourceDescription,
}: MobileResourceNavProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const pathname = usePathname()

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle)
    } else {
      newExpanded.add(sectionTitle)
    }
    setExpandedSections(newExpanded)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Navigation Trigger */}
      <div className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 backdrop-blur-sm p-4 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-100 to-blue-100">
              <span className="font-semibold text-violet-600 text-sm">{resourceIcon}</span>
            </div>
            <div>
              <h1 className="font-semibold text-neutral-900 text-base">{resourceTitle}</h1>
              <p className="text-neutral-500 text-xs">{resourceDescription}</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-sm hover:bg-neutral-50 transition-colors"
          >
            <MenuIcon className="h-5 w-5 text-neutral-600" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-100 to-blue-100">
                    <span className="font-semibold text-violet-600 text-sm">{resourceIcon}</span>
                  </div>
                  <div>
                    <h2 className="font-semibold text-neutral-900 text-sm">{resourceTitle}</h2>
                    <p className="text-neutral-500 text-xs">{resourceDescription}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <XIcon className="h-4 w-4 text-neutral-500" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-4">
                  {sections.map((section) => (
                    <div key={section.title} className="space-y-2">
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="flex w-full items-center justify-between rounded-lg p-2 text-left hover:bg-neutral-50 transition-colors"
                      >
                        <h3 className="font-medium text-neutral-900 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <ChevronDownIcon
                          className={`h-4 w-4 text-neutral-400 transition-transform ${
                            expandedSections.has(section.title) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedSections.has(section.title) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <ul className="ml-2 space-y-1 border-l border-neutral-200 pl-4">
                              {section.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className={`group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                                      pathname === item.href
                                        ? 'bg-violet-50 text-violet-700 font-medium'
                                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                                    }`}
                                  >
                                    <span>{item.title}</span>
                                    <ChevronRightIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* Help Section */}
                <div className="mt-8 rounded-lg bg-gradient-to-br from-violet-50 to-blue-50 p-4">
                  <p className="font-medium text-violet-900 text-sm">Need Help?</p>
                  <p className="mt-1 text-violet-700 text-xs leading-relaxed">
                    Check our documentation or reach out to support for assistance.
                  </p>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="mt-3 inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-white text-xs font-medium hover:bg-violet-700 transition-colors"
                  >
                    Contact Support
                    <ChevronRightIcon className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
