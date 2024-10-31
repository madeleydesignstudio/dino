import { motion } from "framer-motion";
// import type { NavigationItem } from "../../../../config/items";
import { categoryListVariants } from "./animations";
import { categoryItemStyles } from "./styles";

interface CategoryListProps {
  categories: Array<{ category: string }>;
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}

export function CategoryList({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryListProps) {
  return (
    <motion.div
      variants={categoryListVariants}
      initial="initial"
      animate="animate"
      className="p-4 space-y-2"
    >
      <ul className="space-y-2 text-sm">
        {categories.map((item) => (
          <li
            key={item.category}
            onClick={() => setSelectedCategory(item.category)}
            className={categoryItemStyles(selectedCategory === item.category)}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
