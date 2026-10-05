"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSocialIcon } from "@/lib/getSocialIcon";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

const NAV_ITEMS = [
  { name: "Anasayfa", href: "/" },
  { name: "Projeler", href: "/projects" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

interface HeaderProps {
  settings?: SITE_SETTINGS_QUERY_RESULT;
}

export function Header({ settings }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const socialLinks = settings?.socialLinks ?? [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const ITEM_WIDTH = 56;
  const TOTAL_WIDTH = Math.max(socialLinks.length * ITEM_WIDTH, 140);
  const SVG_HEIGHT = 55;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 select-none">
      <nav
        className={`w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 border relative overflow-visible ${
          scrolled
            ? "bg-[#0F3866]/85 backdrop-blur-md border-white/15 shadow-xl shadow-black/20"
            : "bg-[#0F3866]/40 backdrop-blur-sm border-white/10"
        }`}
      >
        <div className="relative group py-1 flex flex-col items-center justify-center">
          <Link
            href="/"
            className="relative flex items-center justify-center shrink-0 px-3 py-1.5 rounded-xl border border-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:backdrop-blur-md group/logo"
          >
            {/* Hover Anında Logonun Arkasında Açılan Glow (Işıltı) */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#38A3E5]/0 via-[#38A3E5]/30 to-[#00F2FE]/0 opacity-0 blur-md transition-opacity duration-300 group-hover/logo:opacity-100 pointer-events-none" />

            {/* Logo: Sadece ve Her Zaman Düz Beyaz (brightness-0 invert Sabit) */}
            <Image
              src="/arkunsoft.png"
              alt="ArkunSoft Logo"
              width={140}
              height={36}
              className="relative z-10 h-8 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover/logo:scale-105"
            />
          </Link>

          {socialLinks.length > 0 && (
            <div className="hidden md:flex absolute top-full left-1/2 -translate-x-1/2 pt-1 flex-col items-center z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <svg
                width={TOTAL_WIDTH + 40}
                height={SVG_HEIGHT}
                className="overflow-visible drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                role="img"
                aria-label="Sosyal Medya Dallanma Çizgileri"
              >
                <title>Sosyal Medya Bağlantı Ağacı</title>
                {socialLinks.map((link, index) => {
                  const svgCenterX = (TOTAL_WIDTH + 40) / 2;
                  const startX = svgCenterX;
                  const startY = 0;

                  const targetX =
                    svgCenterX -
                    (socialLinks.length * ITEM_WIDTH) / 2 +
                    index * ITEM_WIDTH +
                    ITEM_WIDTH / 2;
                  const targetY = SVG_HEIGHT - 6;

                  const path = `M ${startX} ${startY} C ${startX} ${
                    SVG_HEIGHT * 0.45
                  }, ${targetX} ${SVG_HEIGHT * 0.25}, ${targetX} ${targetY}`;

                  const uniqueKey =
                    link.url || link.platform || `branch-${index}`;

                  return (
                    <g key={`group-${uniqueKey}`}>
                      <path
                        d={path}
                        fill="none"
                        stroke="#FBBF24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="transition-[stroke-dashoffset] duration-500 ease-out [stroke-dasharray:200] [stroke-dashoffset:200] group-hover:[stroke-dashoffset:0]"
                      />
                      <circle
                        cx={targetX}
                        cy={targetY}
                        r="4"
                        fill="#FBBF24"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-300"
                      />
                    </g>
                  );
                })}
              </svg>

              <div
                className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-[#0F3866]/95 border border-amber-400/40 backdrop-blur-md shadow-2xl shadow-black/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-300"
                style={{ width: "fit-content" }}
              >
                {socialLinks.map((link, index) => {
                  const uniqueKey =
                    link.url || link.platform || `link-${index}`;
                  return (
                    <a
                      key={uniqueKey}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform ?? "Sosyal Medya"}
                      className="p-2.5 text-slate-100 hover:text-amber-300 hover:bg-amber-400/20 rounded-xl border border-transparent hover:border-amber-400/40 transition-all duration-200 hover:scale-110 active:scale-95 [&>svg]:w-6 [&>svg]:h-6"
                    >
                      {getSocialIcon(link.platform ?? "", link.url ?? "")}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Masaüstü Menü */}
        <ul className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const active = isActiveLink(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 group block overflow-hidden ${
                    active
                      ? "bg-[#38A3E5]/25 text-white border-[#38A3E5]/50 shadow-xs shadow-[#38A3E5]/30"
                      : "text-slate-100 border-transparent hover:bg-[#38A3E5]/15 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {!active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-[#38A3E5] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="px-5 py-2 text-xs font-bold rounded-xl bg-[#38A3E5] text-white hover:bg-[#38A3E5]/90 transition-all shadow-md shadow-[#38A3E5]/25 hover:scale-105 active:scale-95"
          >
            İletişime Geç
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded-xl text-slate-100 hover:bg-white/10 transition-colors focus:outline-none"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            role="img"
            aria-label={mobileMenuOpen ? "Kapat İkonu" : "Menü İkonu"}
          >
            <title>{mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}</title>
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobil Menü */}
        <div
          className={`absolute top-full left-0 right-0 mt-3 p-4 rounded-2xl bg-[#0F3866]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50 md:hidden flex flex-col gap-3 transition-all duration-300 origin-top ${
            mobileMenuOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all block border ${
                      active
                        ? "bg-[#38A3E5]/25 text-white border-[#38A3E5]/50"
                        : "text-slate-100 border-transparent hover:bg-[#38A3E5]/20 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 text-sm font-bold rounded-xl bg-[#38A3E5] text-white hover:bg-[#38A3E5]/90 transition-all shadow-md shadow-[#38A3E5]/25 active:scale-95"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
