import type { RelatedArticle } from "@/components/layout/gaming-promise-template";
import type { MethodCardProps } from "@/components/gaming/gaming-method-card";

/* ─── Theme Colors ─── */

export const ROBLOX_THEME = {
  color: "#7C3AED",
  colorLight: "#9061F9",
  colorDark: "#5B21B6",
} as const;

export const MINECRAFT_THEME = {
  color: "#059669",
  colorLight: "#10B981",
  colorDark: "#047857",
} as const;

export const FORTNITE_THEME = {
  color: "#2563EB",
  colorLight: "#3B82F6",
  colorDark: "#1D4ED8",
} as const;

/* ─── Placeholder Hero Images ─── */
// Replace with real images from /public/images/gaming/IMAGE_SOURCES.md

export const ROBLOX_IMAGES = {
  hero: "/images/gaming/roblox/hero-robux.svg",
  coins: "/images/gaming/roblox/robux-coins.svg",
  avatar: "/images/gaming/roblox/roblox-avatar.svg",
  promo: "/images/gaming/roblox/roblox-promo.svg",
} as const;

export const MINECRAFT_IMAGES = {
  hero: "/images/gaming/minecraft/hero-minecraft.svg",
  minecoins: "/images/gaming/minecraft/minecoins.svg",
  loot: "/images/gaming/minecraft/minecraft-loot.svg",
  skins: "/images/gaming/minecraft/minecraft-skins.svg",
} as const;

export const FORTNITE_IMAGES = {
  hero: "/images/gaming/fortnite/hero-fortnite.svg",
  vbucks: "/images/gaming/fortnite/vbucks.svg",
  skins: "/images/gaming/fortnite/fortnite-skins.svg",
  battlePass: "/images/gaming/fortnite/battle-pass.svg",
} as const;

/* ─── Related Financial Articles ─── */

export const FINANCIAL_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: "Money Management for Beginners",
    href: "/personal-finance/money-management-for-beginners",
    description:
      "Learn the basics of budgeting, saving, and managing your money wisely.",
  },
  {
    title: "Best Rewards Credit Cards",
    href: "/personal-finance/best-rewards-credit-cards",
    description:
      "Compare top rewards cards that earn cash back and points on every purchase.",
  },
  {
    title: "Best Cashback Credit Cards",
    href: "/personal-finance/cashback-credit-cards",
    description:
      "Find cards that give you money back on groceries, gas, and everyday spending.",
  },
  {
    title: "Side Hustle or Second Job?",
    href: "/personal-finance/side-hustle-or-second-job",
    description:
      "Explore ways to earn extra income and boost your savings faster.",
  },
];

/* ─── Reusable Method Card Configs ─── */

export function makeMicrosoftRewardsCard(
  themeColor: string,
  gameName: string,
): MethodCardProps {
  return {
    name: "Microsoft Rewards",
    icon: "🏆",
    description: `Earn points by searching with Bing, completing daily challenges, and taking quizzes. Redeem points for ${gameName} gift cards directly from Microsoft.`,
    badges: ["Official", "Verified"],
    features: [
      "Completely free to join — just use a Microsoft account",
      `Earn points daily through Bing searches and quizzes`,
      `Redeem for ${gameName} gift cards and Xbox credit`,
      "Available on desktop and mobile (Microsoft Edge)",
    ],
    cta: {
      label: "Start Earning with Microsoft Rewards",
      href: "https://rewards.microsoft.com/",
    },
    downloadLinks: [
      { label: "Open in Browser", href: "https://rewards.microsoft.com/" },
    ],
    themeColor,
  };
}

export function makeSwagbucksCard(themeColor: string): MethodCardProps {
  return {
    name: "Swagbucks",
    icon: "💰",
    description:
      "One of the most popular reward platforms. Earn points (SB) by watching videos, taking surveys, shopping online, and playing games. Redeem for gift cards.",
    badges: ["Popular", "Trusted"],
    features: [
      "Multiple ways to earn: surveys, videos, shopping, games",
      "Cash out via PayPal or gift cards (Amazon, Visa, etc.)",
      "$10 sign-up bonus for new members",
      "Over 20 million members worldwide",
    ],
    cta: {
      label: "Join Swagbucks Free",
      href: "https://www.swagbucks.com/",
    },
    downloadLinks: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.prodege.swagbucks",
      },
      {
        label: "iPhone",
        href: "https://apps.apple.com/app/swagbucks/id537program",
      },
    ],
    themeColor,
  };
}

export function makeFetchRewardsCard(themeColor: string): MethodCardProps {
  return {
    name: "Fetch Rewards",
    icon: "🧾",
    description:
      "Snap photos of your grocery receipts and earn points automatically. No coupon clipping required — every receipt counts toward gift cards.",
    badges: ["Easy", "Popular"],
    features: [
      "Just scan any receipt — groceries, restaurants, gas stations",
      "Earn bonus points on featured brands",
      "Redeem for gift cards (Amazon, Target, Visa, and more)",
      "No minimum receipt amount required",
    ],
    cta: {
      label: "Download Fetch Rewards",
      href: "https://fetchrewards.com/",
    },
    downloadLinks: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.fetchrewards.fetchrewards.hop",
      },
      {
        label: "iPhone",
        href: "https://apps.apple.com/app/fetch-rewards/id1182474649",
      },
    ],
    themeColor,
  };
}

export function makeInboxDollarsCard(themeColor: string): MethodCardProps {
  return {
    name: "InboxDollars",
    icon: "📧",
    description:
      "Get paid in real cash for reading emails, watching videos, taking surveys, and playing games. Over $80 million paid to members.",
    badges: ["Cash Rewards", "Established"],
    features: [
      "Earn real cash — not just points",
      "$5 bonus just for signing up",
      "Multiple earning methods: emails, surveys, videos, games",
      "Cash out via check or gift card",
    ],
    cta: {
      label: "Sign Up for InboxDollars",
      href: "https://www.inboxdollars.com/",
    },
    downloadLinks: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.inboxdollars",
      },
      {
        label: "iPhone",
        href: "https://apps.apple.com/app/inboxdollars/id547aborb",
      },
    ],
    themeColor,
  };
}
