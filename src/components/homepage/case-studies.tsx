import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Structopia',
      description: 'Creative Direction, Development',
      image: 'https://storage.dev-0af.workers.dev/structopia-mockup.jpeg',
      href: '/case-studies/structopia',
      featured: true,
    },
    {
      title: 'Ordo',
      description: 'Creative Direction, Development',
      image: 'https://storage.dev-0af.workers.dev/ordo-background.png',
      href: '/case-studies/ordo',
      featured: false,
    },
    {
      title: 'Form + Function',
      description: 'Creative Direction, Development',
      image: 'https://storage.dev-0af.workers.dev/form+function-background.png',
      href: '/case-studies/form-function',
      featured: false,
    },
  ]

  const featuredProject = caseStudies.find((project) => project.featured)
  const otherProjects = caseStudies.filter((project) => !project.featured)

  return (
    <div className="flex flex-col gap-6">
      {/* Header Section - Mobile Stacked, Desktop Side by Side */}
      <div className="mx-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-xl text-neutral-900 lg:w-1/3 lg:text-2xl">
          Selected Work <br /> & Case Studies
        </h2>
        <p className="text-base text-neutral-500 lg:w-2/3 lg:text-right lg:text-lg">
          Every collaboration leads to something distinctive. By blending bold ideas, creative
          thinking, and strategic goals, we craft digital platforms that not only stand out — they
          help businesses grow.
        </p>
      </div>

      {/* View All Button */}
      <div className="mx-4 flex justify-center lg:justify-end">
        <Link
          href="/case-studies"
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-700"
        >
          View All
        </Link>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="flex w-full flex-col gap-3 lg:gap-4">
          <Link href={featuredProject.href} className="group">
            <AspectRatio className="mx-4 overflow-hidden rounded-lg" ratio={16 / 9}>
              <Image
                alt={featuredProject.title}
                fill
                src={featuredProject.image}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
          </Link>
          <div className="mx-4 flex flex-col gap-1">
            <Link href={featuredProject.href} className="hover:underline">
              <h3 className="text-lg font-medium lg:text-xl">{featuredProject.title}</h3>
            </Link>
            <p className="text-sm text-neutral-500">{featuredProject.description}</p>
          </div>
        </div>
      )}

      {/* Other Projects Grid - Mobile Stacked, Desktop Side by Side */}
      <div className="mx-4 flex flex-col gap-6 lg:flex-row lg:gap-4">
        {otherProjects.map((project, index) => (
          <div key={project.title} className="flex w-full flex-col gap-3 lg:w-1/2 lg:gap-4">
            <Link href={project.href} className="group">
              <AspectRatio
                className={`overflow-hidden rounded-lg ${index === 1 ? 'lg:mr-4' : ''}`}
                ratio={4 / 5}
              >
                <Image
                  alt={project.title}
                  fill
                  src={project.image}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
            </Link>
            <div className="flex flex-col gap-1">
              <Link href={project.href} className="hover:underline">
                <h3 className="text-base font-medium lg:text-lg">{project.title}</h3>
              </Link>
              <p className="text-sm text-neutral-500">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudies
