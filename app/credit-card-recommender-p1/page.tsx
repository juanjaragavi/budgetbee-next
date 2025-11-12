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
  topRecommendation: {
    href: "/financial-solutions/varo-believe-card",
    label: "Our Top Recommendation",
  },
  learnMore: {
    href: "/financial-solutions/varo-believe-card-requirements",
    label: "Learn How to Apply for Credit Cards",
  },
  heroImage: {
    href: "/financial-solutions/sofi-credit-card",
    src: "https://media.topfinanzas.com/images/budgetbee/budgetbee-credit-card-user-banner-ad.webp",
    alt: "SoFi Credit Card",
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
