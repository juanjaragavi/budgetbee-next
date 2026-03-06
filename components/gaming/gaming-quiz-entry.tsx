"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import FakeLoadingState from "@/components/gaming/fake-loading-state";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export interface GamingQuizEntryProps {
  /** Quiz title shown above the question card */
  title?: string;
  /** Array of 2-4 quiz questions */
  questions: QuizQuestion[];
  /** Journey identifier for GA4 step tracking (e.g. "quiz-fortnite-01") */
  journeyId: string;
  /** Theme color hex (e.g. "#7C3AED" for purple) */
  themeColor: string;
  /** Lighter shade for hover states */
  themeColorLight: string;
  /** Loading screen message */
  loadingMessage?: string;
  /** Final CTA heading */
  ctaHeading: string;
  /** Final CTA button text */
  ctaButtonText: string;
  /** Secondary link text below the CTA button */
  ctaSecondaryText?: string;
  /** Destination URL after the final CTA */
  redirectTo: string;
  /** Optional game icon/image URL */
  gameIcon?: string;
  /** Hide all ad slots on this quiz page */
  hideAds?: boolean;
}

type Phase = "quiz" | "loading" | "cta";

export default function GamingQuizEntry({
  title,
  questions,
  journeyId,
  themeColor,
  themeColorLight,
  loadingMessage,
  ctaHeading,
  ctaButtonText,
  ctaSecondaryText = "View sponsored recommendation to continue",
  redirectTo,
  gameIcon,
  hideAds = false,
}: GamingQuizEntryProps) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");

  const handleAnswer = useCallback(() => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestion(nextIndex);
    } else if (phase === "quiz") {
      // Guard: only transition to loading from quiz phase (prevents re-trigger)
      setPhase("loading");
    }
  }, [currentQuestion, questions.length, phase]);

  const handleLoadingComplete = useCallback(() => {
    // Guard: only transition to cta from loading phase
    setPhase((prev) => (prev === "loading" ? "cta" : prev));
  }, []);

  const handleCta = useCallback(() => {
    router.push(redirectTo);
  }, [router, redirectTo]);

  const q = questions[currentQuestion];
  const progress =
    phase === "quiz" ? ((currentQuestion + 1) / questions.length) * 100 : 100;

  return (
    <section className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          {/* Game icon */}
          {gameIcon && phase === "quiz" && (
            <div className="flex justify-center mb-4">
              <div
                className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${themeColor}20` }}
              >
                {gameIcon}
              </div>
            </div>
          )}

          {/* Title */}
          {title && phase === "quiz" && (
            <h1
              className="text-xl font-bold text-center mb-6"
              style={{ color: themeColor }}
            >
              {title}
            </h1>
          )}

          {/* Progress bar (quiz phase only) */}
          {phase === "quiz" && (
            <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: themeColor,
                }}
              />
            </div>
          )}

          {/* Quiz card */}
          {phase === "quiz" && q && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
                {q.question}
              </h2>
              <div
                id={`paso-${currentQuestion + 1}-${journeyId}`}
                className="space-y-3"
              >
                {q.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={handleAnswer}
                    className="w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
                    style={{
                      backgroundColor: themeColor,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = themeColorLight)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = themeColor)
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <p className="text-center text-sm text-gray-400 mt-6">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          )}

          {/* Loading phase */}
          {phase === "loading" && (
            <div className="bg-white rounded-2xl shadow-lg">
              <FakeLoadingState
                message={loadingMessage}
                themeColor={themeColor}
                duration={3500}
                onComplete={handleLoadingComplete}
              />
            </div>
          )}

          {/* CTA phase */}
          {phase === "cta" && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              {gameIcon && (
                <div className="flex justify-center mb-4">
                  <div
                    className="h-20 w-20 rounded-2xl flex items-center justify-center text-4xl"
                    style={{ backgroundColor: `${themeColor}20` }}
                  >
                    {gameIcon}
                  </div>
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {ctaHeading}
              </h2>
              <button
                type="button"
                onClick={handleCta}
                className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg mb-4"
                style={{ backgroundColor: themeColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = themeColorLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = themeColor)
                }
              >
                {ctaButtonText}
              </button>
              <button
                type="button"
                onClick={handleCta}
                className="text-sm text-gray-500 underline hover:text-gray-700 transition-colors"
              >
                {ctaSecondaryText}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Ad Slot 1 — Below main content */}
      {!hideAds && (
        <div className="w-full max-w-lg mx-auto px-4">
          <div
            id="square01"
            data-topads
            data-topads-size="square"
            className="items-center justify-center flex w-full my-8"
          />
        </div>
      )}

      <p className="text-center text-xs text-gray-500 mb-2">
        By continuing you agree to our terms of service.
      </p>

      {/* Footer */}
      <div className="text-center py-4 text-xs text-gray-400">
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        {" | "}
        <a href="/privacy-policy" className="hover:underline">
          Privacy
        </a>
      </div>
    </section>
  );
}
