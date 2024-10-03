import {
  boolean,
  integer,
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const chainEnum = pgEnum("chain", [
  "op_mainnet",
  "base_mainnet",
  "op_sepolia",
]);
export type Chain = (typeof chainEnum.enumValues)[number];

export const ReviewsTable = pgTable("reviews", {
  id: serial("id").primaryKey(),
  easId: varchar("easId", { length: 256 }).notNull(),
  slug: varchar("slug", { length: 256 })
    .notNull()
    .references(() => AppsTable.slug),
  score: integer("score").notNull(),
  review: text("review"),
  reviewDate: timestamp("reviewDate").notNull(),
  creator: varchar("creator", { length: 256 })
    .notNull()
    .references(() => ReviewersTable.creator),
  txId: varchar("txId", { length: 256 }).notNull(),
  revoked: boolean("revoked").default(false),
  chain: chainEnum("chain").notNull(),
  isSpam: boolean("isSpam").default(false),
  lastModificationDate: timestamp("lastModificationDate"),
  creationDate: timestamp("creationDate").defaultNow().notNull(),
});

export const ReviewersTable = pgTable("reviewers", {
  creator: varchar("creator", { length: 256 }).primaryKey(),
  ensName: varchar("ensName", { length: 256 }),
  ensNameLastUpdated: timestamp("ensNameLastUpdated"),
  gitcoinPassport: numeric("gitcoinPassport"),
  gitcoinPassportLastUpdated: timestamp("gitcoinPassportLastUpdated"),
  coinbaseVerified: timestamp("coinbaseVerified"),
  coinbaseVerifiedLastUpdated: timestamp("coinbaseVerifiedLastUpdated"),
  walletBalance: numeric("walletBalance"),
  walletBalanceLastUpdated: timestamp("walletBalanceLastUpdated"),
  debankFollowerCount: integer("debankFollowerCount"),
  debankTvf: numeric("debankTvf"),
  debankDataLastUpdated: timestamp("debankDataLastUpdated"),
  poapCollected: integer("poapCollected"),
  poapCollectedLastUpdated: timestamp("poapCollectedLastUpdated"),
  farcasterUserId: varchar("farcasterUserId", { length: 256 }),
  farcasterProfileHandle: varchar("farcasterProfileHandle", { length: 256 }),
  farcasterFollowerCount: integer("farcasterFollowerCount"),
  farcasterFollowingCount: integer("farcasterFollowingCount"),
  isFarcasterPowerUser: boolean("isFarcasterPowerUser"),
  farcasterDataLastUpdated: timestamp("farcasterDataLastUpdated"),
  trustScore: numeric("trustScore"),
  trustScoreLastUpdated: timestamp("trustScoreLastUpdated"),
  lastModificationDate: timestamp("lastModificationDate"),
  isLikelySpammer: boolean("isLikelySpammer").default(false),
  creationDate: timestamp("creationDate").defaultNow().notNull(),
});

export const AppsTable = pgTable("apps", {
  slug: varchar("slug", { length: 256 }).primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  website: varchar("website", { length: 256 }),
  twitter: varchar("twitter", { length: 256 }),
  logoUrl: varchar("logoUrl", { length: 256 }),
  reviewCount: integer("reviewCount").default(0),
  averageScore: numeric("averageScore"),
  lastModificationDate: timestamp("lastModificationDate"),
  creationDate: timestamp("creationDate").defaultNow().notNull(),
});

export const ProcessingTable = pgTable("processing", {
  id: serial("id").primaryKey(),
  lastProcessedTime: timestamp("lastProcessedTime", { mode: "date" }).notNull(),
});

export const DebankTable = pgTable("debank", {
  id: varchar("id", { length: 256 }).primaryKey(),
  usdValue: numeric("usdValue"),
  followerCount: integer("followerCount"),
  tvf: numeric("tvf"),
  lastModificationDate: timestamp("lastModificationDate"),
  creationDate: timestamp("creationDate").defaultNow().notNull(),
});
