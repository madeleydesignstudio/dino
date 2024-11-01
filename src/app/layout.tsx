import type { Metadata } from "next";
import { nanumMyeongjo, karla } from "../lib/fonts";
import "./globals.css";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";
import GetStarted from "@/components/get-started";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

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
      <PHProvider>
        <body
          className={`${nanumMyeongjo.variable} ${karla.variable}  antialiased`}
        >
          <PostHogPageView />
          <OpenPanelComponent
            clientId="5dd02cb1-8de6-4ec1-9d42-a116d6471fd7"
            trackScreenViews={true}
          />
          {children}
          <GetStarted />
        </body>
      </PHProvider>
    </html>
  );
}
