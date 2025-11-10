"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col px-4 sm:px-6">
        <div className="container mx-auto px-4 py-24 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            BudgetBee: Your Hive for Unbiased Financial Buzz
          </h1>

          <div className="mb-12">
            <Image
              src="https://media.topfinanzas.com/images/budgetbee/banner-art.webp"
              alt="BudgetBee - Unbiased Financial Guidance"
              width={1200}
              height={600}
              className="w-full rounded-xl object-cover shadow-md"
              priority
            />
          </div>

          <section className="mb-12">
            <p className="text-lg mb-6 text-gray-800">
              At BudgetBee, we believe that smart financial decisions
              shouldn&apos;t be complicated, expensive, or biased.
            </p>

            <p className="mb-6 text-gray-800">
              We understand that Gen-Z and Millennials face unique financial
              challenges in today&apos;s economy - from student loans and gig
              work to rising costs and uncertain futures. That&apos;s why
              we&apos;ve created a space where you can get honest, unbiased
              financial guidance without the sales pitches or hidden agendas.
            </p>

            <p className="mb-6 text-gray-800">
              Our mission is simple: to provide clear, actionable financial
              advice that empowers you to make confident money decisions,
              regardless of where you are in your financial journey.
            </p>

            <p className="mb-6 text-gray-800">
              What makes us different? We don&apos;t earn commissions from
              credit card companies, and we don&apos;t try to sell you products.
              We&apos;re here to give you the real scoop on financial tools and
              strategies that actually work for people like you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Commitment to You
            </h2>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    100% Unbiased Guidance
                  </h3>
                  <p className="text-gray-800">
                    We don&apos;t accept affiliate payments or commissions from
                    financial companies. Our recommendations are based solely on
                    what&apos;s best for you, not what pays us the most.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-2xl">🆓</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    Always Free Access
                  </h3>
                  <p className="text-gray-800">
                    Quality financial guidance shouldn&apos;t cost money. All
                    our content, tools, and resources are completely free - no
                    paywalls, no premium tiers, no catch.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    Modern Money Reality
                  </h3>
                  <p className="text-gray-800">
                    Our content is tailored for the financial realities of Gen-Z
                    and Millennials - from side hustles and student debt to
                    modern spending habits and digital banking.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What We Cover
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-primary-dark">
                  Credit Cards
                </h3>
                <p className="text-gray-800">
                  Honest reviews and comparisons of credit cards without the
                  affiliate bias. We help you find cards that actually match
                  your spending and financial goals.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-primary-dark">
                  Budgeting
                </h3>
                <p className="text-gray-800">
                  Practical budgeting strategies that work with modern
                  lifestyles. No shame, no judgment - just real advice for real
                  people.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-primary-dark">
                  Financial Wellness
                </h3>
                <p className="text-gray-800">
                  Building emergency funds, understanding investing basics, and
                  planning for major life events - all explained in plain
                  English.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-primary-dark">
                  Money Mindset
                </h3>
                <p className="text-gray-800">
                  Addressing the emotional and psychological aspects of money
                  management that traditional finance advice often ignores.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Built by Millennials, for the Next Generation
            </h2>

            <p className="mb-6 text-gray-800">
              BudgetBee was created by people who understand the unique
              financial challenges facing younger generations. We&apos;ve lived
              through economic uncertainty, dealt with student loans, navigated
              the gig economy, and experienced the frustration of getting
              financial advice that doesn&apos;t match our reality.
            </p>

            <p className="mb-6 text-gray-800">
              That&apos;s why our content speaks your language and addresses the
              real financial situations you face - from managing irregular
              income to making sense of all the credit card offers flooding your
              mailbox.
            </p>
          </section>

          <section
            id="our-promise"
            className="mb-12 bg-primary-accent p-8 rounded-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Promise</h2>

            <div>
              <p className="text-lg mb-4 text-gray-800">
                We promise to always put your financial well-being first.
              </p>
              <p className="mb-4 text-gray-800">
                No hidden agendas, no sales pitches, no complicated jargon -
                just honest, practical advice to help you build a better
                financial future.
              </p>
              <p className="font-semibold text-primary-dark">
                Welcome to your hive for unbiased financial buzz. 🐝
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="mb-6 text-gray-800">
              Explore our unbiased financial guides and start making smarter
              money decisions today.
            </p>
            <Link href="/blog" className="btn btn-primary inline-block">
              Browse Our Financial Guides
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
