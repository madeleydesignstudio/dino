'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchIcon } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import SearchCommand from '../search-command'

const PrimaryNavbar = () => {
  return (
    <div className="sticky top-0 z-50 h-[40px] border border-neutral-200 w-full flex items-center justify-center bg-neutral-50">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://storage.dev-0af.workers.dev/dino-logo.png"
            alt="Dino"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium">Dino</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto px-2 py-1 text-[10px] font-normal">
                  Case Studies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Our Work</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our portfolio of design and development projects.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/case-studies/structopia" title="Structopia">
                      Modern web platform for architectural design.
                    </ListItem>
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
                <NavigationMenuTrigger className="h-auto px-2 py-1 text-[10px] font-normal">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/blog" title="Blog">
                      Design insights, tutorials, and industry trends.
                    </ListItem>
                    <ListItem href="/guides" title="Guides">
                      Step-by-step guides for design and development.
                    </ListItem>
                    <ListItem href="/templates" title="Templates">
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
                <NavigationMenuTrigger className="h-auto px-2 py-1 text-[10px] font-normal">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/services/web-design" title="Web Design">
                      Custom website design and user experience.
                    </ListItem>
                    <ListItem href="/services/development" title="Development">
                      Frontend and full-stack web development.
                    </ListItem>
                    <ListItem href="/services/branding" title="Branding">
                      Brand identity and visual design systems.
                    </ListItem>
                    <ListItem href="/services/consulting" title="Consulting">
                      Design strategy and technical consultation.
                    </ListItem>
                    <ListItem href="/services/maintenance" title="Maintenance">
                      Ongoing support and website maintenance.
                    </ListItem>
                    <ListItem href="/services/audit" title="Design Audit">
                      UX/UI analysis and improvement recommendations.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto px-2 py-1 text-[10px] font-normal">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            </NavigationMenuList>
          </NavigationMenu>

          <button
            className="flex items-center gap-1 hover:bg-neutral-100 rounded-sm px-1 py-1"
            onClick={() => {
              // This will be handled by the SearchCommand component's hotkey
              const event = new KeyboardEvent('keydown', {
                key: 'k',
                metaKey: true,
                bubbles: true,
              })
              document.dispatchEvent(event)
            }}
          >
            <SearchIcon className="w-3 h-3" />
            <span className="text-[9px] text-muted-foreground hidden sm:inline">⌘K</span>
          </button>
          <button className="px-2 py-1 rounded-md bg-violet-200 text-neutral-900">
            Start Project
          </button>
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
          ref={ref}
          href={href!}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default PrimaryNavbar
