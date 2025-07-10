'use client'

import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import { AnimatedSidebar } from '@/components/animated-sidebar'

const DinoOpenSourceLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarSections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Overview', href: '/resources/dino-opensource' },
        { title: 'Contributing', href: '/resources/dino-opensource/contributing' },
        { title: 'Code of Conduct', href: '/resources/dino-opensource/code-of-conduct' },
        { title: 'License', href: '/resources/dino-opensource/license' },
      ],
    },
    {
      title: 'Projects',
      items: [
        { title: 'Dino UI Library', href: '/resources/dino-opensource/projects/ui-library' },
        { title: 'Dino Templates', href: '/resources/dino-opensource/projects/templates' },
        { title: 'Dino CLI Tools', href: '/resources/dino-opensource/projects/cli' },
        { title: 'Dino Themes', href: '/resources/dino-opensource/projects/themes' },
        { title: 'Starter Kits', href: '/resources/dino-opensource/projects/starters' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'Documentation', href: '/resources/dino-opensource/docs' },
        { title: 'Examples', href: '/resources/dino-opensource/examples' },
        { title: 'Tutorials', href: '/resources/dino-opensource/tutorials' },
        { title: 'Best Practices', href: '/resources/dino-opensource/best-practices' },
      ],
    },
    {
      title: 'Community',
      items: [
        { title: 'Discussions', href: '/resources/dino-opensource/discussions' },
        { title: 'Issues & Bugs', href: '/resources/dino-opensource/issues' },
        { title: 'Feature Requests', href: '/resources/dino-opensource/features' },
        { title: 'Roadmap', href: '/resources/dino-opensource/roadmap' },
      ],
    },
  ]

  return (
    <div className="relative flex min-h-screen">
      {/* Left Sidebar - Main Navigation */}
      <AnimatedSidebar position="left">
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="border-b border-neutral-200 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-100">
                <span className="font-semibold text-green-600 text-sm">OS</span>
              </div>
              <div>
                <h2 className="font-semibold text-neutral-900 text-sm">Dino Open Source</h2>
                <p className="text-neutral-500 text-xs">Community Projects</p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
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
                          className="group flex items-center justify-between rounded-md px-3 py-2 text-neutral-600 text-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900"
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
        <div className="">{children}</div>
      </div>

      {/* Right Sidebar - Community & Help */}
      <AnimatedSidebar position="right">
        <div className="flex h-full flex-col">
          {/* Stats */}
          <div className="border-b border-neutral-200 p-4">
            <h4 className="font-medium text-neutral-900 text-xs mb-3">Community Stats</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Contributors</span>
                <span className="font-medium text-neutral-900">42</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Repositories</span>
                <span className="font-medium text-neutral-900">12</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Stars</span>
                <span className="font-medium text-neutral-900">1.2k</span>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="p-4">
            <div className="rounded-md bg-green-50 p-3">
              <p className="font-medium text-green-900 text-xs">Want to Contribute?</p>
              <p className="mt-1 text-green-700 text-xs">
                Join our open source community and help build amazing tools together.
              </p>
              <Link
                href="/resources/dino-opensource/contributing"
                className="mt-2 inline-flex items-center text-green-600 text-xs hover:text-green-700"
              >
                Get Started
                <ChevronRightIcon className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-neutral-200 p-4">
            <h4 className="font-medium text-neutral-900 text-xs mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="https://github.com/dino-design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-neutral-600 text-xs hover:text-neutral-900"
              >
                <span>GitHub</span>
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="/resources/dino-opensource/discussions"
                className="block text-neutral-600 text-xs hover:text-neutral-900"
              >
                Discussions
              </Link>
              <Link
                href="/resources/dino-opensource/changelog"
                className="block text-neutral-600 text-xs hover:text-neutral-900"
              >
                Changelog
              </Link>
            </div>
          </div>

          {/* Sponsor */}
          <div className="border-t border-neutral-200 p-4 mt-auto">
            <div className="rounded-md bg-yellow-50 p-3">
              <p className="font-medium text-yellow-900 text-xs">Support Us</p>
              <p className="mt-1 text-yellow-700 text-xs">
                Help us maintain and improve our open source projects.
              </p>
              <Link
                href="/sponsor"
                className="mt-2 inline-flex items-center text-yellow-600 text-xs hover:text-yellow-700"
              >
                Become a Sponsor
                <ChevronRightIcon className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSidebar>
    </div>
  )
}

export default DinoOpenSourceLayout
