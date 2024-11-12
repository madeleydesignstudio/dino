import Image from "next/image";
import Link from "next/link";
import { NavigationItem } from "./navigation-types";

interface NavigationDropdownProps {
  items: NavigationItem[];
  isExpanded: boolean;
}

export const NavigationDropdown = ({
  items,
  isExpanded,
}: NavigationDropdownProps) => (
  <div
    className={`fixed top-[50px] left-0 right-0 bg-stone-50/80 dark:bg-stone-900/80 z-50 backdrop-blur-sm overflow-hidden transition-all duration-200 ease-in-out ${
      isExpanded
        ? "max-h-[200px] border-b border-stone-900 dark:border-stone-500"
        : "max-h-0"
    }`}
  >
    <ul className="flex justify-between h-[200px]">
      {items.map((item, index) => (
        <li key={item.href} className="w-1/3 text-center">
          <Link
            href={item.href}
            className={`py-2 h-full flex flex-col justify-around items-center ${
              index !== items.length - 1
                ? "border-r border-stone-900 dark:border-stone-500"
                : ""
            }`}
          >
            <div className="w-24 h-24 flex-1 flex items-center justify-center">
              <Image
                src={item.imageUrl}
                alt={item.alt || ""}
                width={96}
                height={96}
                className="object-contain w-full h-full"
              />
            </div>
            <h2 className="font-nanum text-2xl">{item.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
