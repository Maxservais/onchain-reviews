"use client";

import Link from "next/link";
import { useState } from "react";

import MobileMenu from "./MobileMenu";
import ProfileIcon from "./ProfileIcon";

export const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "All apps",
    url: "/apps",
  },
  {
    name: "My Reviews",
    url: "/my-reviews",
  },
  {
    name: "Leaderboard",
    url: "/leaderboard",
  },
  {
    name: "About",
    url: "/about",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={"/"} className="text-red-500 font-bold text-xl">
              SUPERCHAIN
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block ">
            <div className="flex items-center space-x-3 bg-white rounded-full p-1">
              {items?.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-gray-700 hover:bg-gray-100 hover:text-red-500 px-5 py-2 rounded-full text-md font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <ProfileIcon />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                // Cross icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && <MobileMenu items={items} setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
}
