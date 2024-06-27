"use client";

import { trpc } from "@/app/_trpc/client";
import Apps from "@/components/apps/Apps";

export default function AllApps() {
  const { data: apps } = trpc.appsRouter.getApps.useQuery();

  if (!apps) {
    return <h1>No Apps found!</h1>;
  }

  return <Apps />;
}
