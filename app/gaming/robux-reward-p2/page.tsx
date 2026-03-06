import GamingRewardTemplate from "@/components/layout/gaming-reward-template";
import {
  ROBLOX_THEME,
  ROBLOX_IMAGES,
  FINANCIAL_RELATED_ARTICLES,
  makeMicrosoftRewardsCard,
  makeSwagbucksCard,
  makeFetchRewardsCard,
  makeInboxDollarsCard,
} from "@/lib/gaming-config";

export function generateMetadata() {
  return {
    title:
      "Swagbucks & InboxDollars for Gamers — Earn Roblox Gift Cards — BudgetBee",
    description:
      "How to use Swagbucks and InboxDollars to earn free Roblox gift cards. Step-by-step guide for gamers who want Robux without paying.",
    keywords:
      "swagbucks robux, inboxdollars gaming, free roblox gift cards, earn robux apps",
  };
}

export default function RobuxRewardP2() {
  return (
    <GamingRewardTemplate
      themeColor={ROBLOX_THEME.color}
      themeColorDark={ROBLOX_THEME.colorDark}
      badge="GAMER REWARDS"
      title="Swagbucks & InboxDollars: Your Robux Earning Toolkit"
      subtitle="Turn your spare time into Roblox gift cards with these proven reward platforms."
      heroImage={{
        src: ROBLOX_IMAGES.hero,
        alt: "Roblox gameplay and Robux rewards",
      }}
      introParagraphs={[
        "Swagbucks and InboxDollars are two of the most established reward platforms in the world, with a combined user base of over 40 million people. Both platforms let you earn points or cash by completing simple online tasks — and those earnings can be converted directly into Roblox gift cards.",
        "We've put together a complete breakdown of how each platform works, what you can expect to earn, and the best strategies for maximizing your rewards as a gamer.",
      ]}
      trustSignals={[
        "Swagbucks has paid out over $800 million to members",
        "InboxDollars has paid over $80 million in cash rewards",
        "Both platforms have A+ BBB ratings",
        "Available on iOS and Android",
        "No Roblox account access required — you earn gift cards",
      ]}
      methods={[
        makeSwagbucksCard(ROBLOX_THEME.color),
        makeInboxDollarsCard(ROBLOX_THEME.color),
        makeMicrosoftRewardsCard(ROBLOX_THEME.color, "Roblox"),
        makeFetchRewardsCard(ROBLOX_THEME.color),
      ]}
      closingParagraphs={[
        "The most successful earners use both Swagbucks and InboxDollars simultaneously. When one platform is low on available surveys, the other usually has options. This way, you always have something to do during your free time.",
        "Pro tip: Set a daily goal of earning at least 100 SB on Swagbucks and $0.50 on InboxDollars. At that pace, you'll earn a $10 Roblox gift card roughly every 2-3 weeks from each platform.",
      ]}
      relatedArticles={FINANCIAL_RELATED_ARTICLES}
      stickyBanner={{
        badge: "Robux Rewards",
        headline: "The Best Ways PRO Players Earn Free Robux",
        body: "Microsoft Rewards is the #1 method verified Roblox players use to earn gift cards without hacks or generators.",
        ctaLabel: "Get Microsoft Rewards",
        ctaHref: "https://rewards.microsoft.com/",
        disclaimer:
          "Free to join. No credit card required. Earn points and redeem for Robux gift cards.",
      }}
    />
  );
}
