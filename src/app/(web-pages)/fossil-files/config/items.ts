export type NavigationItem = "Frontend" | "Backend" | "Design" | "Market";

export const navigationItems = [
  {
    name: "Frontend",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/frontend.svg?updatedAt=1729668704121",
  },
  {
    name: "Backend",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/backend.svg?updatedAt=1729668691498",
  },
  {
    name: "Design",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/design.svg?updatedAt=1729668663385",
  },
  {
    name: "Market",
    icon: "https://ik.imagekit.io/danielcmadeley/dino/market.svg?updatedAt=1729668676661",
  },
] as { name: NavigationItem; icon: string }[];
