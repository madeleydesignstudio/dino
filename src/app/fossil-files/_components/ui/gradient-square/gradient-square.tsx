// "use client";

// import { useState, useEffect } from "react";
// import { motion, useAnimation, type Variants } from "framer-motion";
// import type { NavigationItem } from "../../config/items";
// import { navigationItems } from "../../config/items";
// import { frontend_categories } from "../../config/frontend-data";
// import { backend_categories } from "../../config/backend-data";
// import { design_categories } from "../../config/design-data";
// import { marketing_categories } from "../../config/marketing-data";

// const sectionDescriptions: Record<NavigationItem, string> = {
//   Frontend:
//     "Tools and technologies for building user interfaces and client-side applications, focusing on what users see and interact with directly.",
//   Backend:
//     "Server-side technologies and tools that power applications behind the scenes, handling data, business logic, and infrastructure.",
//   Design:
//     "Creative tools and platforms for crafting user experiences, visual elements, and intuitive interfaces.",
//   Market:
//     "Marketing and analytics tools to help grow your product, understand your users, and measure success.",
// };

// const getIcon = (selectedItem: NavigationItem) => {
//   const item = navigationItems.find((item) => item.name === selectedItem);
//   return item ? (
//     <img src={item.icon} alt={item.name} className="w-5 h-5" />
//   ) : null;
// };

// const ContentSection = ({ selectedItem }: { selectedItem: NavigationItem }) => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const getSelectedTools = () => {
//     if (!selectedCategory) return [];

//     if (selectedItem === "Frontend") {
//       return (
//         frontend_categories.find((cat) => cat.category === selectedCategory)
//           ?.tools || []
//       );
//     }
//     if (selectedItem === "Backend") {
//       return (
//         backend_categories.find((cat) => cat.category === selectedCategory)
//           ?.tools || []
//       );
//     }
//     if (selectedItem === "Design") {
//       return (
//         design_categories.find((cat) => cat.category === selectedCategory)
//           ?.tools || []
//       );
//     }
//     if (selectedItem === "Market") {
//       return (
//         marketing_categories.find((cat) => cat.category === selectedCategory)
//           ?.tools || []
//       );
//     }
//     return [];
//   };

//   const selectedTools = getSelectedTools();

//   return (
//     <motion.div
//       className="w-full h-full flex"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: 1 }}
//     >
//       <div className="w-1/5 h-full border-r">
//         <motion.div className="p-4 border-b">
//           <motion.div
//             className="flex items-center gap-3"
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.span
//               className="text-xl"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               {getIcon(selectedItem)}
//             </motion.span>
//             <h2 className="text-lg font-medium">{selectedItem}</h2>
//           </motion.div>
//         </motion.div>

