"use client";

import GamingChatEntry from "@/components/gaming/gaming-chat-entry";
import { ROBLOX_THEME } from "@/lib/gaming-config";

const QUESTIONS = [
  {
    id: "experience",
    botMessage: "Quick question — have you played Roblox before?",
    options: [
      { label: "Yes, I'm a regular player!", value: "yes" },
      { label: "I'm just getting started", value: "new" },
    ],
  },
  {
    id: "interest",
    botMessage: "Nice! And what interests you most about Robux?",
    options: [
      { label: "Unlocking premium items", value: "items" },
      { label: "Customizing my avatar", value: "avatar" },
      { label: "Trading & building", value: "trade" },
    ],
  },
  {
    id: "device",
    botMessage: "Got it! What device do you play on?",
    options: [
      { label: "Phone", value: "phone" },
      { label: "Computer", value: "pc" },
      { label: "Tablet", value: "tablet" },
    ],
  },
];

export default function RobuxChat01Page() {
  return (
    <GamingChatEntry
      botName="Alex"
      greeting="I'm your gaming rewards guide! Let me help you find the best ways to earn free Robux. 🎮"
      questions={QUESTIONS}
      themeColor={ROBLOX_THEME.color}
      themeColorLight={ROBLOX_THEME.colorLight}
      successMessage="Great news! I found reward options that match your profile! 🎉 Tap below to see your personalized Robux guide."
      ctaButtonText="Show My Robux Guide →"
      ctaSecondaryText="Watch a short ad to continue"
      redirectTo="/gaming/robux-promise-p3"
    />
  );
}
