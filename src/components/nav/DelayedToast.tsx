import { useEffect } from "react";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function DelayedToast({
  appName,
  appSlug,
}: {
  appName: string;
  appSlug: string;
}) {
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Psssst...",
        description:
          "Share your opinion and help others make better decisions.",
        action: (
          <ToastAction
            onClick={() => window.open(`/new-review/${appSlug}`)}
            altText="Try again"
          >
            Review {appName}
          </ToastAction>
        ),
        duration: 10000,
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
}
