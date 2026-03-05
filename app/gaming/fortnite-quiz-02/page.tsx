"use client";
import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import { FORTNITE_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "mode",
    question: "What's your favorite Fortnite mode?",
    options: [
      { label: "Battle Royale", value: "br" },
      { label: "Save the World", value: "stw" },
      { label: "Creative", value: "creative" },
    ],
  },
  {
    id: "spend",
    question: "How much do you usually spend on V-Bucks?",
    options: [
      { label: "Nothing — I want free methods", value: "free" },
      { label: "Under $10/month", value: "low" },
      { label: "Over $10/month", value: "high" },
    ],
  },
  {
    id: "skill",
    question: "How would you rate your Fortnite skills?",
    options: [
      { label: "Beginner", value: "beginner" },
      { label: "Intermediate", value: "mid" },
      { label: "Pro level", value: "pro" },
    ],
  },
];
export default function FortniteQuiz02Page() {
  return (
    <GamingQuizEntry
      title="🎯 Discover Free V-Bucks Methods"
      questions={QUESTIONS}
      themeColor={FORTNITE_THEME.color}
      themeColorLight={FORTNITE_THEME.colorLight}
      loadingMessage="Finding the best strategies for your play style…"
      ctaHeading="Ready to earn V-Bucks without spending?"
      ctaButtonText="Show Me the Methods!"
      redirectTo="/gaming/fortnite-promise-p2"
      gameIcon="🎯"
    />
  );
}
