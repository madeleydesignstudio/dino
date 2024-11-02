import { useState } from "react";
import { motion } from "framer-motion";
import type { NavigationItem } from "../../../config/items";
import { GetIcon } from "./get-icon";
import { CategoryList } from "./category-list";
import { ToolCard } from "./tool-card";
import { frontend_categories } from "../../../config/frontend-data";
import { backend_categories } from "../../../config/backend-data";
import { design_categories } from "../../../config/design-data";
import { marketing_categories } from "../../../config/marketing-data";

const sectionDescriptions: Record<NavigationItem, string> = {
  Frontend:
    "Tools and technologies for building user interfaces and client-side applications, focusing on what users see and interact with directly.",
  Backend:
    "Server-side technologies and tools that power applications behind the scenes, handling data, business logic, and infrastructure.",
  Design:
    "Creative tools and platforms for crafting user experiences, visual elements, and intuitive interfaces.",
  Market:
    "Marketing and analytics tools to help grow your product, understand your users, and measure success.",
};

const getCategoryData = (selectedItem: NavigationItem) => {
  switch (selectedItem) {
    case "Frontend":
      return frontend_categories;
    case "Backend":
      return backend_categories;
    case "Design":
      return design_categories;
    case "Market":
      return marketing_categories;
    default:
      return [];
  }
};

export function ContentSection({
  selectedItem,
}: {
  selectedItem: NavigationItem;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getSelectedTools = () => {
    if (!selectedCategory) return [];
    const categories = getCategoryData(selectedItem);
    return (
      categories.find((cat) => cat.category === selectedCategory)?.tools || []
    );
  };

  const selectedTools = getSelectedTools();
  const categories = getCategoryData(selectedItem);

  return (
    <motion.div
      className="w-full h-full flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <div className="w-1/5 h-full border-r">
        <motion.div className="p-4 border-b">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="text-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <GetIcon selectedItem={selectedItem} />
            </motion.span>
            <h2 className="text-lg font-medium">{selectedItem}</h2>
          </motion.div>
        </motion.div>

        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <motion.div
        className="w-4/5 h-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <div className="w-full h-full p-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-3 text-stone-800 dark:text-stone-200"
              key={selectedItem}
            >
              Summary
            </motion.h2>
            <p className="text-stone-600 dark:text-stone-400">
              {sectionDescriptions[selectedItem]}
            </p>
          </motion.div>

          {selectedCategory && (
            <div className="grid grid-cols-3 gap-6 overflow-y-auto">
              {selectedTools.map((tool) => (
                <ToolCard
                  key={typeof tool === "string" ? tool : tool.name}
                  tool={tool}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
