import type { Metadata } from "next";
import "./dino-ui.css";

export const metadata: Metadata = {
  title: "Dino UI",
  description: "A dinosaur-themed UI component library",
  keywords: [
    "UI components",
    "React components",
    "dinosaur theme",
    "web design",
  ],
  authors: [{ name: "Dino UI Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dino UI - Component Library",
    description: "A dinosaur-themed UI component library",
    type: "website",
    siteName: "Dino UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dino UI - Component Library",
    description: "A dinosaur-themed UI component library",
  },
  alternates: {
    canonical: "https://your-domain.com/dino-ui",
    languages: {
      "en-US": "https://your-domain.com/dino-ui",
    },
  },
};

export default function DinoUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-stone-900 min-h-screen">
      <main>{children}</main>
    </div>
  );
}
