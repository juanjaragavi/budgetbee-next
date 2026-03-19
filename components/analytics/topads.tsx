"use client";

import Script from "next/script";
import browserLogger from "@/lib/browser-logger";

const TOPADS_EXCLUDED_PATHS = [
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/about-us",
  "/quiz",
  "/quiz-2",
  "/quiz-results",
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
            refresh: {
              status: 'inactive',
              anchor: 'inactive',
            },
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
                status: "inactive",
                logoUrl: "https://media.topfinanzas.com/images/budgetbee/logo.png",
                websiteName: "BudgetBee US",
                cooldown: "12",
                exclude: [
                  "/gaming/robux-promise-p1",
                  "/credit-card-recommender-p2",
                  "/credit-card-recommender-p3",
                  "/gaming/fortnite-reward-p1",
                  "/gaming/fortnite-reward-p2",
                  "/gaming/fortnite-reward-p3",
                  "/gaming/fortnite-reward-p4",
                  "/gaming/fortnite-reward-p5",
                  "/gaming/fortnite-reward-p6",
                  "/gaming/minecraft-reward-p1",
                  "/gaming/minecraft-reward-p2",
                  "/gaming/minecraft-reward-p3",
                  "/gaming/minecraft-reward-p4",
                  "/gaming/minecraft-reward-p5",
                  "/gaming/minecraft-reward-p6",
                  "/gaming/minecraft-reward-p7",
                  "/gaming/robux-reward-p1",
                  "/gaming/robux-reward-p2",
                  "/gaming/robux-reward-p3",
                  "/gaming/robux-reward-p4",
                  "/gaming/robux-reward-p5",
                  "/gaming/robux-reward-p6",
                  "/gaming/robux-reward-p7",
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
