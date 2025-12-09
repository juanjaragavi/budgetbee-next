import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata = {
  title:
    "Citi Custom Cash® Card: 5% Cash Back That Automatically Adapts - BudgetBee",
  description:
    "Discover the Citi Custom Cash® Card with automatic 5% cash back on your top spending category, $200 welcome bonus, 0% intro APR for 18 months on balance transfers, and no annual fee. Your rewards adapt as your spending changes.",
  keywords:
    "Citi Custom Cash Card, automatic cash back, 5% cash back, adaptive rewards, no annual fee, balance transfer, Citi credit card, ThankYou Points",
};

export default function CitiCustomCashCardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Citi Custom Cash® Card: Automatic 5% Cash Back That Adapts to
              Your Spending
            </h1>
            <div
              id="square02" data-topads data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
              The Citi Custom Cash® Card automatically identifies your highest
              spending category and awards 5% cash back on up to $500 monthly
              (max $300/year)—no activation needed. Bonus features: $200 welcome
              bonus, 0% intro APR for 18 months on balance transfers, no annual
              fee, and 4% cash back on Citi Travel bookings. Unlike rotating
              category cards requiring quarterly activation, the Custom Cash
              adapts automatically to your spending patterns.
            </p>

            <div className="my-8 space-y-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Key Features
              </h2>

              <div className="space-y-6 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      5% Cash Back on Top Category:
                    </span>{" "}
                    Automatically earn 5% on up to $500/month in your highest
                    spending category. Covers restaurants, gas, groceries,
                    travel, transit, streaming, drugstores, home improvement,
                    fitness, and entertainment.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Welcome Bonus & Intro APR:
                    </span>{" "}
                    Earn $200 cash back after spending $1,500 in 6 months. Plus
                    0% intro APR for 18 months on balance transfers completed
                    within 4 months (balance transfer fee: $5 or 5%, whichever
                    is greater).
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      No Annual Fee & Travel Bonus:
                    </span>{" "}
                    $0 annual fee. Additional 4% back on Citi Travel® bookings.
                    1% cash back on all other purchases.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">Flexible Redemption:</span>{" "}
                    Redeem ThankYou® Points for cash back, statement credits,
                    gift cards, or travel. No minimum redemption threshold or
                    expiration.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left my-8">
              <Link href="/financial-solutions/citi-custom-cash-card-requirements">
                <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  View Eligibility Requirements
                </Button>
              </Link>
            </div>

            <div className="my-8 text-left sm:text-left">
              <Image
                src="https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp"
                alt="Citi Custom Cash Card"
                width={900}
                height={507}
                className="w-full h-auto rounded-xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
                quality={80}
              />
            </div>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                How It Works
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The card automatically identifies your highest spending category
                each month and awards 5% cash back on up to $500 spent there—no
                activation or enrollment required. This eliminates the hassle of
                rotating cards that require quarterly activation or flat-rate
                cards capped at 2%. Ten eligible categories cover most household
                spending: restaurants, gas, groceries, travel, transit,
                streaming, drugstores, home improvement, fitness, and
                entertainment. Combined with the 4% bonus on Citi Travel®
                bookings and 1% on all other purchases, you earn maximum rewards
                effortlessly based on your actual spending patterns.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Welcome Bonus & Balance Transfer Benefits
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Earn a $200 cash back welcome bonus after spending $1,500 within
                6 months—a 13.3% return. Most cardholders meet this through
                regular spending ($250/month). Combined with 5% category rewards
                during the bonus period, you'll easily earn $275-$300+ in total
                rewards in your first six months.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The 0% intro APR for 18 months on balance transfers (completed
                within 4 months of opening) lets you eliminate high-interest
                debt interest-free. A $6,000 transfer saves approximately $1,020
                versus 22% APR cards (after the 5% balance transfer fee). Divide
                your balance by 18 months to create a payoff plan before the
                intro rate expires.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                Key note: Intro APR applies to balance transfers only—not new
                purchases. After the intro period, a variable 17.99% - 27.99%
                APR applies. Pay your full statement balance monthly to avoid
                interest entirely.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                ThankYou® Points & Redemption
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Rewards are earned as ThankYou® Points: 5 points per $1 in your
                top category (5% cash back), 1 point per $1 on other purchases
                (1% cash back). Redeem for cash back via statement credit,
                direct deposit, or check. No minimum redemption threshold or
                point expiration.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                Alternative redemption options include gift cards, travel
                bookings, Shop with Points at Amazon, electronics, and
                charitable donations. If you hold multiple ThankYou® cards,
                points pool together for faster accumulation and access to
                higher-value redemptions like airline transfers.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                vs. Competing Cash Back Cards
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                <strong>
                  vs. Flat-Rate Cards (Wells Fargo Active Cash, Citi Double
                  Cash):
                </strong>{" "}
                The Custom Cash delivers higher rates on your top category (5%
                vs. 2%) but lower on other purchases (1% vs. 2%). The Custom
                Cash wins if you consistently max the $500 monthly bonus—earning
                $25/month on top category plus 1% elsewhere typically beats flat
                2% cards.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                <strong>
                  vs. Rotating Cards (Chase Freedom Flex, Discover it):
                </strong>{" "}
                Both allow 5% on up to $1,500/quarter (require activation). The
                Custom Cash spreads this across 12 months ($500/month) and needs
                no activation—better for varied spending patterns. Annual
                maximums are identical (~$300), but the Custom Cash never
                requires you to miss activation.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Convenience & Security Features
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Contactless payment technology (tap-to-pay) enables instant
                transactions with fraud protection. Digital wallet support
                (Apple Pay, Google Pay, Samsung Pay) uses device-specific tokens
                so merchants never see your actual card number. $0 fraud
                liability covers unauthorized transactions.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                The Citi Mobile® App provides 24/7 access to view balances,
                transactions, ThankYou® Points, and set up payments. Customize
                alerts for due dates, large transactions, and balance
                thresholds. Select your payment due date to align with your pay
                schedule. Set automatic payments to avoid late fees.
              </p>
            </section>

            <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
              <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                ⚠️ Important Disclosure
              </h3>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Representative APR Example:</strong> The Citi Custom
                Cash® Card has a variable APR of 17.99% - 27.99% for purchases
                based on your creditworthiness. If you carry a balance of $3,000
                at the midpoint APR of 22.99% and make only minimum payments,
                you would pay approximately $689 in interest charges over one
                year. To avoid interest charges entirely, pay your full
                statement balance by the due date each month. Balance transfer
                intro APR: 0% for 18 months on transfers completed within 4
                months of account opening; thereafter 17.99% - 27.99% variable
                APR. Balance transfer fee: $5 or 5% of each transfer, whichever
                is greater.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Credit Impact:</strong> Applying for a credit card
                results in a hard inquiry on your credit report, which may
                temporarily lower your credit score by 2-5 points. Opening a new
                account affects your average age of accounts. However,
                responsible use with on-time payments and low utilization (below
                30%) typically improves your credit score over 6-12 months by
                building positive payment history and increasing available
                credit.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Risk Warning:</strong> Credit cards are a form of
                borrowing. Missing payments can damage your credit score
                significantly (drops of 60-110 points for a single 30-day late
                payment), result in late fees up to $40, and trigger penalty
                APRs. High credit utilization negatively impacts your credit
                score. Only apply if you can manage repayment responsibly and
                understand the risks of carrying balances.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                <strong>Product Restrictions:</strong> Citi will only issue one
                Citi Custom Cash® Card account per person. You are not eligible
                for the welcome bonus if you received a new account bonus for a
                Citi Custom Cash® Card in the past 48 months, or if you
                converted another Citi credit card (on which you earned a new
                account bonus in the last 48 months) into a Citi Custom Cash®
                Card. Subject to credit approval. This content is for
                informational purposes only and does not constitute financial
                advice. BudgetBee is not affiliated with or endorsed by Citi.
              </p>
            </section>

            <div className="text-left my-8">
              <a
                href="https://www.citi.com/credit-cards/citi-custom-cash-credit-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  Apply Now - Visit Official Citi Website
                </Button>
              </a>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
