import GamingRewardTemplate from "@/components/layout/gaming-reward-template";
import {
  ROBLOX_THEME,
  ROBLOX_IMAGES,
  FINANCIAL_RELATED_ARTICLES,
  makeMicrosoftRewardsCard,
  makeSwagbucksCard,
  makeFetchRewardsCard,
  makeInboxDollarsCard,
  makeRobloxCtaBanner,
} from "@/lib/gaming-config";

export function generateMetadata() {
  return {
    title:
      "Complete Reward Apps Roundup — All Methods in One Place — BudgetBee",
    description:
      "Every legitimate Robux-earning method compiled into one comprehensive guide.",
    keywords: "reward apps roundup, all robux methods, complete robux guide",
  };
}

export default function RobuxRewardP7() {
  return (
    <GamingRewardTemplate
      themeColor={ROBLOX_THEME.color}
      themeColorDark={ROBLOX_THEME.colorDark}
      badge="VERIFIED METHODS"
      title="Complete Reward Apps Roundup — All Methods in One Place"
      subtitle="Every legitimate Robux-earning method compiled into one comprehensive guide."
      heroImage={{
        src: ROBLOX_IMAGES.hero,
        alt: "Roblox gameplay and Robux rewards",
      }}
      introParagraphs={[
        "Every method listed here has been verified by our team and is actively being used by thousands of Roblox players. We update this list regularly to remove methods that stop working and add new opportunities as they become available.",
        "Remember: the best strategy is to use multiple methods simultaneously. This maximizes your earning potential and ensures you always have ways to earn, even when one platform is having a slow day.",
      ]}
      trustSignals={[
        "All methods tested and verified for 2026",
        "No Roblox password or login required",
        "Free to start — no hidden costs",
        "Millions of users trust these platforms",
        "Gift cards redeemable on official Roblox website",
      ]}
      methods={[
        makeMicrosoftRewardsCard(ROBLOX_THEME.color, "Roblox"),
        makeSwagbucksCard(ROBLOX_THEME.color),
        makeFetchRewardsCard(ROBLOX_THEME.color),
        makeInboxDollarsCard(ROBLOX_THEME.color),
      ]}
      closingParagraphs={[
        "Consistency is key. Set a daily routine: do your Microsoft Rewards searches in the morning, scan any receipts with Fetch Rewards during the day, and complete a few Swagbucks surveys in the evening. Within a month, you'll have a steady flow of Roblox gift cards.",
        "Stay safe online — never share your Roblox password with any third-party service. All the methods above work through gift card redemption on the official Roblox website.",
      ]}
      relatedArticles={FINANCIAL_RELATED_ARTICLES}
      stickyBanner={{
        badge: "Robux Rewards",
        headline: "Discover How PRO Players Get Free Robux",
        body: "Learn the top legitimate methods real players use every day to earn Robux — safely and for free.",
        ctaLabel: "See How It Works",
        ctaHref: "/gaming/robux-promise-p1",
        disclaimer:
          "No scams, no hacks. Real methods verified by the community.",
      }}
      ctaBanner={makeRobloxCtaBanner()}
    />
  );
}
