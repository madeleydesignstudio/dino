import Image from "next/image";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <section className="hidden md:flex min-w-[768px] w-[125vw] relative">
      {/* Photo background (covers entire section) */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_httpss.mj.runmHocz22p-iQ_Rick_and_morty_styled_pixel__95d55bd2-f449-4bc4-9ea9-ade80d3360c9_0.png?updatedAt=1729106463251"
            alt="Desert landscape"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-stone-50/10 dark:bg-stone-900/10" />
        </div>
      </div>

      <div className="relative h-screen flex-1">
        {/* White background (1/3 width) */}
        {/* <div className="absolute left-0 top-0 h-full w-1/3 backdrop-blur-xl bg-stone-50/80 dark:bg-stone-950/80 border-r border-stone-900 dark:border-stone-300"/> */}
        <AuroraBackground className="absolute left-0 top-0 h-full w-1/3 backdrop-blur-xl bg-stone-50/80 dark:bg-stone-950/80 border-r border-stone-900 dark:border-stone-300">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          />
        </AuroraBackground>

        <div className="relative z-10 flex h-full w-full flex-col justify-between">
          <main>
            <div className="relative left-0  h-[33.333vh] border-b border-stone-900 dark:border-stone-300 flex items-center justify-center">
              <h2 className="text-[9vw] font-nanum  text-center">
                Architects of the web.
              </h2>
            </div>
            <p className="text-[4vw] font-nanum pl-[34%] max-w-[70%] pt-6">
              &quot;Big agency thinking, small agency attitude.&quot;
            </p>
          </main>

          <footer className="flex items-center justify-between p-6">
            <div className="flex items-start gap-2">
              <p className="font-bold text-[4vw] font-karla">DINO</p>
              <div className="flex flex-col pt-2">
                <p className="text-xs font-karla">51.5072° N, 0.1276° W</p>
                <p className="text-xs font-karla">UK DESIGN STUDIO</p>
              </div>
            </div>
            <p className="text-[2vw] font-nanum">
              Scroll{" "}
              <span className="ml-2 inline-block animate-scroll-arrow">→</span>
            </p>
          </footer>
        </div>
      </div>

      <div className="w-[30vw] max-w-[568px] min-w-[400px] h-screen border-r border-l border-stone-900 dark:border-stone-300 z-10">
        <a href="/services/design">
          <div className="flex-1 h-1/3 flex flex-col justify-end pb-6 px-6 border-b border-stone-900 dark:border-stone-300 hover:bg-stone-200/50 transition-colors dark:hover:bg-stone-800/50">
            <h2 className="text-[4vw] mb-2 font-nanum">Design</h2>
            <p className="text-xs">
              Elevate your digital experience and delight every user. It all
              starts here.
            </p>
          </div>
        </a>

        <a href="/services/engineer">
          <div className="flex-1 h-1/3 flex flex-col justify-end pb-6 px-6 border-b border-stone-900 dark:border-stone-300 hover:bg-stone-200/50 transition-colors dark:hover:bg-stone-800/50">
            <h2 className="text-[4vw] mb-2 font-nanum">Engineer</h2>
            <p className="text-xs">
              Make zero comprises when implementing your vision, using a
              powerful tech stack.
            </p>
          </div>
        </a>

        <a href="/services/market">
          <div className="flex-1 h-1/3 flex flex-col justify-end pb-6 px-6 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors">
            <h2 className="text-[4vw] mb-2 font-nanum">Market</h2>
            <p className="text-xs">
              Your deadline is our deadline. Your success is our success.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
