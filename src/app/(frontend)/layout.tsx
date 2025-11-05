import { Header } from "@/components/universal/Header";
import { NavigationProvider } from "@/components/navigation/NavigationContext";
import { TransitionLoader } from "@/components/navigation/TransitionLoader";
import { LayoutContent } from "@/components/navigation";
import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Dino",
  description: "Design agency portfolio and company information",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${azeretMono.variable}  antialiased`}>
        <NavigationProvider>
          <TransitionLoader />
          <LayoutContent>
            <Header />
            {children}
          </LayoutContent>
        </NavigationProvider>
      </body>
    </html>
  );
}
