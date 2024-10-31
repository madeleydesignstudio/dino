"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import type { NavigationItem } from "../../config/items";

interface SidebarProps {
  items: Array<{
    name: NavigationItem;
    icon: string;
  }>;
  selectedItem: NavigationItem | "";
  onItemClick: (name: NavigationItem) => void;
}

export const Sidebar = memo(function Sidebar({
  items,
  selectedItem,
  onItemClick,
}: SidebarProps) {
  return (
    <aside className="w-fit border-r flex flex-col justify-between items-center pb-2">
      <div className="flex-1" />
      <nav className="flex flex-col items-center space-y-8">
        {items.map((item) => (
          <motion.button
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-gray-100 rounded-md"
            onClick={() => onItemClick(item.name)}
            aria-label={`Select ${item.name}`}
            aria-pressed={selectedItem === item.name}
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              width={28}
              height={28}
            />
          </motion.button>
        ))}
      </nav>
      <div className="flex-1 flex items-end">
        <Link href="/" aria-label="Go to home">
          <img
            src="https://ik.imagekit.io/danielcmadeley/dino/dino-logo.svg?updatedAt=1729715034860"
            alt="DINO logo"
            width={28}
            height={28}
          />
        </Link>
      </div>
    </aside>
  );
});
