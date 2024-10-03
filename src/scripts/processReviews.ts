const fs = require("fs");
const path = require("path");

interface Review {
  id: number;
  easId: string;
  slug: string;
  score: number;
  review: string;
  reviewDate: string;
  creator: string;
  txId: string;
  revoked: boolean;
  chain: string;
  lastModificationDate: string | null;
  creationDate: string;
}

interface RewardCategory {
  addresses: string[];
  reward: number;
}

function categorizeReviewers(
  reviews: Review[]
): [RewardCategory[], Record<string, number>] {
  // Count reviews for each address
  const reviewCounts = reviews.reduce(
    (acc, review) => {
      acc[review.creator] = (acc[review.creator] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  // Categorize addresses based on review count
  const categories: RewardCategory[] = [
    { addresses: [], reward: 1 }, // 1-4 reviews
    { addresses: [], reward: 3 }, // 5-9 reviews
    { addresses: [], reward: 5 }, // 10+ reviews
  ];

  for (const [address, count] of Object.entries(reviewCounts)) {
    if (count >= 10) {
      categories[2].addresses.push(address);
    } else if (count >= 5) {
      categories[1].addresses.push(address);
    } else if (count >= 1) {
      categories[0].addresses.push(address);
    }
  }

  return [categories, reviewCounts];
}

// Construct the path to reviews.json
const filePath = path.join(__dirname, "reviews.json");

// Read the JSON file
const rawData = fs.readFileSync(filePath, "utf8");
const reviews: Review[] = JSON.parse(rawData);

console.log(`Total number of reviews: ${reviews.length}`);

const [rewardCategories, reviewCounts] = categorizeReviewers(reviews);

// Output results in disperse.app format
rewardCategories.forEach((category) => {
  category.addresses.forEach((address) => {
    console.log(`${address} ${category.reward}`);
  });
});

// Verification
const uniqueReviewers = new Set(reviews.map((review) => review.creator));
console.log(`Total unique reviewers: ${uniqueReviewers.size}`);

const totalCategorizedReviewers = rewardCategories.reduce(
  (total, category) => total + category.addresses.length,
  0
);
console.log(`Total categorized reviewers: ${totalCategorizedReviewers}`);

if (uniqueReviewers.size === totalCategorizedReviewers) {
  console.log(
    "Verification passed: All unique reviewers have been categorized."
  );
} else {
  console.log(
    "Verification failed: The number of unique reviewers doesn't match the total categorized reviewers."
  );
}

// Additional verification: Check each reviewer's category
const categoryDescriptions = ["1-4 reviews", "5-9 reviews", "10+ reviews"];
Object.entries(reviewCounts).forEach(([address, count]) => {
  let category;
  if (count >= 10) category = 2;
  else if (count >= 5) category = 1;
  else category = 0;

  if (!rewardCategories[category].addresses.includes(address)) {
    console.log(
      `Verification failed: Address ${address} with ${count} reviews is not in the correct category (${categoryDescriptions[category]}).`
    );
  }
});

// Add this after the other verification steps
const totalReviewsFromCounts = Object.values(reviewCounts).reduce(
  (sum, count) => sum + count,
  0
);
console.log(`Total reviews (from review counts): ${totalReviewsFromCounts}`);

if (totalReviewsFromCounts === reviews.length) {
  console.log(
    "Verification passed: Total review count matches the number of reviews in the dataset."
  );
} else {
  console.log(
    "Verification failed: Total review count does not match the number of reviews in the dataset."
  );
}

console.log("Verification complete.");
