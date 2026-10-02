"use client";

import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

interface ContactSectionProps {
  settings: SITE_SETTINGS_QUERY_RESULT;
}

export function ContactSection({ settings }: ContactSectionProps) {
  const email = settings?.contactEmail;
  const phone = settings?.phone;
  const address = settings?.address;

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0F3866 1.25px, transparent 1.25px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-125 h-125 bg-[#38A3E5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between h-full select-none">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#38A3E5] bg-[#38A3E5]/10 border border-[#38A3E5]/20">
                <MessageSquare className="w-4 h-4 text-[#38A3E5]" />
                <span>İLETİŞİM</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-(family-name:--font-playfair) italic font-extrabold text-[#0F3866] mt-3 tracking-tight leading-tight">
                Projenizi Birlikte Hayata Geçirelim..
              </h3>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
                Dijital dönüşümünüzü başlatmak veya var olan sistemlerinizi
                ölçeklendirmek için bizimle iletişime geçin.
              </p>

              <div className="mt-8 space-y-4">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#38A3E5] hover:bg-slate-100/80 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-3.5 rounded-xl bg-[#0F3866] text-white group-hover:bg-[#38A3E5] transition-colors shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        E-Posta
                      </p>
                      <p className="text-base font-bold text-[#0F3866] mt-0.5 group-hover:text-[#38A3E5] transition-colors">
                        {email}
                      </p>
                    </div>
                  </a>
                )}

                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#38A3E5] hover:bg-slate-100/80 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-3.5 rounded-xl bg-[#0F3866] text-white group-hover:bg-[#38A3E5] transition-colors shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Telefon
                      </p>
                      <p className="text-base font-bold text-[#0F3866] mt-0.5 group-hover:text-[#38A3E5] transition-colors">
                        {phone}
                      </p>
                    </div>
                  </a>
                )}

                {address && (
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
                    <div className="p-3.5 rounded-xl bg-[#0F3866] text-white shrink-0 shadow-sm mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Adres
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#0F3866] mt-0.5 whitespace-pre-line leading-snug">
                        {address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50/90 backdrop-blur-xs p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-extrabold text-[#0F3866] uppercase tracking-wider mb-2"
                    >
                      Adınız Soyadınız
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Ad Soyad"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm focus:outline-none focus:border-[#38A3E5] focus:ring-2 focus:ring-[#38A3E5]/20 transition-all font-medium placeholder:text-slate-400 shadow-2xs"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-extrabold text-[#0F3866] uppercase tracking-wider mb-2"
                    >
                      E-Posta Adresiniz
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ornek@domain.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm focus:outline-none focus:border-[#38A3E5] focus:ring-2 focus:ring-[#38A3E5]/20 transition-all font-medium placeholder:text-slate-400 shadow-2xs"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-extrabold text-[#0F3866] uppercase tracking-wider mb-2"
                  >
                    Konu
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Proje Detayları & Danışmanlık"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm focus:outline-none focus:border-[#38A3E5] focus:ring-2 focus:ring-[#38A3E5]/20 transition-all font-medium placeholder:text-slate-400 shadow-2xs"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-extrabold text-[#0F3866] uppercase tracking-wider mb-2"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm focus:outline-none focus:border-[#38A3E5] focus:ring-2 focus:ring-[#38A3E5]/20 transition-all resize-none font-medium placeholder:text-slate-400 shadow-2xs"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 bg-[#0F3866] hover:bg-[#38A3E5] text-white font-bold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Mesaj Gönder</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
