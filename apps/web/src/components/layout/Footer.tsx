// apps/web/src/components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity/fetch";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export async function Footer() {
  const settings = await sanityFetch<SITE_SETTINGS_QUERY_RESULT>({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <footer className="bg-[#0F3866] text-white pt-12 pb-4 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/arkunsoft.png"
                alt="ArkunSoft Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ölçeklenebilir, modern ve yüksek performanslı yazılım çözümleri.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-4">
              Menü
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  href="#references"
                  className="hover:text-white transition-colors"
                >
                  Referanslar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-4">
              İletişim
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {settings?.address && <li>{settings.address}</li>}
              {settings?.contactEmail && (
                <li>
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    {settings.contactEmail}
                  </a>
                </li>
              )}
              {settings?.phone && (
                <li>
                  <a
                    href={`tel:${settings.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {settings.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-4">
              Yasal
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 pb-0 border-t border-slate-800 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} ArkunSoft. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
