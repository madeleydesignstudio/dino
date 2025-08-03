import Link from 'next/link'
import React from 'react'

const News = () => {
  const newsItems = [
    {
      title: 'What Makes a Website Feel Like Your Brand?',
      description:
        'A post unpacking brand alignment in design — helpful for clients unsure how to translate their identity into a digital experience.',
      image:
        "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center')",
      href: '/updates/brand-alignment',
    },
    {
      title: 'Design Systems That Scale',
      description:
        'How to build consistent design patterns that grow with your business and maintain brand integrity.',
      image:
        "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&crop=center')",
      href: '/updates/design-systems',
    },
    {
      title: 'The Psychology of User Experience',
      description:
        'Understanding how users think and behave to create intuitive, conversion-focused websites.',
      image:
        "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center')",
      href: '/updates/ux-psychology',
    },
    {
      title: 'Mobile-First Design Principles',
      description:
        'Why starting with mobile creates better experiences and how to implement responsive design effectively.',
      image:
        "url('https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=600&fit=crop&crop=center')",
      href: '/updates/mobile-first',
    },
  ]

  return (
    <div className="mx-4 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl lg:text-2xl">
          News, Updates <br /> & Thoughts
        </h2>
      </div>

      {/* News Grid - Ultra-small 1 Column, Mobile 1 Column, Tablet 2 Columns, Desktop 4 Columns */}
      <div className="grid grid-cols-1 gap-2 xs:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {newsItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative flex h-[300px] cursor-pointer flex-col justify-end overflow-hidden rounded-lg border border-neutral-200 bg-cover bg-center p-2 transition-all duration-300 hover:scale-[1.02] xs:h-[400px] xs:p-4 sm:h-[450px] lg:h-[500px] xl:h-[600px]"
            style={{
              backgroundImage: item.image,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 transition-all duration-300 group-hover:from-neutral-900/70 group-hover:via-neutral-900/20 group-hover:to-transparent" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mb-1 text-sm font-bold text-white xs:mb-2 xs:text-base lg:text-lg">
                {item.title}
              </h3>
              <p className="text-xs leading-tight text-neutral-200 xs:leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <div className="flex justify-center lg:justify-end">
        <Link
          href="/updates"
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-700"
        >
          View All Updates
        </Link>
      </div>
    </div>
  )
}

export default News
