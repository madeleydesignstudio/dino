import GetStarted from "@/components/get-started";
import LoadingSpinner from "@/components/landing-page/loading-spinner";
import Navbar from "@/components/landing-page/navbar";
import React from "react";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title:
    "Dino Digital Design Agency | Interactive Web Development & Creative Projects",
  description:
    "Dino Digital Design Agency specializes in interactive web development, creative design, and innovative projects. Explore our portfolio and collaborate with us today!",
  keywords: [
    "digital design agency",
    "interactive web development",
    "creative design",
    "web projects",
    "portfolio",
  ],
  openGraph: {
    title:
      "Dino Digital Design Agency | Interactive Web Development & Creative Projects",
    description:
      "Dino Digital Design Agency specializes in interactive web development, creative design, and innovative projects. Explore our portfolio and collaborate with us today!",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://www.dinoagency.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dino Digital Design Agency - Interactive Web Development",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <LoadingSpinner />
      <Navbar />
      {children}
      <div className="hidden md:block">
        <GetStarted />
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dino Digital Design Agency",
          url: "https://www.thedigitaldino.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.thedigitaldino.com/images/logo.png",
            width: "112",
            height: "112",
            alternateName: "Dino Digital Design Agency Logo",
          },
          description:
            "Dino Digital Design Agency specializes in interactive web development and creative design.",
          address: {
            "@type": "PostalAddress",
            // Add your address details
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+447919587870",
            contactType: "customer service",
            email: "daniel@madeleydesignstudio.com",
          },
          sameAs: [
            "https://www.facebook.com/dinoagency",
            "https://www.twitter.com/dinoagency",
            "https://www.linkedin.com/company/dinoagency",
            // Add other social profiles if available
          ],
          foundingDate: "2025", // Add your company's founding year
          areaServed: "Worldwide", // Or specify your service area
        })}
      </script>
    </div>
  );
}
