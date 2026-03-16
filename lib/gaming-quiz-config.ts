import {
  FORTNITE_THEME,
  MINECRAFT_THEME,
  ROBLOX_THEME,
} from "@/lib/gaming-config";

export interface GamingQuizOption {
  label: string;
  value: string;
}

export interface GamingQuizQuestion {
  id: string;
  question: string;
  options: GamingQuizOption[];
}

export interface GamingQuizConfig {
  journeyId: string;
  parentPath: string;
  themeColor: string;
  themeColorLight: string;
  loadingMessage: string;
  questions: GamingQuizQuestion[];
  hideAds?: boolean;
}

export const DELAYED_GAMING_AD_PATHS = [
  "/gaming/fortnite-promise-p1",
  "/gaming/fortnite-promise-p2",
  "/gaming/minecraft-promise-p1",
  "/gaming/minecraft-promise-p2",
  "/gaming/robux-promise-p1",
  "/gaming/robux-promise-p2",
] as const;

export const GAMING_QUIZ_CONFIGS: Record<string, GamingQuizConfig> = {
  fortniteQuiz01: {
    journeyId: "quiz-fortnite-01",
    parentPath: "/gaming/fortnite-promise-p1",
    themeColor: FORTNITE_THEME.color,
    themeColorLight: FORTNITE_THEME.colorLight,
    loadingMessage: "Searching for V-Bucks earning opportunities…",
    questions: [
      {
        id: "played",
        question: "Do you play Fortnite?",
        options: [
          { label: "Yes, every day", value: "yes" },
          { label: "Sometimes", value: "casual" },
          { label: "Not yet", value: "no" },
        ],
      },
      {
        id: "want",
        question: "What do you want most?",
        options: [
          { label: "Battle Pass", value: "battlepass" },
          { label: "Exclusive skins", value: "skins" },
          { label: "Both", value: "both" },
        ],
      },
    ],
  },
  fortniteQuiz02: {
    journeyId: "quiz-fortnite-02",
    parentPath: "/gaming/fortnite-promise-p2",
    themeColor: FORTNITE_THEME.color,
    themeColorLight: FORTNITE_THEME.colorLight,
    loadingMessage: "Finding the best strategies for your play style…",
    questions: [
      {
        id: "mode",
        question: "Favorite Fortnite mode?",
        options: [
          { label: "Battle Royale", value: "br" },
          { label: "Save the World", value: "stw" },
          { label: "Creative", value: "creative" },
        ],
      },
      {
        id: "spend",
        question: "How much do you spend?",
        options: [
          { label: "Nothing", value: "free" },
          { label: "Under $10", value: "low" },
          { label: "Over $10", value: "high" },
        ],
      },
    ],
  },
  minecraftQuiz01: {
    journeyId: "quiz-minecraft-01",
    parentPath: "/gaming/minecraft-promise-p1",
    themeColor: MINECRAFT_THEME.color,
    themeColorLight: MINECRAFT_THEME.colorLight,
    loadingMessage: "Searching for the best Minecraft rewards for you…",
    hideAds: true,
    questions: [
      {
        id: "played",
        question: "Played Minecraft before?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "Just starting", value: "no" },
        ],
      },
      {
        id: "edition",
        question: "Which edition do you play?",
        options: [
          { label: "Java", value: "java" },
          { label: "Bedrock", value: "bedrock" },
          { label: "Both", value: "both" },
        ],
      },
    ],
  },
  minecraftQuiz02: {
    journeyId: "quiz-minecraft-02",
    parentPath: "/gaming/minecraft-promise-p2",
    themeColor: MINECRAFT_THEME.color,
    themeColorLight: MINECRAFT_THEME.colorLight,
    loadingMessage: "Finding the best free content for your play style…",
    hideAds: true,
    questions: [
      {
        id: "style",
        question: "What's your play style?",
        options: [
          { label: "Builder", value: "builder" },
          { label: "Survivalist", value: "survival" },
          { label: "Adventurer", value: "adventure" },
        ],
      },
      {
        id: "spending",
        question: "Do you buy content often?",
        options: [
          { label: "No", value: "free" },
          { label: "Sometimes", value: "sometimes" },
          { label: "Regularly", value: "regular" },
        ],
      },
    ],
  },
  robuxQuiz01: {
    journeyId: "quiz-robux-01",
    parentPath: "/gaming/robux-promise-p1",
    themeColor: ROBLOX_THEME.color,
    themeColorLight: ROBLOX_THEME.colorLight,
    loadingMessage:
      "Searching for the best Robux opportunities for your profile…",
    questions: [
      {
        id: "played",
        question: "Played Roblox before?",
        options: [
          { label: "All the time", value: "yes" },
          { label: "Not yet", value: "no" },
        ],
      },
      {
        id: "preference",
        question: "What do you want most?",
        options: [
          { label: "More Robux", value: "robux" },
          { label: "Exclusive skins", value: "skins" },
          { label: "Both", value: "both" },
        ],
      },
    ],
  },
  robuxQuiz02: {
    journeyId: "quiz-robux-02",
    parentPath: "/gaming/robux-promise-p2",
    themeColor: ROBLOX_THEME.color,
    themeColorLight: ROBLOX_THEME.colorLight,
    loadingMessage: "Finding the best Robux rewards for your player type…",
    questions: [
      {
        id: "type",
        question: "What kind of player?",
        options: [
          { label: "Builder", value: "builder" },
          { label: "Explorer", value: "explorer" },
          { label: "Competitor", value: "competitor" },
        ],
      },
      {
        id: "goal",
        question: "Main Roblox goal?",
        options: [
          { label: "Earn more Robux", value: "robux" },
          { label: "Customize avatar", value: "avatar" },
          { label: "Build worlds", value: "build" },
        ],
      },
    ],
  },
};
