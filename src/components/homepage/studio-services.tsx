import Link from 'next/link';
import React from 'react';

const Studio = () => {
  const services = [
    {
      title: 'Website Design',
      backgroundImage: 'https://storage.dev-0af.workers.dev/website-design.png',
      href: '/services/website-design',
    },
    {
      title: 'Website Development',
      backgroundImage:
        'https://storage.dev-0af.workers.dev/website-development.png',
      href: '/services/website-development',
    },
    {
      title: 'Art & Creative Design',
      backgroundImage:
        'https://storage.dev-0af.workers.dev/art&creative-design.png',
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
  ];

  return (
    <div className="flex w-full justify-between px-4 py-8">
      <div className="flex w-1/3 flex-col gap-8">
        <h2 className="text-2xl">
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
      <div className="flex w-2/3 max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p>
            Driven by a commitment to quality and a mindset that questions
            convention, our intentionally small studio thrives on agility. This
            lean structure allows us to stay adaptable and bring in specialist
            expertise tailored to each project, keeping our process fluid and
            exploratory.
          </p>
          <p>
            Our flexible way of working is a natural fit for startups and
            entrepreneurs at critical growth points. We work side by side with
            them to translate their goals, values, and vision into a compelling
            digital identity.
          </p>
        </div>

        {/* 2x3 Grid of Services */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link
              className="relative flex h-[150px] w-full cursor-pointer flex-col justify-end rounded-md border border-neutral-400 bg-center bg-cover p-4 transition-all duration-300 hover:scale-105"
              href={service.href}
              key={index}
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 rounded-md bg-neutral-900/60" />
              <h3 className="relative z-10 font-semibold text-sm text-white">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
        <div className="flex max-w-lg flex-col gap-2 self-end">
          <p className="text-neutral-500 text-xs">
            In short, we partner with those ready to break convention and think
            beyond the usual. We design websites and apps anchored in clear
            goals — but driven by unrestrained creativity.
          </p>
          <button className="w-fit cursor-pointer rounded-md bg-violet-200 px-2 py-1 text-neutral-900 text-sm">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studio;
