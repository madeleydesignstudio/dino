import Link from "next/link";

const DinoUI = () => {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] border-b border-stone-700 overflow-hidden">
        <div className="absolute w-1/3 h-full border-r border-stone-700 bg-stone-800/30" />
        <div className="absolute w-2/3 h-full border-r border-stone-700 bg-stone-800/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-8xl font-nanum text-stone-50 px-8 text-center">
            DINO UI
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
        {/* Introduction */}
        <div className="space-y-6">
          <h2 className="text-4xl font-nanum text-stone-50">
            Unleash Your Inner Design Engineer
          </h2>
          <p className="text-stone-300 leading-relaxed">
            Welcome to DINO UI, the ultimate UI library crafted for design
            engineers by design engineers. Born from the innovative spirit of
            The Digital Dino, we&apos;re here to revolutionize the way you build
            user interfaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-stone-700 hover:border-stone-600 transition-colors bg-stone-800/50 backdrop-blur-sm">
            <div className="text-3xl mb-4">🦖</div>
            <h3 className="text-xl font-nanum text-stone-50 mb-2">
              Prehistoric Power Meets Modern Design
            </h3>
            <p className="text-sm text-stone-300">
              Harness the raw power of React and the sleek simplicity of
              Tailwind CSS to build interfaces that are both stunning and
              efficient.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-stone-700 hover:border-stone-600 transition-colors bg-stone-800/50 backdrop-blur-sm">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-nanum text-stone-50 mb-2">
              Accelerate Development
            </h3>
            <p className="text-sm text-stone-300">
              Our extensive library of modular, customizable components lets you
              jumpstart your projects and streamline your workflow.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-stone-700 hover:border-stone-600 transition-colors bg-stone-800/50 backdrop-blur-sm">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-nanum text-stone-50 mb-2">
              Design with Ease
            </h3>
            <p className="text-sm text-stone-300">
              With a focus on intuitive design and usability, DINO UI makes it
              effortless to create interfaces that users will love.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-stone-700 hover:border-stone-600 transition-colors bg-stone-800/50 backdrop-blur-sm">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-nanum text-stone-50 mb-2">
              Join the DINO Community
            </h3>
            <p className="text-sm text-stone-300">
              Become a part of a thriving community of design engineers. Share
              ideas, get feedback, and grow together.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 pt-8 border-t border-stone-700">
          <h2 className="text-3xl font-nanum text-stone-50">
            Step into the Future, One Footprint at a Time
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Whether you&apos;re crafting a small project or engineering a
            massive application, our tools are designed to scale with you. Ready
            to make your projects roar?
          </p>
          <Link href="/dino-ui">
            <button className="bg-stone-50 text-stone-900 px-8 py-4 rounded-lg font-karla hover:bg-stone-200 transition-colors">
              Get Started with DINO UI →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DinoUI;
