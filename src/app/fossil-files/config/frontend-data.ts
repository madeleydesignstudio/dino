export interface FrontendCategory {
  category: string;
  tools: string[];
}

export const frontend_categories: FrontendCategory[] = [
  {
    category: "UI Frameworks & Libraries",
    tools: ["React", "Next.js", "Vue", "Svelte", "Angular"],
  },
  {
    category: "CSS Solutions",
    tools: [
      "Tailwind CSS",
      "Styled Components",
      "CSS Modules",
      "Sass",
      "Less",
      "PostCSS",
    ],
  },
  {
    category: "Build Tools",
    tools: ["Vite", "Webpack", "Rollup", "esbuild", "Parcel", "Turbopack"],
  },
  {
    category: "State Management",
    tools: ["Redux", "Zustand", "MobX", "Recoil", "Jotai", "XState"],
  },
  {
    category: "Testing",
    tools: [
      "Jest",
      "Vitest",
      "Cypress",
      "Playwright",
      "Testing Library",
      "Storybook",
    ],
  },
  {
    category: "API Integration",
    tools: ["REST", "GraphQL", "tRPC", "Apollo", "React Query", "SWR"],
  },
  {
    category: "Development Tools",
    tools: [
      "TypeScript",
      "ESLint",
      "Prettier",
      "Husky",
      "lint-staged",
      "commitlint",
    ],
  },
  {
    category: "Performance & Optimization",
    tools: [
      "Lighthouse",
      "Web Vitals",
      "Webpack Bundle Analyzer",
      "Performance Budget",
    ],
  },
  {
    category: "Deployment & Hosting",
    tools: [
      "Vercel",
      "Netlify",
      "AWS Amplify",
      "GitHub Pages",
      "Firebase Hosting",
    ],
  },
];
