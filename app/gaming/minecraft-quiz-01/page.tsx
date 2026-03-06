"use client";
import GamingQuizEntry from "@/components/gaming/gaming-quiz-entry";
import { MINECRAFT_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "played",
    question: "Have you played Minecraft before?",
    options: [
      { label: "Yes, I'm a veteran!", value: "yes" },
      { label: "Just starting out", value: "no" },
    ],
  },
  {
    id: "edition",
    question: "Which edition do you play?",
    options: [
      { label: "Java Edition", value: "java" },
      { label: "Bedrock Edition", value: "bedrock" },
      { label: "Both", value: "both" },
    ],
  },
];
export default function MinecraftQuiz01Page() {
  return (
    <GamingQuizEntry
      journeyId="quiz-minecraft-01"
      title="⛏️ Find the Best Minecraft Rewards"
      questions={QUESTIONS}
      themeColor={MINECRAFT_THEME.color}
      themeColorLight={MINECRAFT_THEME.colorLight}
      loadingMessage="Searching for the best Minecraft rewards for you…"
      ctaHeading="We found free Minecraft content just for you!"
      ctaButtonText="Yes! Show Me Now!"
      ctaSecondaryText="View sponsored recommendation to continue"
      redirectTo="/gaming/minecraft-promise-p1"
      gameIcon="⛏️"
      hideAds
    />
  );
}
