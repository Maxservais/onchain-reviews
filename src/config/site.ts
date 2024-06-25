interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Onchain Reviews",
  description:
    "Immerse yourself in the Ethereum Ecosystem and get familiar with hundreds of popular Apps & tools.",
  url: "https://www.ethereum-ecosystem.com",
  ogImage: "",
  links: {
    twitter: "https://twitter.com/web3xplore",
  },
};
