"use client";

import { useEffect, useState } from "react";

interface FakeLoadingStateProps {
  /** Primary message shown during loading */
  message?: string;
  /** Color theme hex for the spinner and accent */
  themeColor?: string;
  /** Duration in ms before calling onComplete */
  duration?: number;
  /** Callback when fake loading finishes */
  onComplete?: () => void;
}

const LOADING_STEPS = [
  "Loading Rewards…",
  "Finding the best rewards for you…",
  "Matching your top earning options…",
  "Your rewards are almost ready…",
];

export default function FakeLoadingState({
  message,
  themeColor = "#7C3AED",
  duration = 3500,
  onComplete,
}: FakeLoadingStateProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = duration / LOADING_STEPS.length;
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;
        if (next >= LOADING_STEPS.length) {
          clearInterval(timer);
          return prev;
        }
        return next;
      });
    }, stepInterval);
    return () => clearInterval(timer);
  }, [duration]);

  useEffect(() => {
    const tick = 50;
    const increment = (tick / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, tick);
    return () => clearInterval(timer);
  }, [duration]);

  useEffect(() => {
    if (progress >= 100 && onComplete) {
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  const displayMessage = message || LOADING_STEPS[stepIndex];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Spinner */}
      <div className="relative mb-8">
        <div
          className="h-16 w-16 rounded-full border-4 border-gray-200"
          style={{ borderTopColor: themeColor }}
        >
          <style jsx>{`
            div {
              animation: spin 0.8s linear infinite;
            }
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Message */}
      <p className="text-lg font-semibold text-gray-800 text-center mb-6 min-h-[28px]">
        {displayMessage}
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: themeColor,
          }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-3">
        {Math.round(progress)}% complete
      </p>
    </div>
  );
}
