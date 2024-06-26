import { createSSRCaller } from "@/server/utils/ssr";

const importApps = async () => {
  try {
    const ssrCaller = await createSSRCaller();

    await ssrCaller.importRouter.importDebank();
  } catch (error) {
    console.error("Error importing data:", error);
  }
};

importApps();
