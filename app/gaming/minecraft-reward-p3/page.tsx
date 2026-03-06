import GamingRewardTemplate from "@/components/layout/gaming-reward-template";
import {
  MINECRAFT_THEME,
  MINECRAFT_IMAGES,
  FINANCIAL_RELATED_ARTICLES,
  makeMicrosoftRewardsCard,
  makeSwagbucksCard,
  makeFetchRewardsCard,
  makeInboxDollarsCard,
} from "@/lib/gaming-config";

export function generateMetadata() {
  return {
    title: "Gift Card Methods for Minecraft — BudgetBee",
    description:
      "Verified apps and methods to earn free Minecraft gift cards and Minecoins. All methods tested and working in 2026.",
    keywords:
      "minecraft gift cards free, earn minecoins, minecraft reward apps, free minecraft content",
  };
}

export default function MinecraftRewardP3() {
  return (
    <GamingRewardTemplate
      themeColor={MINECRAFT_THEME.color}
      themeColorDark={MINECRAFT_THEME.colorDark}
      badge="VERIFIED METHODS"
      title="Gift Card Methods for Minecraft"
      subtitle="Tested and verified methods to earn free Minecraft content in 2026."
      heroImage={{
        src: MINECRAFT_IMAGES.hero,
        alt: "Minecraft world and gameplay",
      }}
      introParagraphs={[
        "Every method below has been verified by our team and is actively used by thousands of Minecraft players. We keep this list updated so you always have access to the best earning opportunities.",
        "These platforms let you earn gift cards redeemable for Minecoins and Minecraft content — no hacks, no mods, no risk to your account.",
      ]}
      trustSignals={[
        "All methods verified for 2026",
        "No Minecraft login required",
        "Free to start — no hidden fees",
        "Trusted platforms with millions of users",
        "Gift cards work on official Minecraft Marketplace",
      ]}
      methods={[
        makeMicrosoftRewardsCard(MINECRAFT_THEME.color, "Minecraft"),
        makeSwagbucksCard(MINECRAFT_THEME.color),
        makeFetchRewardsCard(MINECRAFT_THEME.color),
        makeInboxDollarsCard(MINECRAFT_THEME.color),
      ]}
      closingParagraphs={[
        "For the fastest results, use Microsoft Rewards daily and supplement with Fetch Rewards for receipt scanning. This combination typically yields a $5-10 gift card every 2-3 weeks.",
        "Remember: never download unofficial Minecraft tools or share your account credentials. All methods above work through gift card rewards on trusted platforms.",
      ]}
      relatedArticles={FINANCIAL_RELATED_ARTICLES}
      stickyBanner={{
        badge: "Minecraft Rewards",
        headline: "The Best Ways to Earn Free Minecoins",
        body: "Microsoft Rewards lets Minecraft players earn gift cards for free content, skins, and texture packs — no mods required.",
        ctaLabel: "Get Microsoft Rewards",
        ctaHref: "https://rewards.microsoft.com/",
        disclaimer:
          "Free to join. No credit card required. Earn points and redeem for Minecraft gift cards.",
      }}
    />
  );
}
