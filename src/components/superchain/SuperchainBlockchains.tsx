import Link from "next/link";
import React from "react";

import { BlockchainProps, blockchainsData } from "@/components/superchain/blockchains";

type BlockchainCardProps = {
  blockchain: BlockchainProps;
};

const BlockchainCard = ({ blockchain }: BlockchainCardProps) => {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.50)),var(--quick-links-hover-bg,theme(colors.red.50)))_padding-box,linear-gradient(to_top,theme(colors.red.400),theme(colors.red.500),theme(colors.red.600))_border-box] group-hover:opacity-100" />
      <div className="relative flex flex-col items-center justify-center px-6 pt-6 text-gray-900 hover:text-red-500">
        <p className="text-xl text-center font-semibold ">{blockchain.name}</p>
        <div className="text-center py-4">
          <img
            className="flex-shrink-0 w-32 h-auto rounded-2xl"
            src={blockchain.logo}
            alt={blockchain.name + " logo"}
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
};

export default function SuperchainBlockchains() {
  return (
    <div
      id="blockchains"
      className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 pb-2">
            Meet the Superchain
          </h2>
          <p className="text-base text-gray-700 pb-2 sm:pb-0">
            A composable, unified network of blockchains powered by the
            MIT-licensed open source OP Stack
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4">
        {blockchainsData.map((blockchain: BlockchainProps) => (
          <BlockchainCard key={blockchain.slug} blockchain={blockchain} />
        ))}
      </div>
    </div>
  );
}
