export interface DesignCategory {
  category: string;
  tools: string[];
}

export const design_categories: DesignCategory[] = [
  {
    category: "UI Design Tools",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
  },
  {
    category: "Graphic Design Software",
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Affinity Designer",
      "Affinity Photo",
      "GIMP",
    ],
  },
  {
    category: "Prototyping Tools",
    tools: ["ProtoPie", "Principle", "Marvel", "Origami Studio", "Webflow"],
  },
  {
    category: "Design Systems",
    tools: ["Storybook", "Zeroheight", "Abstract", "Lingo", "Frontify"],
  },
  {
    category: "Color Tools",
    tools: ["Coolors", "Adobe Color", "Colorhunt", "Palleton", "Khroma"],
  },
  {
    category: "Typography",
    tools: [
      "Google Fonts",
      "Adobe Fonts",
      "Fontjoy",
      "Type Scale",
      "Fonts Arena",
    ],
  },
  {
    category: "Icon Resources",
    tools: [
      "Font Awesome",
      "Material Icons",
      "Feather Icons",
      "Iconscout",
      "The Noun Project",
    ],
  },
  {
    category: "Image Resources",
    tools: ["Unsplash", "Pexels", "Adobe Stock", "Shutterstock", "Dribbble"],
  },
  {
    category: "Collaboration Tools",
    tools: ["Miro", "Figjam", "Whimsical", "Maze", "UserTesting"],
  },
  {
    category: "Animation Tools",
    tools: ["After Effects", "Lottie", "Rive", "Principle", "Kite Compositor"],
  },
  {
    category: "Design Inspiration",
    tools: ["Behance", "Dribbble", "Awwwards", "Pinterest", "Muzli"],
  },
  {
    category: "Design Handoff",
    tools: ["Zeplin", "Avocode", "Inspect (Figma)", "Abstract", "Sympli"],
  },
  {
    category: "3D Design",
    tools: ["Blender", "Cinema 4D", "Spline", "Three.js", "WebGL"],
  },
  {
    category: "Accessibility Tools",
    tools: ["Stark", "Contrast", "Color Oracle", "Wave", "Axe"],
  },
];
