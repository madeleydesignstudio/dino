import Image from 'next/image';
import type React from 'react';
import LinePattern from './line-pattern';

interface TimelineItem {
  title: string;
  description: string;
  imageUrl?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Line Pattern */}
      <LinePattern className="text-neutral-300" strokeWidth={1} />

      {/* Content sections positioned absolutely */}
      <div className="absolute inset-0">
        {/* Top section - text on right, image on left */}
        <div className="absolute top-[30px] left-[120px] w-[240px]">
          <h3 className="mb-1 font-semibold text-neutral-700 text-sm">
            {items[0]?.title || 'Title 1'}
          </h3>
          <p className="text-[10px] text-neutral-500">
            {items[0]?.description || 'Description for first timeline item.'}
          </p>
        </div>
        <div className="absolute top-[70px] right-[110px] flex h-[60px] w-[120px] items-center justify-center rounded">
          <Image
            alt="Meteor Strike"
            className="rotate-90"
            height={60}
            src="https://storage.dev-0af.workers.dev/meteor-strike.png"
            width={120}
          />
        </div>
        {/* Middle section - text on left, image on right */}
        <div className="absolute top-[180px] right-[120px] w-[240px] text-right">
          <h3 className="mb-1 font-semibold text-neutral-700 text-sm">
            {items[1]?.title || 'Title 2'}
          </h3>
          <p className="text-[10px] text-neutral-500">
            {items[1]?.description || 'Description for second timeline item.'}
          </p>
        </div>
        <div className="absolute top-[220px] left-[120px] flex h-[60px] w-[120px] items-center justify-center rounded bg-neutral-200">
          <Image
            alt="Meteor Strike"
            height={60}
            src="https://storage.dev-0af.workers.dev/jurrasic.png"
            width={120}
          />
        </div>

        {/* Bottom section - text on right, image on left */}
        <div className="absolute top-[330px] left-[120px] w-[240px]">
          <h3 className="mb-1 font-semibold text-neutral-700 text-sm">
            {items[2]?.title || 'Title 3'}
          </h3>
          <p className="text-[10px] text-neutral-500">
            {items[2]?.description || 'Description for third timeline item.'}
          </p>
        </div>
        <div className="absolute top-[330px] right-[120px] flex h-[60px] w-[120px] items-center justify-center gap-2">
          <Image
            alt="Meteor Strike"
            height={40}
            src="https://storage.dev-0af.workers.dev/dino-logo.png"
            width={40}
          />
          <span className="font-bold text-neutral-900 text-xl">Dino</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
