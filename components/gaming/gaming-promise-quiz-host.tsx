"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import type { GamingQuizConfig } from "@/lib/gaming-quiz-config";

interface GamingPromiseQuizHostProps {
  quiz: GamingQuizConfig;
  children: ReactNode;
}

type QuizPhase = "quiz" | "complete";

const QUIZ_PARAM = "quiz";
const QUIZ_DONE = "done";

function buildNextUrl(
  pathname: string,
  searchParams: URLSearchParams,
  value: string,
): string {
  const nextParams = new URLSearchParams(searchParams.toString());
  nextParams.set(QUIZ_PARAM, value);
  const query = nextParams.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export default function GamingPromiseQuizHost({
  quiz,
  children,
}: GamingPromiseQuizHostProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPhase =
    searchParams.get(QUIZ_PARAM) === QUIZ_DONE ? "complete" : "quiz";
  const [phase, setPhase] = useState<QuizPhase>(initialPhase);
  const adEventSentRef = useRef(false);

  useEffect(() => {
    if (searchParams.get(QUIZ_PARAM) === QUIZ_DONE) {
      setPhase("complete");
      return;
    }

    setPhase("quiz");
    adEventSentRef.current = false;
  }, [searchParams]);

  useEffect(() => {
    if (phase !== "quiz") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "complete" || adEventSentRef.current === true) {
      return;
    }

    adEventSentRef.current = true;
    window.dispatchEvent(
      new CustomEvent("gaming:activate-delayed-ads", {
        detail: {
          path: pathname,
          journeyId: quiz.journeyId,
          hideAds: quiz.hideAds ?? false,
        },
      }),
    );
  }, [pathname, phase, quiz.hideAds, quiz.journeyId]);

  const blurredWrapperClassName = useMemo(() => {
    if (phase !== "quiz") {
      return "transition-all duration-300";
    }

    return "pointer-events-none select-none blur-[8px] scale-[0.995] transition-all duration-300";
  }, [phase]);

  const handleComplete = () => {
    setPhase("complete");
    router.replace(
      buildNextUrl(
        pathname,
        new URLSearchParams(searchParams.toString()),
        QUIZ_DONE,
      ),
      {
        scroll: false,
      },
    );
  };

  return (
    <>
      <div
        aria-hidden={phase === "quiz" ? true : undefined}
        className={blurredWrapperClassName}
      >
        {children}
      </div>
      {phase === "quiz" && (
        <GamingQuizEntry
          journeyId={quiz.journeyId}
          questions={quiz.questions}
          themeColor={quiz.themeColor}
          themeColorLight={quiz.themeColorLight}
          loadingMessage={quiz.loadingMessage}
          onComplete={handleComplete}
        />
      )}
    </>
  );
}
