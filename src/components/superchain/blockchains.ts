export type BlockchainProps = {
  slug: string;
  name: string;
  logo: string;
  url?: string;
};

export const blockchainsData: BlockchainProps[] = [
  {
    slug: "optimism",
    name: "Optimism",
    logo: "/images/optimism.png",
  },
  {
    slug: "base",
    name: "Base",
    logo: "/images/base.png",
  },
  {
    slug: "mode",
    name: "Mode",
    logo: "/images/mode.png",
    url: "https://www.mode.network/",
  },
  {
    slug: "fraxtal",
    name: "Fraxtal",
    logo: "/images/fraxtal.png",
    url: "https://frax.finance/",
  },
  {
    slug: "zora",
    name: "Zora",
    logo: "/images/zora.png",
    url: "https://zora.energy/",
  },
  {
    slug: "redstone",
    name: "Redstone",
    logo: "/images/redstone.png",
    url: "https://redstone.xyz/",
  },
];
