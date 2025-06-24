'use client';

import { MenuIcon, SearchIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import SearchCommand from '@/components/ui/search-command';
import { cn } from '@/lib/utils';

const PrimaryNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          title: 'Web Design',
          href: '/services/web-design',
          description: 'Custom website design and user experience',
        },
        {
          title: 'Development',
          href: '/services/development',
          description: 'Frontend and full-stack web development',
        },
        {
          title: 'Branding',
          href: '/services/branding',
          description: 'Brand identity and visual design systems',
        },
        {
          title: 'Consulting',
          href: '/services/consulting',
          description: 'Design strategy and technical consultation',
        },
        {
          title: 'Maintenance',
          href: '/services/maintenance',
          description: 'Ongoing support and website maintenance',
        },
        {
          title: 'Design Audit',
          href: '/services/audit',
          description: 'UX/UI analysis and improvement recommendations',
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
  ];

  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 flex h-[40px] w-full items-center justify-center border border-neutral-200 bg-neutral-50 ">
      <div className="relative flex w-full items-center justify-between px-4">
        <Link className="flex items-center gap-2 " href="/">
          <Image
            alt="Dino"
            className="transition-all duration-300 hover:rotate-180"
            height={20}
            src="https://storage.dev-0af.workers.dev/dino-logo.png"
            width={20}
          />
          <span className="font-medium text-sm">Dino</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden items-center gap-2 text-xs md:flex">
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
                          href="/case-studies"
                        >
                          <div className="mt-4 mb-2 font-medium text-lg">
                            Our Work
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Explore our portfolio of design and development
                            projects.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-1">
                      <div className="px-3 font-medium text-neutral-500 text-xs">
                        Latest Projects
                      </div>
                    </li>
                    <ListItem
                      href="/case-studies/structopia"
                      title="Structopia"
                    >
                      Modern web platform for architectural design.
                    </ListItem>
                    <ListItem href="/case-studies/ordo" title="Ordo">
                      Task management and productivity application.
                    </ListItem>
                    <ListItem
                      href="/case-studies/form-function"
                      title="Form + Function"
                    >
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
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/resources/dino-ui" title="Dino UI">
                      Design insights, tutorials, and industry trends.
                    </ListItem>
                    <ListItem href="/resources/dino-api" title="Dino API">
                      Step-by-step guides for design and development.
                    </ListItem>
                    <ListItem
                      href="/resources/dino-opensource"
                      title="Dino Open Source"
                    >
                      Free design templates and UI components.
                    </ListItem>
                    <ListItem href="/resources/tools" title="Dino Tools">
                      Recommended tools and resources for designers.
                    </ListItem>
                    <ListItem
                      href="/resources/dino-academy"
                      title="Dino Academy"
                    >
                      Join our community of designers and developers.
                    </ListItem>
                    <ListItem
                      href="/resources/dino-newsletter"
                      title="Dino Newsletter"
                    >
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
                  <ul className="grid w-[400px] grid-cols-2 gap-1 p-2">
                    <ListItem
                      href="/services/website-design"
                      title="Website Design"
                    >
                      Custom web design projects and user experience.
                    </ListItem>
                    <ListItem
                      href="/services/website-development"
                      title="Website Development"
                    >
                      Frontend and full-stack web development.
                    </ListItem>
                    <ListItem
                      href="/services/art-creative-design"
                      title="Art & Creative Design"
                    >
                      Artistic design and creative visual solutions.
                    </ListItem>
                    <ListItem href="/services/agentic-ai" title="Agentic AI">
                      AI-powered applications and intelligent systems.
                    </ListItem>
                    <ListItem
                      href="/services/product-design"
                      title="Product Design"
                    >
                      User experience and product interface design.
                    </ListItem>
                    <ListItem href="/services" title="View All">
                      Explore all our services and capabilities.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent px-2 py-1 font-normal text-xs">
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
        </div>

       {/* Search and Start Project */}
        <div className="flex items-center gap-2">
          <button
            className="flex cursor-pointer items-center gap-1 rounded-sm px-1 py-1 hover:bg-neutral-100"
            onClick={() => {
              window.openSearch?.();
            }}
          >
            <SearchIcon className="h-3 w-3" />
            <span className="hidden text-[9px] text-muted-foreground sm:inline">
              ⌘K
            </span>
          </button>
          <Link
            className="cursor-pointer rounded-md bg-violet-200 px-2 py-1 text-neutral-900 text-xs"
            href="/start-project"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="flex items-center gap-1 rounded-sm px-1 py-1 hover:bg-neutral-100"
            onClick={() => {
              window.openSearch?.();
            }}
          >
            <SearchIcon className="h-4 w-4" />
          </button>

          <Drawer onOpenChange={setDrawerOpen} open={drawerOpen}>
            <DrawerTrigger asChild>
              <button className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-neutral-100">
                <MenuIcon className="h-4 w-4" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[85vh]">
              <DrawerHeader className="border-b">
                <div className="flex items-center justify-between">
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerClose asChild>
                    <button className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-neutral-100">
                      <XIcon className="h-4 w-4" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="flex-1 overflow-y-auto p-4">
                <Accordion
                  className="w-full space-y-2"
                  collapsible
                  type="single"
                >
                  {navigationSections.map((section, index) => (
                    <AccordionItem
                      className="rounded-lg border"
                      key={section.title}
                      value={`section-${index}`}
                    >
                      <AccordionTrigger className="px-4 font-medium text-sm hover:bg-neutral-50 hover:no-underline">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="space-y-3">
                          {section.items.map((item) => (
                            <Link
                              className="block rounded-md p-3 transition-colors hover:bg-neutral-50"
                              href={item.href}
                              key={item.href}
                              onClick={handleLinkClick}
                            >
                              <div className="font-medium text-sm">
                                {item.title}
                              </div>
                              <div className="mt-1 text-muted-foreground text-xs">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 space-y-3 border-t pt-6">
                  <Link
                    className="block w-full rounded-md bg-violet-200 px-4 py-3 text-center font-medium text-neutral-900 transition-colors hover:bg-violet-300"
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
      </div>
      <SearchCommand />
    </div>
  );
};

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
            className
          )}
          href={href!}
          ref={ref}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-xs leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default PrimaryNavbar;
