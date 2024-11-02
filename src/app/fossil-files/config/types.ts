export interface Tool {
  name: string;
  url: string;
  description: string;
  documentation?: string;
  logo?: string;
  creator?: string;
  created?: string;
}

export interface Category {
  category: string;
  tools: Tool[];
}

export interface Introduction {
  title: string;
  description: string;
  keyFeatures: string[];
}

export type CategoryType = "Frontend" | "Backend" | "Design" | "Marketing";
