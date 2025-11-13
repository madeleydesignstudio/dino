import { HeaderWrapper } from "@/components/universal/HeaderWrapper";
import { MusicWrapper } from "@/components/universal/MusicWrapper";
import { NavigationProvider } from "@/components/navigation/NavigationContext";
import { TransitionLoader } from "@/components/navigation/TransitionLoader";
import { LayoutContent } from "@/components/navigation";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Digital Dino",
    default: "Digital Dino - We Make Damn Good Websites",
  },
  description:
    "Digital Dino is a creative design and development studio specializing in exceptional web experiences, innovative product design, and cutting-edge digital solutions. We make damn good websites.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "creative studio",
    "product design",
    "website design",
    "UI/UX design",
    "branding",
    "digital marketing",
    "responsive design",
  ],
  authors: [{ name: "Digital Dino" }],
  creator: "Digital Dino",
  publisher: "Digital Dino",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://digitaldino.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Dino - We Make Damn Good Websites",
    description:
      "Creative design and development studio specializing in exceptional web experiences and innovative digital solutions.",
    url: "https://digitaldino.com",
    siteName: "Digital Dino",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Dino - Creative Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Dino - We Make Damn Good Websites",
    description:
      "Creative design and development studio specializing in exceptional web experiences and innovative digital solutions.",
    images: ["/og-image.png"],
    creator: "@digitaldino",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${azeretMono.variable}  antialiased`}>
        <AnalyticsProvider>
          <NavigationProvider>
            <TransitionLoader />
            <LayoutContent>
              <HeaderWrapper />
              {children}
              {/*<MusicWrapper />*/}
            </LayoutContent>
          </NavigationProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
