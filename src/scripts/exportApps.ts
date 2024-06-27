import { createSSRCaller } from "@/server/utils/ssr";

const exportApps = async () => {
  try {
    const ssrCaller = await createSSRCaller();

    await ssrCaller.importRouter.exportApps();
    return;
  } catch (error) {
    console.error("Error exporting data:", error);
  }
};

exportApps();
