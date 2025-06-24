import React from 'react';

const News = () => {
  return (
    <div className="mx-4 flex flex-col gap-4">
      <div>
        <h2>
          News, Updates <br /> & Thoughts
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div
          className="relative flex h-[600px] cursor-pointer flex-col justify-end overflow-hidden rounded-lg border border-neutral-200 bg-center bg-cover p-4 transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 transition-all duration-300 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent" />
          <div className="relative z-10">
            <h2 className="font-bold text-lg text-white">
              What Makes a Website Feel Like Your Brand?
            </h2>
            <p className="text-neutral-200 text-xs">
              A post unpacking brand alignment in design — helpful for clients
              unsure how to translate their identity into a digital experience.
            </p>
          </div>
        </div>
        <div
          className="relative flex h-[600px] cursor-pointer flex-col justify-end overflow-hidden rounded-lg border border-neutral-200 bg-center bg-cover p-4 transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 transition-all duration-300 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent" />
          <div className="relative z-10">
            <h2 className="font-bold text-lg text-white">
              Design Systems That Scale
            </h2>
            <p className="text-neutral-200 text-xs">
              How to build consistent design patterns that grow with your
              business and maintain brand integrity.
            </p>
          </div>
        </div>
        <div
          className="relative flex h-[600px] cursor-pointer flex-col justify-end overflow-hidden rounded-lg border border-neutral-200 bg-center bg-cover p-4 transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 transition-all duration-300 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent" />
          <div className="relative z-10">
            <h2 className="font-bold text-lg text-white">
              The Psychology of User Experience
            </h2>
            <p className="text-neutral-200 text-xs">
              Understanding how users think and behave to create intuitive,
              conversion-focused websites.
            </p>
          </div>
        </div>
        <div
          className="relative flex h-[600px] cursor-pointer flex-col justify-end overflow-hidden rounded-lg border border-neutral-200 bg-center bg-cover p-4 transition-all duration-300"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=600&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 transition-all duration-300 hover:from-neutral-900/70 hover:via-neutral-900/20 hover:to-transparent" />
          <div className="relative z-10">
            <h2 className="font-bold text-lg text-white">
              Mobile-First Design Principles
            </h2>
            <p className="text-neutral-200 text-xs">
              Why starting with mobile creates better experiences and how to
              implement responsive design effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
