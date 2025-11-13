"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

// Hardcoded credit card related posts (matching the Astro version's filtering)
const creditCardPosts = [
  {
    id: "best-rewards-credit-cards",
    title: "Top Rewards Credit Cards to Maximize Your Spending",
    description:
      "Discover the best rewards credit cards that help you earn points, cash back, and travel perks on your everyday purchases.",
    categories: ["credit-cards", "rewards"],
  },
  {
    id: "cashback-credit-cards",
    title: "Best Cashback Credit Cards for Maximizing Your Rewards",
    description:
      "Discover the top cashback credit cards! Compare benefits like unlimited rewards, flexible redemption options, and introductory APR offers.",
    categories: ["credit-cards", "cashback"],
  },
  {
    id: "top-credit-cards-0-intro-apr",
    title: "Best Credit Cards with 0% Intro APR Offers in the US",
    description:
      "Compare the best credit cards offering 0% introductory APR on purchases and balance transfers to save money on interest.",
    categories: ["credit-cards", "apr"],
  },
  {
    id: "no-annual-fee-credit-cards",
    title: "Top Credit Cards With No Annual Fees",
    description:
      "Find the best no annual fee credit cards with great cashback, rewards, and flexible benefits. Perfect for managing expenses while saving on fees.",
    categories: ["credit-cards", "no-annual-fee"],
  },
  {
    id: "travel-credit-cards",
    title: "Best Travel Credit Cards US",
    description:
      "Compare the best travel credit cards in the US with no foreign transaction fees, travel insurance, and rewards for international spending.",
    categories: ["credit-cards", "travel"],
  },
];

export default function QuizResults() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <section className="section-sm bg-white">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="mx-auto lg:col-10">
              {/* Success Banner */}
              <div className="bg-secondary bg-opacity-10 border-2 border-secondary rounded-lg p-6 mb-8 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                  Thank You for Completing the Quiz!
                </h1>
                <p className="text-lg text-gray-700">
                  We&apos;ve analyzed your preferences and found the perfect
                  credit cards for you.
                </p>
              </div>

              {/* Results Introduction */}
              <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Your Personalized Credit Card Recommendations
                </h2>
                <p className="text-gray-600">
                  Based on your quiz responses, we&apos;ve curated a selection
                  of credit cards that align with your financial goals and
                  lifestyle. Each recommendation includes detailed information
                  to help you make an informed decision.
                </p>
              </div>

              {/* Credit Card Articles */}
              <div className="space-y-6 mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  Recommended Reading:
                </h3>
                {creditCardPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <h4 className="text-xl font-bold mb-2">
                      <Link
                        href={`/personal-finance/${post.id}`}
                        className="text-gray-900 hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 mb-3">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.categories.join(", ")}
                      </span>
                      <Link
                        href={`/personal-finance/${post.id}`}
                        className="inline-block px-4 py-2 text-sm font-medium text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Next Steps */}
              <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  What&apos;s Next?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-4xl mb-3">📚</div>
                    <h4 className="font-bold mb-2 text-gray-900">Learn More</h4>
                    <p className="text-sm text-gray-600">
                      Read our detailed guides to understand credit card
                      features
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-4xl mb-3">🔍</div>
                    <h4 className="font-bold mb-2 text-gray-900">
                      Compare Options
                    </h4>
                    <p className="text-sm text-gray-600">
                      Use our comparison tools to find the best fit
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-4xl mb-3">💳</div>
                    <h4 className="font-bold mb-2 text-gray-900">
                      Apply Wisely
                    </h4>
                    <p className="text-sm text-gray-600">
                      Check requirements before applying to maximize approval
                      odds
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/blog"
                    className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-semibold rounded-full transition-all"
                  >
                    Explore More Articles
                  </Link>
                  <Link
                    href="/quiz"
                    className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all"
                  >
                    Retake Quiz
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700 text-left">
                  <strong>Disclaimer:</strong> The recommendations provided are
                  based on your quiz responses and general financial principles.
                  Always review the terms and conditions of any financial
                  product before applying. BudgetBee provides unbiased
                  information but does not guarantee approval for any credit
                  card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
