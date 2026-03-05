"use client";
import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import { MINECRAFT_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "style",
    question: "What's your Minecraft play style?",
    options: [
      { label: "Builder", value: "builder" },
      { label: "Survivalist", value: "survival" },
      { label: "Adventurer", value: "adventure" },
    ],
  },
  {
    id: "spending",
    question: "Do you usually spend money on Minecraft content?",
    options: [
      { label: "No, I prefer free stuff", value: "free" },
      { label: "Sometimes, for special items", value: "sometimes" },
      { label: "Yes, regularly", value: "regular" },
    ],
  },
  {
    id: "platform",
    question: "What device do you play on?",
    options: [
      { label: "PC / Mac", value: "pc" },
      { label: "Console (Xbox/PlayStation/Switch)", value: "console" },
      { label: "Mobile", value: "mobile" },
    ],
  },
];
export default function MinecraftQuiz02Page() {
  return (
    <GamingQuizEntry
      title="⛏️ Unlock Free Minecraft Content"
      questions={QUESTIONS}
      themeColor={MINECRAFT_THEME.color}
      themeColorLight={MINECRAFT_THEME.colorLight}
      loadingMessage="Finding the best free content for your play style…"
      ctaHeading="Ready to unlock free Minecraft rewards?"
      ctaButtonText="Show Me Free Content!"
      redirectTo="/gaming/minecraft-promise-p2"
      gameIcon="⛏️"
    />
  );
}
