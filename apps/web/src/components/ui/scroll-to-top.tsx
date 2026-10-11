// apps/web/src/components/ui/scroll-to-top.tsx
"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Başa Dön"
      className={`fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-2xl bg-[#0F3866]/90 hover:bg-[#38A3E5] text-white border border-white/20 shadow-xl shadow-black/25 backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-90 hover:scale-110 focus:outline-none ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
    </button>
  );
}
