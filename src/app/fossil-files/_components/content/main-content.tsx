// "use client";

// import { ScrollArea } from "@/components/ui/scroll-area";
// import { AnimatePresence, motion } from "framer-motion";
// import { Loader2 } from "lucide-react";
// import { memo } from "react";
// import type { NavigationItem } from "../../config/items";
// import GradientSquare from "../ui/gradient-square";
// import IconGrid from "../ui/icon-grid";

// interface MainContentProps {
//   isLoading: boolean;
//   selectedItem: NavigationItem | "";
// }

// export const MainContent = memo(function MainContent({
//   isLoading,
//   selectedItem,
// }: MainContentProps) {
//   if (isLoading) {
//     return (
//       <div className="h-full w-full flex items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
//       </div>
//     );
//   }

//   return (
//     <main className="flex-1 relative">
//       <AnimatePresence mode="wait">
//         {selectedItem ? (
//           <motion.div
//             key="selected-content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="relative z-10"
//           >
//             <GradientSquare selectedItem={selectedItem} />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="default-content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <ScrollArea className="h-full w-full">
//               <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8 space-y-12 py-12">
//                 <motion.div
//                   className="text-center space-y-4"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h2 className="text-4xl mb-4 font-bold">Our Mission</h2>
//                   <p className="text-stone-600 leading-relaxed">
//                     Embarking on a new project and unsure which tech stack fits
//                     best? We&apos;re here to help you make that crucial decision
//                     with confidence.
//                   </p>
//                 </motion.div>

//                 <IconGrid />

//                 {/* Reference to existing content */}
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   {/* Content from lines 157-197 in the original page.tsx */}
//                   <div className="space-y-4">
//                     <h3 className="text-2xl mb-2 font-semibold">
//                       What We Offer
//                     </h3>
//                     <p className="text-stone-600 leading-relaxed">
//                       Discover our curated collection of tools, frameworks, and
//                       services designed to build modern web applications.
//                       Whether it&apos;s known as Jamstack, MACH, Composable, or
//                       simply &quot;Stack,&quot; we bring it all together for
//                       you.
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </ScrollArea>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// });
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { memo } from "react";
import type { NavigationItem } from "../../config/items";
import GradientSquare from "../ui/gradient-square";
import IconGrid from "../ui/icon-grid";

const MissionSection = memo(function MissionSection() {
  return (
    <motion.div
      className="text-center space-y-4"
      {...contentAnimation}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-4xl mb-4 font-bold">Our Mission</h2>
      <p className="text-stone-600 leading-relaxed">
        Embarking on a new project and unsure which tech stack fits best?
        We&apos;re here to help you make that crucial decision with confidence.
      </p>
    </motion.div>
  );
});

const OfferSection = memo(function OfferSection() {
  return (
    <motion.div {...contentAnimation} transition={{ delay: 0.4 }}>
      <div className="space-y-4">
        <h3 className="text-2xl mb-2 font-semibold">What We Offer</h3>
        <p className="text-stone-600 leading-relaxed">
          Discover our curated collection of tools, frameworks, and services
          designed to build modern web applications. Whether it&apos;s known as
          Jamstack, MACH, Composable, or simply &quot;Stack,&quot; we bring it
          all together for you.
        </p>
      </div>
    </motion.div>
  );
});

const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

interface MainContentProps {
  isLoading: boolean;
  selectedItem: NavigationItem | "";
}

export const MainContent = memo(function MainContent({
  isLoading,
  selectedItem,
}: MainContentProps) {
  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
      </div>
    );
  }

  return (
    <main className="flex-1 relative ">
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <motion.div
            key="selected-content"
            {...fadeAnimation}
            className="relative z-10"
          >
            <GradientSquare selectedItem={selectedItem} />
          </motion.div>
        ) : (
          <DefaultContent />
        )}
      </AnimatePresence>
    </main>
  );
});

const DefaultContent = memo(function DefaultContent() {
  return (
    <motion.div key="default-content" {...fadeAnimation}>
      <ScrollArea className="h-full w-full">
        <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8 space-y-12 py-12">
          <MissionSection />
          <IconGrid />
          <OfferSection />
        </div>
      </ScrollArea>
    </motion.div>
  );
});
