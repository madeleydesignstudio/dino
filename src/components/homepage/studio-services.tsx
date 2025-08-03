import Link from 'next/link'
import React from 'react'

const Studio = () => {
  const services = [
    {
      title: 'Website Design',
      backgroundImage: 'https://storage.dev-0af.workers.dev/website-design.png',
      href: '/services/website-design',
    },
    {
      title: 'Website Development',
      backgroundImage: 'https://storage.dev-0af.workers.dev/website-development.png',
      href: '/services/website-development',
    },
    {
      title: 'Art & Creative Design',
      backgroundImage: 'https://storage.dev-0af.workers.dev/art&creative-design.png',
      href: '/services/art-creative-design',
    },
    {
      title: 'Agentic AI',
      backgroundImage: 'https://storage.dev-0af.workers.dev/agentic-ai.png',
      href: '/services/agentic-ai',
    },
    {
      title: 'Product Design',
      backgroundImage: 'https://storage.dev-0af.workers.dev/product-design.png',
      href: '/services/product-design',
    },
    {
      title: 'View All',
      backgroundImage: 'https://storage.dev-0af.workers.dev/view-all.png',
      href: '/services',
    },
  ]

  return (
    <div className="flex w-full flex-col gap-6 px-4 py-8 lg:flex-row lg:justify-between lg:gap-8">
      {/* Left Column - Title and Promises */}
      <div className="flex w-full flex-col gap-6 lg:w-1/3 lg:gap-8">
        <h2 className="text-xl lg:text-2xl">
          Our Studio <br /> & Services
        </h2>
        <div>
          <h3 className="mb-2 font-semibold text-xs">Our promises</h3>
          <ul className="space-y-1 text-xs">
            <li>• Transparent Pricing</li>
            <li>• Quality Assured</li>
            <li>• Fast Delivery</li>
            <li>• Unique Designs</li>
            <li>• Full Support</li>
            <li>• Hands-Off Experience</li>
          </ul>
        </div>
      </div>

      {/* Right Column - Content and Services */}
      <div className="flex w-full flex-col gap-6 lg:w-2/3 lg:max-w-2xl lg:gap-8">
        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-sm lg:text-base">
            Driven by a commitment to quality and a mindset that questions convention, our
            intentionally small studio thrives on agility. This lean structure allows us to stay
            adaptable and bring in specialist expertise tailored to each project, keeping our
            process fluid and exploratory.
          </p>
          <p className="text-sm lg:text-base">
            Our flexible way of working is a natural fit for startups and entrepreneurs at critical
            growth points. We work side by side with them to translate their goals, values, and
            vision into a compelling digital identity.
          </p>
        </div>

        {/* Services Grid - Ultra-small 1 Column, Mobile 1-2 Columns, Tablet 2 Columns, Desktop 2 Columns */}
        <div className="grid grid-cols-1 gap-2 xs:grid-cols-1 sm:grid-cols-2 xs:gap-3 lg:gap-4">
          {services.map((service, index) => (
            <Link
              className="relative flex h-[100px] w-full cursor-pointer flex-col justify-end rounded-md border border-neutral-400 bg-cover bg-center p-2 transition-all duration-300 hover:scale-105 xs:h-[120px] xs:p-3 sm:h-[150px] lg:p-4"
              href={service.href}
              key={index}
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 rounded-md bg-neutral-900/60" />
              <h3 className="relative z-10 text-xs font-semibold text-white xs:text-sm">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Bottom Text and CTA */}
        <div className="flex flex-col gap-2 xs:gap-4 lg:max-w-lg lg:self-end">
          <p className="text-xs leading-relaxed text-neutral-500">
            In short, we partner with those ready to break convention and think beyond the usual. We
            design websites and apps anchored in clear goals — but driven by unrestrained
            creativity.
          </p>
          <Link
            href="/start-project"
            className="w-fit cursor-pointer rounded-md bg-violet-200 px-2 py-1 text-xs text-neutral-900 transition-colors hover:bg-violet-300 xs:px-3 xs:py-2 xs:text-sm lg:px-2 lg:py-1"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Studio
