import React from 'react'

const News = () => {
  return (
    <div className="flex flex-col gap-4 mx-4">
      <div>
        <h2>
          News, Updates <br /> & Thoughts
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div
          className="h-[600px] border border-neutral-200 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden bg-cover bg-center cursor-pointer transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent transition-all duration-300"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white">
              What Makes a Website Feel Like Your Brand?
            </h2>
            <p className="text-neutral-200 text-xs">
              A post unpacking brand alignment in design — helpful for clients unsure how to
              translate their identity into a digital experience.
            </p>
          </div>
        </div>
        <div
          className="h-[600px] border border-neutral-200 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden bg-cover bg-center cursor-pointer transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent transition-all duration-300"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white">Design Systems That Scale</h2>
            <p className="text-neutral-200 text-xs">
              How to build consistent design patterns that grow with your business and maintain
              brand integrity.
            </p>
          </div>
        </div>
        <div
          className="h-[600px] border border-neutral-200 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden bg-cover bg-center cursor-pointer transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent transition-all duration-300"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white">The Psychology of User Experience</h2>
            <p className="text-neutral-200 text-xs">
              Understanding how users think and behave to create intuitive, conversion-focused
              websites.
            </p>
          </div>
        </div>
        <div
          className="h-[600px] border border-neutral-200 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden bg-cover bg-center cursor-pointer transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent transition-all duration-300"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white">Mobile-First Design Principles</h2>
            <p className="text-neutral-200 text-xs">
              Why starting with mobile creates better experiences and how to implement responsive
              design effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
