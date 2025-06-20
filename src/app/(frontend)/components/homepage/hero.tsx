import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import LinePattern from '../ui/line-pattern'

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-end mx-4">
        {/* Description */}
        <div className="flex flex-col gap-2 text-sm w-1/3">
          <p>
            We&apos;re <span className="font-bold">Dino</span> — a creative team focused on crafting
            bespoke websites that launch startups swiftly, seamlessly, and with refined style.
          </p>
          <p>
            Driven by your goals and powered by our inventive thinking, we build digital experiences
            that stand out, leave a lasting impression, and reflect your unique vision and ambition.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex w-2/3  items-end justify-center translate-y-[25px]">
          <LinePattern className="text-neutral-300" strokeWidth={1} />
        </div>
      </div>
      <AspectRatio ratio={16 / 9} className="mx-4">
        <Image
          src={'https://storage.dev-0af.workers.dev/ordo-mockup3.jpeg'}
          fill
          alt="Ordo Banner"
        />
      </AspectRatio>
    </div>
  )
}

export default Hero
