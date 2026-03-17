"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import GamingPromiseQuizHost from "@/components/gaming/gaming-promise-quiz-host";
import GamingOfferwall from "@/lib/new-offerwall-for-gaming";
import type { GamingQuizConfig } from "@/lib/gaming-quiz-config";

interface GamingOfferwallRuntimeProps {
  quiz?: GamingQuizConfig;
  children: ReactNode;
}

type RuntimeMode = "pending" | "desktop" | "mobile";

export default function GamingOfferwallRuntime({
  quiz,
  children,
}: GamingOfferwallRuntimeProps) {
  const pathname = usePathname();
  const [mode, setMode] = useState<RuntimeMode>("pending");

  useEffect(() => {
    if (!quiz) {
      setMode("desktop");
      return;
    }

    const mediaQuery = window.matchMedia(
      "(max-width: 767px), (pointer: coarse)",
    );

    const updateMode = () => {
      setMode(mediaQuery.matches ? "mobile" : "desktop");
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
    };
  }, [quiz]);

  useEffect(() => {
    if (!quiz || mode !== "desktop") {
      return;
    }

    window.dispatchEvent(
      new CustomEvent("gaming:activate-delayed-ads", {
        detail: {
          path: pathname,
          journeyId: quiz.journeyId,
          hideAds: quiz.hideAds ?? false,
        },
      }),
    );
  }, [mode, pathname, quiz]);

  if (!quiz || mode === "pending") {
    return <>{children}</>;
  }

  if (mode === "mobile") {
    return <GamingPromiseQuizHost quiz={quiz}>{children}</GamingPromiseQuizHost>;
  }

  return (
    <>
      {children}
      <GamingOfferwall config={quiz} />
    </>
  );
}