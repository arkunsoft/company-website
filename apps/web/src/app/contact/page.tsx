import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { InView } from "@/components/ui/in-view";
import { sanityFetch } from "@/lib/sanity/fetch";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "İletişim | ArkunSoft",
  description:
    "ArkunSoft ile iletişime geçin. Yapay zeka, web, mobil ve altyapı projeleriniz için doğrudan mühendislik desteği alın.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "İletişim | ArkunSoft",
    description:
      "ArkunSoft ekibiyle iletişime geçerek projenizi birlikte değerlendirelim.",
    url: "https://arkunsoft.com/contact",
    type: "website",
  },
};

type SiteSettings = {
  contactEmail?: string;
  phone?: string;
  address?: string;
};

export default async function ContactPage() {
  const siteSettings = await sanityFetch<SiteSettings>({
    query: SITE_SETTINGS_QUERY,
  });

  const email = siteSettings?.contactEmail ?? "info@arkunsoft.com";
  const phone = siteSettings?.phone ?? "+90 (850) 000 00 00";
  const address = siteSettings?.address ?? "Ankara / Türkiye";

  const contactDetails = [
    {
      icon: Mail,
      title: "E-Posta",
      value: email,
      href: `mailto:${email}`,
      desc: "Genel sorularınız ve proje talepleriniz için.",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: phone,
      href: `tel:${phone.replace(/\s+/g, "")}`,
      desc: "Hafta içi mesai saatlerinde doğrudan arayın.",
    },
    {
      icon: MapPin,
      title: "Lokasyon",
      value: address,
      href: undefined,
      desc: "Merkez operasyon ve geliştirme ofisi.",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pzt - Cum: 09:00 - 18:00",
      href: undefined,
      desc: "Hafta sonu acil destek kanallarımız aktiftir.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <section className="relative pt-32 pb-20 bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] border-b border-white/15 overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-65 bg-[#38A3E5]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <InView delay={100} className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 backdrop-blur-md">
              <MessageSquare className="w-3.5 h-3.5 text-[#00F2FE]" />
              Bize Ulaşın
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Projenizi Konuşalım
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal">
              İster yeni bir yapay zeka entegrasyonu ister ölçeklenebilir bir
              web/mobil platform olsun; mühendislik çözümlerimizle yanınızdayız.
            </p>
          </InView>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <InView delay={150} className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#38A3E5]">
                  <Sparkles className="w-4 h-4" />
                  İLETİŞİM KANALLARI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3866] tracking-tight">
                  Doğrudan Bağlantı Kurun
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sorularınız, iş ortaklıkları veya teknik destek talepleriniz
                  için bize dilediğiniz kanaldan ulaşabilirsiniz.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#38A3E5]/50 transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0F3866]/5 border border-[#0F3866]/10 flex items-center justify-center text-[#0F3866] shrink-0">
                        <Icon className="w-5 h-5 text-[#38A3E5]" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-bold text-[#0F3866] hover:text-[#38A3E5] transition-colors block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-[#0F3866]">
                            {item.value}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </InView>

            <InView delay={200} className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F3866] tracking-tight">
                    Mesaj Gönderin
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Formu doldurun, mühendislik ekibimiz en kısa sürede dönüş
                    sağlasın.
                  </p>
                </div>

                <ContactForm />
              </div>
            </InView>
          </div>
        </div>
      </section>
    </main>
  );
}
