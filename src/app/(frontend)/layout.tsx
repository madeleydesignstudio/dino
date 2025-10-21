import { Header } from "@/components/universal/Header";
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
        <Header />
        {children}
      </body>
    </html>
  );
}
