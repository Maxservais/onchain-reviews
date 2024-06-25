import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { absoluteUrl } from "@/lib/utils";

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
          <main className="bg-gray-50">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
