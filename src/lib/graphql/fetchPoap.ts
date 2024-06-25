import { GraphQLClient } from "graphql-request";

import { graphql } from "@/types/gql/airstack/gql";
import { TokenBlockchain } from "@/types/gql/airstack/graphql";

const AIRSTACK_API_URL = "https://api.airstack.xyz/gql";
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY;

const graphQLClient = new GraphQLClient(AIRSTACK_API_URL, {
  headers: {
    authorization: AIRSTACK_API_KEY!,
  },
});

export const attestationDocument = graphql(`
  query PoapQuery($identity: Identity!, $blockchain: TokenBlockchain!) {
    Wallet(input: { identity: $identity, blockchain: $blockchain }) {
      poaps(input: { order: { createdAtBlockNumber: ASC }, limit: 100 }) {
        poapEvent {
          eventId
          eventName
          tokenMints
          isVirtualEvent
        }
      }
    }
  }
`);

export async function fetchPoap(creator: string) {
  const variables = {
    identity: creator,
    blockchain: "ethereum" as TokenBlockchain,
  };

  const data = await graphQLClient.request(attestationDocument, variables);
  return data;
}
