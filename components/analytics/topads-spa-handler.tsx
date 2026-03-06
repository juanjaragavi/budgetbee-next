"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import browserLogger from "@/lib/browser-logger";

type TopAdsConfig = Record<string, unknown>;

/** Paths where TopAds should NOT run — must mirror topads.tsx pageSetting.exclude */
const EXCLUDED_PATHS = [
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/about-us",
  "/quiz",
  "/quiz-2",
  "/quiz-results",
  "/gaming/fortnite-quiz-01",
  "/gaming/fortnite-quiz-02",
  "/gaming/minecraft-quiz-01",
  "/gaming/minecraft-quiz-02",
  "/gaming/robux-quiz-01",
  "/gaming/robux-quiz-02",
];

function isExcludedPath(path: string): boolean {
  return EXCLUDED_PATHS.some(
    (excluded) => path === excluded || path.startsWith(excluded + "/"),
  );
}

/** Chat pages are not excluded in TopAds config but need special handling
 *  since they transition to promise/reward pages via SPA navigation */
function isGamingEntryPage(path: string): boolean {
  return (
    isExcludedPath(path) ||
    /^\/gaming\/.*-(chat|quiz)-\d+/.test(path)
  );
}

const TOPADS_SCRIPT_URL = "https://topads.topnetworks.co/topAds.min.js";

/**
 * Re-inject the TopAds external script to force a clean re-initialization.
 * This mimics what happens on a hard page reload—TopAds starts fresh,
 * re-reads the config, and processes the current DOM.
 */
function reinjectTopAdsScript(): void {
  try {
    // Remove any existing TopAds script tags
    const existingScripts = document.querySelectorAll(
      `script[src="${TOPADS_SCRIPT_URL}"]`,
    );
    existingScripts.forEach((s) => s.remove());

    // Re-inject a fresh script tag
    const script = document.createElement("script");
    script.src = TOPADS_SCRIPT_URL;
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    (document.head || document.getElementsByTagName("head")[0]).appendChild(
      script,
    );
    browserLogger.info("[TopAds] Re-injected external script for fresh init");
  } catch (error) {
    browserLogger.error("[TopAds] Failed to re-inject script:", error);
  }
}

/**
 * TopAds SPA Navigation Handler
 *
 * Triggers TopAds SPA function on route changes in Next.js.
 * Handles transitions from excluded pages (quizzes/chats) to ad-enabled pages
 * (promise/reward) by re-applying config and polling for DOM containers.
 */
