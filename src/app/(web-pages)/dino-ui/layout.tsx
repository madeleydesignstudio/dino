import type { Metadata } from "next";
import "./dino-ui.css";

export const metadata: Metadata = {
  title: "Dino UI",
  description: "A dinosaur-themed UI component library",
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
