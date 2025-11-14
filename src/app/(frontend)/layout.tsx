import { HeaderWrapper } from "@/components/universal/HeaderWrapper";
import { NavigationProvider } from "@/components/navigation/NavigationContext";
import { TransitionLoader } from "@/components/navigation/TransitionLoader";
import { InitialLoad } from "@/components/navigation/InitialLoad";
import { LayoutContent } from "@/components/navigation";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
  display: "swap", // Add font-display swap for better performance
  preload: true,
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digital Dino",
  url: "https://digitaldino.com",
  logo: "https://digitaldino.com/dino-logo.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical origins for 300ms LCP improvement */}
        <link rel="preconnect" href="https://api.openpanel.dev" />
        <link rel="dns-prefetch" href="https://api.openpanel.dev" />

        {/* Optimize initial load handling - runs before any CSS/JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const hasShownInitialLoad = sessionStorage.getItem('dino-initial-load-shown');
                if (!hasShownInitialLoad) {
                  document.documentElement.classList.add('initial-loading');
                } else {
                  document.documentElement.classList.remove('initial-loading');
                  document.body.setAttribute('data-initial-load-checked', 'true');
                }
              })();
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${azeretMono.variable} antialiased`}>
        <AnalyticsProvider>
          <NavigationProvider>
            <InitialLoad />
            <TransitionLoader />
            <LayoutContent>
              <HeaderWrapper />
              {children}
            </LayoutContent>
          </NavigationProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
