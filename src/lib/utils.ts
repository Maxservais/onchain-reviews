import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return process.env.NEXT_PUBLIC_APP_URL;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function absoluteUrl(path: string = "") {
  // If the path is an empty string, just return the base URL
  // Ensure the base URL is defined
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;
  if (path === "") {
    return baseUrl;
  }

  // Add a slash if the path doesn't start with one
  const newPath = path.startsWith("/") ? path : "/" + path;

  return `${baseUrl}${newPath}`;
}

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

export function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function isFarcasterUser(connector: any): boolean {
  if (connector?.id === "w3mAuth" && connector.type === "w3mAuth") {
    // Check if 'farcaster' is in the socials array
    return (
      Array.isArray(connector.socials) &&
      connector.socials.includes("farcaster")
    );
  }
  return false;
}

/**
 * Truncate an Ethereum address in the middle.
 * @param address - The Ethereum address to be truncated.
 * @param nPrefix - Number of characters to show at the start (default is 4).
 * @param nSuffix - Number of characters to show at the end (default is 4).
 * @param separator - Optional separator to use in place of ellipsis.
 * @returns The truncated Ethereum address.
 */
export function truncateAddress(
  address: string,
  nPrefix: number = 4,
  nSuffix: number = 4,
  separator: string = "…"
): string {
  // Ensure the address is valid and long enough to be truncated
  if (!address || address.length <= nPrefix + nSuffix) {
    return address;
  }

  // Construct the truncated address
  return `${address.slice(0, nPrefix)}${separator}${address.slice(
    address.length - nSuffix
  )}`;
}
