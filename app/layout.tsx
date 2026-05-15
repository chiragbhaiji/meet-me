import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { data } from "./constants/data";
import ThemeProvider from "./components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
});

const description =
  "React Native and Swift iOS engineer, 12 years across startups and enterprise.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chiragbhaiji.github.io"),
  title: `${data.fullName} – Senior React Native & iOS Engineer`,
  description,
  openGraph: {
    title: `${data.fullName} – Senior React Native & iOS Engineer`,
    description,
    url: "https://chiragbhaiji.github.io/meet-me",
    siteName: data.fullName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.fullName} – Senior React Native & iOS Engineer`,
    description,
  },
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
        className={`${plusJakartaSans.variable} antialiased bg-gray-50 dark:bg-gradient-to-tl dark:from-black dark:to-gray-800 min-h-screen`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
