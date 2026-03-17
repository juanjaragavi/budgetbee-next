"use client";

import { useCallback, useMemo, useState } from "react";
import FakeLoadingState from "@/components/gaming/fake-loading-state";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export interface GamingQuizEntryProps {
  questions: QuizQuestion[];
  journeyId: string;
  themeColor: string;
  themeColorLight: string;
  loadingMessage?: string;
  ctaTitle?: string;
  ctaButtonLabel?: string;
  ctaDisclaimer?: string;
  onComplete: () => void;
}

type Phase = "quiz" | "loading" | "cta";

export default function GamingQuizEntry({
  questions,
  journeyId,
  themeColor,
  themeColorLight,
  loadingMessage,
  ctaTitle,
  ctaButtonLabel,
  ctaDisclaimer,
  onComplete,
}: GamingQuizEntryProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");

  const handleAnswer = useCallback(() => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestion(nextIndex);
    } else if (phase === "quiz") {
      setPhase("loading");
    }
  }, [currentQuestion, questions.length, phase]);

  const handleLoadingComplete = useCallback(() => {
    setPhase("cta");
  }, []);

  const handleClaimRewards = useCallback(() => {
    onComplete();
  }, [onComplete]);

  const q = questions[currentQuestion];
  const progress =
    phase === "quiz" ? ((currentQuestion + 1) / questions.length) * 100 : 100;
  const questionHeadingId = useMemo(
    () =>
      `${journeyId}-question-${Math.min(currentQuestion + 1, questions.length)}`,
    [currentQuestion, journeyId, questions.length],
  );
  const optionContainerId = `paso-${currentQuestion + 1}-${journeyId}`;
  const lastQuestionText =
    questions[Math.min(currentQuestion, questions.length - 1)]?.question;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-sm" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={questionHeadingId}
        className="relative z-[1] w-full max-w-[380px] rounded-[28px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]"
      >
        <div className="px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                backgroundColor: themeColor,
              }}
            />
          </div>
        </div>

        {phase === "quiz" && q && (
          <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <h2
              id={questionHeadingId}
              className="text-center text-[1.35rem] font-semibold leading-tight text-slate-900"
            >
              {q.question}
            </h2>
            <div id={optionContainerId} className="mt-5 space-y-3">
              {q.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={handleAnswer}
                  className="w-full rounded-2xl px-4 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0"
                  style={{
                    backgroundColor: themeColor,
                    boxShadow: `0 12px 24px ${themeColor}33`,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor = themeColorLight;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = themeColor;
                  }}
                  onFocus={(event) => {
                    event.currentTarget.style.backgroundColor = themeColorLight;
                  }}
                  onBlur={(event) => {
                    event.currentTarget.style.backgroundColor = themeColor;
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "loading" && (
          <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <h2 id={questionHeadingId} className="sr-only">
              {lastQuestionText}
            </h2>
            <FakeLoadingState
              message={loadingMessage}
              themeColor={themeColor}
              duration={3500}
              onComplete={handleLoadingComplete}
            />
          </div>
        )}

        {phase === "cta" && (
          <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <h2
              id={questionHeadingId}
              className="text-center text-[1.35rem] font-semibold leading-tight text-slate-900"
            >
              {ctaTitle ?? "Exclusive rewards are waiting for you!"}
            </h2>
            <button
              type="button"
              onClick={handleClaimRewards}
              className="mt-5 w-full rounded-2xl px-4 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0"
              style={{
                backgroundColor: themeColor,
                boxShadow: `0 12px 24px ${themeColor}33`,
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor = themeColorLight;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor = themeColor;
              }}
              onFocus={(event) => {
                event.currentTarget.style.backgroundColor = themeColorLight;
              }}
              onBlur={(event) => {
                event.currentTarget.style.backgroundColor = themeColor;
              }}
            >
              {ctaButtonLabel ?? "Claim my rewards"}
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
              {ctaDisclaimer ??
                "To continue, it will be necessary to watch an ad."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
