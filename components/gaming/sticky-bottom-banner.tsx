"use client";

import { useState } from "react";
import Link from "next/link";

interface StickyBottomBannerProps {
  /** Banner text */
  text: string;
  /** CTA button label */
  ctaLabel: string;
  /** CTA destination URL */
  ctaHref: string;
  /** Theme color for the banner background */
  themeColor: string;
  /** Whether to open in new tab */
  external?: boolean;
}

export default function StickyBottomBanner({
  text,
  ctaLabel,
  ctaHref,
  themeColor,
  external = true,
}: StickyBottomBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
      style={{ backgroundColor: themeColor }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-white font-semibold text-sm md:text-base flex-1 truncate">
          {text}
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href={ctaHref}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="bg-white text-gray-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-white/70 hover:text-white p-1 transition-colors"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
