"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // TODO: Backend API / Server Action entegrasyonu
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-4"
      >
        <div className="w-14 h-14 bg-[#00F2FE]/15 text-[#0F3866] rounded-2xl flex items-center justify-center mx-auto border border-[#00F2FE]/30">
          <CheckCircle2 className="w-7 h-7 text-[#38A3E5]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F3866]">
          Mesajınız Bize Ulaştı!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          En kısa sürede talebinizi inceleyip belirttiğiniz e-posta adresi
          üzerinden sizinle iletişime geçeceğiz.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
        >
          Yeni Mesaj Gönder
        </button>
      </motion.div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-[#0F3866] uppercase tracking-wider"
          >
            Ad Soyad <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Orhan Arslan"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#38A3E5] focus:bg-white transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-bold text-[#0F3866] uppercase tracking-wider"
          >
            E-Posta Adresi <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="orhan@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#38A3E5] focus:bg-white transition-all duration-200"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-xs font-bold text-[#0F3866] uppercase tracking-wider"
        >
          Konu / Hizmet Alanı
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue="ai"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#38A3E5] focus:bg-white transition-all duration-200"
        >
          <option value="ai">Yapay Zeka & Otomasyon Çözümleri</option>
          <option value="web">Web & Portal Geliştirme</option>
          <option value="mobile">Mobil Uygulama Geliştirme</option>
          <option value="backend">Backend & Altyapı Mimarisi</option>
          <option value="other">Diğer / Genel Danışmanlık</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs font-bold text-[#0F3866] uppercase tracking-wider"
        >
          Mesajınız <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Projeniz veya ihtiyaçlarınız hakkında kısaca bilgi verin..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#38A3E5] focus:bg-white transition-all duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0F3866] hover:bg-[#38A3E5] text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-[#0F3866]/20 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Gönderiliyor...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Mesajı Gönder</span>
          </>
        )}
      </button>
    </form>
  );
}
