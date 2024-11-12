import type { NavigationItem } from "../../../config/items";
import { navigationItems } from "../../../config/items";

export function GetIcon({ selectedItem }: { selectedItem: NavigationItem }) {
  const item = navigationItems.find((item) => item.name === selectedItem);
  return item ? (
    <img src={item.icon} alt={item.name} className="w-5 h-5" />
  ) : null;
}
