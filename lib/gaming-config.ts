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

/* ─── Official Press Kit Images (sourced from IGDB) ─── */

export const ROBLOX_IMAGES = {
  hero: "/images/gaming/roblox/roblox-keyart-hero.webp",
  coins: "/images/gaming/roblox/roblox-gameplay-01.webp",
  avatar: "/images/gaming/roblox/roblox-gameplay-02.webp",
  promo: "/images/gaming/roblox/roblox-keyart-promo.webp",
} as const;

export const MINECRAFT_IMAGES = {
  hero: "/images/gaming/minecraft/minecraft-artwork-hero.webp",
  minecoins: "/images/gaming/minecraft/minecraft-gameplay-01.webp",
  loot: "/images/gaming/minecraft/minecraft-gameplay-04.webp",
  skins: "/images/gaming/minecraft/minecraft-artwork-alt.webp",
  promo: "/images/gaming/minecraft/minecraft-artwork-alt.webp",
} as const;

export const FORTNITE_IMAGES = {
  hero: "/images/gaming/fortnite/fortnite-keyart-hero.webp",
  vbucks: "/images/gaming/fortnite/fortnite-gameplay-01.webp",
  skins: "/images/gaming/fortnite/fortnite-artwork-01.webp",
  battlePass: "/images/gaming/fortnite/fortnite-gameplay-02.webp",
  promo: "/images/gaming/fortnite/fortnite-artwork-01.webp",
} as const;

export const APP_IMAGES = {
  microsoftRewards: "/images/gaming/apps/microsoft-rewards.webp",
  swagbucks: "/images/gaming/apps/swagbucks.webp",
  fetchRewards: "/images/gaming/apps/fetch-rewards.webp",
  inboxDollars: "/images/gaming/apps/inboxdollars.webp",
} as const;

/* ─── CTA Banner Configs ─── */

import type { GamingCtaBannerProps } from "@/components/gaming/gaming-cta-banner";

export function makeRobloxCtaBanner(): GamingCtaBannerProps {
  return {
    image: { src: ROBLOX_IMAGES.promo, alt: "Roblox characters celebrating" },
    badge: "Safe Robux Methods",
    headline: "The Essential Safety Checklist Before Earning Robux",
    body: "Use this checklist to confirm any Robux-earning method is legitimate and safe for your account before trying it.",
    ctaLabel: "See the Best Robux Methods",
    ctaHref: "/gaming/robux-reward-p1",
    disclaimer:
      "Never enter your Roblox password on unofficial sites, even if they promise free Robux.",
    themeColor: ROBLOX_THEME.color,
    themeColorDark: ROBLOX_THEME.colorDark,
  };
}

export function makeMinecraftCtaBanner(): GamingCtaBannerProps {
  return {
    image: {
      src: MINECRAFT_IMAGES.promo,
      alt: "Minecraft characters and world",
    },
    badge: "Safe Minecoin Methods",
    headline: "How to Get Free Minecoins Without Risking Your Account",
    body: "Follow this quick guide to verify any Minecoin-earning method is safe and legitimate before you try it.",
    ctaLabel: "See the Best Minecraft Methods",
    ctaHref: "/gaming/minecraft-reward-p1",
    disclaimer:
      "Only use official Microsoft redemption channels for Minecraft content.",
    themeColor: MINECRAFT_THEME.color,
    themeColorDark: MINECRAFT_THEME.colorDark,
  };
}

export function makeFortniteCtaBanner(): GamingCtaBannerProps {
  return {
    image: {
      src: FORTNITE_IMAGES.promo,
      alt: "Fortnite characters and battle scene",
    },
    badge: "Safe V-Bucks Methods",
    headline: "Your Safety Checklist Before Earning V-Bucks",
    body: "Use this checklist to confirm any V-Bucks method is truly safe and won't put your Epic Games account at risk.",
    ctaLabel: "See the Best V-Bucks Methods",
    ctaHref: "/gaming/fortnite-reward-p1",
    disclaimer:
      "Never share your Epic Games credentials with third-party sites promising free V-Bucks.",
    themeColor: FORTNITE_THEME.color,
    themeColorDark: FORTNITE_THEME.colorDark,
  };
}

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
    description: `The #1 free way to earn ${gameName} gift cards. Earn points by searching with Bing, completing daily challenges, and taking quizzes — then redeem directly for ${gameName} gift cards from Microsoft.`,
    badges: ["Official", "Verified"],
    features: [
      "Completely free to join — just use a Microsoft account",
      `Earn points daily through Bing searches and quizzes`,
      `Redeem for ${gameName} gift cards and Xbox credit`,
      "Available on desktop and mobile (Microsoft Edge)",
      "Trusted by millions of gamers worldwide",
    ],
    cta: {
      label: `Start Earning ${gameName} Rewards Now`,
      href: "https://www.microsoft.com/en-us/rewards",
    },
    downloadLinks: [
      {
        label: "Open in Browser",
        href: "https://www.microsoft.com/en-us/rewards",
      },
    ],
    themeColor,
  };
}

export function makeSwagbucksCard(themeColor: string): MethodCardProps {
  return {
    name: "Swagbucks",
    icon: "💰",
    description:
      "One of the most popular reward platforms among gamers. Earn points (SB) by watching videos, taking surveys, shopping online, and even playing games. Redeem for gaming gift cards and more.",
    badges: ["Popular", "Trusted"],
    features: [
      "Multiple ways to earn: surveys, videos, shopping, games",
      "Cash out via PayPal or gift cards (Amazon, Visa, etc.)",
      "$10 sign-up bonus for new members",
      "Over 20 million members worldwide",
      "Redeem for gaming gift cards (Roblox, Xbox, PlayStation)",
    ],
    cta: {
      label: "Join Swagbucks Free — Start Earning",
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
      "Turn everyday shopping receipts into gaming gift cards. Snap photos of your grocery receipts and earn points automatically — no coupon clipping required. Every receipt counts toward your next in-game purchase.",
    badges: ["Easy", "Popular"],
    features: [
      "Just scan any receipt — groceries, restaurants, gas stations",
      "Earn bonus points on featured brands",
      "Redeem for gift cards (Amazon, Target, Visa, and more)",
      "No minimum receipt amount required",
      "Perfect for earning gaming gift cards passively",
    ],
    cta: {
      label: "Download Fetch Rewards — It's Free",
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
      "Get paid in real cash for reading emails, watching videos, taking surveys, and playing games. Over $80 million paid to members. Convert your earnings into gaming gift cards.",
    badges: ["Cash Rewards", "Established"],
    features: [
      "Earn real cash — not just points",
      "$5 bonus just for signing up",
      "Multiple earning methods: emails, surveys, videos, games",
      "Cash out via check or gift card",
      "Great for supplementing other reward apps",
    ],
    cta: {
      label: "Sign Up Free — Get $5 Bonus",
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
