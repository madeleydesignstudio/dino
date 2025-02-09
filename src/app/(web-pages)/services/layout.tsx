import HorizontalFooter from "@/components/horizontal-footer";
import WebHeader from "@/components/website-header/web-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services | Dino - Architecting your web",
  description:
    "Expert web design, engineering, and digital marketing services. The Digital Dino team delivers cutting-edge solutions for your business needs.",
  keywords: [
    "web design",
    "web development",
    "digital marketing",
    "UI/UX design",
    "software engineering",
    "digital services",
    "Dino UI",
    "web architecture",
  ],
  openGraph: {
    title: "Digital Services | Dino - Architecting your web",
    description:
      "Expert web design, engineering, and digital marketing services. The Digital Dino team delivers cutting-edge solutions for your business needs.",
    type: "website",
    siteName: "Digital Dino",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services | Dino - Architecting your web",
    description:
      "Expert web design, engineering, and digital marketing services. The Digital Dino team delivers cutting-edge solutions for your business needs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
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
