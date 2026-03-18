"use client";

import type { ReactNode } from "react";
import GamingOfferwall from "@/lib/new-offerwall-for-gaming";
import TopAdsQuizIdStamper from "@/components/gaming/topads-quiz-id-stamper";
import type { GamingQuizConfig } from "@/lib/gaming-quiz-config";

interface GamingOfferwallRuntimeProps {
  quiz?: GamingQuizConfig;
  children: ReactNode;
}

export default function GamingOfferwallRuntime({
  quiz,
  children,
}: GamingOfferwallRuntimeProps) {
  if (!quiz) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <GamingOfferwall config={quiz} />
      <TopAdsQuizIdStamper journeyId={quiz.journeyId} />
    </>
  );
}
