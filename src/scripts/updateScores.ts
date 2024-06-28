import { createSSRCaller } from "@/server/utils/ssr";

const updateScores = async () => {
  try {
    const ssrCaller = await createSSRCaller();

    await ssrCaller.appsRouter.updateAllAppsStats();
  } catch (error) {
    console.error("Failed to update all apps' score:", error);
  } finally {
    // Force exit the process
    process.exit(0);
  }
};

updateScores();
