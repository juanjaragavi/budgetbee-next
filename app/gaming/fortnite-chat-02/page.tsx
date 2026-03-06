"use client";
import GamingChatEntry from "@/components/gaming/gaming-chat-entry";
import { FORTNITE_THEME } from "@/lib/gaming-config";
const QUESTIONS = [
  {
    id: "season",
    botMessage: "Are you playing the current Fortnite season?",
    options: [
      { label: "Yes, already grinding!", value: "yes" },
      { label: "Haven't started yet", value: "no" },
    ],
  },
  {
    id: "skins",
    botMessage: "Which skins are you eyeing?",
    options: [
      { label: "Item Shop exclusives", value: "shop" },
      { label: "Battle Pass skins", value: "bp" },
      { label: "Collaboration skins", value: "collab" },
    ],
  },
  {
    id: "earn",
    botMessage: "Want to learn how to get V-Bucks without spending money?",
    options: [
      { label: "Absolutely!", value: "yes" },
      { label: "Tell me more", value: "more" },
    ],
  },
];
export default function FortniteChat02Page() {
  return (
    <GamingChatEntry
      journeyId="chat-fortnite-02"
      botName="Ray"
      greeting="Hey there, Fortnite player! 🔵 I know all the best ways to earn free V-Bucks. Ready?"
      questions={QUESTIONS}
      themeColor={FORTNITE_THEME.color}
      themeColorLight={FORTNITE_THEME.colorLight}
      successMessage="I've put together a custom earning plan just for you! 🚀"
      ctaButtonText="See My Earning Plan →"
      redirectTo="/gaming/fortnite-promise-p4"
    />
  );
}
