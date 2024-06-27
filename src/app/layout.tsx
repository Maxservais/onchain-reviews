import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import { absoluteUrl } from "@/lib/utils";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover the Optimism Superchain",
  description:
    "Meet the Optimism Superchain, a groundbreaking vision for a unified network of decentralized blockchains, all powered by the innovative OP Stack.",
  alternates: {
    canonical: absoluteUrl("superchain"),
  },
  openGraph: {
    title: "Discover the Optimism Superchain",
    description:
      "Meet the Optimism Superchain, a groundbreaking vision for a unified network of decentralized blockchains, all powered by the innovative OP Stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover the Optimism Superchain",
    description:
      "Meet the Optimism Superchain, a groundbreaking vision for a unified network of decentralized blockchains, all powered by the innovative OP Stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-gray-50">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
