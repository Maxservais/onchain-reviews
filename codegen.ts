import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    "https://optimism-sepolia.easscan.org/graphql",
    "https://api.airstack.xyz/graphql",
  ],
  documents: ["src/**/*.{js,ts,jsx,tsx}"],
  generates: {
    "./src/types/gql/eas/": {
      preset: "client",
      plugins: [],
      schema: "https://optimism-sepolia.easscan.org/graphql",
      documents: ["src/**/*.{js,ts,jsx,tsx}"],
    },
    "./src/types/gql/airstack/": {
      preset: "client",
      plugins: [],
      schema: "https://api.airstack.xyz/graphql",
      documents: ["src/**/*.{js,ts,jsx,tsx}"],
    },
  },
};

export default config;
