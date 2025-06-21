import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Timeline from '../ui/timeline'

const Hero = () => {
  const timelineData = [
    {
      title: '66 Million Years Ago - Cretaceous-Paleogene Extinction Event',
      description:
        'A 6-mile-wide asteroid crashes the dinosaurs&apos; 165-million-year house party in spectacular fashion. T-Rex, who had finally figured out how to open doors with those tiny arms, becomes very upset about the timing. Mammals emerge from hiding like "Finally, our moment has come!"',
    },
    {
      title: '1993 - Jurassic Park Released',
      description:
        'Steven Spielberg convinces the world that dinosaurs were terrifying murder machines instead of the feathered bird-ancestors they actually were. Velociraptors everywhere roll over in their fossil beds as Hollywood makes them 3 times bigger and infinitely more dramatic than they ever were in real life.',
    },
    {
      title: '2025-Present - Dino was born',
      description:
        'Dino’s have been resurrected with vengeance to help guarantee you digital success. The design and build you lighting fast websites to optimise your digital presence.',
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-end mx-4">
        {/* Description */}
        <div className="flex flex-col gap-4  w-1/3 pb-4">
          <p className="text-sm">
            We&apos;re <span className="font-bold">Dino</span> — a creative team focused on crafting
            bespoke websites that launch startups swiftly, seamlessly, and with refined style.
          </p>
          <p className="text-sm">
            Driven by your goals and powered by our inventive thinking, we build digital experiences
            that stand out, leave a lasting impression, and reflect your unique vision and ambition.
          </p>
          <p className="text-[10px] text-neutral-500">
            We&apos;re now welcoming new projects and partnerships for 2025. <br />
            <span className="font-bold underline">Let&apos;s connect.</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="flex w-2/3 items-end justify-center translate-y-[25px]">
          <Timeline items={timelineData} />
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