export default function TopAdsSPAHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);
  const hasTriggeredInitial = useRef(false);
  const previousPathname = useRef<string | null>(null);

  // Trigger TopAds on initial page load once the script is available
  useEffect(() => {
    if (hasTriggeredInitial.current) return;

    // If the initial page is excluded, skip activation
    if (isExcludedPath(pathname)) {
      browserLogger.info(
        "[TopAds] Initial page is excluded, skipping activation",
      );
      hasTriggeredInitial.current = true;
      return;
    }

    const tryInitialActivation = () => {
      if (
        typeof window !== "undefined" &&
        window.topAds &&
        typeof window.topAds.spa === "function"
      ) {
        browserLogger.info("[TopAds] Initial page load activation");
        window.topAds.spa();
        hasTriggeredInitial.current = true;
        return true;
      }
      return false;
    };

    // Try immediately
    if (tryInitialActivation()) return;

    // Retry with backoff until script is loaded (up to 5s)
    let attempt = 0;
    const maxAttempts = 10;
    const timer = setInterval(() => {
      attempt++;
      if (tryInitialActivation() || attempt >= maxAttempts) {
        clearInterval(timer);
      }
    }, 500);

    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousPathname.current = pathname;
      return;
    }

    const prevPath = previousPathname.current;
    previousPathname.current = pathname;

    // If navigating TO an excluded page, do nothing
    if (isExcludedPath(pathname)) {
      browserLogger.info("[TopAds] Navigated to excluded path, skipping");
      return;
    }

    const cameFromEntry = prevPath ? isGamingEntryPage(prevPath) : false;

    const triggerTopAdsSPA = () => {
      try {
        if (
          typeof window !== "undefined" &&
          window.topAds &&
          typeof window.topAds.spa === "function"
        ) {
          browserLogger.info("[TopAds] Triggering SPA navigation");
          window.topAds.spa();
        } else {
          browserLogger.warn("[TopAds] topAds.spa() not available yet");
        }
      } catch (error) {
        browserLogger.error("[TopAds] Error triggering SPA:", error);
      }
    };

    browserLogger.info(
      `[TopAds] Route change: ${prevPath} → ${pathname} (cameFromEntry: ${cameFromEntry})`,
    );

    // When transitioning from an excluded/entry path (quiz/chat) to an
    // ad-enabled path (promise/reward), TopAds may have internally skipped
    // initialization. Re-apply config and re-inject the script to force
    // a clean start — this mimics what happens on a hard page reload.
    if (cameFromEntry && typeof window !== "undefined" && window.topAds) {
      browserLogger.info(
        "[TopAds] Transitioning from entry page — re-applying config & re-injecting script",
      );
      // Refresh config to clear any cached exclusion state
      if (window.topAds.config) {
        window.topAds.config = {
          ...window.topAds.config,
          pageSetting: {
            exclude: EXCLUDED_PATHS,
          },
        } as TopAdsConfig;
      }
    }

    // Wait for ad containers to appear in the DOM before triggering.
    // On SPA navigation (e.g. quiz → promise page), the new page's
    // Server Component DOM may not be hydrated for several hundred ms.
    let attempt = 0;
    const maxAttempts = cameFromEntry ? 25 : 15; // Longer wait from entry pages
    const pollInterval = 200;
    const timers: number[] = [];

    const pollForContainers = () => {
      attempt++;
      const containers = document.querySelectorAll("[data-topads]");
      if (containers.length > 0) {
        browserLogger.info(
          `[TopAds] Found ${containers.length} ad container(s) after ${attempt * pollInterval}ms`,
        );

        if (cameFromEntry) {
          // Nuclear option: re-inject the TopAds script so it starts fresh
          // on the new non-excluded page, then call spa() after it loads.
          reinjectTopAdsScript();
          const followUp = window.setTimeout(() => {
            browserLogger.info(
              "[TopAds] Post-reinject SPA trigger for entry→enabled transition",
            );
            triggerTopAdsSPA();
          }, 2000);
          timers.push(followUp);
        } else {
          triggerTopAdsSPA();
        }
        return;
      }
      if (attempt < maxAttempts) {
        const id = window.setTimeout(pollForContainers, pollInterval);
        timers.push(id);
      } else {
        browserLogger.warn(
          "[TopAds] No ad containers found after polling, triggering anyway",
        );
        if (cameFromEntry) {
          reinjectTopAdsScript();
          const followUp = window.setTimeout(triggerTopAdsSPA, 2000);
          timers.push(followUp);
        } else {
          triggerTopAdsSPA();
        }
      }
    };

    const initialId = window.setTimeout(pollForContainers, pollInterval);
    timers.push(initialId);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [pathname, searchParams]);

  return null;
}

// Custom hook for manual TopAds SPA triggering
export function useTopAds() {
  const triggerSPA = () => {
    try {
      if (
        typeof window !== "undefined" &&
        window.topAds &&
        typeof window.topAds.spa === "function"
      ) {
        browserLogger.info("[TopAds] Manual SPA trigger");
        window.topAds.spa();
        return true;
      }
      browserLogger.warn("[TopAds] topAds.spa() not available");
      return false;
    } catch (error) {
      browserLogger.error("[TopAds] Error in manual SPA trigger:", error);
      return false;
    }
  };

  return { triggerSPA };
}

declare global {
  interface Window {
    topAds?: {
      config?: TopAdsConfig;
      spa?: () => void;
    };
  }
}
