'use client'

import React, { useState, useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  BookOpenIcon,
  WrenchIcon,
  UsersIcon,
  MailIcon,
  PhoneIcon,
  InfoIcon,
  TrendingUpIcon,
  PaletteIcon,
  CodeIcon,
  HeadphonesIcon,
  SearchIcon,
  HashIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

// Define search data
const searchItems = [
  // Navigation
  {
    category: 'Navigation',
    title: 'Home',
    description: 'Return to homepage',
    href: '/',
    icon: HomeIcon,
    keywords: ['home', 'main', 'index'],
  },
  {
    category: 'Navigation',
    title: 'About Us',
    description: 'Learn about our team and mission',
    href: '/about',
    icon: InfoIcon,
    keywords: ['about', 'team', 'mission', 'company'],
  },
  {
    category: 'Navigation',
    title: 'Contact',
    description: 'Get in touch for your next project',
    href: '/contact',
    icon: PhoneIcon,
    keywords: ['contact', 'email', 'phone', 'reach'],
  },

  // Case Studies
  {
    category: 'Case Studies',
    title: 'Structopia',
    description: 'Modern web platform for architectural design',
    href: '/case-studies/structopia',
    icon: FolderIcon,
    keywords: ['structopia', 'architecture', 'design', 'platform', 'web'],
  },
  {
    category: 'Case Studies',
    title: 'Ordo',
    description: 'Task management and productivity application',
    href: '/case-studies/ordo',
    icon: FolderIcon,
    keywords: ['ordo', 'task', 'management', 'productivity', 'app'],
  },
  {
    category: 'Case Studies',
    title: 'Form + Function',
    description: 'Design studio portfolio and brand identity',
    href: '/case-studies/form-function',
    icon: FolderIcon,
    keywords: ['form', 'function', 'portfolio', 'brand', 'identity'],
  },

  // Services
  {
    category: 'Services',
    title: 'Web Design',
    description: 'Custom website design and user experience',
    href: '/services/web-design',
    icon: PaletteIcon,
    keywords: ['web', 'design', 'ui', 'ux', 'website'],
  },
  {
    category: 'Services',
    title: 'Development',
    description: 'Frontend and full-stack web development',
    href: '/services/development',
    icon: CodeIcon,
    keywords: ['development', 'coding', 'frontend', 'fullstack', 'programming'],
  },
  {
    category: 'Services',
    title: 'Branding',
    description: 'Brand identity and visual design systems',
    href: '/services/branding',
    icon: TrendingUpIcon,
    keywords: ['branding', 'identity', 'visual', 'logo', 'brand'],
  },
  {
    category: 'Services',
    title: 'Consulting',
    description: 'Design strategy and technical consultation',
    href: '/services/consulting',
    icon: HeadphonesIcon,
    keywords: ['consulting', 'strategy', 'advice', 'consultation'],
  },

  // Resources
  {
    category: 'Resources',
    title: 'Blog',
    description: 'Design insights, tutorials, and industry trends',
    href: '/blog',
    icon: FileTextIcon,
    keywords: ['blog', 'articles', 'insights', 'tutorials', 'trends'],
  },
  {
    category: 'Resources',
    title: 'Guides',
    description: 'Step-by-step guides for design and development',
    href: '/guides',
    icon: BookOpenIcon,
    keywords: ['guides', 'tutorials', 'how-to', 'step-by-step'],
  },
  {
    category: 'Resources',
    title: 'Templates',
    description: 'Free design templates and UI components',
    href: '/templates',
    icon: WrenchIcon,
    keywords: ['templates', 'components', 'ui', 'free', 'design'],
  },
  {
    category: 'Resources',
    title: 'Community',
    description: 'Join our community of designers and developers',
    href: '/community',
    icon: UsersIcon,
    keywords: ['community', 'designers', 'developers', 'join'],
  },

  // Company
  {
    category: 'Company',
    title: 'Careers',
    description: 'Join our team of talented designers and developers',
    href: '/careers',
    icon: BriefcaseIcon,
    keywords: ['careers', 'jobs', 'hiring', 'team', 'work'],
  },
  {
    category: 'Company',
    title: 'Our Process',
    description: 'How we approach design and development projects',
    href: '/process',
    icon: HashIcon,
    keywords: ['process', 'approach', 'methodology', 'workflow'],
  },
]

const SearchCommand = () => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()

  // Listen for Cmd+K or Ctrl+K
  useHotkeys(
    ['meta+k', 'ctrl+k'],
    (event) => {
      event.preventDefault()
      setOpen(true)
    },
    {
      enableOnFormTags: true,
    },
  )

  // Close on escape
  useHotkeys(
    'escape',
    () => {
      if (open) {
        setOpen(false)
      }
    },
    {
      enableOnFormTags: true,
      enabled: open,
    },
  )

  // Filter items based on search
  const filteredItems = React.useMemo(() => {
    if (!search) return searchItems

    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(search.toLowerCase())),
    )
  }, [search])

  // Group items by category
  const groupedItems = React.useMemo(() => {
    const groups: { [key: string]: typeof searchItems } = {}

    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = []
      }
      groups[item.category].push(item)
    })

    return groups
  }, [filteredItems])

  const handleSelect = (href: string) => {
    setOpen(false)
    setSearch('')
    router.push(href)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen} className="max-w-2xl">
      <CommandInput
        placeholder="Search pages, case studies, services..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {Object.entries(groupedItems).map(([category, items], index) => (
          <React.Fragment key={category}>
            {index > 0 && <CommandSeparator />}
            <CommandGroup heading={category}>
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <CommandItem
                    key={item.href}
                    onSelect={() => handleSelect(item.href)}
                    className="flex items-center gap-3"
                  >
                    <Icon className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </React.Fragment>
        ))}

        {!search && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Quick Actions">
              <CommandItem
                onSelect={() => handleSelect('/contact')}
                className="flex items-center gap-3"
              >
                <PhoneIcon className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="font-medium">Start a Project</span>
                  <span className="text-xs text-muted-foreground">
                    Get in touch to discuss your next project
                  </span>
                </div>
                <CommandShortcut>Enter</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  )
}

export default SearchCommand
