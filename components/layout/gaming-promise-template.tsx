import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import GamingFaqAccordion, {
  type FaqItem,
} from "@/components/gaming/gaming-faq-accordion";
import StickyBottomBanner from "@/components/gaming/sticky-bottom-banner";

export interface ContentSection {
  heading: string;
  /** "h2" | "h3" — defaults to "h2" */
  level?: "h2" | "h3";
  paragraphs: string[];
  bullets?: string[];
  /** Optional image for this section */
  image?: { src: string; alt: string };
}

export interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

export interface GamingPromiseTemplateProps {
  /** Hero gradient start color */
  themeColor: string;
  /** Hero gradient end color */
  themeColorDark: string;
  /** Badge label (e.g. "ROBLOX REWARDS") */
  badge: string;
  /** Page title / H1 */
  title: string;
  /** Hero subtitle */
  subtitle: string;
  /** Hero image */
  heroImage?: { src: string; alt: string };
  /** Main content sections */
  sections: ContentSection[];
  /** FAQ items */
  faqItems: FaqItem[];
  /** Primary CTA (link to reward page) */
  cta: { label: string; href: string };
  /** Optional extra CTAs for 3+1 pattern on promise pages */
  extraCtas?: { label: string; href: string }[];
  /** Related financial articles */
  relatedArticles: RelatedArticle[];
  /** SEO content closing paragraph */
  closingParagraph?: string;
  /** Sticky bottom banner config */
  stickyBanner?: {
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export default function GamingPromiseTemplate({
  themeColor,
  themeColorDark,
  badge,
  title,
  subtitle,
  heroImage,
  sections,
  faqItems,
  cta,
  extraCtas,
  relatedArticles,
  closingParagraph,
  stickyBanner,
}: GamingPromiseTemplateProps) {
  return (
    <main
      className={`flex min-h-screen flex-col bg-white${stickyBanner ? " pb-16" : ""}`}
    >
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

      {/* Ad Slot 1 — Below hero (with text buffer from hero/CTA) */}
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

            {/* CTA buttons — top (3 CTAs for benchmark pattern) */}
            <div className="mb-8 space-y-3">
              <Link
                href={cta.href}
                className="block w-full py-4 px-6 rounded-xl text-white font-bold text-lg text-center transition-all duration-200 hover:opacity-90 shadow-lg"
                style={{ backgroundColor: themeColor }}
              >
                {cta.label} →
              </Link>
              {extraCtas?.map((ec, i) => (
                <Link
                  key={`extra-cta-${i}`}
                  href={ec.href}
                  className="block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 hover:opacity-90 shadow-md border-2"
                  style={{
                    color: themeColor,
                    borderColor: themeColor,
                    backgroundColor: `${themeColor}08`,
                  }}
                >
                  {ec.label} →
                </Link>
              ))}
            </div>

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

            {/* Content sections */}
            {sections.map((section, i) => {
              const HeadingTag = section.level === "h3" ? "h3" : "h2";
              const headingClass =
                section.level === "h3"
                  ? "text-xl font-semibold text-gray-800 mb-3"
                  : "text-2xl font-bold text-gray-800 mb-4";

              return (
                <section key={`section-${i}`} className="mb-8">
                  <HeadingTag className={headingClass}>
                    {section.heading}
                  </HeadingTag>

                  {section.paragraphs.map((p, j) => (
                    <p
                      key={`p-${i}-${j}`}
                      className="text-gray-700 mb-4 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {section.bullets.map((bullet, k) => (
                        <li
                          key={`b-${i}-${k}`}
                          className="flex items-start gap-2"
                        >
                          <span
                            className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                            style={{ backgroundColor: themeColor }}
                          >
                            ✓
                          </span>
                          <span className="text-gray-700 text-sm">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.image && (
                    <div className="my-6 rounded-xl overflow-hidden">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {/* Insert mid-content ad after the second section */}
                  {i === 1 && (
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

                  {/* Insert third MOB ad pair after section 3 */}
                  {i === 2 && (
                    <div className="my-6">
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
                  )}
                </section>
              );
            })}

            {/* FAQ Accordion */}
            {faqItems.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Frequently Asked Questions
                </h2>
                <GamingFaqAccordion
                  items={faqItems}
                  themeColor={themeColor}
                  defaultOpenId={faqItems[0]?.id}
                />
              </section>
            )}

            {/* Closing paragraph */}
            {closingParagraph && (
              <p className="text-gray-700 mb-8 leading-relaxed">
                {closingParagraph}
              </p>
            )}

            {/* CTA button — bottom (large) */}
            <div className="mb-8">
              <Link
                href={cta.href}
                className="block w-full py-5 px-6 rounded-xl text-white font-bold text-xl text-center transition-all duration-200 hover:opacity-90 shadow-lg"
                style={{ backgroundColor: themeColor }}
              >
                {cta.label} →
              </Link>
            </div>

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
      {stickyBanner && (
        <StickyBottomBanner
          text={stickyBanner.text}
          ctaLabel={stickyBanner.ctaLabel}
          ctaHref={stickyBanner.ctaHref}
          themeColor={themeColor}
        />
      )}
    </main>
  );
}
