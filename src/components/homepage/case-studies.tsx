import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CaseStudies = () => {
  return (
    <div>
      <div className="mx-4 flex items-center justify-between">
        <h2 className="w-1/3 text-2xl text-neutral-900">
          Selected Work <br /> & Case Studies
        </h2>
        <p className="w-2/3 text-right text-lg text-neutral-500">
          Every collaboration leads to something distinctive. By blending bold
          ideas, creative thinking, and strategic goals, we craft digital
          platforms that not only stand out — they help businesses grow.
        </p>
      </div>
      <div className="mx-4 flex justify-end py-4">
        <button className="text-neutral-500 text-sm">View All</button>
      </div>
      <div className="flex w-full flex-col gap-4 ">
        <AspectRatio className="mx-4" ratio={16 / 9}>
          <Image
            alt="Ordo Banner"
            fill
            src={'https://storage.dev-0af.workers.dev/structopia-mockup.jpeg'}
          />
        </AspectRatio>
        <div className="flex flex-col gap-1">
          <h2 className="mx-4">Structopia</h2>
          <p className="mx-4 text-neutral-500 text-sm">
            Creative Direction, Development{' '}
          </p>
        </div>
      </div>
      <div className="mx-4 flex w-full gap-4 py-4">
        <div className="flex w-1/2 flex-col gap-4">
          <AspectRatio ratio={4 / 5}>
            <Image
              alt="Ordo Banner"
              fill
              src={'https://storage.dev-0af.workers.dev/ordo-background.png'}
            />
          </AspectRatio>
          <div className="flex flex-col gap-1">
            <h2 className="mx-4">Ordo</h2>
            <p className="mx-4 text-neutral-500 text-sm">
              Creative Direction, Development{' '}
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4">
          <AspectRatio className="mr-8" ratio={4 / 5}>
            <Image
              alt="Ordo Banner"
              fill
              src={
                'https://storage.dev-0af.workers.dev/form+function-background.png'
              }
            />
          </AspectRatio>
          <div className="flex flex-col gap-1">
            <h2 className="mx-4">Form + Function</h2>
            <p className="mx-4 text-neutral-500 text-sm">
              Creative Direction, Development{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
