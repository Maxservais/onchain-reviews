import Link from "next/link";
import React from "react";

import { BlockchainProps, blockchainsData } from "@/app/superchain/blockchains";

type BlockchainCardProps = {
  blockchain: BlockchainProps;
};

const BlockchainCard = ({ blockchain }: BlockchainCardProps) => {
  return (
    <Link
      key={blockchain.slug}
      href={blockchain.url ?? `/blockchains/${blockchain.slug}`}
      className="group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-white/20 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative flex flex-col items-center justify-center px-6 pt-6 text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400">
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
    </Link>
  );
};

export default function SuperchainBlockchains() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-4 mt-24 sm:mt-42">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white pb-2">
            Meet the Superchain
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 pb-2 sm:pb-0">
            A composable, unified network of blockchains powered by the
            MIT-licensed open source OP Stack
          </p>
        </div>
        <Link
          href="/blockchains"
          className="whitespace-nowrap text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
        >
          View all Blockchains
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4">
        {blockchainsData.map((blockchain: BlockchainProps) => (
          <BlockchainCard key={blockchain.slug} blockchain={blockchain} />
        ))}
      </div>
    </div>
  );
}
