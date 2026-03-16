"use client";

import Script from "next/script";
import browserLogger from "@/lib/browser-logger";
import { DELAYED_GAMING_AD_PATHS } from "@/lib/gaming-quiz-config";

const TOPADS_EXCLUDED_PATHS = [
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/about-us",
  "/quiz",
  "/quiz-2",
  "/quiz-results",
  ...DELAYED_GAMING_AD_PATHS,
];

export default function TopAds() {
  return (
    <Script
      id="topads-config-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.topAds = window.topAds || {};

          topAds.config = {
            domain: "BUDBEE_US",
            networkCode: "23062212598",
            lazyLoad: "soft",
            pageSetting: {
              exclude: ${JSON.stringify(TOPADS_EXCLUDED_PATHS)},
            },
            formats: {
              interstitial: {
                status: "active",
                exclude: [
                  "/credit-card-recommender-p3",
                ],
              },
              offerwall: {
                status: "active",
                logoUrl: "https://media.topfinanzas.com/images/budgetbee/logo.png",
                websiteName: "BudgetBee US",
                cooldown: "12",
                exclude: [
                  "/gaming/robux-promise-p2",
                  "/credit-card-recommender-p2",
                  "/credit-card-recommender-p3",
                ],
              },
            },
          };

          (function () {
            var w = window.top, d = w.document, h = d.head || d.getElementsByTagName("head")[0];
            var s = d.createElement("script");
            s.src = "https://ads.gamadx.com/topAds.min.js";
            s.type = "text/javascript";
            s.defer = true;
            s.async = true;
            s.setAttribute("data-cfasync", "false");
            h.appendChild(s);
          })();
        `,
      }}
      onLoad={() => {
        browserLogger.info("[TopAds] Configuration and loader injected");
      }}
      onError={(error) => {
        browserLogger.warn("[TopAds] Failed to inject configuration", error);
      }}
    />
  );
}
