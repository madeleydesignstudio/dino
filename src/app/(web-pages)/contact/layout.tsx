import HorizontalFooter from "@/components/horizontal-footer";
import WebHeader from "@/components/website-header/web-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dino - Get in Touch",
  description:
    "Contact Dino for your web design and development needs. Let us help bring your digital vision to life with our expert team.",
  openGraph: {
    title: "Contact Dino - Get in Touch",
    description:
      "Contact Dino for your web design and development needs. Let us help bring your digital vision to life with our expert team.",
    type: "website",
  },
  // Additional metadata for better SEO
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
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
