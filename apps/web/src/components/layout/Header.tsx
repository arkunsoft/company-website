// apps/web/src/components/layout/Header.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "#projects", label: "Projeler" },
  { href: "#references", label: "Referanslar" },
  { href: "#about", label: "Hakkımızda" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/arkunsoft.png"
            alt="ArkunSoft Logo"
            width={140}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-slate-700 transition-colors hover:text-[#0F3866]"
            >
              {link.label}
              <span
                className="pointer-events-none absolute -bottom-1 left-1/2 h-[1.5px] w-full origin-center -translate-x-1/2 scale-x-0 bg-[#38A3E5] opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="group relative inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#0F3866] to-[#1B75BC] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0F3866]/20 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#1B75BC] hover:to-[#38A3E5] hover:shadow-lg hover:shadow-[#1B75BC]/30 active:translate-y-0"
          >
            <Link href="#contact">
              <span>İletişime Geç</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
