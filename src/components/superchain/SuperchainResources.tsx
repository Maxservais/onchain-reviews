import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

const resources = [
  {
    name: "Build on Optimism",
    description:
      "Find all the essentials for developing a dapp, operating a node, or launching a chain on OP Mainnet.",
    url: "https://docs.optimism.io/",
  },
  {
    name: "Meet the Optimism Collective",
    description:
      "Information about the Optimism Collective's governance, community, and mission.",
    url: "https://community.optimism.io/docs/governance/",
  },
  {
    name: "Participate in Governance",
    description:
      "Join Optimism's dynamic governance by holding tokens or delegating your vote to a representative.",
    url: "https://vote.optimism.io/",
  },
  {
    name: "Discover RetroPGF",
    description:
      "Get rewarded retroactively for your positive contributions to the ecosystem.",
    url: "https://app.optimism.io/retropgf",
  },
];

export default function SuperchainResources() {
  return (
    <div
      id="resources"
      className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
    >
      <div
        id="learn-more"
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-16"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 pb-2">
            Become Optimistic
          </h2>
          <p className="text-base text-gray-700 pb-2 sm:pb-0">
            Discover Optimism&apos;s vision, engage in governance, and find out
            how to earn rewards for your contributions.
          </p>
          <dl className="mt-8 sm:mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group border-t border-gray-200 pt-2 hover:border-red-500"
              >
                <Link href={resource.url} target="_blank noopener noreferrer">
                  <div className="relative">
                    <dt className="font-medium text-gray-900 group-hover:text-red-500">
                      {resource.name}
                    </dt>
                    <RxExternalLink
                      className="absolute top-1 right-1 h-4 w-4 group-hover:text-red-500 transition-transform duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
                      title="View Resource"
                    />
                  </div>
                  <dd className="mt-2 text-sm text-gray-500">
                    {resource.description}
                  </dd>
                </Link>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/images/optimism.png"
            alt="Optimism"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/images/base.png"
            alt="Base"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/images/fraxtal.png"
            alt="Fraxtal"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/images/redstone.png"
            alt="Redstone"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
