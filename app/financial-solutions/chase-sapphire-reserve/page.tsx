import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata = {
  title: "Chase Sapphire Reserve®: Premium Travel Rewards Card - BudgetBee",
  description:
    "Discover the Chase Sapphire Reserve® with 3X points on travel & dining, $300 annual travel credit, Priority Pass lounge access, and premium travel protections. Earn 60,000 bonus points after spending $4,000 in first 3 months.",
  keywords:
    "Chase Sapphire Reserve, premium travel credit card, Chase Ultimate Rewards, travel rewards, airport lounge access, Priority Pass, travel insurance, Chase credit card, premium credit card",
};

export default function ChaseSapphireReservePage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Chase Sapphire Reserve®: Experience Premium Travel Rewards and
              Unparalleled Luxury Benefits
            </h1>
            <div
              id="us_budgetbeepro_1"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Chase Sapphire Reserve® features 3X points on travel and
                dining, $300 annual travel credit, Priority Pass lounge access
                (1,300+ lounges), and comprehensive travel insurance. $550
                annual fee; 60,000 bonus points after $4,000 spend in 3 months.
                For frequent travelers who use premium perks.
              </p>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Exceptional Travel & Dining Rewards:
                    </span>{" "}
                    3X points on travel (flights, hotels, rentals, cruises) and
                    restaurants worldwide. 10X total on hotels/car rentals
                    booked through Chase portal; 5X on flights. 1X on other
                    purchases.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      $300 Annual Travel Credit:
                    </span>{" "}
                    Annual statement credit for travel (flights, hotels,
                    rentals, rideshare, tolls, parking). Effectively reduces
                    $550 annual fee to $250 for active travelers.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Priority Pass Select Lounge Access:
                    </span>{" "}
                    Access 1,300+ airport lounges worldwide. Bring 2 guests free
                    per visit. Includes food, beverages, Wi-Fi, business
                    centers, showers. Value ~$469/year.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Comprehensive Travel Protections:
                    </span>{" "}
                    Trip cancellation ($10,000/person, $20,000/trip), trip
                    delay, baggage delay ($100/day up to 5 days), lost luggage
                    ($3,000), emergency medical/dental, rental car damage
                    waiver, and travel accident insurance ($1M).
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chase-sapphire-reserve-requirements">
                  <Button className="bg-[#002855] hover:bg-[#003d7a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp"
                  alt="Chase Sapphire Reserve Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={80}
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Chase Sapphire Reserve® represents Chase Bank's flagship
                  premium travel credit card offering, designed specifically for
                  affluent consumers who travel frequently and dine regularly at
                  restaurants. Since its launch, this metal card has redefined
                  the premium credit card category by offering exceptional value
                  that extends well beyond typical rewards programs. The card's
                  combination of high earning rates, automatic statement
                  credits, luxury travel perks, and comprehensive insurance
                  coverage creates a value proposition that consistently ranks
                  among the best travel credit cards in the market.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Maximize Your Chase Ultimate Rewards Points
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Redeem points for travel at 1.5 cents per point through Chase
                  portal (vs. 1 cent standard). Transfer 1:1 to 14+
                  airline/hotel programs (United, Southwest, Marriott, Hyatt,
                  British Airways, Emirates, Singapore, JetBlue, etc.).
                  Strategic transfers yield 2-3+ cents per point value. Also:
                  cash back (1¢/point), statement credits, gift cards, or
                  experiences.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Premium Travel Experience and Lifestyle Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Priority Pass provides 1,300+ lounges globally. Premium
                  concierge assists with travel bookings, restaurant
                  reservations, tickets, and gift purchases. DoorDash: free
                  DashPass (saves $9.99+/month) with $0 delivery on orders over
                  $12. Lyft: statement credits and cardholder offers.
                </p>

                <div
                  id="us_budgetbeepro_2"
                  className="items-center justify-center flex w-full my-8"
                >
                  {/* Empty responsive, centered div */}
                </div>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Financial Protection and Purchase Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Purchase protection: covers damage/theft for 120 days
                  ($10,000/claim, $50,000/year). Extended warranty: adds 1 year
                  to manufacturer warranties of 3 years or less. Return
                  protection: 90 days ($500/item, $1,000/year).
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/travel-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/budgetbee/budgetbee-credit-cards-banner-ad.webp"
                      alt="Best Travel Credit Cards Guide"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Premium Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Metal Card Design:</span>{" "}
                      Distinctive metal card (13g) communicates premium status
                      with sapphire blue color.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Visa Infinite Benefits:
                      </span>{" "}
                      Luxury Hotel Collection, 24/7 concierge, special offers on
                      dining and entertainment.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Foreign Transaction Fees:
                      </span>{" "}
                      Use internationally without 3% fees. Saves hundreds for
                      global travelers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Authorized Users:</span>{" "}
                      Add free (no annual fee per user, up to 4 total). Each
                      receives metal card and full benefits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#002855] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Chase Offers:</span>{" "}
                      Exclusive statement credits and bonus points from select
                      merchants. 10-20% back at popular brands.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Annual Fee Value Analysis
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  $550 annual fee breaks down as: $300 travel credit reduces it
                  to $250. Priority Pass ($469 value) covers itself with one
                  lounge visit. 3X earning on $10,000 annual travel/dining spend
                  generates 20,000 extra points (~$300 value at 1.5¢). Travel
                  insurance value covers trip cancellation alone. Net: card pays
                  for itself when fully utilized.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Best For / Not Ideal For
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Best for:</strong> Frequent travelers (3-4+
                  trips/year), regular restaurant diners, business travelers,
                  families taking annual vacations, excellent credit (720+),
                  comfortable with $550 annual fee.{" "}
                  <strong>Not ideal for:</strong> Infrequent travelers (1-2
                  trips/year), prefer home cooking, fair credit scores, want
                  simple cash back, cannot afford annual fee. Consider Chase
                  Sapphire Preferred® or Freedom Unlimited® as alternatives.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Rates, Fees, and Important Disclosures
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Annual Fee:</strong> $550 per year. Authorized users:
                  $75 for each authorized user added to the account (up to 4
                  authorized users). <strong>Welcome Bonus:</strong> Earn 60,000
                  bonus points after you spend $4,000 on purchases in the first
                  3 months from account opening. <strong>Purchase APR:</strong>{" "}
                  Variable APR of 21.49% - 28.49% based on creditworthiness.{" "}
                  <strong>Balance Transfer APR:</strong> Variable APR of 21.49%
                  - 28.49%. <strong>Cash Advance APR:</strong> 29.99% variable.{" "}
                  <strong>Penalty APR:</strong> Up to 29.99% variable APR may
                  apply if you make a late payment.{" "}
                  <strong>Foreign Transaction Fee:</strong> None.{" "}
                  <strong>Balance Transfer Fee:</strong> Either $5 or 5% of the
                  amount of each transfer, whichever is greater.{" "}
                  <strong>Cash Advance Fee:</strong> Either $10 or 5% of the
                  amount of each cash advance, whichever is greater.{" "}
                  <strong>Late Payment Fee:</strong> Up to $40.{" "}
                  <strong>Returned Payment Fee:</strong> Up to $40.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Representative Example (Required by TILA):</strong> If
                  you make $10,000 in purchases with an APR of 25% and make only
                  minimum payments, you will pay approximately $3,200 in
                  interest over approximately 12 years before the balance is
                  paid off. Your actual APR, interest charges, and payoff period
                  will vary based on your creditworthiness and payment behavior.
                  To avoid interest charges, pay your full statement balance by
                  the due date each month.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Important Risk Warnings:</strong> Credit cards are a
                  form of borrowing. Missing payments can damage your credit
                  score and result in late fees and penalty APRs. Only borrow
                  what you can afford to repay. High interest rates can make
                  minimum payments expensive—always aim to pay more than the
                  minimum. This card is best suited for consumers who pay their
                  balance in full each month to avoid interest charges, as the
                  high APR can negate the value of rewards earned if you carry a
                  balance.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Disclaimer:</strong> This content is for informational
                  purposes only and does not constitute financial advice. Credit
                  card terms, rates, fees, and benefits are subject to change by
                  the issuer. Always review the current terms and conditions,
                  Cardmember Agreement, and pricing information from Chase Bank
                  before applying. Approval is not guaranteed and depends on
                  your creditworthiness, income, and other factors. For the most
                  current and accurate product information, visit the official
                  Chase website or contact Chase customer service directly.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/chase-sapphire-reserve-requirements">
                    <Button className="bg-[#002855] hover:bg-[#003d7a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Detailed Requirements
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
