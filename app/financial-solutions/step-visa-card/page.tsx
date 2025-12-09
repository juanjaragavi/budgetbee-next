import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata = {
  title: "Step Visa Card: Build Credit for Free Starting at Age 13 - BudgetBee",
  description:
    "Discover the Step Visa Card—build credit history for free with no credit score required, no fees, and no interest. Perfect for teens 13+ and young adults. Reports to all 3 credit bureaus with an average 57-point score increase.",
  keywords:
    "Step Visa Card, build credit for free, teen credit card, no credit score required, secured credit card, credit building for teens, no annual fee, no APR, Evolve Bank, credit history under 18",
};

export default function StepVisaCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Step Visa Card: Build Credit History for Free Starting at Age 13
            </h1>
            <div
              id="square02" data-topads data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Step Visa Card revolutionizes credit building by making it
                completely free and accessible to teens as young as 13 years old
                (with a sponsor). Unlike traditional credit cards, Step requires
                no credit score, charges no fees, and has zero interest because
                it's a secured card backed by your Step account balance. Build
                positive credit history with all three major credit bureaus
                while enjoying the convenience of a Visa card accepted
                everywhere.
              </p>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Build Credit with Zero Fees:
                    </span>{" "}
                    The Step Visa Card is completely free with no annual fees,
                    no monthly fees, no interest charges, and no hidden costs.
                    Since it's a secured card using funds from your Step
                    account, there's no APR to worry about. Simply use your card
                    for everyday purchases and automatically build credit
                    history without any financial burden.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Credit Score Required:
                    </span>{" "}
                    Unlike traditional credit cards that require good credit for
                    approval, Step doesn't check your credit history or score.
                    Whether you're starting from zero credit or rebuilding after
                    financial setbacks, you're eligible for a Step Visa Card.
                    Perfect for teens establishing their first credit history or
                    young adults who've been denied elsewhere.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Start Building Credit at Age 13:
                    </span>{" "}
                    Step uniquely allows teens as young as 13 to begin building
                    credit history with a sponsor (parent or guardian). Build up
                    to two years of positive credit history before turning 18,
                    giving young users a significant head start. Users can build
                    credit independently at age 18, and Step even supports
                    parent- managed accounts for children under 13 preparing for
                    the future.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Proven Credit Score Improvements:
                    </span>{" "}
                    TransUnion research shows Step users in their 20s improve
                    their credit score by an average of 57 points. Step users
                    have an average initial credit score of 721 when their trade
                    line is first reported. Many users report increases of
                    85-100+ points, with positive history reported to
                    TransUnion, Experian, and Equifax as long as your account
                    remains in good standing.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/step-visa-card-requirements">
                  <Button className="bg-[#f6629d] hover:bg-[#e04f89] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp"
                  alt="Step Visa Card"
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
                  The Step Visa Card is a secured card for ages 13+ that builds
                  credit history with no annual fees, no credit check required,
                  and no APR since you spend your own funds while Step reports
                  activity to all three credit bureaus.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  How Step's Credit Building Works
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Step is a secured card backed by funds in your account.
                  Purchases deduct from your balance (like debit) but Step
                  reports payment activity to TransUnion, Experian, and Equifax.
                  No credit check, no APR, no debt—only credit building with
                  your own money.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Starting Credit Building as a Teen
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At age 13, teens can open a Step account with a sponsor
                  (parent/guardian) and begin building credit history 2+ years
                  before adulthood. Sponsors monitor spending, set limits, and
                  teach financial responsibility. At 18, teens continue
                  independently with established credit history and scores in
                  the 700s. Kids under 13 can access parent-managed accounts for
                  money management practice without credit reporting.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Real Results: Average 57-Point Credit Score Increase
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  TransUnion analysis of 594 Step users ages 21-27 found average
                  credit score improvements of 57 points within 360 days.
                  Initial median scores: 721. Many users report 85-100+ point
                  increases. Results vary based on usage and account management
                  patterns.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Better Credit Saves Money Across Your Financial Life
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Building good credit with Step creates financial benefits that
                  compound over your lifetime. Step's research shows users with
                  better credit scores save significantly on major expenses:
                </p>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Auto Insurance:</span>{" "}
                      Good credit saves ~$1,200/year ($147/month vs.
                      $250/month).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Student Loans:</span> Good
                      credit: 6.24% rate vs. poor credit 10.46%. Saves $10,000+
                      on $50,000 loan.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Security Deposits:</span>{" "}
                      Good credit eliminates $200-$500+ deposits per service
                      (apartment, utility, phone).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mortgages & Auto Loans:
                      </span>{" "}
                      Better rates save tens of thousands on home or car
                      financing.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional App Features
                </h2>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Early Direct Deposit:
                      </span>{" "}
                      Receive paychecks up to 2 days early.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Savings Goals:</span>{" "}
                      Create and track custom savings targets.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">P2P Transfers:</span>{" "}
                      Send/receive money with other Step users instantly.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Rewards Program:</span>{" "}
                      Earn rewards on purchases and Step activities.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fractional Investing:
                      </span>{" "}
                      Trade stocks and ETFs directly in the app (Beta).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial Education:
                      </span>{" "}
                      Money 101 resources on budgeting, saving, investing.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Safety
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Banking by Evolve Bank & Trust (Member FDIC) protects deposits
                  up to $250,000. Step includes 256-bit encryption, biometric
                  authentication, real-time fraud monitoring, instant
                  transaction notifications, and card lock/unlock controls.
                  Parents can monitor teen accounts and approve specific
                  purchases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Apply?
                </h2>

                <div className="space-y-4 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Teens (Ages 13-17):</span>{" "}
                      Start building credit years before peers with parental
                      guidance.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Young Adults (18-25):
                      </span>{" "}
                      Build credit independently with no credit check required.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Rebuilders:</span>{" "}
                      Fresh start after past credit issues or bankruptcy.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Parents:</span> Teach
                      financial literacy and money management safely with
                      oversight.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Debt-Averse Users:</span>{" "}
                      Build credit without risk of high-interest debt.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Disclosures and Considerations
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Not a Traditional Credit Card:
                  </span>{" "}
                  The Step Visa Card is a secured card, not a traditional credit
                  card with a revolving line of credit. It functions more like a
                  debit card (spending is limited to your account balance) while
                  reporting to credit bureaus like a credit card. You cannot
                  carry a balance or make minimum payments—all purchases are
                  deducted immediately from your Step account.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Credit Reporting Conditions:
                  </span>{" "}
                  Step reports positive payment history to TransUnion, Experian,
                  and Equifax only when your account remains in good standing.
                  Maintaining sufficient funds to cover purchases and avoiding
                  account violations is essential for building credit. Step has
                  no control over credit scores generated by credit bureaus—your
                  overall credit profile may be affected by financial activity
                  outside of your Step account.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">FDIC Insurance:</span> Banking
                  services provided by Evolve Bank & Trust, Member FDIC. Funds
                  in your Step account are insured up to $250,000 by the FDIC.
                  Step is a financial technology company, not a bank.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Credit Score Averages and Improvements:
                  </span>{" "}
                  The average 57-point credit score increase is based on
                  TransUnion analysis of 594 Step users ages 21-27 with positive
                  score increases within 360 days. The median initial credit
                  score of 721 is for Step users with only a Step trade line at
                  first report. Individual results vary based on usage patterns,
                  account management, and external credit factors.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700 text-left">
                    <span className="font-semibold">Important:</span> The Step
                    Visa Card is issued by Evolve Bank & Trust pursuant to a
                    license from Visa U.S.A., Inc. Building credit requires
                    maintaining your account in good standing with sufficient
                    funds to cover purchases. Step reports only your Step Visa
                    card activity—your overall credit scores may be impacted by
                    financial activity outside of Step. This information is for
                    educational purposes and does not constitute financial
                    advice.
                  </p>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/step-visa-card-requirements">
                  <Button className="bg-[#f6629d] hover:bg-[#e04f89] text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
