"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-[40vh] items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900">
                Error 404
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-semibold rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
