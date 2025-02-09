import HorizontalFooter from "@/components/horizontal-footer";
import WebHeader from "@/components/website-header/web-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Dino - Architecting your web",
    default: "Dino - Architecting your web", // Used for the main company page
  },
  description:
    "The Digital Dino is a boutique digital agency specializing in web design, development, and digital marketing solutions.",
  keywords: [
    "digital agency",
    "web development",
    "web design",
    "digital marketing",
    "Cardiff",
    "London",
  ],
  authors: [{ name: "Digital Dino" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Digital Dino",
    title: "Dino - Architecting your web",
    description:
      "The Digital Dino is a boutique digital agency specializing in web design, development, and digital marketing solutions.",
    images: [
      {
        url: "https://ik.imagekit.io/danielcmadeley/madeleydesignstudio/SEO-Image.png?updatedAt=1739110571203", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Digital Dino - Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dino - Architecting your web",
    description:
      "The Digital Dino is a boutique digital agency specializing in web design, development, and digital marketing solutions.",
    images: ["/og-image.jpg"], // Make sure to add this image to your public folder
  },
};

export default function CompanyLayout({
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
