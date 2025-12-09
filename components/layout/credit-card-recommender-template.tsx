"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useRecommenderPageGuard from "@/hooks/use-recommender-page-guard";

const HERO_TITLE_CLASSES =
  "text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4";
const HERO_PARAGRAPH_CLASSES = "text-base md:text-lg leading-6 text-gray-700";
const BODY_TEXT_CLASSES = "text-base leading-6 text-gray-700";
const SECTION_HEADING_CLASSES =
  "text-xl md:text-2xl font-semibold text-gray-900";
const FAQ_QUESTION_CLASSES = "font-semibold text-lg leading-6";

const FEATURES = ["Personalized Options", "Completely Free", "Expert Advice"];

const FAQ_ITEMS = [
  {
    id: "benefits",
    question: "What are the benefits of a card with no annual fee?",
    answer:
      "A card with no annual fee helps you save on recurring costs while " +
      "enjoying key benefits such as cashback or points for purchases.",
  },
  {
    id: "cashback",
    question: "How does cashback work?",
    answer:
      "You receive a percentage of your purchases as cash that you can use " +
      "to reduce balances or spend as you prefer.",
  },
  {
    id: "travelers",
    question: "What's the best option for travellers?",
    answer:
      "Cards with air miles accumulation or access to VIP lounges are ideal " +
      "for frequent travellers, allowing you to save on flights and enjoy " +
      "exclusive benefits.",
  },
  {
    id: "online",
    question: "Is it safe to use credit cards online?",
    answer:
      "Yes, many cards offer advanced technology such as dynamic CVV and " +
      "instant alerts to protect your transactions.",
  },
];

interface AccentConfig {
  background?: string;
  hover?: string;
  text?: string;
  arrowBackground?: string;
  arrowText?: string;
}

interface PillButtonConfig {
  href: string;
  label: string;
  accent?: AccentConfig;
  className?: string;
}

interface HeroImageConfig {
  href: string;
  src: string;
  alt: string;
  priority?: boolean;
}

export interface CreditCardRecommenderTemplateProps {
  acceptCta: PillButtonConfig;
  additionalOffers?: PillButtonConfig[];
  topRecommendation: PillButtonConfig;
  learnMore: {
    href: string;
    label: string;
  };
  heroImage: HeroImageConfig;
}

function PillButton({ href, label, accent, className }: PillButtonConfig) {
  const {
    background = "bg-primary",
    hover = "hover:bg-primary-dark",
    text = "text-gray-900",
    arrowBackground = "bg-white",
    arrowText = "text-primary",
  } = accent ?? {};

  return (
    <Button
      href={href}
      fullWidth
      className={cn(
        "py-3 text-base font-semibold shadow-md",
        background,
        hover,
        text,
        className,
      )}
    >
      <span className="truncate">{label}</span>
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm",
          arrowBackground,
          arrowText,
        )}
      >
        ➔
      </span>
    </Button>
  );
}

export default function CreditCardRecommenderTemplate({
  acceptCta,
  additionalOffers,
  topRecommendation,
  learnMore,
  heroImage,
}: CreditCardRecommenderTemplateProps) {
  useRecommenderPageGuard();
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    setOpenFaq((current) => (current === id ? null : id));
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <article className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className={HERO_TITLE_CLASSES}>
              Discover Your Ideal Credit Card
            </h1>

            <div
              id="square01" data-topads data-topads-size="square"
              className="my-6 flex w-full items-center justify-center"
            />

            <p className={cn(HERO_PARAGRAPH_CLASSES, "mb-6 text-gray-800")}>
              Finding the right card is simple. Maximize rewards, organize your
              spending, and enjoy exclusive benefits. Explore and choose the
              ideal card for you!
            </p>

            <div className="space-y-3">
              <PillButton {...acceptCta} />
              {additionalOffers?.map((offer) => (
                <PillButton key={`${offer.href}-${offer.label}`} {...offer} />
              ))}
            </div>

            <h2 className={cn(SECTION_HEADING_CLASSES, "my-6")}>
              Why Choose Our Credit Card Recommender?
            </h2>

            <ul className="mb-6 space-y-3">
              {FEATURES.map((feature) => (
                <li className="flex items-start gap-2" key={feature}>
                  <span
                    className={cn(
                      "flex h-6 w-6 flex-shrink-0 items-center justify-center",
                      "rounded-full bg-primary text-sm font-bold text-gray-900",
                    )}
                  >
                    ✓
                  </span>
                  <span className="text-base font-semibold text-gray-900">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className={cn(BODY_TEXT_CLASSES, "mb-5 text-gray-800")}>
              Our recommendations are designed to connect your financial goals
              with cards that suit your needs. From cashback to travel rewards,
              we give you clear, easy-to-understand options so you can make
              informed decisions.
            </p>

            <p className={cn(BODY_TEXT_CLASSES, "mb-6 text-gray-800")}>
              With our guide, you&apos;ll transform your credit card into a tool
              that simplifies your finances and helps you achieve your goals
              without complications.
            </p>

            <div className="space-y-3">
              <PillButton {...topRecommendation} />
              <Button
                href={learnMore.href}
                variant="secondary"
                showArrow
                fullWidth
                className="bg-primary-light hover:bg-primary text-white"
              >
                {learnMore.label}
              </Button>
            </div>

            <div className="mt-8 rounded border">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === item.id;
                const isLast = index === FAQ_ITEMS.length - 1;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${item.id}`}
                      className={cn(
                        "flex w-full items-center justify-between p-4 text-left",
                        !isLast && "border-b",
                      )}
                    >
                      <span
                        className={cn(
                          FAQ_QUESTION_CLASSES,
                          isOpen ? "text-gray-900" : "text-primary",
                        )}
                      >
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-xl transition-transform",
                          isOpen && "rotate-180",
                          isOpen ? "text-gray-900" : "text-primary",
                        )}
                      >
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-${item.id}`}
                        className="border-t p-4 text-gray-700"
                      >
                        <p className="text-left text-base leading-6 text-gray-700">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className={cn(BODY_TEXT_CLASSES, "mb-8 mt-8 text-gray-800")}>
              Make your credit card an ally in achieving your financial goals.
              From cashback to travel rewards, choose an option that simplifies
              your life and maximizes your benefits. Explore our recommendations
              and find the card that best suits you.
            </p>

            <div className="my-8">
              <Link
                href={heroImage.href}
                className="block text-left sm:text-left"
              >
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={900}
                  height={507}
                  priority={heroImage.priority}
                  className="mx-auto h-auto w-full rounded-xl md:w-8/12"
                  sizes="(max-width: 767px) 100vw, 512px"
                />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <CompactFooter />
    </main>
  );
}
