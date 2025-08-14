'use client'

import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import { AnimatedSidebar } from '@/components/animated-sidebar'
import { MobileResourceNav } from '@/components/mobile/mobile-resource-nav'

const DinoUiLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarSections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', href: '/resources/dino-ui' },
        { title: 'Installation', href: '/resources/dino-ui/installation' },
        { title: 'Typography', href: '/resources/dino-ui/typography' },
        { title: 'Colors', href: '/resources/dino-ui/colors' },
      ],
    },
    {
      title: 'Components',
      items: [
        { title: 'Button', href: '/resources/dino-ui/components/button' },
        { title: 'Input', href: '/resources/dino-ui/components/input' },
        { title: 'Card', href: '/resources/dino-ui/components/card' },
        { title: 'Modal', href: '/resources/dino-ui/components/modal' },
        { title: 'Table', href: '/resources/dino-ui/components/table' },
        { title: 'Form', href: '/resources/dino-ui/components/form' },
      ],
    },
    {
      title: 'Layout',
      items: [
        { title: 'Grid', href: '/resources/dino-ui/layout/grid' },
        { title: 'Container', href: '/resources/dino-ui/layout/container' },
        { title: 'Flexbox', href: '/resources/dino-ui/layout/flexbox' },
      ],
    },
    {
      title: 'Examples',
      items: [
        { title: 'Dashboard', href: '/resources/dino-ui/examples/dashboard' },
        { title: 'Landing Page', href: '/resources/dino-ui/examples/landing' },
        { title: 'E-commerce', href: '/resources/dino-ui/examples/ecommerce' },
      ],
    },
  ]

  return (
    <>
      {/* Mobile Navigation */}
      <MobileResourceNav
        sections={sidebarSections}
        resourceTitle="Dino UI"
        resourceIcon="UI"
        resourceDescription="Component Library"
      />

      <div className="relative flex min-h-screen">
        {/* Left Sidebar - Main Navigation */}
        <AnimatedSidebar position="left">
          <div className="flex h-full flex-col relative">
            {/* Sidebar Header - Positioned at top right */}
            <div className="absolute top-8 -right-8 z-10">
              <div className="-rotate-90 origin-center whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div>
                    <h2 className="font-semibold text-neutral-200 text-4xl">Dino UI</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation - Positioned below header */}
            <div className="flex-1 overflow-y-auto p-4 mt-32">
              <nav className="space-y-6">
                {sidebarSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-2 font-medium text-neutral-900 text-xs uppercase tracking-wide">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between rounded-md px-3 py-2 text-neutral-600 text-xs transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                          >
                            <span>{item.title}</span>
                            <ChevronRightIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </AnimatedSidebar>

        {/* Main Content */}
        <div className="flex-1">
          <div className="lg:p-0 p-4">{children}</div>
        </div>

        {/* Right Sidebar - Help Section */}
        <AnimatedSidebar position="right">
          <div className="flex h-full flex-col">
            {/* Help Section */}
            <div className="p-4">
              <div className="rounded-md bg-violet-50 p-3">
                <p className="font-medium text-violet-900 text-xs">Need Help?</p>
                <p className="mt-1 text-violet-700 text-xs">
                  Check our documentation or reach out to support.
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center text-violet-600 text-xs hover:text-violet-700"
                >
                  Contact Support
                  <ChevronRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSidebar>
      </div>
    </>
  )
}

export default DinoUiLayout
