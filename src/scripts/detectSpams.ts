import { sql } from "drizzle-orm";

import { ReviewersTable, ReviewsTable } from "@/db/schema";
import { db } from "@/server";
import { createSSRCaller } from "@/server/utils/ssr";

type Review = {
  easId: string;
  slug: string;
  score: number;
  reviewDate: Date;
  creator: string;
};

// Define a type for our grouped reviews
type GroupedReviews = {
  [key: string]: Review[];
};

const detectSpams = async () => {
  try {
    const ssrCaller = await createSSRCaller();
    const reviews: Review[] = await ssrCaller.reviewsRouter.getReviews();

    const groupedReviews = reviews.reduce<GroupedReviews>((acc, review) => {
      const date = review.reviewDate.toISOString().split("T")[0];
      const key = `${review.slug}_${date}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(review);
      return acc;
    }, {});

    const spamThreshold = 100;
    const spamReviews: string[] = [];
    const spammerAddresses = new Set<string>();

    for (const [key, appReviews] of Object.entries(groupedReviews)) {
      if (appReviews.length > spamThreshold) {
        spamReviews.push(...appReviews.map((review) => review.easId));
        appReviews.forEach((review) => spammerAddresses.add(review.creator));
      }
    }

    if (spamReviews.length > 0) {
      await db.transaction(async (trx) => {
        // Mark reviews as spam
        await trx
          .update(ReviewsTable)
          .set({
            isSpam: true,
            lastModificationDate: new Date(),
          })
          .where(sql`${ReviewsTable.easId} IN ${spamReviews}`)
          .execute();

        // Mark reviewers as likely spammers
        await trx
          .update(ReviewersTable)
          .set({
            isLikelySpammer: true,
            lastModificationDate: new Date(),
          })
          .where(
            sql`${ReviewersTable.creator} IN ${Array.from(spammerAddresses)}`
          )
          .execute();
      });

      console.log(`Marked ${spamReviews.length} reviews as spam`);
      console.log(
        `Marked ${spammerAddresses.size} reviewers as likely spammers`
      );

      // Update all app stats
      console.log("Updating all app stats...");
      await ssrCaller.appsRouter.updateAllAppsStats();
      console.log("App stats updated successfully.");

      // Update trust scores for all reviewers
      console.log("Updating trust scores for all reviewers...");
      await ssrCaller.reviewersRouter.updateTrustScore();
      console.log("Trust scores updated successfully.");
    } else {
      console.log("No spam detected");
    }
  } catch (error) {
    console.error("Failed to detect spams or update stats", error);
  } finally {
    process.exit(0);
  }
};

detectSpams();
