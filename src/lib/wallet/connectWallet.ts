import { getAccount, switchChain } from "@wagmi/core";
import { type SwitchChainReturnType } from "@wagmi/core";
import { base, optimism, optimismSepolia } from "wagmi/chains";
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
  open: (options?: any | undefined) => Promise<void>
): Promise<{ success: boolean; message?: string }> {
  const { chainId } = getAccount(config);

  const networks = getNetworks();

  try {
    if (
      walletStatus !== "connected" &&
      walletStatus !== "reconnecting" &&
      walletStatus !== "connecting"
    ) {
      await open();

      let isChainIdDifferent = true;
      for (const network of networks) {
        if (chainId === network.id) {
          isChainIdDifferent = false;
          break;
        }
      }

      if (isChainIdDifferent) {
        const result: SwitchChainReturnType = await switchChain(config, {
          chainId: networks[0].id,
        });
        if (result.id !== networks[0].id) {
          return {
            success: false,
            message: "Failed to switch chain",
          };
        }
        return {
          success: true,
          message: "Wallet opened and chain switched successfully.",
        };
      }
      return {
        success: true,
        message: "Wallet opened and Already on the correct chain.",
      };
    } else {
      // Only switch chain if the current network ID is not the desired one
      let isChainIdDifferent = true;
      for (const network of networks) {
        if (chainId === network.id) {
          isChainIdDifferent = false;
          break;
        }
      }

      if (isChainIdDifferent) {
        const result: SwitchChainReturnType = await switchChain(config, {
          chainId: networks[0].id,
        });
        if (result.id !== networks[0].id) {
          return {
            success: false,
            message: "Failed to switch chain",
          };
        }
        return { success: true, message: "Chain switched successfully." };
      }
      // If already connected and on the correct chain
      return {
        success: true,
        message: "Already connected and on the correct chain.",
      };
    }
  } catch (error) {
    // Return a failure status and error message
    return {
      success: false,
      message: `Failed to connect or switch chain. ${error}`,
    };
  }
}
