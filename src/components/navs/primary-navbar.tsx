'use client'

import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import SearchCommand from '@/components/ui/search-command'
import { cn } from '@/lib/utils'

const PrimaryNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navigationSections = [
    {
      title: 'Case Studies',
      items: [
        {
          title: 'Structopia',
          href: '/case-studies/structopia',
          description: 'Modern web platform for architectural design',
        },
        {
          title: 'Ordo',
          href: '/case-studies/ordo',
          description: 'Task management and productivity application',
        },
        {
          title: 'Form + Function',
          href: '/case-studies/form-function',
          description: 'Design studio portfolio and brand identity',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Dino UI',
          href: '/resources/dino-ui',
          description: 'Design insights, tutorials, and industry trends',
        },
        {
          title: 'Dino API',
          href: '/resources/dino-api',
          description: 'Step-by-step guides for design and development',
        },
        {
          title: 'Dino Open Source',
          href: '/resources/dino-opensource',
          description: 'Free design templates and UI components',
        },
        {
          title: 'Tools',
          href: '/tools',
          description: 'Recommended tools and resources for designers',
        },
        {
          title: 'Community',
          href: '/community',
          description: 'Join our community of designers and developers',
        },
        {
          title: 'Newsletter',
          href: '/newsletter',
          description: 'Stay updated with our latest content and projects',
        },
      ],
    },
    {
      title: 'Services',
      items: [
        {
          title: 'Website Design',
          href: '/services/website-design',
          description: 'Beautiful, user-focused websites that convert visitors into customers',
        },
        {
          title: 'Website Development',
          href: '/services/website-development',
          description: 'High-performance web applications built with cutting-edge technologies',
        },
        {
          title: 'Art & Creative Design',
          href: '/services/art-creative-design',
          description: 'Complete visual identity systems and creative assets',
        },
        {
          title: 'Product Design',
          href: '/services/product-design',
          description: 'User-centered product design that creates intuitive experiences',
        },
        {
          title: 'Agentic AI',
          href: '/services/agentic-ai',
          description:
            'Intelligent AI solutions that automate processes and enhance decision-making',
        },
        {
          title: 'All Services',
          href: '/services',
          description: 'View our complete range of digital services',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          title: 'About Us',
          href: '/about',
          description: 'Learn about our team and mission',
        },
        {
          title: 'Careers',
          href: '/careers',
          description: 'Join our team of talented designers and developers',
        },
        {
          title: 'Contact',
          href: '/contact',
          description: 'Get in touch for your next project',
        },
        {
          title: 'Our Process',
          href: '/process',
          description: 'How we approach design and development projects',
        },
        {
          title: 'Values',
          href: '/values',
          description: 'The principles that guide our work',
        },
        {
          title: 'Press',
          href: '/press',
          description: 'Media coverage and press resources',
        },
      ],
    },
  ]

  const handleLinkClick = () => {
    setDrawerOpen(false)
  }

  return (
    <div className="sticky top-0 bg-background z-[99999] border-b py-1 border-x">
      <div className="flex items-center justify-between px-2 w-full">
        {/* Logo - Always visible */}
        <Link className="flex items-center gap-2" href="/">
          <Image
            alt="Dino"
            className="h-5 w-5"
            height={20}
            src="https://storage.dev-0af.workers.dev/dino-logo.png"
            width={20}
          />
          <span className="text-sm font-medium">Dino</span>
        </Link>

        {/* Mobile Navigation - visible on mobile, hidden on md+ */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100"
            onClick={() => {
              window.openSearch?.()
            }}
          >
            <SearchIcon className="h-4 w-4" />
          </button>

          <Drawer onOpenChange={setDrawerOpen} open={drawerOpen}>
            <DrawerTrigger asChild>
              <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100">
                <MenuIcon className="h-4 w-4" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[90vh]">
              <DrawerHeader className="border-b p-2">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="text-sm">Navigation</DrawerTitle>
                  <DrawerClose asChild>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100">
                      <XIcon className="h-4 w-4" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="flex-1 overflow-y-auto p-2">
                <Accordion className="w-full space-y-1" collapsible type="single">
                  {navigationSections.map((section, index) => (
                    <AccordionItem
                      className="rounded-lg border"
                      key={section.title}
                      value={`section-${index}`}
                    >
                      <AccordionTrigger className="px-2 py-2 text-xs font-medium hover:bg-neutral-50 hover:no-underline">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-2">
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              className="block rounded-md p-2 transition-colors hover:bg-neutral-50"
                              href={item.href}
                              key={item.href}
                              onClick={handleLinkClick}
                            >
                              <div className="text-xs font-medium">{item.title}</div>
                              <div className="mt-0.5 text-[10px] text-muted-foreground">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-4 space-y-2 border-t pt-4">
                  <Link
                    className="block w-full rounded-md bg-violet-200 px-2 py-2 text-center text-xs font-medium text-neutral-900 transition-colors hover:bg-violet-300"
                    href="/contact"
                    onClick={handleLinkClick}
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Navigation - hidden on mobile, visible on md+ */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {/* Desktop Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-2 py-1 font-normal text-xs">
                  Case Studies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/case-studies/structopia"
                        >
                          <div className="mb-2 mt-4 font-medium text-lg">Structopia</div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Modern web platform for architectural design.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/case-studies/ordo" title="Ordo">
                      Task management and productivity application.
                    </ListItem>
                    <ListItem href="/case-studies/form-function" title="Form + Function">
                      Design studio portfolio and brand identity.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-2 py-1 font-normal text-xs">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/resources/dino-ui" title="Dino UI">
                      Design insights, tutorials, and industry trends.
                    </ListItem>
                    <ListItem href="/resources/dino-api" title="Dino API">
                      Step-by-step guides for design and development.
                    </ListItem>
                    <ListItem href="/resources/dino-opensource" title="Dino Open Source">
                      Free design templates and UI components.
                    </ListItem>
                    <ListItem href="/tools" title="Tools">
                      Recommended tools and resources for designers.
                    </ListItem>
                    <ListItem href="/community" title="Community">
                      Join our community of designers and developers.
                    </ListItem>
                    <ListItem href="/newsletter" title="Newsletter">
                      Stay updated with our latest content and projects.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-2 py-1 font-normal text-xs">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/services/website-design" title="Website Design">
                      Beautiful, user-focused websites that convert visitors into customers.
                    </ListItem>
                    <ListItem href="/services/website-development" title="Website Development">
                      High-performance web applications built with cutting-edge technologies.
                    </ListItem>
                    <ListItem href="/services/art-creative-design" title="Art & Creative Design">
                      Complete visual identity systems and creative assets.
                    </ListItem>
                    <ListItem href="/services/product-design" title="Product Design">
                      User-centered product design that creates intuitive experiences.
                    </ListItem>
                    <ListItem href="/services/agentic-ai" title="Agentic AI">
                      Intelligent AI solutions that automate processes and enhance decision-making.
                    </ListItem>
                    <ListItem href="/services" title="All Services">
                      View our complete range of digital services.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-2 py-1 font-normal text-xs">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/about" title="About Us">
                      Learn about our team and mission.
                    </ListItem>
                    <ListItem href="/careers" title="Careers">
                      Join our team of talented designers and developers.
                    </ListItem>
                    <ListItem href="/contact" title="Contact">
                      Get in touch for your next project.
                    </ListItem>
                    <ListItem href="/process" title="Our Process">
                      How we approach design and development projects.
                    </ListItem>
                    <ListItem href="/values" title="Values">
                      The principles that guide our work.
                    </ListItem>
                    <ListItem href="/press" title="Press">
                      Media coverage and press resources.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-2 py-1 font-normal text-xs">
                  Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/company/pricing" title="Pricing">
                      Transparent pricing for all our services.
                    </ListItem>
                    <ListItem href="/company/questions" title="Questions">
                      Frequently asked questions and support.
                    </ListItem>
                    <ListItem href="/company/testimonials" title="Testimonials">
                      What our clients say about working with us.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Search and Start Project */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                className="h-7 w-48 md:w-64 rounded-md border border-neutral-200 bg-neutral-50 px-2 pr-6 text-xs placeholder:text-neutral-400 focus:border-violet-300 focus:outline-none focus:ring-1 focus:ring-violet-200"
                placeholder="Search..."
                onFocus={() => {
                  window.openSearch?.()
                }}
                onClick={() => {
                  window.openSearch?.()
                }}
                readOnly
              />
              <SearchIcon className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-neutral-400" />
            </div>
            <Link
              className="cursor-pointer rounded-md bg-violet-200 px-2 py-1 text-neutral-900 text-xs hover:bg-violet-300"
              href="/start-project"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
      <SearchCommand />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          href={href!}
          ref={ref}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-xs leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'

export default PrimaryNavbar
