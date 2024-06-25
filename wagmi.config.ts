import { createPublicClient, createWalletClient } from "viem";
import { createConfig, http } from "wagmi";
import { Chain, base, optimism, optimismSepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Ethereum Ecosystem",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://127.0.0.1:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains: [Chain, ...Chain[]] = [optimism, base];

if (process.env.NODE_ENV === "development") {
  chains.push(optimismSepolia);
}

// Used for read-only operations and for simulating contract interactions
export const publicClients = chains.map((chain) =>
  createPublicClient({
    chain,
    transport: http(),
  })
);

export const getPublicClient = (chainId: number) => {
  const client = publicClients.find((client) => client.chain.id === chainId);

  if (!client) throw new Error(`Unsupported chain ID: ${chainId}`);

  return client;
};

// Used for write operations, i.e., transactions that change the state of the blockchain
export const walletClients = chains.map((chain) =>
  createWalletClient({
    chain,
    transport: http(),
  })
);

export const getWalletClient = (chainId: number) => {
  const client = walletClients.find((client) => client.chain.id === chainId);

  if (!client) throw new Error(`Unsupported chain ID: ${chainId}`);

  return client;
};

// Create wagmiConfig
export const config = createConfig({
  chains: chains,
  transports: {
    [optimism.id]: http(process.env.ALCHEMY_RPC_OP),
    [base.id]: http(process.env.ALCHEMY_RPC_BASE),
    [optimismSepolia.id]: http(process.env.ALCHEMY_RPC_OP_SEPOLIA),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
      preference: "all",
    }),
  ],
  ssr: true,
});
