import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { config } from "@/config/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
    >
      <body className="h-full overflow-hidden bg-background text-foreground">
        <div className="flex h-full flex-col">
          <header className="shrink-0">
            <Navbar />
          </header>

          <main className="flex-1 overflow-y-auto">{children}</main>

          <footer className="shrink-0">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
