import React from 'react'

const Studio = () => {
  const services = [
    {
      title: 'Website Design',
    },
    {
      title: 'Website Development',
    },
    {
      title: 'Art & Creative Design',
    },
    {
      title: 'Agentic AI',
    },
    {
      title: 'Product Design',
    },
    {
      title: 'View All',
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
            <div
              key={index}
              className="h-[150px] w-full border border-neutral-400 rounded-md p-4 flex flex-col justify-end"
            >
              <h3 className="font-semibold text-sm">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Studio
