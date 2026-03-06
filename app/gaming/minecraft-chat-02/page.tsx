"use client";
import GamingChatEntry from "@/components/gaming/gaming-chat-entry";
import { MINECRAFT_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "fav",
    botMessage: "What's your favorite thing about Minecraft?",
    options: [
      { label: "Building amazing structures", value: "building" },
      { label: "Exploring and adventuring", value: "exploring" },
      { label: "Playing with friends", value: "social" },
    ],
  },
  {
    id: "marketplace",
    botMessage: "Have you used the Minecraft Marketplace?",
    options: [
      { label: "Yes, I buy content there", value: "yes" },
      { label: "No, it's too expensive", value: "expensive" },
      { label: "What's the Marketplace?", value: "new" },
    ],
  },
  {
    id: "earn",
    botMessage: "Would you like to earn Minecoins without paying?",
    options: [
      { label: "Absolutely!", value: "yes" },
      { label: "Tell me more first", value: "maybe" },
    ],
  },
];
export default function MinecraftChat02Page() {
  return (
    <GamingChatEntry
      journeyId="chat-minecraft-02"
      botName="Luna"
      greeting="Hey there, fellow crafter! 💚 I know the best ways to get free Minecraft content. Let me help!"
      questions={QUESTIONS}
      themeColor={MINECRAFT_THEME.color}
      themeColorLight={MINECRAFT_THEME.colorLight}
      successMessage="Perfect! I've got a custom list of earning methods for you! 🚀"
      ctaButtonText="See My Earning Methods →"
      redirectTo="/gaming/minecraft-promise-p4"
    />
  );
}
