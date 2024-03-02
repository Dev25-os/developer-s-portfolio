import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

import "./globals.css";
import ActiveSectionProvider from "@/context/active-section-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A developer's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <ActiveSectionProvider>
          <Header />

          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
