"use client";

import { ShieldCheckIcon, StarIcon as Star } from "@heroicons/react/20/solid";
import { ArrowDown, ArrowUp, ArrowUpDown, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { truncateAddress } from "@/lib/utils";

import { trpc } from "../_trpc/client";

export default function Leaderboard() {
  const {
    data: leaderboardData,
    isLoading,
    error,
  } = trpc.leaderboardRouter.getLeaderboardData.useQuery();

  const [sortBy, setSortBy] = useState<"reviewCount" | "trustScore">(
    "reviewCount"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  const sortedReviewers = [...(leaderboardData || [])].sort((a, b) => {
    if (sortBy === "reviewCount") {
      return sortOrder === "desc"
        ? b.reviewCount - a.reviewCount
        : a.reviewCount - b.reviewCount;
    } else {
      const trustScoreA = Number(a.trustScore) || 0;
      const trustScoreB = Number(b.trustScore) || 0;
      return sortOrder === "desc"
        ? trustScoreB - trustScoreA
        : trustScoreA - trustScoreB;
    }
  });

  const handleSort = (column: "reviewCount" | "trustScore") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const SortIcon = ({ column }: { column: "reviewCount" | "trustScore" }) => {
    if (sortBy !== column)
      return <ArrowUpDown className="inline ml-1" size={16} />;
    return sortOrder === "desc" ? (
      <ArrowDown className="inline ml-1" size={16} />
    ) : (
      <ArrowUp className="inline ml-1" size={16} />
    );
  };

  return (
    <div className="p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">
            Reviewer Leaderboard
          </h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>Reviewer</TableHead>
                <TableHead
                  className="text-right cursor-pointer"
                  onClick={() => handleSort("reviewCount")}
                >
                  Reviews <SortIcon column="reviewCount" />
                </TableHead>
                <TableHead
                  className="text-right cursor-pointer"
                  onClick={() => handleSort("trustScore")}
                >
                  Trust Score <SortIcon column="trustScore" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedReviewers.map((reviewer, index) => (
                <TableRow key={reviewer.creator}>
                  <TableCell className="font-medium">
                    {index < 3 ? (
                      <Trophy
                        className={`w-6 h-6 ${
                          index === 0
                            ? "text-yellow-400"
                            : index === 1
                            ? "text-gray-400"
                            : "text-amber-600"
                        }`}
                      />
                    ) : (
                      index + 1
                    )}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/reviewer/${reviewer.creator}`}
                      className="hover:underline"
                    >
                      {reviewer.ensName || truncateAddress(reviewer.creator)}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link
                      href={`/reviewer/${reviewer.creator}#reviews`}
                      className="hover:underline"
                    >
                      {reviewer.reviewCount}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      {reviewer.trustScore || "N/A"}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
