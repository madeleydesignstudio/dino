'use client'

import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import { AnimatedSidebar } from '@/components/animated-sidebar'

const DinoApiLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarSections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', href: '/resources/dino-api' },
        { title: 'Authentication', href: '/resources/dino-api/authentication' },
        { title: 'Quick Start', href: '/resources/dino-api/quick-start' },
        { title: 'Rate Limits', href: '/resources/dino-api/rate-limits' },
      ],
    },
    {
      title: 'API Reference',
      items: [
        { title: 'Users', href: '/resources/dino-api/users' },
        { title: 'Projects', href: '/resources/dino-api/projects' },
        { title: 'Media', href: '/resources/dino-api/media' },
        { title: 'Webhooks', href: '/resources/dino-api/webhooks' },
        { title: 'Analytics', href: '/resources/dino-api/analytics' },
        { title: 'Errors', href: '/resources/dino-api/errors' },
      ],
    },
    {
      title: 'SDKs & Tools',
      items: [
        { title: 'JavaScript SDK', href: '/resources/dino-api/sdk/javascript' },
        { title: 'Python SDK', href: '/resources/dino-api/sdk/python' },
        { title: 'REST API', href: '/resources/dino-api/rest' },
        { title: 'GraphQL', href: '/resources/dino-api/graphql' },
      ],
    },
    {
      title: 'Examples',
      items: [
        { title: 'Code Samples', href: '/resources/dino-api/examples/samples' },
        { title: 'Tutorials', href: '/resources/dino-api/examples/tutorials' },
        { title: 'Postman Collection', href: '/resources/dino-api/examples/postman' },
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
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100">
                <span className="font-semibold text-blue-600 text-sm">API</span>
              </div>
              <div>
                <h2 className="font-semibold text-neutral-900 text-sm">Dino API</h2>
                <p className="text-neutral-500 text-xs">Developer Platform</p>
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
      <div className="flex-1 ">
        <div className="">{children}</div>
      </div>

      {/* Right Sidebar - Help Section */}
      <AnimatedSidebar position="right">
        <div className="flex h-full flex-col">
          {/* API Status */}
          <div className="border-b border-neutral-200 p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="font-medium text-neutral-900 text-xs">API Status: Operational</span>
            </div>
            <p className="text-neutral-500 text-xs">All systems operational</p>
          </div>

          {/* Help Section */}
          <div className="p-4">
            <div className="rounded-md bg-blue-50 p-3">
              <p className="font-medium text-blue-900 text-xs">Need Help?</p>
              <p className="mt-1 text-blue-700 text-xs">
                Check our API documentation or contact our developer support team.
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center text-blue-600 text-xs hover:text-blue-700"
              >
                Developer Support
                <ChevronRightIcon className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-neutral-200 p-4">
            <h4 className="font-medium text-neutral-900 text-xs mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/resources/dino-api/playground"
                className="block text-neutral-600 text-xs hover:text-neutral-900"
              >
                API Playground
              </Link>
              <Link
                href="/resources/dino-api/changelog"
                className="block text-neutral-600 text-xs hover:text-neutral-900"
              >
                Changelog
              </Link>
              <Link
                href="/resources/dino-api/status"
                className="block text-neutral-600 text-xs hover:text-neutral-900"
              >
                Status Page
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSidebar>
    </div>
  )
}

export default DinoApiLayout
