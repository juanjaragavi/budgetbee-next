"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import browserLogger from "@/lib/browser-logger";

type TopAdsConfig = Record<string, unknown>;

/**
 * TopAds SPA Navigation Handler
 *
 * Triggers TopAds SPA function on route changes in Next.js.
 * Mirrors the uk-topfinanzas-com pattern for reliable ad refreshes.
 */
export default function TopAdsSPAHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);
  const hasTriggeredInitial = useRef(false);

  // Trigger TopAds on initial page load once the script is available
  useEffect(() => {
    if (hasTriggeredInitial.current) return;

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
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

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

    browserLogger.info("[TopAds] Next.js route change detected");

    // Wait for ad containers to appear in the DOM before triggering.
    // On SPA navigation (e.g. quiz → promise page), the new page's
    // Server Component DOM may not be hydrated for several hundred ms.
    let attempt = 0;
    const maxAttempts = 15; // up to ~3s total
    const pollInterval = 200;

    const pollForContainers = () => {
      attempt++;
      const containers = document.querySelectorAll("[data-topads]");
      if (containers.length > 0) {
        browserLogger.info(
          `[TopAds] Found ${containers.length} ad container(s) after ${attempt * pollInterval}ms`,
        );
        triggerTopAdsSPA();
        return;
      }
      if (attempt < maxAttempts) {
        pollTimerId = window.setTimeout(pollForContainers, pollInterval);
      } else {
        // No containers found — still trigger in case TopAds manages its own
        browserLogger.warn(
          "[TopAds] No ad containers found after polling, triggering anyway",
        );
        triggerTopAdsSPA();
      }
    };

    let pollTimerId = window.setTimeout(pollForContainers, pollInterval);

    return () => window.clearTimeout(pollTimerId);
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
