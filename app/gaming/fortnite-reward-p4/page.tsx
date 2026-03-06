import GamingRewardTemplate from "@/components/layout/gaming-reward-template";
import {
  FORTNITE_THEME,
  FORTNITE_IMAGES,
  FINANCIAL_RELATED_ARTICLES,
  makeMicrosoftRewardsCard,
  makeSwagbucksCard,
  makeFetchRewardsCard,
  makeInboxDollarsCard,
} from "@/lib/gaming-config";

export function generateMetadata() {
  return {
    title: "Gift Card Apps for Fortnite Players — BudgetBee",
    description:
      "Verified apps and methods to earn free V-Bucks and Fortnite gift cards. All methods tested and working in 2026.",
    keywords:
      "vbucks apps, earn fortnite gift cards, free vbucks methods, fortnite reward apps",
  };
}

export default function FortniteRewardP4() {
  return (
    <GamingRewardTemplate
      themeColor={FORTNITE_THEME.color}
      themeColorDark={FORTNITE_THEME.colorDark}
      badge="VERIFIED METHODS"
      title="Gift Card Apps for Fortnite Players"
      subtitle="Tested and verified methods to earn V-Bucks and Fortnite gift cards in 2026."
      heroImage={{
        src: FORTNITE_IMAGES.hero,
        alt: "Fortnite gameplay and V-Bucks",
      }}
      introParagraphs={[
        "Every method below has been verified and is actively used by thousands of Fortnite players. We only recommend platforms with proven track records and millions of satisfied users.",
        "These apps let you earn gift cards for PlayStation Store, Xbox, or the Epic Games Store — all of which can be used to purchase V-Bucks safely through official channels.",
      ]}
      trustSignals={[
        "All methods verified for 2026",
        "No Epic Games password required",
        "Free to start — no hidden costs",
        "Trusted by millions of users worldwide",
        "Gift cards redeemable on official stores",
      ]}
      methods={[
        makeMicrosoftRewardsCard(FORTNITE_THEME.color, "Fortnite/Xbox"),
        makeSwagbucksCard(FORTNITE_THEME.color),
        makeFetchRewardsCard(FORTNITE_THEME.color),
        makeInboxDollarsCard(FORTNITE_THEME.color),
      ]}
      closingParagraphs={[
        "The smartest Fortnite players combine Save the World daily quests with external reward apps. This dual approach maximizes V-Bucks from in-game activities while building up gift card balances through everyday tasks.",
        "Always protect your account — never share your Epic Games credentials with any third-party service. Every method above earns you gift cards through separate, trusted platforms.",
      ]}
      relatedArticles={FINANCIAL_RELATED_ARTICLES}
      stickyBanner={{
        badge: "V-Bucks Rewards",
        headline: "The Best Ways to Earn Free V-Bucks",
        body: "Microsoft Rewards is the easiest verified method to earn gift cards redeemable for V-Bucks on official stores.",
        ctaLabel: "Get Microsoft Rewards",
        ctaHref: "https://rewards.microsoft.com/",
        disclaimer:
          "Free to join. No credit card required. Earn points and redeem for Fortnite gift cards.",
      }}
    />
  );
}
