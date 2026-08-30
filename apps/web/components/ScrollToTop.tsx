"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bg-primary hover:bg-primary/80 fixed bottom-4 right-4 z-30 cursor-pointer rounded-full p-2 text-white shadow-lg transition-all duration-300 hover:scale-110 sm:bottom-6 sm:right-6 sm:p-3 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} className="sm:h-6 sm:w-6" />
    </button>
  );
};
