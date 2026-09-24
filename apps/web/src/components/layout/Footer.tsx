import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0F3866] text-white py-12 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* MARKA BİLGİSİ */}
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

          {/* MENÜ LINKLERI */}
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

          {/* İLETİŞİM */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38A3E5] mb-4">
              İletişim
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Ankara, Türkiye</li>
              <li>info@arkunsoft.com</li>
            </ul>
          </div>

          {/* YASAL */}
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

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} ArkunSoft. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
