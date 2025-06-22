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
    <div className="flex w-full justify-between px-4 py-8">
      <div className="w-1/3 flex flex-col gap-8">
        <h2 className="text-2xl">
          Our Studio <br /> & Services
        </h2>
        <div>
          <h3 className="text-xs font-semibold mb-2">Our promises</h3>
          <ul className="text-xs space-y-1">
            <li>• Transparent Pricing</li>
            <li>• Quality Assured</li>
            <li>• Fast Delivery</li>
            <li>• Unique Designs</li>
            <li>• Full Support</li>
            <li>• Hands-Off Experience</li>
          </ul>
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-8 max-w-2xl">
        <div className="flex flex-col gap-4">
          <p>
            Driven by a commitment to quality and a mindset that questions convention, our
            intentionally small studio thrives on agility. This lean structure allows us to stay
            adaptable and bring in specialist expertise tailored to each project, keeping our
            process fluid and exploratory.
          </p>
          <p>
            Our flexible way of working is a natural fit for startups and entrepreneurs at critical
            growth points. We work side by side with them to translate their goals, values, and
            vision into a compelling digital identity.
          </p>
        </div>

        {/* 2x3 Grid of Services */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className="h-[150px] w-full border border-neutral-400 rounded-md p-4 flex flex-col justify-end bg-cover bg-center relative hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-neutral-900/60 rounded-md"></div>
              <h3 className="font-semibold text-sm text-white relative z-10">{service.title}</h3>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 max-w-lg self-end">
          <p className="text-xs text-neutral-500">
            In short, we partner with those ready to break convention and think beyond the usual. We
            design websites and apps anchored in clear goals — but driven by unrestrained
            creativity.
          </p>
          <button className="px-2 py-1 rounded-md bg-violet-200 text-neutral-900 cursor-pointer w-fit text-sm">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Studio
