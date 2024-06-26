import { createSSRCaller } from "@/server/utils/ssr";

const exportApps = async () => {
  try {
    const ssrCaller = await createSSRCaller();

    await ssrCaller.importRouter.exportApps();
  } catch (error) {
    console.error("Error exporting data:", error);
  } finally {
    // Force exit the process
    process.exit(0);
  }
};

exportApps();
