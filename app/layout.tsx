import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Libre_Baskerville, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-serif",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "React & Next.js portfolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-makara-100", libre.variable, inter.variable)}>
        <Header />
        <main className="mx-auto mb-14 flex max-w-5xl pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
