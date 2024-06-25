import { client } from "@/app/_trpc/client";
import { delay } from "@/lib/utils";

export async function backgroundTask() {
  await delay(6000);

  try {
    try {
      await client.importRouter.processReviews.mutate();
    } catch (error) {
      console.error("Error in processReviews mutation:", error);
    }

    try {
      await client.reviewersRouter.updateEns.mutate();
    } catch (error) {
      console.error("Error in updateEns mutation:", error);
    }

    try {
      await client.reviewersRouter.updateGitcoinPassportScore.mutate();
    } catch (error) {
      console.error("Error in updateGitcoinPassportScore mutation:", error);
    }

    try {
      await client.reviewersRouter.updateCoinbaseVerification.mutate();
    } catch (error) {
      console.error("Error in updateCoinbaseVerification mutation:", error);
    }

    try {
      await client.reviewersRouter.updateFarcasterData.mutate();
    } catch (error) {
      console.error("Error in updateFarcasterData mutation:", error);
    }

    try {
      await client.reviewersRouter.updatePoapData.mutate();
    } catch (error) {
      console.error("Error in updatePoapData mutation:", error);
    }

    try {
      await client.reviewersRouter.updateDebankUser.mutate();
    } catch (error) {
      console.error("Error in updateDebankUser mutation:", error);
    }

    try {
      await client.reviewersRouter.updateTrustScore.mutate();
    } catch (error) {
      console.error("Error in updateTrustScore mutation:", error);
    }
  } catch (error) {
    console.error("Error triggering mutations:", error);
  }
}
