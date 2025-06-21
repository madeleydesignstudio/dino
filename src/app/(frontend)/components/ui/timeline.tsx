import React from 'react'
import LinePattern from './line-pattern'
import Image from 'next/image'

interface TimelineItem {
  title: string
  description: string
  imageUrl?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Line Pattern */}
      <LinePattern className="text-neutral-300" strokeWidth={1} />

      {/* Content sections positioned absolutely */}
      <div className="absolute inset-0">
        {/* Top section - text on right, image on left */}
        <div className="absolute left-[120px] top-[30px] w-[240px]">
          <h3 className="text-sm font-semibold mb-1">{items[0]?.title || 'Title 1'}</h3>
          <p className="text-[10px] text-neutral-600">
            {items[0]?.description || 'Description for first timeline item.'}
          </p>
        </div>
        <div className="absolute right-[110px] top-[70px] w-[120px] h-[60px] bg-neutral-200 rounded flex items-center justify-center">
          <Image
            src="https://storage.dev-0af.workers.dev/meteor-strike.png"
            alt="Meteor Strike"
            width={120}
            height={60}
            className="rotate-90"
          />
        </div>
        {/* Middle section - text on left, image on right */}
        <div className="absolute right-[120px] top-[180px] w-[240px] text-right">
          <h3 className="text-sm font-semibold mb-1">{items[1]?.title || 'Title 2'}</h3>
          <p className="text-[10px] text-neutral-600">
            {items[1]?.description || 'Description for second timeline item.'}
          </p>
        </div>
        <div className="absolute left-[120px] top-[220px] w-[120px] h-[60px] bg-neutral-200 rounded flex items-center justify-center">
          <Image
            src="https://storage.dev-0af.workers.dev/jurrasic.png"
            alt="Meteor Strike"
            width={120}
            height={60}
          />
        </div>

        {/* Bottom section - text on right, image on left */}
        <div className="absolute left-[120px] top-[330px] w-[240px]">
          <h3 className="text-sm font-semibold mb-1">{items[2]?.title || 'Title 3'}</h3>
          <p className="text-[10px] text-neutral-600">
            {items[2]?.description || 'Description for third timeline item.'}
          </p>
        </div>
        <div className="absolute right-[120px] top-[330px] w-[120px] h-[60px] bg-neutral-200 rounded flex items-center justify-center">
          <span className="text-xs text-neutral-500">Image 3</span>
        </div>
      </div>
    </div>
  )
}

export default Timeline
