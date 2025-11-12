"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Using existing Button for consistency

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Show after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="primary"
          className={cn(
            "fixed bottom-4 right-4 z-50 h-14 w-14 bg-[#F7B500] hover:bg-[#d69b00] text-white hover:text-white rounded-full border-0 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d69b00]",
            "!h-14 !w-14 md:!h-14 md:!w-14 !px-0 !py-0",
            "transition-opacity duration-300",
            isVisible ? "opacity-100" : "opacity-0",
          )}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
