import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import GamingMethodCard, {
  type MethodCardProps,
} from "@/components/gaming/gaming-method-card";
import StickyBottomBanner from "@/components/gaming/sticky-bottom-banner";
import type { RelatedArticle } from "@/components/layout/gaming-promise-template";

export interface GamingRewardTemplateProps {
  /** Theme color hex */
  themeColor: string;
  /** Darker shade for gradients */
  themeColorDark: string;
  /** Badge label */
  badge: string;
  /** H1 title */
  title: string;
  /** Subtitle text */
  subtitle: string;
  /** Hero image */
  heroImage?: { src: string; alt: string };
  /** Intro paragraphs before the method cards */
  introParagraphs: string[];
  /** Trust signal items shown below intro */
  trustSignals?: string[];
  /** Method/app recommendation cards */
  methods: MethodCardProps[];
  /** Closing content paragraphs after methods */
  closingParagraphs?: string[];
  /** Related financial articles */
  relatedArticles: RelatedArticle[];
  /** Sticky bottom banner config */
  stickyBanner: {
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export default function GamingRewardTemplate({
  themeColor,
  themeColorDark,
  badge,
  title,
  subtitle,
  heroImage,
  introParagraphs,
  trustSignals,
  methods,
  closingParagraphs,
  relatedArticles,
  stickyBanner,
}: GamingRewardTemplateProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white pb-16">
      <Header />

      {/* Hero */}
      <section
        className="relative text-white py-12 md:py-16"
        style={{
          background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColorDark} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              {badge}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg opacity-90">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Ad Slot 1 — Below hero (with text buffer) */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-gray-400 mt-6 mb-2">
            Advertising
          </p>
          <div
            id="square01"
            data-topads
            data-topads-size="square"
            className="items-center justify-center flex w-full mb-2"
          />
          <p className="text-center text-xs text-gray-400 mb-6">Advertising</p>
        </div>
      </div>

      {/* Main content */}
      <article className="py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero image */}
            {heroImage && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={900}
                  height={507}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {/* Intro */}
            {introParagraphs.map((p, i) => (
              <p
                key={`intro-${i}`}
                className="text-gray-700 mb-4 leading-relaxed"
              >
                {p}
              </p>
            ))}

            {/* Trust signals */}
            {trustSignals && trustSignals.length > 0 && (
              <div
                className="my-6 p-6 rounded-xl border-2"
                style={{
                  borderColor: themeColor,
                  backgroundColor: `${themeColor}08`,
                }}
              >
                <ul className="space-y-2">
                  {trustSignals.map((signal, i) => (
                    <li key={`ts-${i}`} className="flex items-start gap-2">
                      <span
                        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                        style={{ backgroundColor: themeColor }}
                      >
                        ✓
                      </span>
                      <span className="text-gray-800 font-medium text-sm">
                        {signal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* MOB Ad Pair — horizontal on mobile (benchmark pattern) */}
            <div className="mb-8">
              <p className="text-center text-xs text-gray-400 mb-2">
                Advertising
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div
                  data-topads
                  data-topads-size="mob"
                  className="items-center justify-center flex w-full"
                />
                <div
                  data-topads
                  data-topads-size="mob"
                  className="items-center justify-center flex w-full"
                />
              </div>
              <p className="text-center text-xs text-gray-400 mt-2">
                Advertising
              </p>
            </div>

            {/* Method cards — all rendered sequentially, ad placed BETWEEN content sections, never between CTAs */}
            <div className="space-y-6 mb-8">
              {methods.map((method, i) => (
                <div key={`method-wrapper-${i}`}>
                  <GamingMethodCard {...method} />

                  {/* Ad Slot 2 — After first half of methods (between content, NOT between CTAs) */}
                  {i === Math.ceil(methods.length / 2) - 1 && (
                    <>
                      <p className="text-center text-xs text-gray-400 mt-6 mb-2">
                        Advertising
                      </p>
                      <div
                        id="square02"
                        data-topads
                        data-topads-size="square"
                        className="items-center justify-center flex w-full mb-2"
                      />
                      <p className="text-center text-xs text-gray-400 mb-4">
                        Advertising
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Third MOB ad unit */}
            <div className="mb-8">
              <p className="text-center text-xs text-gray-400 mb-2">
                Advertising
              </p>
              <div
                data-topads
                data-topads-size="mob"
                className="items-center justify-center flex w-full"
              />
              <p className="text-center text-xs text-gray-400 mt-2">
                Advertising
              </p>
            </div>

            {/* Closing paragraphs */}
            {closingParagraphs &&
              closingParagraphs.map((p, i) => (
                <p
                  key={`close-${i}`}
                  className="text-gray-700 mb-4 leading-relaxed"
                >
                  {p}
                </p>
              ))}

            {/* Ad Slot 3 — Before related content (with text buffer) */}
            <p className="text-center text-xs text-gray-400 mt-6 mb-2">
              Advertising
            </p>
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full mb-2"
            />
            <p className="text-center text-xs text-gray-400 mb-6">
              Advertising
            </p>

            {/* Related Financial Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  You May Also Be Interested In
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="block p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <CompactFooter />

      {/* Sticky bottom banner */}
      <StickyBottomBanner
        text={stickyBanner.text}
        ctaLabel={stickyBanner.ctaLabel}
        ctaHref={stickyBanner.ctaHref}
        themeColor={themeColor}
      />
    </main>
  );
}
