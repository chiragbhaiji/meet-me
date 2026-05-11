import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { data } from "./constants/data";
import ThemeProvider from "./components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');})();`,
          }}
        />
      </head>
      <body
        className={`${notoSans.variable} antialiased bg-gray-50 dark:bg-gradient-to-tl dark:from-black dark:to-gray-800 min-h-screen`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
