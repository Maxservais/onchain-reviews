import SuperchainBlockchains from "@/components/superchain/SuperchainBlockchains";
import { SuperchainHero } from "@/components/superchain/SuperchainHero";
import SuperchainResources from "@/components/superchain/SuperchainResources";
import SuperchainStats from "@/components/superchain/SuperchainStats";
import SuperchainCtas from "@/components/superchain/SuperchainCtas";

export default async function Home() {
  return (
    <>
      <SuperchainHero />
      <SuperchainStats />
      <SuperchainBlockchains />
      {/* <Apps  /> */}
      <SuperchainResources />
      <SuperchainCtas />
    </>
  );
}
