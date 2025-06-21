import React from 'react'

const Studio = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/3">
        <h2>Our Studio & Services</h2>
        <p>
          Our promises Transparent Pricing Quality Assured Fast Delivery Unique Designs Full Support
          Hands-Off Experience
        </p>
      </div>
      <div className="w-2/3 flex flex-col gap-4">
        <p>
          Driven by a commitment to quality and a mindset that questions convention, our
          intentionally small studio thrives on agility. This lean structure allows us to stay
          adaptable and bring in specialist expertise tailored to each project, keeping our process
          fluid and exploratory.
        </p>
        <p>
          Our flexible way of working is a natural fit for startups and entrepreneurs at critical
          growth points. We work side by side with them to translate their goals, values, and vision
          into a compelling digital identity.
        </p>

        <div className="flex gap-4">
          <div className="h-[150px] w-full border border-neutral-400 rounded-md"> s</div>
          <div className="h-[150px] w-full border border-neutral-400 rounded-md"> s</div>
        </div>
      </div>
    </div>
  )
}

export default Studio
