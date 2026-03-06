"use client";
import GamingChatEntry from "@/components/gaming/gaming-chat-entry";
import { FORTNITE_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "play",
    botMessage: "Hey! Do you play Fortnite?",
    options: [
      { label: "Yes, I love it!", value: "yes" },
      { label: "Just getting started", value: "new" },
    ],
  },
  {
    id: "goal",
    botMessage: "Nice! What would you like most?",
    options: [
      { label: "Free V-Bucks for the Item Shop", value: "vbucks" },
      { label: "Free Battle Pass", value: "battlepass" },
      { label: "Both please!", value: "both" },
    ],
  },
  {
    id: "time",
    botMessage: "How much time can you dedicate to earning rewards?",
    options: [
      { label: "A few minutes daily", value: "few" },
      { label: "About 30 minutes", value: "moderate" },
      { label: "As much as needed", value: "lots" },
    ],
  },
];
export default function FortniteChat01Page() {
  return (
    <GamingChatEntry
      journeyId="chat-fortnite-01"
      botName="Nova"
      greeting="I'm your Fortnite rewards guide! Let me help you find the best ways to earn V-Bucks. 💙"
      questions={QUESTIONS}
      themeColor={FORTNITE_THEME.color}
      themeColorLight={FORTNITE_THEME.colorLight}
      successMessage="Great news! I found V-Bucks earning methods that match your profile! 🎉"
      ctaButtonText="Show My V-Bucks Guide →"
      redirectTo="/gaming/fortnite-promise-p3"
    />
  );
}
