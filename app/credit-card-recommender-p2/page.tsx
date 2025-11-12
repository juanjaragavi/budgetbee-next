"use client";

import { Suspense } from "react";
import CreditCardRecommenderTemplate, {
  type CreditCardRecommenderTemplateProps,
} from "@/components/layout/credit-card-recommender-template";

const PAGE_CONFIG: CreditCardRecommenderTemplateProps = {
  acceptCta: {
    href: "/financial-solutions/sofi-credit-card",
    label: "Accept Recommendation",
  },
  additionalOffers: [
    {
      href: "/financial-solutions/sofi-credit-card",
      label: "SoFi Credit Card",
      accent: {
        background: "bg-[#329192]",
        hover: "hover:bg-[#297a7b]",
        text: "text-white",
        arrowBackground: "bg-white",
        arrowText: "text-[#329192]",
      },
    },
    {
      href: "/financial-solutions/varo-believe-card",
      label: "Varo Believe Card",
      accent: {
        background: "bg-[#8c58d0]",
        hover: "hover:bg-[#7446b8]",
        text: "text-white",
        arrowBackground: "bg-white",
        arrowText: "text-[#8c58d0]",
      },
    },
    {
      href: "/financial-solutions/chime-credit-builder-visa-secured-card",
      label: "Chime Credit Builder Card",
      accent: {
        background: "bg-[#1CC461]",
        hover: "hover:bg-[#17a84f]",
        text: "text-white",
        arrowBackground: "bg-white",
        arrowText: "text-[#1CC461]",
      },
    },
  ],
  topRecommendation: {
    href: "/financial-solutions/sofi-credit-card",
    label: "Our Top Recommendation",
  },
  learnMore: {
    href: "/financial-solutions/sofi-credit-card-requirements",
    label: "Learn How to Apply for Credit Cards",
  },
  heroImage: {
    href: "/financial-solutions/varo-believe-card",
    src: "https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp",
    alt: "Varo Believe Card",
    priority: true,
  },
};

export default function CreditCardRecommenderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreditCardRecommenderTemplate {...PAGE_CONFIG} />
    </Suspense>
  );
}
