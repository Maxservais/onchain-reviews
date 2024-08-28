import { useWeb3Modal } from "@web3modal/wagmi/react";
import Avatar from "boring-avatars";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function MobileMenu({
  items,
  setIsMenuOpen,
}: {
  items: any[];
  setIsMenuOpen: (isOpen: boolean) => void;
}) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items?.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            {isConnected ? (
              <Avatar
                size={40}
                name={address}
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-gray-400 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {isConnected ? (
                `${address?.slice(0, 6)}...${address?.slice(-4)}`
              ) : (
                <button
                  onClick={() => open()}
                  className="text-sm font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {isConnected && (
            <>
              <Link
                href="/my-reviews"
                className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                My Reviews
              </Link>
              <button
                onClick={() => open({ view: "Account" })}
                className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Open Wallet
              </button>
              <button
                onClick={() => open({ view: "Networks" })}
                className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Switch Chain
              </button>
              <button
                onClick={() => disconnect()}
                className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Disconnect
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
