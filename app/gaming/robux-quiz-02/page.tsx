"use client";

import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import { ROBLOX_THEME } from "@/lib/gaming-config";

const QUESTIONS = [
  {
    id: "type",
    question: "What type of Roblox player are you?",
    options: [
      { label: "The Builder", value: "builder" },
      { label: "The Explorer", value: "explorer" },
      { label: "The Competitor", value: "competitor" },
    ],
  },
  {
    id: "goal",
    question: "What's your main goal in Roblox?",
    options: [
      { label: "Earn more Robux & level up", value: "robux" },
      { label: "Customize my avatar", value: "avatar" },
      { label: "Build worlds", value: "build" },
    ],
  },
  {
    id: "spending",
    question: "How much do you usually spend on Robux?",
    options: [
      { label: "I don't spend money", value: "free" },
      { label: "Under $10/month", value: "low" },
      { label: "Over $10/month", value: "high" },
    ],
  },
];

export default function RobuxQuiz02Page() {
  return (
    <GamingQuizEntry
      title="🎮 Discover Your Robux Earning Potential"
      questions={QUESTIONS}
      themeColor={ROBLOX_THEME.color}
      themeColorLight={ROBLOX_THEME.colorLight}
      loadingMessage="Finding the best Robux rewards for your player type…"
      ctaHeading="We found Robux earning strategies just for you!"
      ctaButtonText="Show Me the Strategies!"
      ctaSecondaryText="View sponsored recommendation to continue"
      redirectTo="/gaming/robux-promise-p2"
      gameIcon="🟣"
    />
  );
}
