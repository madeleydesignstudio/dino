import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const CaseStudies = () => {
  return (
    <div>
      <div></div>
      <div className="flex flex-col gap-4 w-full ">
        <AspectRatio ratio={16 / 9} className="mx-4">
          <Image
            src={'https://storage.dev-0af.workers.dev/structopia-mockup.jpeg'}
            fill
            alt="Ordo Banner"
          />
        </AspectRatio>
        <h2 className="mx-4">Structopia</h2>
      </div>
      <div className="flex gap-4 w-full mx-4 ">
        <div className="flex flex-col gap-4 w-1/2">
          <AspectRatio ratio={4 / 5}>
            <Image
              src={'https://storage.dev-0af.workers.dev/ordo-background.png'}
              fill
              alt="Ordo Banner"
            />
          </AspectRatio>
          <h2>Ordo</h2>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <AspectRatio ratio={4 / 5} className="mr-8">
            <Image
              src={'https://storage.dev-0af.workers.dev/form+function-background.png'}
              fill
              alt="Ordo Banner"
            />
          </AspectRatio>
          <h2>Form + Function</h2>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
