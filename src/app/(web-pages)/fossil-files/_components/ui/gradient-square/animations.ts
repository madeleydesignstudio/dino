import type { Variants } from "motion/react";

export const squareVariants: Variants = {
  initial: { width: 100, height: 100, borderRadius: 8 },
  animate: {
    width: "94vw",
    height: "90vh",
    borderRadius: 12,
    transition: {
      duration: 1,
      ease: "easeInOut",
      borderRadius: { delay: 0.5, duration: 0.2 },
    },
  },
};

export const contentVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.8, duration: 0.3 },
  },
};

export const categoryListVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export const toolCardVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  hover: { scale: 1.02 },
};
