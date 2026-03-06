"use client";

/**
 * Vertical banner ad slot for gaming pages.
 * Renders a tall, narrow ad unit matching the MeusBeneficios benchmark format.
 * Wraps a data-topads slot in a labeled container with "Advertising" text buffers.
 */
export default function GamingVerticalBannerAd({
  id,
  themeColor,
}: {
  id?: string;
  themeColor?: string;
}) {
  return (
    <aside
      className="my-6 mx-auto max-w-[160px] w-full"
      aria-label="Advertisement"
    >
      <p className="text-center text-xs text-gray-400 mb-1">Advertising</p>
      <div
        id={id}
        data-topads
        data-topads-size="vertical"
        className="flex items-center justify-center w-full min-h-[600px] rounded-lg border border-gray-100"
        style={themeColor ? { borderColor: `${themeColor}20` } : undefined}
      />
      <p className="text-center text-xs text-gray-400 mt-1">Advertising</p>
    </aside>
  );
}
