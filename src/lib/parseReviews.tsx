import { serverClient } from "@/app/_trpc/serverClient";

export interface reviewStats {
  average: number;
  totalCount: number;
  counts: {
    rating: number;
    count: any;
  }[];
}

export function calculateReviewStats(
  reviews: Awaited<
    ReturnType<(typeof serverClient)["reviewsRouter"]["getReviews"]>
  >
): reviewStats {
  let totalScore = 0;
  const counts = new Array(5).fill(0); // An array to hold counts for scores 1-5

  // Iterate over each review to calculate total score and individual score counts
  reviews.forEach((review) => {
    totalScore += review.score; // Add score to total score
    counts[review.score - 1]++; // Increment the count for the corresponding score
  });

  const totalCount = reviews.length;
  const average = (totalScore / totalCount).toFixed(1);

  // Construct the counts array in the correct order, from 1 to 5 stars
  const ratingCounts = counts
    .map((count, index) => ({
      rating: index + 1, // Correctly map the index to the star rating
      count: count,
    }))
    .reverse();

  return {
    average: Number(average),
    totalCount: totalCount,
    counts: ratingCounts,
  };
}
