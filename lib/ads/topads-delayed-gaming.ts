import browserLogger from "@/lib/browser-logger";

type TopAdsConfig = Record<string, unknown>;
type TopAdsPageSetting = {
  exclude?: string[];
};
type TopAdsFormatConfig = {
  exclude?: string[];
};

const TOPADS_SCRIPT_URL = "https://ads.gamadx.com/topAds.min.js";

function triggerTopAdsWhenReady(maxAttempts = 20, delay = 250): void {
  let attempt = 0;

  const tryTrigger = () => {
    attempt += 1;

    if (
      typeof window !== "undefined" &&
      window.topAds &&
      typeof window.topAds.spa === "function"
    ) {
      browserLogger.info("[TopAds] Triggering TopAds after delayed init");
      window.topAds.spa();
      return;
    }

    if (attempt < maxAttempts) {
      window.setTimeout(tryTrigger, delay);
    } else {
      browserLogger.warn("[TopAds] Delayed init finished without topAds.spa()");
    }
  };

  tryTrigger();
}

function reinjectTopAdsScript(onLoad?: () => void): void {
  try {
    const existingScripts = document.querySelectorAll(
      'script[src*="topAds.min.js"]',
    );
    existingScripts.forEach((script) => script.remove());

    const script = document.createElement("script");
    script.src = TOPADS_SCRIPT_URL;
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    if (onLoad) {
      script.addEventListener("load", onLoad, { once: true });
    }

    (document.head || document.getElementsByTagName("head")[0]).appendChild(
      script,
    );
    browserLogger.info("[TopAds] Re-injected external script for fresh init");
  } catch (error) {
    browserLogger.error("[TopAds] Failed to re-inject script:", error);
  }
}

function removePathFromExclusions(path: string, excludedPaths: readonly string[]): void {
  if (typeof window === "undefined") {
    return;
  }

  window.topAds = window.topAds || {};
  const currentConfig = window.topAds.config ?? {};
  const currentPageSetting = ((
    currentConfig as { pageSetting?: TopAdsPageSetting }
  ).pageSetting ?? {}) as TopAdsPageSetting;
  const currentFormats = (
    (currentConfig as { formats?: Record<string, TopAdsFormatConfig> }).formats ??
    {}
  ) as Record<string, TopAdsFormatConfig>;
  const currentOfferwall = currentFormats.offerwall ?? {};
  const currentExclude = Array.isArray(currentPageSetting.exclude)
    ? currentPageSetting.exclude
    : excludedPaths;
  const currentOfferwallExclude = Array.isArray(currentOfferwall.exclude)
    ? currentOfferwall.exclude
    : [];

  window.topAds.config = {
    ...currentConfig,
    pageSetting: {
      ...currentPageSetting,
      exclude: currentExclude.filter((excludedPath) => excludedPath !== path),
    },
    formats: {
      ...currentFormats,
      offerwall: {
        ...currentOfferwall,
        exclude: currentOfferwallExclude.filter(
          (excludedPath) => excludedPath !== path,
        ),
      },
    },
  } as TopAdsConfig;
}

export function activateDelayedGamingAds(
  path: string,
  excludedPaths: readonly string[],
): void {
  removePathFromExclusions(path, excludedPaths);

  let attempt = 0;
  const maxAttempts = 20;
  const pollInterval = 200;

  const pollForContainers = () => {
    attempt += 1;
    const containers = document.querySelectorAll(
      "[data-topads], [data-topads-quiz]",
    );

    if (containers.length > 0 || attempt >= maxAttempts) {
      reinjectTopAdsScript(() => {
        triggerTopAdsWhenReady();
      });
      return;
    }

    window.setTimeout(pollForContainers, pollInterval);
  };

  pollForContainers();
}

declare global {
  interface Window {
    topAds?: {
      config?: TopAdsConfig;
      spa?: () => void;
    };
  }
}