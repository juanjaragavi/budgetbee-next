/**
 * Navigation items for the header component
 * Localized for the US market
 * Easily modifiable by LLM agents to update site navigation
 */

export interface NavigationItem {
  text: string;
  href: string;
  isEmphasis?: boolean; // Optional flag for "Show more..."
}

export interface DropdownItem {
  text: string;
  items: NavigationItem[];
}

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenu {
  title: string;
  columns: MegaMenuColumn[];
  featuredPosts?: {
    title: string;
    posts: Array<{
      title: string;
      href: string;
      image: string;
      category: string;
      categoryHref: string;
    }>;
  };
}

// Helper function to clean titles (remove potential pipe and extra text)
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export const headerNavigation = {
  /** Main navigation items */
  mainNavItems: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Personal Finance",
      href: "/personal-finance",
    },
    {
      text: "Financial Solutions",
      href: "/financial-solutions",
    },
    {
      text: "About Us",
      href: "/about-us",
    },
    {
      text: "Contact",
      href: "/contact-us",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Financial Solutions", // Main MOFU category
        href: "/financial-solutions",
      },
      {
        text: "Personal Finance", // TOFU category
        href: "/personal-finance",
      },
      {
        text: "Card Recommender", // Tool
        href: "/credit-card-recommender-p1",
      },
    ],
  },

  /** Blog megamenu - Updated with limited items and "Show more..." */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      // Column 1: Personal Finance Guides (Top 5 + Show more)
      {
        title: "Personal Finance",
        items: [
          {
            text: cleanTitle("Best Personal Loans in the US"),
            href: "/personal-finance/best-personal-loans",
          },
          {
            text: cleanTitle("Top Rewards Credit Cards"),
            href: "/personal-finance/best-rewards-credit-cards",
          },
          {
            text: cleanTitle("Best Cashback Credit Cards"),
            href: "/personal-finance/cashback-credit-cards",
          },
          {
            text: cleanTitle("Credit Cards - Types, Benefits..."),
            href: "/personal-finance/credit-card-types-benefits",
          },
          {
            text: cleanTitle("Practical Guide to Getting Out of Debt"),
            href: "/personal-finance/getting-out-of-debt",
          },
          { text: "Show more...", href: "/personal-finance", isEmphasis: true }, // Link to category archive
        ],
      },
      // Column 2: Financial Solutions - Credit Cards (Top 5 + Show more)
      {
        title: "Credit Cards",
        items: [
          {
            text: cleanTitle("Chase Sapphire Reserve®"),
            href: "/financial-solutions/chase-sapphire-reserve",
          },
          {
            text: cleanTitle("Chase Freedom Flex℠"),
            href: "/financial-solutions/chase-freedom-flex",
          },
          {
            text: cleanTitle("Citi Custom Cash® Card"),
            href: "/financial-solutions/citi-custom-cash-card",
          },
          {
            text: cleanTitle("Wells Fargo Active Cash® Card"),
            href: "/financial-solutions/wells-fargo-active-cash-card",
          },
          {
            text: cleanTitle("SoFi Credit Card"),
            href: "/financial-solutions/sofi-credit-card",
          },
          {
            text: "Show more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 3: Financial Solutions - Loans (Top 5 + Show more)
      {
        title: "Loans",
        items: [
          {
            text: cleanTitle("CIT Bank Home Loans"),
            href: "/financial-solutions/cit-bank-home-loans-benefits",
          },
          {
            text: cleanTitle("Robinhood Gold Card"),
            href: "/financial-solutions/robinhood-gold-card",
          },
          {
            text: cleanTitle("Chime Credit Builder Visa"),
            href: "/financial-solutions/chime-credit-builder-visa-secured-card",
          },
          {
            text: cleanTitle("Step Visa Card"),
            href: "/financial-solutions/step-visa-card",
          },
          {
            text: cleanTitle("Varo Believe Card"),
            href: "/financial-solutions/varo-believe-card",
          },
          {
            text: "Show more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
    ],
    // Featured Posts Section - Remains the same
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: cleanTitle("Best Personal Loans in the US"),
          href: "/personal-finance/best-personal-loans",
          image:
            "https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Practical Guide to Getting Out of Debt"),
          href: "/personal-finance/getting-out-of-debt",
          image:
            "https://media.topfinanzas.com/images/kardtrust/Top_Finance_how_to_get_out_of_debt.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Chase Sapphire Reserve®"),
          href: "/financial-solutions/chase-sapphire-reserve",
          image:
            "https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp",
          category: "Credit Cards",
          categoryHref: "/financial-solutions",
        },
        {
          title: cleanTitle("SoFi Credit Card"),
          href: "/financial-solutions/sofi-credit-card",
          image:
            "https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp",
          category: "Credit Cards",
          categoryHref: "/financial-solutions",
        },
      ],
    },
  },
};
