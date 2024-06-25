import { GraphQLClient } from "graphql-request";

import { Blockchain, SocialDappName } from "@/types/gql/airstack/graphql";

import { graphql } from "../../types/gql/airstack/gql";

const AIRSTACK_API_URL = "https://api.airstack.xyz/gql";
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY;

const graphQLClient = new GraphQLClient(AIRSTACK_API_URL, {
  headers: {
    authorization: AIRSTACK_API_KEY!,
  },
});

export const attestationDocument = graphql(`
  query FarcasterQuery(
    $dappName: SocialDappName!
    $userAssociatedAddresses: Address!
    $blockchain: Blockchain!
  ) {
    Socials(
      input: {
        filter: {
          dappName: { _eq: $dappName }
          userAssociatedAddresses: { _eq: $userAssociatedAddresses }
        }
        blockchain: $blockchain
      }
    ) {
      Social {
        userId
        followerCount
        followingCount
        isFarcasterPowerUser
        profileHandle
        # profileDisplayName
        # profileImage
        # profileBio
        # profileCreatedAtBlockNumber
      }
    }
  }
`);

export async function fetchFarcaster(creator: string) {
  const variables = {
    dappName: "farcaster" as SocialDappName,
    userAssociatedAddresses: creator,
    blockchain: "ethereum" as Blockchain,
  };

  const data = await graphQLClient.request(attestationDocument, variables);
  return data;
}
