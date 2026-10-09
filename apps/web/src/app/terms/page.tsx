import { FileText } from "lucide-react";
import type { Metadata } from "next";
import { InView } from "@/components/ui/in-view";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | ArkunSoft",
  description:
    "ArkunSoft web sitesi kullanım şartları, fikri mülkiyet hakları ve hizmet kullanım kuralları.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] border-b border-white/15 select-none">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <InView delay={100} className="space-y-4">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 backdrop-blur-md">
              <FileText className="w-3.5 h-3.5 text-[#00F2FE]" />
              Yasal Şartlar
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Kullanım Koşulları
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm">
              Son Güncelleme: 7 Ekim 2026
            </p>
          </InView>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-8 text-slate-700 text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              1. Koşulların Kabulü
            </h2>
            <p>
              ArkunSoft web sitesini (`arkunsoft.com`) ziyaret ederek veya
              hizmetlerimizden yararlanarak bu Kullanım Koşullarını kabul etmiş
              sayılırsınız. Bu koşulları kabul etmiyorsanız lütfen sitemizi
              kullanmaya devam etmeyiniz.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              2. Fikri Mülkiyet Hakları
            </h2>
            <p>
              Bu sitede yer alan tüm tasarımlar, yazılım kodları, grafikler,
              metinler, logolar ve diğer materyaller ArkunSoft&apos;a aittir ve
              telif hakkı yasalarıyla korunmaktadır. İzin alınmaksızın
              kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              3. Hizmet Kapsamı ve Sorumluluk Reddi
            </h2>
            <p>
              ArkunSoft, web sitesinde sunulan bilgilerin doğruluğunu ve
              güncelliğini sağlamak için makul çabayı gösterir. Ancak sitedeki
              içeriklerde oluşabilecek teknik hatalardan veya kesintilerden
              doğrudan ya da dolaylı olarak sorumlu tutulamaz.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              4. Değişiklik Hakları
            </h2>
            <p>
              ArkunSoft, bildirimde bulunmaksızın bu Kullanım Koşullarını ve web
              sitesinde sunulan hizmetleri dilediği zaman güncelleme veya
              değiştirme hakkını saklı tutar.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">5. İletişim</h2>
            <p>
              Kullanım koşulları hakkındaki sorularınız için{" "}
              <a
                href="mailto:info@arkunsoft.com"
                className="text-[#38A3E5] font-semibold hover:underline"
              >
                info@arkunsoft.com
              </a>{" "}
              adresi üzerinden bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
