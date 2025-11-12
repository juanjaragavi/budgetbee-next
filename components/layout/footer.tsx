import Link from "next/link";
import Image from "next/image";
import { BackToTop } from "@/components/ui/back-to-top";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section - 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: BudgetBee Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="https://media.topfinanzas.com/images/budgetbee/favicon.png"
                alt={logos.colorLogo.alt}
                width={50}
                height={50}
                className="h-12 w-12 rounded-full"
              />
              <h3 className="text-xl font-bold text-gray-900">BudgetBee</h3>
            </div>
            <p className="text-sm text-gray-600 italic">
              Your Hive for Unbiased Financial Buzz
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-gray-700 hover:text-primary hover:underline transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-gray-700 hover:text-primary hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/personal-finance"
                  className="text-sm text-gray-700 hover:text-primary hover:underline transition-colors"
                >
                  Financial Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-700 hover:text-primary hover:underline transition-colors"
                >
                  Budgeting Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerNavigation.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-primary hover:underline transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerNavigation.contactInfo.map((contact, index) => (
                <li
                  key={index}
                  className={`flex ${
                    contact.type === "address" ? "items-start" : "items-center"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 mr-2 flex-shrink-0 ${
                      contact.type === "address" ? "mt-1" : ""
                    } text-primary`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {contact.svgPath.split("|").map((path, idx) => (
                      <path
                        key={idx}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={path}
                      />
                    ))}
                  </svg>
                  {contact.type === "email" ? (
                    <a
                      href={contact.href}
                      className="text-sm text-gray-700 hover:text-primary hover:underline transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-700 leading-tight">
                      {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section - Social Media & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-300">
          {/* Social Media */}
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            <p className="text-sm text-gray-700 text-center md:text-center">
              Follow us on social media
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/budgetbee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/budgetbee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/budgetbee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={footerNavigation.socialMedia.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={footerNavigation.socialMedia.links[0].svgPath} />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-700 text-center md:text-right">
            ALL RIGHTS RESERVED. © BUDGETBEE 2025. REPRODUCTION IN WHOLE OR IN
            PART BY ANY MEANS OR FORM WITHOUT WRITTEN AUTHORIZATION IS
            PROHIBITED. THE COPYRIGHT HOLDER IS PROHIBITED.
          </div>
        </div>

        {/* Bottom Section - Legal Disclaimer */}
        <div className="pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-600 leading-relaxed text-justify">
            <span className="font-semibold">Legal Disclaimer: </span>
            {footerContent.legal.disclaimer.text}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </footer>
  );
}
