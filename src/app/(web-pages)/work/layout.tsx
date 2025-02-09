import HorizontalFooter from "@/components/horizontal-footer";
import WebHeader from "@/components/website-header/web-header";
import type { Metadata } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";

export const metadata: Metadata = {
  title: "Our Work | Dino - Architecting your web",
  description:
    "Explore our portfolio of innovative web design and development projects. From AI initiatives to blockchain solutions, discover how Dino can transform your digital presence.",
  keywords:
    "web design, development portfolio, digital projects, UI/UX design, web development, Dino projects",
  openGraph: {
    title: "Our Work | Dino - Architecting your web",
    description:
      "Explore our portfolio of innovative web design and development projects.",
    type: "website",
    images: [
      {
        url: "/og-work.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Dino Work Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Dino - Architecting your web",
    description:
      "Explore our portfolio of innovative web design and development projects.",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WebHeader />
      <MouseMoveEffect />
      <main className="min-h-screen flex flex-col">{children}</main>
      <HorizontalFooter />
    </>
  );
}
