"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Removed Search, Loader2
// Removed Input, SearchResults, useDebouncedCallback

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";
import { headerContent } from "@/lib/texts/header/content";
import { AdZepCentralizedHandler } from "@/components/analytics/adzep";
// Removed searchIndex, SearchItem

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // Removed isSearchOpen state
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {},
  );

  // Removed Search State and Refs
  // Removed Debounced search function
  // Removed Handle search input change

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMegaMenu) {
        const megaMenuRef = megaMenuRefs.current[activeMegaMenu];
        const menuButtonRef = menuButtonRefs.current[activeMegaMenu];
        if (
          megaMenuRef &&
          menuButtonRef &&
          !megaMenuRef.contains(event.target as Node) &&
          !menuButtonRef.contains(event.target as Node)
        ) {
          setActiveMegaMenu(null);
        }
      }
      // Removed search-related logic
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMegaMenu]); // Removed search-related dependencies

  // ESC key handler to close menus
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeMegaMenu) {
          setActiveMegaMenu(null);
        }
        // Removed search closing logic on ESC
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeMegaMenu]); // Removed search-related dependencies

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    console.log("Toggling mobile menu");
    setIsOpen((prev) => !prev);
    // Removed search closing logic
  };

  // Removed search-related console log

  return (
    <>
      {/* AdZep Centralized Handler - Single point of activation */}
      <AdZepCentralizedHandler />
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            {/* Center-aligned: Logo, Navigation Links, and CTA Button */}
            <div className="flex items-center space-x-8">
              {/* Logo - optimized to reduce LCP */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logos.colorLogo.url}
                  alt={logos.colorLogo.alt}
                  width={logos.colorLogo.width}
                  height={logos.colorLogo.height}
                  className="h-12 w-auto"
                  style={{ width: "auto", height: "auto" }}
                  priority={true}
                  loading="eager"
                  sizes="180px"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA="
                />
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center space-x-6">
                {/* All Nav Items as Simple Links */}
                {headerNavigation.mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[#F7B500] text-sm font-bold transition-colors no-underline"
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link
                href="/credit-card-recommender-p1"
                className="hidden md:inline-flex bg-primary hover:bg-primary-dark text-white hover:text-white px-8 py-3 rounded-full font-bold text-base transition-colors shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden absolute right-4 flex items-center space-x-2">
              {/* Removed Mobile Search Button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="px-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none"
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
                aria-expanded={isOpen}
                role="button"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Removed Search Bar and Results Section */}

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-gray-100"
              >
                <nav className="space-y-4">
                  {/* Navigation Section */}
                  <div className="space-y-2">
                    <div className="text-h3 text-gray-700 font-semibold">
                      {headerContent.mobileMenu.navigateLabel}
                    </div>
                    <Link
                      href="/"
                      className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/about-us"
                      className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/credit-card-recommender-p1"
                      className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Card Recommender
                    </Link>
                  </div>

                  {/* Categories Section */}
                  <div className="space-y-2">
                    <div className="text-h3 text-gray-700 font-semibold">
                      {headerContent.mobileMenu.categoriesLabel}
                    </div>
                    {headerNavigation.categoryDropdown.items
                      .filter(
                        (item) =>
                          !["About Us", "Card Recommender"].includes(item.text),
                      )
                      .map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                  </div>

                  {/* Blog Categories - Show fewer items */}
                  <div className="space-y-2">
                    <div className="text-h3 text-primary font-semibold">
                      {headerContent.mobileMenu.blogCategories}
                    </div>
                    {headerNavigation.blogMegaMenu.columns[0].items
                      .filter((_, index) => index < 3) // Only show first 3 items
                      .map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    <Link
                      href="/personal-finance"
                      className="block px-2 text-sm text-primary hover:text-[#F7B500] hover:bg-gray-100 font-bold no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Show more...
                    </Link>
                  </div>

                  {/* Popular Articles - Show fewer items */}
                  <div className="space-y-2">
                    <div className="text-h3 text-primary font-semibold">
                      {headerContent.mobileMenu.popularArticles}
                    </div>
                    {headerNavigation.blogMegaMenu.columns[1].items
                      .filter((_, index) => index < 3) // Only show first 3 items
                      .map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-2 text-body font-bold hover:text-[#F7B500] hover:bg-gray-100 no-underline transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    <Link
                      href="/financial-solutions"
                      className="block text-sm px-2 text-primary hover:text-[#F7B500] hover:bg-gray-100 font-bold no-underline transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Show more...
                    </Link>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
