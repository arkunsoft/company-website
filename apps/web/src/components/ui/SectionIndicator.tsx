// apps/web/src/components/ui/SectionIndicator.tsx
"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface SectionIndicatorProps {
  sections: Section[];
}

export function SectionIndicator({ sections }: SectionIndicatorProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!sections.length) return null;

  return (
    <nav
      aria-label="Section Navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 sm:gap-3.5 py-3 sm:py-4 px-2 sm:px-2.5 rounded-2xl bg-[#0F3866]/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/30 select-none"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-end cursor-pointer outline-none py-1"
          >
            <span
              className={`absolute right-full mr-3 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#0F3866] text-white border border-white/15 backdrop-blur-md shadow-lg transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden lg:block ${
                isActive ? "text-[#00F2FE]" : ""
              }`}
            >
              {section.label}
            </span>

            <div className="relative flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4">
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]"
                    : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 group-hover:bg-white group-hover:scale-125"
                }`}
              />
              {isActive && (
                <span className="absolute inset-0 rounded-full border border-[#00F2FE]/50 animate-ping" />
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
}
