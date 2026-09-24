"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
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

        {/* NAVIGASYON MENÜSÜ */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-[#0F3866] transition-colors"
          >
            Anasayfa
          </Link>
          <Link
            href="#projects"
            className="text-sm font-semibold text-slate-700 hover:text-[#0F3866] transition-colors"
          >
            Projeler
          </Link>
          <Link
            href="#references"
            className="text-sm font-semibold text-slate-700 hover:text-[#0F3866] transition-colors"
          >
            Referanslar
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold text-slate-700 hover:text-[#0F3866] transition-colors"
          >
            Hakkımızda
          </Link>
        </nav>

        {/* AKSİYON BUTONU */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="bg-[#0F3866] hover:bg-[#1B75BC] text-white font-semibold shadow-sm px-5"
          >
            İletişime Geç
          </Button>
        </div>
      </div>
    </header>
  );
}
