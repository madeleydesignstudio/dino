import HorizontalFooter from "@/components/horizontal-footer";
import WebHeader from "@/components/website-header/web-header";
import type { Metadata } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";

export const metadata: Metadata = {
  title: "Dino - Architecting your web.",
  description: "The digital dino will take care of all your design needs",
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
