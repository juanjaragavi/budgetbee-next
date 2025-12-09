import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata = {
  title:
    "Robinhood Gold Card: 3% Cash Back on Everything with Premium Benefits - BudgetBee",
  description:
    "Discover the Robinhood Gold Card offering 3% cash back on all purchases, 5% back on travel, no annual fee, virtual cards, family card sharing, and Visa Signature benefits. Exclusive to Robinhood Gold members.",
  keywords:
    "Robinhood Gold Card, 3% cash back credit card, Robinhood credit card, no annual fee, virtual cards, family credit card, Visa Signature benefits, travel rewards, cash back rewards, investment credit card",
};

export default function RobinhoodGoldCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Robinhood Gold Card: Revolutionary 3% Cash Back on Every Purchase
            </h1>
            <div
              id="square02" data-topads data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Earn 3% cash back on all purchases with no caps. Additional 5%
                on travel bookings. No annual fee with Robinhood Gold membership
                ($5/month). Exclusive features: virtual cards, family sharing,
                Visa Signature benefits.
              </p>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">3% Flat Cash Back:</span>{" "}
                    All purchases, no caps or categories. Gas, groceries,
                    dining, streaming—everything earns 3%.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">5% Travel Bonus:</span> Book
                    through Robinhood Travel Portal for flights, hotels,
                    rentals, vacation packages.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> Free
                    with Robinhood Gold membership ($5/month, includes 3% APY on
                    cash, research, market data).
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Virtual Cards:</span>{" "}
                    Generate unlimited disposable card numbers for online
                    shopping and subscription management.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/robinhood-gold-card-requirements">
                  <Button className="bg-[#0f9d58] hover:bg-[#0d8a4d] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp"
                  alt="Robinhood Gold Card"
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
                  The Robinhood Gold Card eliminates rewards complexity with a
                  flat 3% cash back rate on all purchases. No categories, no
                  activation, no spending caps. Cash deposits directly into your
                  Robinhood account for potential growth.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Why 3% Flat Rate Outperforms
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Most "unlimited" cards offer 1.5-2%. At 3% flat, a
                  $30,000/year spender earns $900 vs. $450-$600 with
                  competitors—an extra $300-$450 annually. No spending caps
                  means the 3% applies to every purchase.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Travel & Virtual Cards
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Book through Robinhood Travel Portal for 5% cash back (vs. 3%
                  elsewhere). A $3,000 vacation earns $150 back—$60 more than
                  standard rate, covering one year of Gold membership. Virtual
                  cards provide unlimited disposable numbers for safer online
                  shopping and easy subscription management. Delete a virtual
                  card to instantly cancel subscriptions without worrying about
                  lingering charges.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Family Sharing & Credit Building
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Add authorized users of any age (including kids and teens).
                  Set individual spending limits per person, monitor
                  transactions in real-time, lock cards instantly if lost. All
                  family spending consolidates under your account at 3% cash
                  back. No cost to add users; optional stainless steel cards
                  available for a fee.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Robinhood Ecosystem Integration
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Cash back is automatically calculated in points (1 point =
                  $0.01) and redeemed directly into your Robinhood account.
                  Invest points in stocks, ETFs, or crypto, or keep as cash
                  earning 3% APY. Unlike cards with idle rewards, Robinhood
                  rewards can grow through compound returns.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Visa Signature Benefits
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Trip Interruption Protection:
                      </span>{" "}
                      Reimbursement up to $1,500 per trip if your trip is
                      interrupted due to covered reasons like illness, severe
                      weather, or injury. Coverage includes unused travel
                      expenses and additional transportation costs to reach your
                      original destination or return home.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Purchase Security:</span>{" "}
                      New purchases made with your Gold Card are protected
                      against theft or accidental damage for 90 days from the
                      date of purchase, up to $10,000 per claim and $50,000 per
                      cardholder. This coverage provides peace of mind on
                      expensive electronics, appliances, and other valuable
                      items.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Auto Rental Collision Damage Waiver:
                      </span>{" "}
                      Decline the rental company's collision insurance with
                      confidence. When you rent a car with your Gold Card,
                      coverage for theft and collision damage is provided as a
                      secondary benefit for rentals up to 31 consecutive days,
                      potentially saving $15-$30 per day.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Extended Warranty Protection:
                      </span>{" "}
                      Extends the manufacturer's warranty by up to one
                      additional year on eligible purchases with original
                      warranties of 3 years or less. Maximum benefit of $10,000
                      per claim helps protect against unexpected repair costs on
                      appliances, electronics, and other covered items.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Return Protection:</span>{" "}
                      If a merchant won't take back an item you purchased within
                      90 days, Visa may refund the purchase price up to $250 per
                      item, with a maximum of $1,000 per year. Provides
                      flexibility when merchant return policies are restrictive
                      or items can't be returned.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Visa Signature Concierge Service:
                      </span>{" "}
                      24/7 access to concierge services for travel planning,
                      restaurant reservations, event ticket assistance, and
                      general lifestyle requests. Get help booking hard-to-find
                      reservations, planning trips, or finding unique
                      experiences and gift ideas.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Roadside Dispatch®:
                      </span>{" "}
                      Connect to emergency roadside assistance services
                      including towing, jump starts, flat tire changes, lockout
                      service, and fuel delivery. While you pay for services
                      rendered, Roadside Dispatch helps coordinate assistance
                      quickly when you're stranded.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Premium Design and Materials
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Robinhood Gold Card itself is a statement piece. Crafted
                  from stainless steel weighing 17 grams, it's noticeably
                  heavier and more substantial than plastic cards. The premium
                  metal construction not only feels luxurious but is also more
                  durable than traditional plastic cards. The distinctive gold
                  and cream design stands out in any wallet, and the metal
                  construction includes advanced security features. While
                  authorized users receive plastic cards by default, they can
                  upgrade to stainless steel for an additional fee if they want
                  to match the premium feel of the primary cardholder's card.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Innovative Rewards Redemption Options
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Beyond standard cash back redemptions, the Robinhood Gold Card
                  offers unique ways to use your rewards:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Brokerage Account Deposits:
                      </span>{" "}
                      Transfer points as cash (1 cent per point) directly into
                      your Robinhood investment account. Invest rewards in
                      stocks, ETFs, or crypto to potentially grow your cash back
                      beyond its initial value.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Pay With Points at Merchants:
                      </span>{" "}
                      Use points directly at participating merchants like
                      Amazon, applying your rewards instantly at checkout
                      without waiting for statement credits or redemption
                      processing.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mystery Box Gamification:
                      </span>{" "}
                      Try your luck with the Mystery Box feature where you can
                      win enhanced cash back bonuses (up to 10% back), bonus
                      points (up to 10,000), or category-specific rewards. Adds
                      an element of fun to rewards redemption with chances for
                      significant bonus rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Special Experiences and Items:
                      </span>{" "}
                      Redeem points for unique items like physical gold bars,
                      Robinhood merchandise, metal card upgrades for authorized
                      users, or airport lounge passes—items rarely available
                      through traditional credit card rewards programs.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Consider the Robinhood Gold Card?
                </h2>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Active Robinhood Investors:
                      </span>{" "}
                      If you have or plan to get Robinhood Gold ($5/month), the
                      Gold Card becomes a no-brainer addition with the ability
                      to invest rewards directly into your portfolio.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Simplicity Seekers:</span>{" "}
                      Those tired of juggling multiple cards for different
                      categories appreciate one card earning top-tier 3% rewards
                      on everything.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Frequent Travelers:</span>{" "}
                      The 5% travel booking rewards and comprehensive Visa
                      Signature protections rival premium travel cards costing
                      hundreds annually in fees.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Security-Conscious Consumers:
                      </span>{" "}
                      Virtual card capabilities provide enhanced online shopping
                      security and subscription management traditional cards
                      can't match.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Families Building Credit:
                      </span>{" "}
                      Parents helping children and teens build credit early
                      while maintaining control over spending limits and
                      monitoring all activity.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Disclosures and Considerations
                </h2>

                <div className="space-y-4 my-8">
                  <p className="text-gray-800 text-sm leading-5 font-light text-left">
                    <span className="font-semibold">Representative APR:</span>{" "}
                    The Robinhood Gold Card has a variable APR of 29.99% to
                    32.99%. If you carried a $1,000 balance at 31% APR for one
                    year, you could pay approximately $310 in interest. Pay your
                    full statement balance by the due date each month to avoid
                    interest entirely.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 font-light text-left">
                    <span className="font-semibold">
                      Gold Membership Required:
                    </span>{" "}
                    The card requires an active Robinhood Gold subscription
                    ($5/month or $50/year). If you cancel Gold membership, you
                    may lose access to your card. Gold includes 3% APY on cash,
                    professional research, and Level II market data.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 font-light text-left">
                    <span className="font-semibold">Rewards Terms:</span> Cash
                    back is calculated in points (1 point = 1 cent redeemed for
                    cash). You must have a Robinhood brokerage account to redeem
                    points. Points may be rescinded if you miss minimum
                    payments. Balance transfers, cash advances, and business
                    purchases don't earn points.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 font-light text-left">
                    <span className="font-semibold">Not Financial Advice:</span>{" "}
                    This information is educational only and doesn't constitute
                    financial advice. Consider whether the combined value of
                    Robinhood Gold ($5/month) and card benefits justify the cost
                    for your situation.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700 text-left">
                    <span className="font-semibold">Important:</span> The
                    Robinhood Gold Card is issued by Coastal Community Bank and
                    offered by Robinhood Credit, Inc. Robinhood Credit, Inc. is
                    a financial technology company, not a bank. Missing payments
                    can result in late fees up to $40, may negatively impact
                    your credit score, and could result in loss of rewards
                    points. Credit limits are determined individually and
                    subject to credit approval. Your credit score will not be
                    impacted during the pre-approval check unless you accept the
                    card offer.
                  </p>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/robinhood-gold-card-requirements">
                  <Button className="bg-[#0f9d58] hover:bg-[#0d8a4d] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check Eligibility Requirements
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
