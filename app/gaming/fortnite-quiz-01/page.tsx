"use client";
import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import { FORTNITE_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "played",
    question: "Do you play Fortnite?",
    options: [
      { label: "Yes, I drop in every day!", value: "yes" },
      { label: "I'm a casual player", value: "casual" },
      { label: "Not yet", value: "no" },
    ],
  },
  {
    id: "want",
    question: "What would you do with free V-Bucks?",
    options: [
      { label: "Buy the Battle Pass", value: "battlepass" },
      { label: "Get exclusive skins", value: "skins" },
      { label: "Both!", value: "both" },
    ],
  },
  {
    id: "platform",
    question: "Where do you play Fortnite?",
    options: [
      { label: "PC", value: "pc" },
      { label: "Console", value: "console" },
      { label: "Mobile", value: "mobile" },
    ],
  },
];
export default function FortniteQuiz01Page() {
  return (
    <GamingQuizEntry
      title="🎯 Find the Best V-Bucks Rewards"
      questions={QUESTIONS}
      themeColor={FORTNITE_THEME.color}
      themeColorLight={FORTNITE_THEME.colorLight}
      loadingMessage="Searching for V-Bucks earning opportunities…"
      ctaHeading="We found V-Bucks earning methods for your profile!"
      ctaButtonText="Yes! Show Me Now!"
      ctaSecondaryText="View sponsored recommendation to continue"
      redirectTo="/gaming/fortnite-promise-p1"
      gameIcon="🎯"
    />
  );
}
