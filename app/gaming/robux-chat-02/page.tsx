"use client";

import GamingChatEntry from "@/components/gaming/gaming-chat-entry";
import { ROBLOX_THEME } from "@/lib/gaming-config";

const QUESTIONS = [
  {
    id: "level",
    botMessage: "Let's start! How would you describe your Roblox level?",
    options: [
      { label: "Beginner — still learning", value: "beginner" },
      { label: "Intermediate — I know my way around", value: "intermediate" },
      { label: "Pro — I live in Roblox", value: "pro" },
    ],
  },
  {
    id: "goal",
    botMessage: "Awesome! What would you do with extra Robux?",
    options: [
      { label: "Buy limited edition items", value: "limited" },
      { label: "Upgrade my game passes", value: "gamepass" },
      { label: "Gift Robux to friends", value: "gift" },
    ],
  },
  {
    id: "time",
    botMessage: "Last one — how much time can you spend earning rewards?",
    options: [
      { label: "A few minutes a day", value: "few" },
      { label: "About 30 minutes daily", value: "moderate" },
      { label: "As much as it takes!", value: "all" },
    ],
  },
];

export default function RobuxChat02Page() {
  return (
    <GamingChatEntry
      journeyId="chat-robux-02"
      botName="Mia"
      greeting="I help gamers find legit ways to earn Robux without spending money. Let me ask you a few things! 💜"
      questions={QUESTIONS}
      themeColor={ROBLOX_THEME.color}
      themeColorLight={ROBLOX_THEME.colorLight}
      successMessage="I found the perfect methods for your profile! 🚀 Check out your personalized reward strategies below."
      ctaButtonText="See My Reward Strategies →"
      ctaSecondaryText="Watch a short ad to continue"
      redirectTo="/gaming/robux-promise-p4"
    />
  );
}
