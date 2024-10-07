import { getAccount, switchChain } from "@wagmi/core";
import { type SwitchChainReturnType } from "@wagmi/core";
import { base, Chain, optimism, optimismSepolia } from "wagmi/chains";

import { config } from "../../../wagmi.config";

export const getNetworks = () => {
  if (process.env.NODE_ENV === "development") {
    return [optimismSepolia];
  } else {
    return [optimism, base];
  }
};

export default async function connectWallet(
  walletStatus: "connected" | "connecting" | "disconnected" | "reconnecting",
  open: (options?: any | undefined) => Promise<void>,
  preferredChain: Chain
): Promise<{ success: boolean; message?: string }> {
  const { chainId } = getAccount(config);

  try {
    if (
      walletStatus !== "connected" &&
      walletStatus !== "reconnecting" &&
      walletStatus !== "connecting"
    ) {
      await open();

      if (chainId !== preferredChain.id) {
        const result: SwitchChainReturnType = await switchChain(config, {
          chainId: preferredChain.id,
        });
        if (result.id !== preferredChain.id) {
          return {
            success: false,
            message: `Failed to switch to ${preferredChain.name}`,
          };
        }
        return {
          success: true,
          message: `Wallet opened and switched to ${preferredChain.name} successfully.`,
        };
      }
      return {
        success: true,
        message: `Wallet opened and already on ${preferredChain.name}.`,
      };
    } else {
      // Only switch chain if the current network ID is not the preferred one
      if (chainId !== preferredChain.id) {
        const result: SwitchChainReturnType = await switchChain(config, {
          chainId: preferredChain.id,
        });
        if (result.id !== preferredChain.id) {
          return {
            success: false,
            message: `Failed to switch to ${preferredChain.name}`,
          };
        }
        return {
          success: true,
          message: `Switched to ${preferredChain.name} successfully.`,
        };
      }
      // If already connected and on the correct chain
      return {
        success: true,
        message: `Already connected and on ${preferredChain.name}.`,
      };
    }
  } catch (error) {
    // Return a failure status and error message
    return {
      success: false,
      message: `Failed to connect or switch to ${preferredChain.name}. ${error}`,
    };
  }
}
