import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata = {
  title:
    "SoFi Credit Card: Unlimited 2% Cash Back with No Annual Fee - BudgetBee",
  description:
    "Discover the SoFi Unlimited 2% Credit Card offering unlimited cash back rewards on all purchases, no annual fees, Mastercard World Elite benefits, and exclusive travel perks. Perfect for building wealth with every purchase.",
  keywords:
    "SoFi credit card, unlimited 2% cash back, no annual fee, Mastercard World Elite, travel rewards, cell phone protection, cash back rewards, SoFi banking, US credit cards, excellent credit",
};

export default function SoFiCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              SoFi Credit Card: Earn Unlimited 2% Cash Back on Every Purchase
            </h1>
            <div
              id="square02" data-topads data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The SoFi Unlimited 2% Credit Card offers unlimited 2% cash back
                on all purchases, no annual fee, 3% on SoFi Travel bookings, and
                Mastercard World Elite benefits ($5 Lyft credits, travel
                concierge, ShopRunner). For members with excellent credit
                seeking straightforward rewards.
              </p>

              <hr className="my-8" />

              <section className="my-8">
                <h2 className="text-lg font-bold text-gray-800 mb-6 text-left">
                  Key Features of the SoFi Unlimited 2% Card
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Unlimited 2% Cash Back:
                      </span>{" "}
                      2 points per dollar on all purchases, no limits or
                      rotating categories. Redeems to 1¢ per point toward SoFi
                      accounts, investments, loans, or travel.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Annual Fee:</span> Free
                      to use with no annual cost, unlike premium cards charging
                      $95-$550/year.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">3% on SoFi Travel:</span>{" "}
                      Earn 3% when booking flights, hotels, rentals, packages
                      through SoFi Travel Portal (powered by Expedia).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mastercard World Elite Benefits:
                      </span>{" "}
                      24/7 travel concierge, $5 Lyft credits/month, ShopRunner
                      free 2-day shipping, Instacart 2-month trial,
                      entertainment/dining experiences.
                    </div>
                  </div>
                </div>
              </section>

              <div className="my-8 text-left sm:text-left">
                <Link href="/financial-solutions/sofi-credit-card-requirements">
                  <Button className="bg-[#329192] hover:bg-teal-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check Requirements & Apply
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp"
                  alt="SoFi Credit Card Benefits"
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

              <section className="my-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Why Choose SoFi Unlimited 2%?
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Exceptional Flat-Rate:
                      </span>{" "}
                      2% unlimited cash back ranks among the top flat-rate
                      cards. Earn $20 per $1,000 spent, no caps or categories.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Redemption Minimums:
                      </span>{" "}
                      Redeem anytime with no $25+ thresholds. Apply rewards to
                      checking, savings, investments, or loan payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Integrated Ecosystem:
                      </span>{" "}
                      Manage banking, investing, loans, and credit in one place
                      with rewards flowing to wealth-building accounts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Premium Benefits, No Fee:
                      </span>{" "}
                      Mastercard World Elite perks (concierge, travel, shopping)
                      at no annual cost.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Protection Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Zero Fraud Liability:
                      </span>{" "}
                      No cost for unauthorized charges; you're fully protected
                      against fraud.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        ID Theft Monitoring:
                      </span>{" "}
                      Proactive monitoring and alerts via Generali if your info
                      appears in data breaches (included at no cost).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cell Phone Protection:
                      </span>{" "}
                      $1,000/year coverage ($800/claim, 2 claims/year) for
                      theft/repairs when you pay your bill with the card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Foreign Transaction Fees:
                      </span>{" "}
                      Travel internationally and earn 2% with no 3% surcharge.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Mastercard World Elite Benefits
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 Travel Concierge:
                      </span>{" "}
                      Personal assistance with travel planning, restaurant
                      reservations, entertainment bookings, gifts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        $5 Monthly Lyft Credits:
                      </span>{" "}
                      $60/year in Lyft ride credits automatically applied when
                      you link your card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        ShopRunner 2-Day Shipping:
                      </span>{" "}
                      Free 2-day shipping and returns from 140+ stores (Saks,
                      Neiman Marcus, GNC, etc.). Saves hundreds annually for
                      frequent online shoppers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        2-Month Instacart+ Trial:
                      </span>{" "}
                      Two months free unlimited $0 delivery on orders $35+ from
                      thousands of grocery stores.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-rewards-strategies/">
                    <Image
                      src="https://media.topfinanzas.com/images/budgetbee/budgetbee-credit-cards-banner-ad.webp"
                      alt="Credit Card Rewards Strategies"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Maximize Your Rewards with SoFi Travel
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The SoFi Travel Portal, powered by Expedia, offers an elevated
                  rewards earning opportunity and exclusive member savings:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        3% Cash Back on Travel Bookings:
                      </span>{" "}
                      When you book flights, hotels, car rentals, or vacation
                      packages through the SoFi Travel Portal using your SoFi
                      Credit Card, you earn 3% cash back instead of the standard
                      2%. This 50% boost in rewards can add up significantly on
                      major travel expenses.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Save Up to 10% or More:
                      </span>{" "}
                      SoFi members can access exclusive discounts on eligible
                      bookings through the travel portal, potentially saving 10%
                      or more on hotels, vacation packages, and other travel
                      services. Combined with your 3% cash back, this represents
                      substantial savings on travel spending.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Access to Expedia's Inventory:
                      </span>{" "}
                      The SoFi Travel Portal provides access to Expedia's
                      massive travel inventory including hundreds of airlines,
                      over 500,000 hotels worldwide, rental cars from all major
                      companies, and bundled vacation packages that offer
                      additional savings.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Simple Earning Process:
                      </span>{" "}
                      Your 3% travel rewards are automatically calculated and
                      credited to your account within 7 business days after
                      transactions post. You don't need to activate categories
                      or jump through hoops—just book through the portal and
                      earn.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding Your Cash Back Rewards
                </h2>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Automatic Points Earning:
                      </span>{" "}
                      You earn 2 rewards points for every dollar spent on
                      purchases automatically—no need to activate quarterly
                      categories or track spending limits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Redemption:
                      </span>{" "}
                      Redeem rewards at 1¢ per point toward Checking, Savings,
                      Active Invest, Personal Loans, Student Loan Refinance, or
                      SoFi Travel purchases.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Expiration:</span> Your
                      rewards don't expire as long as your account remains open
                      and in good standing. There are no annual earning caps or
                      redemption limits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Real-Time Tracking:</span>{" "}
                      Monitor your rewards balance through the SoFi mobile app
                      or website in real-time.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Should Apply for This Card?
                </h2>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Excellent Credit Cardholders:
                      </span>{" "}
                      SoFi requires no loan defaults in the past 7 years, 5+
                      years of on-time payments, and no 30+ day late payments in
                      the past year.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Simplicity Seekers:</span>{" "}
                      If you prefer a straightforward rewards structure without
                      rotating categories or activation requirements, this card
                      delivers consistent 2% value.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        SoFi Ecosystem Members:
                      </span>{" "}
                      Current SoFi banking, investing, or loan customers benefit
                      most from seamless reward redemption and integrated
                      account management.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Frequent Travelers:</span>{" "}
                      No foreign transaction fees, 3% travel bookings, and
                      Mastercard World Elite benefits make this ideal for
                      domestic and international travel.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Terms and Conditions
                </h2>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Approval:</span>{" "}
                      Accounts are subject to additional credit approval and
                      verification of sufficient income. SoFi will not extend
                      credit if you don't meet their pre-established criteria.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Minimum Credit Line:
                      </span>{" "}
                      If approved, your credit line will be at least $500. Your
                      actual limit depends on creditworthiness, income, and
                      underwriting factors.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Rewards Exclusions:</span>{" "}
                      No rewards points are earned on reversed transactions,
                      returned purchases, or similar transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Processing Time:</span>{" "}
                      Allow up to 30 days from submission to process your
                      application. Most applications receive a decision faster.
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700 text-left">
                    <span className="font-semibold">Important:</span> The SoFi
                    Unlimited 2% Card is recommended for customers with
                    excellent credit. Factors considered include loan default
                    history, years of on-time payments (5+ years preferred), and
                    recent payment behavior (no 30+ day late payments in the
                    past year). Meeting these criteria does not guarantee
                    approval as additional factors from your application and
                    credit history will be considered.
                  </p>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Representative APR Example
                </h2>

                <div className="space-y-4 my-8">
                  <p className="text-gray-800 text-sm leading-5 font-light text-left">
                    <span className="font-semibold">Variable APR:</span> The
                    SoFi Unlimited 2% Card carries a variable Annual Percentage
                    Rate determined based on your creditworthiness. Variable
                    APRs are tied to an underlying index (typically the Prime
                    Rate) and can change quarterly.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 font-light text-left">
                    <span className="font-semibold">Example:</span> If you carry
                    a $3,000 balance for one year at 18.99% APR, you'd pay
                    approximately $570 in interest. However, with unlimited 2%
                    cash back, $3,000 spending earns about $60 in rewards. The
                    best strategy is paying your balance in full monthly to
                    avoid interest while maximizing rewards.
                  </p>
                </div>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/sofi-credit-card-requirements">
                  <Button className="bg-[#329192] hover:bg-teal-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Full Requirements
                  </Button>
                </Link>
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
