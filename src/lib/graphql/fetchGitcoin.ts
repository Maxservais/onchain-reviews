import { GraphQLClient } from "graphql-request";

import { easGitcoinSchema, optimismEndpoint } from "@/config/eas";
import { attestationDocument } from "@/lib/graphql/graphqlQuery";
import { SchemaQuery } from "@/types/gql/eas/graphql";

const graphQLClient = new GraphQLClient(optimismEndpoint, {});

export async function fetchGitcoinAttestation(creator: string) {
  const variables = {
    where: {
      id: easGitcoinSchema,
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

export function parseGitcoinAttestation(data: SchemaQuery | undefined) {
  return data?.schema?.attestations.map(
    (attestation: {
      __typename?: "Attestation";
      id: string;
      txid: string;
      revoked: boolean;
      attester: string;
      timeCreated: number;
      decodedDataJson: string;
    }) => {
      const decodedData = JSON.parse(attestation.decodedDataJson);
      return {
        id: attestation.id,
        txId: attestation.txid,
        revoked: attestation.revoked,
        attester: attestation.attester,
        timeCreated: attestation.timeCreated,
        score: decodedData.find((data: any) => data.name === "score").value
          .value.hex,
      };
    }
  );
}
