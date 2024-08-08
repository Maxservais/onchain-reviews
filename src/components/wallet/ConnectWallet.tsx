import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useCallback } from "react";
import { useAccount, useConnect } from "wagmi";

import CoinbaseWalletLogo from "./CoinbaseWalletLogo";

export function ConnectWallet() {
  const { open } = useWeb3Modal();

  return (
    <button
      className="rounded-full bg-red-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      onClick={() => open()}
    >
      Connect Wallet
    </button>
  );
}

export function CreateWallet() {
  const { connectors, connect, data } = useConnect();

  const createWallet = useCallback(() => {
    const coinbaseWalletConnector = connectors.find(
      (connector) => connector.id === "coinbaseWalletSDK"
    );
    if (coinbaseWalletConnector) {
      connect({ connector: coinbaseWalletConnector });
    }
  }, [connectors, connect]);

  return (
    <button
      className="inline-flex items-center gap-x-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={createWallet}
    >
      <div className="hidden sm:block">
        <CoinbaseWalletLogo />
      </div>
      Create Wallet
    </button>
  );
}

export default function Wallet() {
  const { status: walletStatus } = useAccount();

  return (
    <div className="flex justify-end">
      {walletStatus !== "connected" && (
        <div className="flex flex-row gap-x-2">
          <ConnectWallet />
          {/* <CreateWallet /> */}
        </div>
      )}
      {walletStatus === "connected" && (
        <div className="flex flex-row">
          <w3m-network-button />
          <w3m-button balance="hide" size="sm" />
        </div>
      )}
    </div>
  );
}
