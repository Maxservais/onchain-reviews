import { createSSRCaller } from "@/server/utils/ssr";

const extractReviewers = async () => {
  try {
    const ssrCaller = await createSSRCaller();

    const reviews = await ssrCaller.reviewsRouter.getReviews();

    const uniqueReviewers = new Set(
      reviews.map((review: { creator: string }) => review.creator)
    );

    uniqueReviewers.forEach((address) => {
      console.log(address);
    });

    console.log(`Total unique reviewers: ${uniqueReviewers.size}`);
  } catch (error) {
    console.error("Failed to extract unique reviewers", error);
  } finally {
    process.exit(0);
  }
};

extractReviewers();
