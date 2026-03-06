"use client";

import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import { ROBLOX_THEME } from "@/lib/gaming-config";

const QUESTIONS = [
  {
    id: "played",
    question: "Have you played Roblox before?",
    options: [
      { label: "Yes, I play all the time!", value: "yes" },
      { label: "Not yet", value: "no" },
    ],
  },
  {
    id: "preference",
    question: "What do you prefer?",
    options: [
      { label: "More Robux", value: "robux" },
      { label: "Exclusive Skins", value: "skins" },
      { label: "Both Skins & Robux", value: "both" },
    ],
  },
];

export default function RobuxQuiz01Page() {
  return (
    <GamingQuizEntry
      journeyId="quiz-robux-01"
      title="🎮 Find the Best Robux Rewards for You"
      questions={QUESTIONS}
      themeColor={ROBLOX_THEME.color}
      themeColorLight={ROBLOX_THEME.colorLight}
      loadingMessage="Searching for the best Robux opportunities for your profile…"
      ctaHeading="Want to know how PRO players earn extra Robux?"
      ctaButtonText="Yes! Show Me Now!"
      ctaSecondaryText="View sponsored recommendation"
      redirectTo="/gaming/robux-promise-p1"
      gameIcon="🟣"
    />
  );
}
