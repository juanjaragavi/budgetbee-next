"use client";

import { useEffect } from "react";

interface TopAdsQuizIdStamperProps {
  journeyId: string;
}

/**
 * Observes the TopAds-rendered quiz DOM and stamps a dynamic
 * `id="paso-{n}-{journeyId}"` on the `div#quiz-answers` container
 * each time the question changes, mirroring the pattern used in
 * the TopFinanzas Jobs journey (`jobs-quiz-modal.tsx`).
 *
 * TopAds owns the quiz DOM (`#quiz-overlay > #quiz-container > …`),
 * so we use a MutationObserver to detect step transitions and apply
 * the id attribute at runtime.
 */
export default function TopAdsQuizIdStamper({
  journeyId,
}: TopAdsQuizIdStamperProps) {
  useEffect(() => {
    let step = 0;
    let lastQuestionText = "";

    function stampId() {
      const answersDiv = document.getElementById("quiz-answers");
      if (!answersDiv) return;

      const titleDiv = document.getElementById("quiz-question-title");
      const currentText = titleDiv?.textContent?.trim() ?? "";

      if (currentText && currentText !== lastQuestionText) {
        lastQuestionText = currentText;
        step += 1;
      }

      if (step > 0) {
        answersDiv.id = `paso-${step}-${journeyId}`;
      }
    }

    // Initial stamp in case the quiz is already rendered
    stampId();

    const observer = new MutationObserver(() => {
      stampId();
    });

    // Observe the entire body for TopAds quiz injection and step changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [journeyId]);

  return null;
}
