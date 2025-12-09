import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/utils/seo";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = generatePageMetadata({
  title:
    "Blue Cash Preferred® Card from American Express: Maximize Your Cash Back Rewards",
  description:
    "Discover the Blue Cash Preferred® Card from American Express offering 6% cash back at U.S. supermarkets, 6% on streaming, 3% at gas stations, and a $250 welcome bonus. Learn about benefits, rewards, and how to apply.",
  path: "financial-solutions/blue-cash-preferred-card-from-american-express",
  keywords:
    "Blue Cash Preferred, American Express cash back, Amex Blue Cash, supermarket cash back, streaming rewards, gas station rewards, grocery cash back, best cash back cards, Amex rewards card, US credit cards",
  image:
    "https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp",
});

export default function BlueCashPreferredPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <ProductSchema
        name="Blue Cash Preferred® Card from American Express"
        description="Earn 6% cash back at U.S. supermarkets (up to $6,000/year), 6% on select U.S. streaming, 3% at gas stations and on transit. Plus, get a $250 statement credit after spending $3,000 in first 6 months."
        image="https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp"
        brand="American Express"
        url="https://budgetbeepro.com/financial-solutions/blue-cash-preferred-card-from-american-express"
        category="FinancialProduct"
        features={[
          "6% cash back at U.S. supermarkets (up to $6,000/year)",
          "6% cash back on select U.S. streaming subscriptions",
          "3% cash back at U.S. gas stations and on transit",
          "$250 welcome bonus after $3,000 spend in 6 months",
          "$0 intro annual fee for first year, then $95",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://budgetbeepro.com" },
          {
            name: "Financial Solutions",
            url: "https://budgetbeepro.com/financial-solutions",
          },
          {
            name: "Blue Cash Preferred Card",
            url: "https://budgetbeepro.com/financial-solutions/blue-cash-preferred-card-from-american-express",
          },
        ]}
      />
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Blue Cash Preferred® Card from American Express: Earn More on
              Everyday Spending
            </h1>
            <div
              id="square02" data-topads data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Earn 6% cash back at U.S. supermarkets, 6% on select streaming
                services, and 3% at gas stations and transit. Get a $250
                statement credit after spending $3,000 in 6 months. $0 intro
                annual fee for year one, then $95.
              </p>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">6% at Supermarkets:</span>{" "}
                    Up to $6,000/year (then 1%). Covers major chains: Kroger,
                    Safeway, Whole Foods, Trader Joe's. Excludes Walmart,
                    Target, Costco, Sam's Club.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">6% on Streaming:</span>{" "}
                    Netflix, Hulu, Disney+, Spotify, Apple Music, and other
                    eligible services.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">3% at Gas & Transit:</span>{" "}
                    Gas stations, parking, tolls, rideshare, public
                    transportation.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">$250 Welcome Bonus:</span>{" "}
                    After $3,000 spend in 6 months. $0 intro annual fee year
                    one, then $95.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/blue-cash-preferred-card-from-american-express-requirements">
                  <Button className="bg-[#180053] hover:bg-[#2a0080] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp"
                  alt="Blue Cash Preferred Card from American Express"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Blue Cash Preferred delivers exceptional value through
                  category-focused rewards targeting major household expenses.
                  Unlike flat-rate cards, elevated rates on groceries (6%),
                  streaming (6%), and transit (3%) provide significantly higher
                  earnings for most families compared to 1.5-2% alternatives.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Category Breakdown
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  <strong>Supermarkets (6%):</strong> The average household
                  spends ~$5,259 annually on groceries. At 6% cash back, a
                  family spending $3,000/year earns $180. The $6,000 annual cap
                  accommodates most households. Covers Kroger, Safeway, Whole
                  Foods, Trader Joe's—but not Walmart, Target, or warehouse
                  clubs.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  <strong>Streaming (6%):</strong> With average households
                  subscribing to 4-5 streaming services (~$50-$100/month), the
                  6% cash back provides real value. Covers Netflix, Disney+,
                  Hulu, Spotify, Apple Music, and other digital subscriptions.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  <strong>Gas & Transit (3%):</strong> Drivers spend
                  $2,000-$3,000 annually on gas (~$60-$90 cash back). Transit
                  category covers parking, tolls, rideshare, public
                  transportation—valuable for both drivers and city residents.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-rewards-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/budgetbee/budgetbee-credit-cards-banner-ad.webp"
                      alt="Learn About Credit Card Rewards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Related Credit Card Resources:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-primary-dark">
                    <li>
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-primary-dark transition-colors"
                      >
                        Complete Guide to Cash Back Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-primary-dark transition-colors"
                      >
                        Best Rewards Credit Cards for 2025
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-primary-dark transition-colors"
                      >
                        Understanding Credit Card Types and Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-primary-dark transition-colors"
                      >
                        Understanding Credit Card Interest Rates and APR
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Annual Fee Break-Even Analysis
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At $95 annual fee (after intro year), the card needs only
                  $1,583/year in supermarket spending at 6% to break even.
                  Example: $250/month at supermarkets ($3,000/year = $180) +
                  $50/month streaming ($600/year = $36) + $150/month gas
                  ($1,800/year = $54) = $270 in annual rewards, exceeding the
                  $95 fee by $175. The $250 welcome bonus further improves
                  first-year value. For households spending less than
                  $1,500/year at supermarkets, the no-annual-fee Blue Cash
                  Everyday® Card may be better.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Benefits
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">1% Cash Back:</span> All
                      other purchases earn 1% unlimited.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Redemption:
                      </span>{" "}
                      Statement credit, direct deposit, check, gift cards, or
                      Amazon Shop with Points. No minimums or blackout dates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Purchase Protection & Extended Warranty:
                      </span>{" "}
                      Up to $1,000 per occurrence ($50,000/year) against
                      accidental damage/theft for 90 days. Extended warranty up
                      to 1 additional year.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Car Rental Insurance:
                      </span>{" "}
                      Secondary coverage for rental vehicles when charged to
                      card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Amex Experiences:</span>{" "}
                      Presale access to concerts, sporting events, dining, and
                      cultural events.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Global Assist Hotline:
                      </span>{" "}
                      24/7 travel assistance, medical/legal referrals, emergency
                      services when traveling 100+ miles from home.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security & Fraud Protection
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">$0 Fraud Liability:</span>{" "}
                      Not responsible for unauthorized charges. 24/7 fraud
                      monitoring.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Real-Time Alerts:</span>{" "}
                      Instant notifications via app, email, or SMS for every
                      purchase.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Card Lock Feature:</span>{" "}
                      Instantly lock your card via app if lost, then unlock with
                      one tap when found.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        EMV Chip & Contactless:
                      </span>{" "}
                      Secure in-person transactions and tap-to-pay capability.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Best For
                </h2>

                <div className="space-y-4 my-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Households with $1,500+ annual supermarket spending:
                      </span>{" "}
                      Earn at least $90 in rewards, offsetting most of the $95
                      annual fee.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Multiple streaming subscribers:
                      </span>{" "}
                      Offset monthly entertainment costs with 6% cash back.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Commuters and frequent drivers:
                      </span>{" "}
                      Earn 3% on gas and transit costs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Amex benefit seekers:
                      </span>{" "}
                      Value purchase protection, extended warranty, travel
                      assistance, and event presales.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Terms and Considerations
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">
                      Representative APR Example:
                    </span>{" "}
                    19.24%-29.99% variable APR on purchases and balance
                    transfers. Your APR will be based on your creditworthiness
                    and will be determined at the time of account opening. APR
                    will vary with the market based on the Prime Rate.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Annual Fee:</span> $0
                    introductory annual fee for the first year, then $95. The
                    annual fee value depends on your spending patterns—calculate
                    your expected cash back earnings to ensure the card delivers
                    positive net value for your household.
                  </p>
                </div>

                <div className="bg-primary-accent border-l-4 border-primary p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Important Warning:</span>{" "}
                    Missing payments or carrying balances can result in
                    significant interest charges that may outweigh cash back
                    rewards. To maximize the value of this card, pay your
                    balance in full each month. Cash back rewards are most
                    valuable when you avoid interest charges by paying on time
                    and in full.
                  </p>
                </div>

                <p className="text-xs text-gray-600 italic mb-6 text-left">
                  <span className="font-semibold">Disclaimer:</span> This
                  content is for informational purposes only and does not
                  constitute financial advice. Credit card terms, rates, fees,
                  and rewards are subject to change and may vary based on your
                  creditworthiness and application details. Always review the
                  Schumer Box, terms and conditions, and pricing information
                  provided by American Express before applying. We recommend
                  consulting with a qualified financial advisor to determine if
                  this card aligns with your personal financial situation and
                  goals.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#180053] hover:bg-[#2a0080] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Your Eligibility
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
