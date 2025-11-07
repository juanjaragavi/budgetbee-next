/**
 * BudgetBee Site Configuration
 * Migrated from Astro config.json and theme.json
 */

export const siteConfig = {
  // Site Information
  site: {
    title: "BudgetBee | Your Hive for Unbiased Financial Buzz",
    baseUrl: "https://budgetbeepro.com",
    basePath: "/",
    trailingSlash: false,
    favicon: "/images/favicon.png",
    logo: "/images/logo.png",
    logoWidth: 200,
    logoHeight: 38,
    squareLogo: "/images/square-logo.png",
    squareLogoWidth: 120,
    squareLogoHeight: 120,
    logoText: "BudgetBee | Your Hive for Unbiased Financial Buzz",
  },

  // Settings
  settings: {
    pagination: 4,
    summaryLength: 200,
  },

  // Navigation Button
  navButton: {
    enable: true,
    label: "Get Started",
    link: "/blog",
  },

  // Parameters
  params: {
    contactFormAction: "",
    tagManagerId: "GTM-MP4CPT97",
    footerContent:
      "ALL RIGHTS RESERVED, © BUDGETBEE 2025. REPRODUCTION IN WHOLE OR IN PART BY ANY MEANS OR FORM WITHOUT WRITTEN AUTHORIZATION IS PROHIBITED.",
    copyright: "© Copyright BudgetBee 2025",
  },

  // Metadata
  metadata: {
    metaAuthor: "BudgetBee Team",
    metaImage: "/images/og-image.png",
    metaDescription: "BudgetBee | Your Hive for Unbiased Financial Buzz",
  },

  // Theme Colors (from theme.json)
  colors: {
    primary: "#E7B739", // Yellow/Gold - Main brand color
    secondary: "#7ED321", // Green - Secondary brand color
    body: "#fff", // White background
    border: "#e9e9e9", // Light gray border
    light: "#F5F5F5", // Very light gray
    text: "#555", // Medium gray text
    textDark: "#222", // Dark gray/black text
  },

  // Fonts (from theme.json)
  fonts: {
    fontFamily: {
      primary: "Montserrat",
      primaryType: "sans-serif",
    },
    fontSize: {
      base: 16,
      scale: 1.2,
    },
  },

  // AdZep Configuration
  adZep: {
    scriptUrl: "https://autozep.adzep.io/paid/budgetbeepro.js",
    adUnits: {
      unit1: "us_budgetbeepro_1",
      unit2: "us_budgetbeepro_2",
      unit3: "us_budgetbeepro_3",
      unit4: "us_budgetbeepro_4",
    },
    excludePaths: ["/quiz", "/qz", "/quiz-results"],
  },

  // Social Media (from social.json if exists)
  social: {
    // Add social media links here
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper functions
export function shouldLoadAds(pathname: string): boolean {
  return !siteConfig.adZep.excludePaths.some((path) =>
    pathname.startsWith(path),
  );
}

export function getAdUnitId(
  unit: keyof typeof siteConfig.adZep.adUnits,
): string {
  return siteConfig.adZep.adUnits[unit];
}
