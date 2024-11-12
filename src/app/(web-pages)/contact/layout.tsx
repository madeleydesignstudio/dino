import HorizontalFooter from "@/components/horizontal-footer";
import WebHeader from "@/components/website-header/web-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dino - Architecting your web.",
  description: "The digital dino will take care of all your design needs",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WebHeader />
      <main className="min-h-screen flex flex-col">{children}</main>
      <HorizontalFooter />
    </>
  );
}
