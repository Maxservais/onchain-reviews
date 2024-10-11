"use client";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";

import { items } from "./Navbar";

const socials = [
  {
    name: "Twitter",
    url: "https://x.com/MaximeServais77",
    IconComponent: FaXTwitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/Maxservais/onchain-reviews",
    IconComponent: RxGithubLogo,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-4 px-6">
      <div className="container max-w-8xl mx-auto flex flex-col space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div className="order-3 md:order-1 md:flex-none">
          <Link
            className="hover:text-white"
            href="https://www.ethereum-ecosystem.com/"
          >
            © {new Date().getFullYear()} Ethereum Ecosystem. All rights
            reserved.
          </Link>
        </div>
        <div className="order-2 md:order-2 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          {items?.map((item) => (
            <Link key={item.name} href={item.url} className="hover:text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="order-1 md:order-3 flex justify-start space-x-4 mb-6 md:mb-0">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.IconComponent className="hover:text-white h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
