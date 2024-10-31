import { motion } from "framer-motion";
import { toolCardVariants } from "./animations";
import { toolCardStyles } from "./styles";

interface ToolCardProps {
  tool: string;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div
      key={tool}
      className={toolCardStyles}
      variants={toolCardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 400 }}
    >
      <h3 className="text-lg font-medium text-stone-800 dark:text-stone-200">
        {tool}
      </h3>
    </motion.div>
  );
}
