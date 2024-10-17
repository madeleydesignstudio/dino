import { Nanum_Myeongjo, Karla } from "next/font/google";

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-myeongjo",
});

export const karla = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-karla",
});
