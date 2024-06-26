import Apps from "@/components/apps/Apps";
import SuperchainBlockchains from "@/components/superchain/SuperchainBlockchains";
import SuperchainCtas from "@/components/superchain/SuperchainCtas";
import { SuperchainHero } from "@/components/superchain/SuperchainHero";
import SuperchainResources from "@/components/superchain/SuperchainResources";
import SuperchainStats from "@/components/superchain/SuperchainStats";

const MAX_APPS = 8;

export default async function Home() {
  return (
    <>
      <SuperchainHero />
      <SuperchainStats />
      <SuperchainBlockchains />
      <Apps max={MAX_APPS} displayLink={true} />
      <SuperchainResources />
      <SuperchainCtas />
    </>
  );
}
