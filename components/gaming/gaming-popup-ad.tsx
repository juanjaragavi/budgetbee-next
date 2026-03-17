"use client";

import { useState, useCallback } from "react";

interface GamingPopupAdProps {
  /** Unique id for the TopAds slot — required by TopAds; defaults to "popup-square01" */
  id?: string;
  /** Theme color for the close button accent */
  themeColor?: string;
  /** Optional trigger text — if provided, renders a text link that opens the popup */
  triggerText?: string;
}

/**
 * Ad overlay popup triggered on user interaction (click).
 * Does NOT navigate away from the page — opens an overlay with an ad slot.
 * Matches the MeusBeneficios pattern of click-triggered ad popups.
 */
export default function GamingPopupAd({
  id = "popup-square01",
  themeColor = "#6b7280",
  triggerText,
}: GamingPopupAdProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {triggerText && (
        <button
          type="button"
          onClick={open}
          className="text-sm font-medium underline transition-colors hover:opacity-80"
          style={{ color: themeColor }}
        >
          {triggerText}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Sponsored content"
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close advertisement"
            >
              ✕
            </button>
            <p className="text-center text-xs text-gray-400 mb-3">
              Sponsored Content
            </p>
            <div
              id={id}
              data-topads
              data-topads-size="square"
              className="flex items-center justify-center w-full min-h-[250px]"
            />
            <p className="text-center text-xs text-gray-400 mt-3">
              Advertising
            </p>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Imperative API: call this to programmatically open a popup ad overlay.
 * Useful for FAQ accordion interactions or custom triggers.
 */
export function useGamingPopupAd() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}
