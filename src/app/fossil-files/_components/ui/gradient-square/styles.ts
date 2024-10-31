export const containerStyles =
  "flex items-center justify-center min-h-screen pb-12 bg-gray-50/30 dark:bg-gray-900/20";

export const gradientSquareStyles =
  "rounded-xl overflow-hidden flex items-center justify-center border border-stone-200/50 dark:border-stone-700/50 backdrop-blur-sm shadow-lg shadow-stone-200/20 dark:shadow-stone-900/30";

export const toolCardStyles =
  "p-4 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 transition-colors bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm";

export const categoryItemStyles = (isSelected: boolean) => `
  px-3 py-2 rounded-md cursor-pointer transition-colors 
  ${
    isSelected
      ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
      : "text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/50"
  }
`;
