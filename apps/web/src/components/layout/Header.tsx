"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Hizmetler", href: "#services" },
  { name: "Projeler", href: "#projects" },
  { name: "Teknolojiler", href: "#tech-stack" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 select-none">
      <nav
        className={`w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 border ${
          scrolled
            ? "bg-[#0F3866]/85 backdrop-blur-md border-white/15 shadow-xl shadow-black/20"
            : "bg-[#0F3866]/40 backdrop-blur-sm border-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/arkunsoft.png"
            alt="ArkunSoft Logo"
            width={140}
            height={36}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Nav Items */}
        <ul className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="px-4 py-2 text-xs font-semibold text-slate-100 rounded-xl border border-transparent hover:border-[#38A3E5]/40 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:shadow-sm hover:shadow-[#38A3E5]/20 block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <Link
          href="#contact"
          className="px-5 py-2 text-xs font-bold rounded-xl bg-[#38A3E5] text-white hover:bg-[#38A3E5]/90 transition-all shadow-md shadow-[#38A3E5]/25 hover:scale-105 active:scale-95"
        >
          İletişime Geç
        </Link>
      </nav>
    </header>
  );
}