//         {selectedItem === "Frontend" && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//             className="p-4 space-y-2"
//           >
//             <ul className="space-y-2 text-sm">
//               {frontend_categories.map((item) => (
//                 <li
//                   key={item.category}
//                   onClick={() => setSelectedCategory(item.category)}
//                   className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
//                     selectedCategory === item.category
//                       ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
//                       : "text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/50"
//                   }`}
//                 >
//                   {item.category}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {selectedItem === "Backend" && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//             className="p-4 space-y-2"
//           >
//             <ul className="space-y-2 text-sm">
//               {backend_categories.map((item) => (
//                 <li
//                   key={item.category}
//                   onClick={() => setSelectedCategory(item.category)}
//                   className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
//                     selectedCategory === item.category
//                       ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
//                       : "text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/50"
//                   }`}
//                 >
//                   {item.category}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {selectedItem === "Design" && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//             className="p-4 space-y-2"
//           >
//             <ul className="space-y-2 text-sm">
//               {design_categories.map((item) => (
//                 <li
//                   key={item.category}
//                   onClick={() => setSelectedCategory(item.category)}
//                   className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
//                     selectedCategory === item.category
//                       ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
//                       : "text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/50"
//                   }`}
//                 >
//                   {item.category}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {selectedItem === "Market" && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//             className="p-4 space-y-2"
//           >
//             <ul className="space-y-2 text-sm">
//               {marketing_categories.map((item) => (
//                 <li
//                   key={item.category}
//                   onClick={() => setSelectedCategory(item.category)}
//                   className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
//                     selectedCategory === item.category
//                       ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
//                       : "text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/50"
//                   }`}
//                 >
//                   {item.category}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//       <motion.div
//         className="w-4/5 h-full flex flex-col"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3, delay: 1.2 }}
//       >
//         <div className="w-full h-full p-8">
//           <motion.div
//             className="mb-8"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <motion.h2
//               className="text-2xl font-semibold mb-3 text-stone-800 dark:text-stone-200"
//               key={selectedItem}
//             >
//               Summary
//             </motion.h2>
//             <p className="text-stone-600 dark:text-stone-400">
//               {sectionDescriptions[selectedItem]}
//             </p>
//           </motion.div>
//           {selectedCategory && (
//             <div className="grid grid-cols-3 gap-6 overflow-y-auto">
//               {selectedTools.map((tool) => (
//                 <motion.div
//                   key={tool}
//                   className="p-4 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 transition-colors bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <h3 className="text-lg font-medium text-stone-800 dark:text-stone-200">
//                     {tool}
//                   </h3>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const squareVariants: Variants = {
//   initial: { width: 100, height: 100, borderRadius: 8 },
//   animate: {
//     width: "94vw",
//     height: "90vh",
//     borderRadius: 12,
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//       borderRadius: { delay: 0.5, duration: 0.2 },
//     },
//   },
// };

// const contentVariants: Variants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: { delay: 0.8, duration: 0.3 },
//   },
// };

// interface GradientSquareProps {
//   selectedItem: NavigationItem;
// }

// export default function GradientSquare({ selectedItem }: GradientSquareProps) {
//   const [isAnimationComplete, setIsAnimationComplete] = useState(false);
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start("animate").then(() => setIsAnimationComplete(true));
//   }, [controls]);

//   return (
//     <div className="flex items-center justify-center min-h-screen pb-12 bg-gray-50/30 dark:bg-gray-900/20">
//       <motion.div
//         variants={squareVariants}
//         initial="initial"
//         animate={controls}
//         className="rounded-xl overflow-hidden flex items-center justify-center border border-stone-200/50 dark:border-stone-700/50 backdrop-blur-sm shadow-lg shadow-stone-200/20 dark:shadow-stone-900/30"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at right center, rgba(191, 219, 254, 0.3) 0%, rgba(219, 234, 254, 0.05) 70%)",
//         }}
//       >
//         <motion.div
//           variants={contentVariants}
//           initial="initial"
//           animate={isAnimationComplete ? "animate" : "initial"}
//           className="text-stone-900 dark:text-stone-100 w-full h-full flex items-center justify-center bg-stone-50/50 dark:bg-stone-800/50 backdrop-blur-[2px]"
//         >
//           <ContentSection selectedItem={selectedItem} />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { NavigationItem } from "../../../config/items";
import { ContentSection } from "./content-section";
import { squareVariants, contentVariants } from "./animations";
import { containerStyles, gradientSquareStyles } from "./styles";

interface GradientSquareProps {
  selectedItem: NavigationItem;
}

export default function GradientSquare({ selectedItem }: GradientSquareProps) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate").then(() => setIsAnimationComplete(true));
  }, [controls]);

  return (
    <div className={containerStyles}>
      <motion.div
        variants={squareVariants}
        initial="initial"
        animate={controls}
        className={gradientSquareStyles}
        style={{
          backgroundImage:
            "radial-gradient(circle at right center, rgba(191, 219, 254, 0.3) 0%, rgba(219, 234, 254, 0.05) 70%)",
        }}
      >
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate={isAnimationComplete ? "animate" : "initial"}
          className="text-stone-900 dark:text-stone-100 w-full h-full flex items-center justify-center bg-stone-50/50 dark:bg-stone-800/50 backdrop-blur-[2px]"
        >
          <ContentSection selectedItem={selectedItem} />
        </motion.div>
      </motion.div>
    </div>
  );
}
