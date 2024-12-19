import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { data } from "./constants/data";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `Hi, I'm ${data.fullName}`,
  description: data.currentRole,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased bg-gradient-to-tl from-black to-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
