"use client";
import GamingChatEntry from "@/components/gaming/gaming-chat-entry";
import { MINECRAFT_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "exp",
    botMessage: "Quick question — are you a Minecraft player?",
    options: [
      { label: "Yes, I play all the time!", value: "yes" },
      { label: "I'm new to Minecraft", value: "new" },
    ],
  },
  {
    id: "want",
    botMessage: "Awesome! What would you like to get for free?",
    options: [
      { label: "Minecoins for the Marketplace", value: "minecoins" },
      { label: "Free skins and texture packs", value: "skins" },
      { label: "Everything!", value: "all" },
    ],
  },
  {
    id: "time",
    botMessage: "How much time would you spend earning rewards?",
    options: [
      { label: "Just a few minutes daily", value: "few" },
      { label: "15-30 minutes a day", value: "moderate" },
      { label: "Whatever it takes", value: "lots" },
    ],
  },
];
export default function MinecraftChat01Page() {
  return (
    <GamingChatEntry
      journeyId="chat-minecraft-01"
      botName="Steve"
      greeting="I help Minecraft players find free content and rewards! Let me ask you a few things. 🌍"
      questions={QUESTIONS}
      themeColor={MINECRAFT_THEME.color}
      themeColorLight={MINECRAFT_THEME.colorLight}
      successMessage="I found great Minecraft reward options for you! 🎉 Tap below to see your personalized guide."
      ctaButtonText="Show My Minecraft Guide →"
      redirectTo="/gaming/minecraft-promise-p3"
    />
  );
}
