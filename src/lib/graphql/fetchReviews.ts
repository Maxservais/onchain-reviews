import { GraphQLClient } from "graphql-request";

import { baseEndpoint, easReviewSchema, optimismEndpoint } from "@/config/eas";
import { Chain } from "@/db/schema";
import { attestationDocument } from "@/lib/graphql/graphqlQuery";
import { parseReviews } from "@/server/utils/utils";

const optimismClient = new GraphQLClient(optimismEndpoint, {});
const baseClient = new GraphQLClient(baseEndpoint, {});

export default async function fetchAllReviews(lastProcessedTime: number) {
  const [optimismReviews, baseReviews] = await Promise.all([
    fetchReviewsFromEndpoint(optimismClient, lastProcessedTime, "op_mainnet"),
    fetchReviewsFromEndpoint(baseClient, lastProcessedTime, "base_mainnet"),
  ]);

  return [...optimismReviews, ...baseReviews];
}

export async function fetchReviewsFromEndpoint(
  graphQLClient: GraphQLClient,
  lastProcessedTime: number,
  chain: Chain
) {
  const take = 10;
  const maxIterations = 1000; // Maximum number of iterations to prevent infinite loop
  let skip = 0; // Offset for pagination
  // let moreReviews = true;
  const allReviews = [];

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    const variables = {
      where: {
        id: easReviewSchema,
      },
      attestationsWhere2: {
        timeCreated: {
          gte: lastProcessedTime,
        },
      },
      take: take,
      skip: skip,
    };

    const attestations = await graphQLClient.request(
      attestationDocument,
      variables
    );

    const reviews = parseReviews(attestations, chain);

    if (Array.isArray(reviews)) {
      const filteredReviews = reviews.filter(
        (review) => review.appName && review.score
      );

      allReviews.push(...filteredReviews);
    } else {
      console.error("Expected reviews to be an array, but got:", reviews);
      break; // Exit the loop if the response structure is unexpected
    }

    // If the number of fetched reviews is less than the `take`, we are done
    if (reviews.length < take) {
      break; // Exit the loop
    } else {
      // Otherwise, move to the next batch
      skip += take;
    }
  }

  return allReviews;
}
