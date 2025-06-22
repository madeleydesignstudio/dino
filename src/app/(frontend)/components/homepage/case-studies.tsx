import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const CaseStudies = () => {
  return (
    <div>
      <div className="flex justify-between items-center mx-4">
        <h2 className="text-2xl text-neutral-900 w-1/3">
          Selected Work <br /> & Case Studies
        </h2>
        <p className="text-lg text-neutral-500 w-2/3 text-right">
          Every collaboration leads to something distinctive. By blending bold ideas, creative
          thinking, and strategic goals, we craft digital platforms that not only stand out — they
          help businesses grow.
        </p>
      </div>
      <div className="flex justify-end mx-4 py-4">
        <button className="text-sm text-neutral-500">View All</button>
      </div>
      <div className="flex flex-col gap-4 w-full ">
        <AspectRatio ratio={16 / 9} className="mx-4">
          <Image
            src={'https://storage.dev-0af.workers.dev/structopia-mockup.jpeg'}
            fill
            alt="Ordo Banner"
          />
        </AspectRatio>
        <div className="flex flex-col gap-1">
          <h2 className="mx-4">Structopia</h2>
          <p className="text-sm text-neutral-500 mx-4">Creative Direction, Development </p>
        </div>
      </div>
      <div className="flex gap-4 w-full mx-4 py-4">
        <div className="flex flex-col gap-4 w-1/2">
          <AspectRatio ratio={4 / 5}>
            <Image
              src={'https://storage.dev-0af.workers.dev/ordo-background.png'}
              fill
              alt="Ordo Banner"
            />
          </AspectRatio>
          <div className="flex flex-col gap-1">
            <h2 className="mx-4">Ordo</h2>
            <p className="text-sm text-neutral-500 mx-4">Creative Direction, Development </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <AspectRatio ratio={4 / 5} className="mr-8">
            <Image
              src={'https://storage.dev-0af.workers.dev/form+function-background.png'}
              fill
              alt="Ordo Banner"
            />
          </AspectRatio>
          <div className="flex flex-col gap-1">
            <h2 className="mx-4">Form + Function</h2>
            <p className="text-sm text-neutral-500 mx-4">Creative Direction, Development </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
