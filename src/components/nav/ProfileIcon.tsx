"use client";

import { Menu, Transition } from "@headlessui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Avatar from "boring-avatars";
import Link from "next/link";
import { Fragment } from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function ProfileIcon() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleClick = () => {
    if (!isConnected) {
      open();
    }
  };

  return (
    <Menu as="div" className="relative ml-3 hidden md:block">
      <Menu.Button
        onClick={handleClick}
        className="relative flex rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        {isConnected ? (
          <Avatar
            size={32}
            name={address}
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-300"
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
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {isConnected && (
            <>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/my-reviews"
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    My Reviews
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => open({ view: "Account" })}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    Open Wallet
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => open({ view: "Networks" })}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    Switch Chain
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => disconnect()}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    Disconnect
                  </a>
                )}
              </Menu.Item>
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
