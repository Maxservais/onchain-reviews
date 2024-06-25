import { GraphQLClient } from "graphql-request";

import { attestationDocument } from "@/lib/graphql/graphqlQuery";
import { baseEndpoint, easCoinbaseSchema } from "@/config/eas";

const graphQLClient = new GraphQLClient(baseEndpoint, {});

export async function fetchCoinbaseAttestation(creator: string) {
  const variables = {
    where: {
      id: easCoinbaseSchema,
    },
    attestationsWhere2: {
      recipient: {
        equals: creator,
      },
    },
    take: 10, // Number of attestations to return
    skip: 0, //
  };

  const data = await graphQLClient.request(attestationDocument, variables);
  return data;
}
