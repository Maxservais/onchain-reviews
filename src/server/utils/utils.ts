import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as schema from "@/db/schema";
import { Chain } from "@/db/schema";
import { SchemaQuery } from "@/types/gql/eas/graphql";

export const db = drizzle(sql, { schema });

export async function getLastProcessedTime() {
  const processingStatus = await db
    .select({
      lastProcessedTime: schema.ProcessingTable.lastProcessedTime,
    })
    .from(schema.ProcessingTable)
    .where(eq(schema.ProcessingTable.id, 1))
    .execute();

  if (processingStatus.length > 0) {
    return processingStatus[0].lastProcessedTime;
  } else {
    // If the table is empty, insert an initial entry and set lastProcessedTime to January 1st, 2024
    const initialTime = new Date("2024-01-01T00:00:00Z");
    await db
      .insert(schema.ProcessingTable)
      .values({
        id: 1,
        lastProcessedTime: initialTime,
      })
      .execute();
    return initialTime;
  }
}

export function linearNormalize(
  value: number | null,
  minValue: number,
  maxValue: number
): number {
  if (value === null || isNaN(value)) {
    return 0;
  }
  if (value <= minValue) {
    return 0;
  } else if (value >= maxValue) {
    return 1;
  } else {
    return (value - minValue) / (maxValue - minValue);
  }
}

export function parseReviews(data: SchemaQuery | undefined, chain: Chain) {
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
        appName: decodedData.find((data: any) => data.name === "appName").value
          .value,
        score: decodedData.find((data: any) => data.name === "score").value
          .value,
        appReview: decodedData.find((data: any) => data.name === "appReview")
          .value.value,
        chain: chain,
      };
    }
  );
}