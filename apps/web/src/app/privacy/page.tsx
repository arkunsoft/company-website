import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { InView } from "@/components/ui/in-view";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | ArkunSoft",
  description:
    "ArkunSoft gizlilik politikası, kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi içerir.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] border-b border-white/15 select-none">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <InView delay={100} className="space-y-4">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F2FE]" />
              Yasal Bilgilendirme
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Gizlilik Politikası
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
            <h2 className="text-xl font-bold text-[#0F3866]">1. Genel Bakış</h2>
            <p>
              ArkunSoft olarak, web sitemizi ve hizmetlerimizi ziyaret eden
              kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına
              büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemiz
              üzerinden toplanan verilerin türlerini, kullanım amaçlarını ve bu
              verilerin güvenliğinin nasıl sağlandığını açıklamak amacıyla
              hazırlanmıştır.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              2. Toplanan Veriler
            </h2>
            <p>
              İletişim formları, teklif talepleri ve doğrudan erişim sırasında
              aşağıdaki kişisel verileri toplayabiliriz:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Ad, soyad ve unvan bilgileri</li>
              <li>E-posta adresi ve telefon numarası</li>
              <li>Şirket adı ve hizmet talebi detayları</li>
              <li>
                IP adresi, tarayıcı türü ve ziyaret gerçekleştirilen cihaz
                metrikleri (analitik veriler)
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              3. Verilerin Kullanım Amaçları
            </h2>
            <p>
              Toplanan veriler yalnızca aşağıdaki amaçlar doğrultusunda işlenir:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>İletişim taleplerinize ve sorularınıza yanıt vermek</li>
              <li>
                Teklif ve proje geliştirme süreçlerini planlamak ve yürütmek
              </li>
              <li>
                Web sitemizin performansını ve kullanıcı deneyimini artırmak
              </li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">
              4. Veri Güvenliği ve Üçüncü Taraflar
            </h2>
            <p>
              Kişisel verileriniz, yetkisiz erişim, kayıp veya kötüye kullanıma
              karşı modern güvenlik protokolleri ve şifreleme yöntemleri ile
              korunmaktadır. Verileriniz, yasal zorunluluklar dışında üçüncü
              şahıslarla asla paylaşılmaz veya satılmaz.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F3866]">5. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili tüm soru, görüş veya talepleriniz
              için bizimle{" "}
              <a
                href="mailto:info@arkunsoft.com"
                className="text-[#38A3E5] font-semibold hover:underline"
              >
                info@arkunsoft.com
              </a>{" "}
              adresi üzerinden iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
