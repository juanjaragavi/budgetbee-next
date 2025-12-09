// Central configuration for AdZep activation and ad container detection
// This module is imported by activation and overlay utilities.

export interface AdZepConfig {
  // CSS selectors that indicate ad unit containers are present on the page
  containerSelectors: string[];
  // Path prefixes that usually represent article/content pages with ads
  articlePathPrefixes: string[];
  // Path prefixes where ads should NEVER be shown (quiz pages, registration flows, etc.)
  excludedPaths: string[];
  // Maximum time to wait for containers on initial load (ms)
  initialContainerWaitMs: number;
  // Maximum time to wait for containers on SPA navigations (ms)
  navigationContainerWaitMs: number;
  // Activation default timeout for waiting AdZepActivateAds to exist (ms)
  defaultActivationTimeoutMs: number;
  // Retry attempts and delay for waiting AdZepActivateAds to exist
  defaultRetryAttempts: number;
  defaultRetryDelayMs: number;
  // Post-activation verification retries
  verifyRetries: number;
  verifyDelayMs: number;
  // Overlay grace period if no ad units exist (ms)
  overlayGraceMs: number;
}
