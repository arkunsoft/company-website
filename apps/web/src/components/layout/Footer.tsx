// apps/web/src/components/layout/Footer.tsx

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity/fetch";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/lib/sanity/sanity.types";
import { InView } from "../ui/in-view";

export async function Footer() {
  const settings = await sanityFetch<SITE_SETTINGS_QUERY_RESULT>({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <footer className="bg-[#0F3866] text-white pt-12 pb-6 border-t border-white/10 select-none relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38A3E5]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3 group">
              <Image
                src="/arkunsoft.png"
                alt="ArkunSoft Logo"
                width={150}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-slate-300 text-xs leading-relaxed">
              Ölçeklenebilir, modern ve yüksek performanslı yazılım çözümleri.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-3">
              Menü
            </h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>
                <Link
                  href="/"
                  className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  href="#references"
                  className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  Referanslar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-3">
              İletişim
            </h4>
            <ul className="space-y-1 text-xs text-slate-300">
              {settings?.address && (
                <li className="py-1 text-slate-300/80 leading-snug">
                  {settings.address}
                </li>
              )}
              {settings?.contactEmail && (
                <li>
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    {settings.contactEmail}
                  </a>
                </li>
              )}
              {settings?.phone && (
                <li>
                  <a
                    href={`tel:${settings.phone}`}
                    className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    {settings.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-3">
              Yasal
            </h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>
                <Link
                  href="#"
                  className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="-mx-2 inline-block px-2 py-1 rounded-md border border-transparent hover:border-[#38A3E5]/30 hover:bg-[#38A3E5]/15 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ArkunSoft. Tüm hakları saklıdır.</p>

          <InView delay={500}>
            <p className="flex items-center gap-1.5">
              <span>Designed with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse inline-block" />
              <span>by</span>
              <a
                href="https://github.com/okanbatuk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 rounded-md font-semibold text-slate-200 bg-white/5 border border-white/10 hover:border-[#38A3E5]/50 hover:bg-[#38A3E5]/20 hover:text-white transition-all duration-200"
              >
                myrn
              </a>
            </p>
          </InView>
        </div>
      </div>
    </footer>
  );
}
