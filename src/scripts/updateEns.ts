import { createSSRCaller } from "@/server/utils/ssr";

const updateEns = async () => {
  try {
    const ssrCaller = await createSSRCaller();

    await ssrCaller.reviewersRouter.updateEns();
  } catch (error) {
    console.error("Failed to update Ens", error);
  } finally {
    // Force exit the process
    process.exit(0);
  }
};

updateEns();
