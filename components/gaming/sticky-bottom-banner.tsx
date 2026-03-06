"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export interface StickyBottomBannerProps {
  /** Small pill badge above headline */
  badge?: string;
  /** Bold headline (2 lines max) */
  headline: string;
  /** 2-3 sentence value proposition */
  body: string;
  /** CTA button label */
  ctaLabel: string;
  /** CTA destination URL */
  ctaHref: string;
  /** Trust signal line below button */
  disclaimer?: string;
  /** Theme color for badge, button, and accents */
  themeColor: string;
  /** Darker shade for button hover */
  themeColorDark?: string;
}

export default function StickyBottomBanner({
  badge,
  headline,
  body,
  ctaLabel,
  ctaHref,
  disclaimer,
  themeColor,
  themeColorDark,
}: StickyBottomBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleDismiss() {
    setVisible(false);
    // Wait for the slide-down animation before unmounting
    setTimeout(() => setDismissed(true), 300);
  }

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      aria-live="polite"
    >
      <div
        className="pointer-events-auto relative rounded-t-2xl shadow-2xl px-5 pt-4 pb-6 w-full max-w-lg transition-transform duration-300 ease-out"
        style={{
          backgroundColor: themeColor,
          transform: visible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        {/* Dismiss button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-3 right-4 text-white/60 hover:text-white text-lg leading-none transition-colors"
          aria-label="Dismiss banner"
        >
          ✕
        </button>

        {/* Badge */}
        {badge && (
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
            {badge}
          </span>
        )}

        {/* Headline */}
        <h3 className="text-xl font-bold text-white mt-2 leading-snug line-clamp-2">
          {headline}
        </h3>

        {/* Body */}
        <p className="text-sm text-white/80 mt-2 leading-relaxed">{body}</p>

        {/* CTA Button */}
        <Link
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 rounded-xl font-bold text-base text-center mt-4 transition-opacity bg-white hover:opacity-90"
          style={{ color: themeColor }}
        >
          {ctaLabel}
        </Link>

        {/* Disclaimer */}
        {disclaimer && (
          <p className="text-center text-xs text-white/60 mt-3">{disclaimer}</p>
        )}
      </div>
    </div>
  );
}
