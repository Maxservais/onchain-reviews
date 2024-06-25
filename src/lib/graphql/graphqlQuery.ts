import { graphql } from "../../types/gql/eas/gql";

export const reviewKeys = {
  bySlug: (slug: string) => ["reviews", slug] as const,
  filtered: (slug: string, score?: number) => {
    const key = ["reviews", slug];
    if (score !== undefined) {
      key.push(`score:${score}`);
    }
    return key;
  },
};

export const attestationDocument = graphql(`
  query Schema(
    $where: SchemaWhereUniqueInput!
    $attestationsWhere2: AttestationWhereInput
    $take: Int
    $skip: Int
  ) {
    schema(where: $where) {
      attestations(where: $attestationsWhere2, take: $take, skip: $skip) {
        id
        attester
        decodedDataJson
        txid
        revoked
        timeCreated
      }
    }
  }
`);

type AttestationWhereInput = {
  decodedDataJson: {
    contains: string;
  };
};

type SchemaWhereUniqueInput = {
  id: string;
};

type AttestationsWhere2Input = {
  AND?: AttestationWhereInput[]; // Make AND optional
};

type AttestationsVariables = {
  where: SchemaWhereUniqueInput;
  attestationsWhere2: AttestationsWhere2Input;
  take?: number;
  skip?: number;
};

export function createQueryVariables(
  appName: string,
  score?: number,
  take: number = 10,
  skip: number = 0
) {
  // Initialize the query with the ID and a base structure for conditions
  const variables: AttestationsVariables = {
    where: {
      id:
        process.env.EAS_REVIEW_SCHEMA ??
        "0xdaef21c0f7e40e6f1fd4afe8fd0a2a438176bf2a333e47f93515feac14a1cb1a",
    },
    attestationsWhere2: {},
    take: take,
    skip: skip,
  };

  const conditions: AttestationWhereInput[] = [];

  if (appName) {
    conditions.push({
      decodedDataJson: {
        contains: `"appName","type":"string","value":"${appName}"`,
      },
    });
  }

  // Add score condition if it's provided
  if (score !== undefined) {
    conditions.push({
      decodedDataJson: {
        contains: `"score","type":"uint8","value":${score}`,
      },
    });
  }

  // Only assign AND if there are any conditions
  if (conditions.length > 0) {
    variables.attestationsWhere2.AND = conditions;
  }

  variables.take = take;
  variables.skip = skip;

  return variables;
}
