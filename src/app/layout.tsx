import type { Metadata } from "next";
import { nanumMyeongjo, karla } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dino - Architecting your web.",
  description:
    "Dino is a web agency that specializes in building custom websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nanumMyeongjo.variable} ${karla.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
