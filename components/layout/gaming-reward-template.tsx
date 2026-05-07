import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import GamingMethodCard, {
  type MethodCardProps,
} from "@/components/gaming/gaming-method-card";
import GamingCtaBanner, {
  type GamingCtaBannerProps,
} from "@/components/gaming/gaming-cta-banner";
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
    badge?: string;
    headline: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    disclaimer?: string;
  };
  /** Inline CTA banner config (image-led card between method groups) */
  ctaBanner?: GamingCtaBannerProps;
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
  ctaBanner,
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Ad Slot 1 — Before hero image */}
            <div
              id="av_content_1"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {subtitle}
            </p>

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

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Below are the top methods and apps recommended by experienced
              players for earning rewards.
            </p>

            {/* Method cards — all rendered sequentially, ad placed BETWEEN content sections, never between CTAs */}
            <div className="space-y-6 mb-8">
              {methods.map((method, i) => (
                <div key={`method-wrapper-${i}`}>
                  <GamingMethodCard {...method} />

                  {/* Ad Slot 2 — After first half of methods */}
                  {i === Math.ceil(methods.length / 2) - 1 && (
                    <>
                      <div
                        id="av_content_2"
                        className="items-center justify-center flex w-full my-8"
                      ></div>

                      {/* Text separator for ad compliance */}
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Looking for the safest way to earn rewards? Check out
                        this verified recommendation from our team.
                      </p>

                      {/* Inline CTA Banner */}
                      {ctaBanner && <GamingCtaBanner {...ctaBanner} />}
                    </>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Keep reading for additional tips on getting the most value from
              these reward programs.
            </p>

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

            {/* Ad Slot 4 — Before related content */}
            <div
              id="av_content_2"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Check out these popular guides from our financial experts for more
              ways to save and earn.
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

      {/* Sticky bottom banner - temporarily hidden */}
      {/* <StickyBottomBanner
        badge={stickyBanner.badge}
        headline={stickyBanner.headline}
        body={stickyBanner.body}
        ctaLabel={stickyBanner.ctaLabel}
        ctaHref={stickyBanner.ctaHref}
        disclaimer={stickyBanner.disclaimer}
        themeColor={themeColor}
        themeColorDark={themeColorDark}
      /> */}
    </main>
  );
}
