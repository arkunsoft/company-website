"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function AboutContactCard() {
  const [isHovered, setIsHovered] = useState(false);

  const paths = [
    { id: 1, d: "M 0 100 C 350 100, 550 180, 800 200", delay: 0 },
    { id: 2, d: "M 0 300 C 350 300, 550 220, 800 200", delay: 0.2 },
    { id: 3, d: "M 250 0 C 400 120, 600 100, 800 200", delay: 0.1 },
    { id: 4, d: "M 600 0 C 680 80, 720 120, 800 200", delay: 0.3 },
    { id: 5, d: "M 250 400 C 400 280, 600 300, 800 200", delay: 0.15 },
    { id: 6, d: "M 600 400 C 680 320, 720 280, 800 200", delay: 0.25 },
    { id: 7, d: "M 950 0 C 900 80, 850 120, 800 200", delay: 0.35 },
  ];

  return (
    <section
      aria-label="İletişim Bölümü"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="p-6 sm:p-12 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60 relative overflow-hidden group transition-all duration-500 outline-none"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden lg:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <title>ArkunSoft İletişim Vektör Animasyonu</title>
          <defs>
            <marker
              id="card-arrowhead"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#00F2FE" />
            </marker>

            <linearGradient
              id="card-vector-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1E56A0" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38A3E5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00F2FE" stopOpacity="1" />
            </linearGradient>
          </defs>

          {paths.map((path) => (
            <motion.path
              key={`base-${path.id}`}
              d={path.d}
              fill="none"
              stroke="#38A3E5"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ opacity: 0.08 }}
              animate={{ opacity: isHovered ? 0.3 : 0.08 }}
              transition={{ duration: 0.4 }}
            />
          ))}

          {paths.map((path) => (
            <motion.path
              key={`glow-${path.id}`}
              d={path.d}
              fill="none"
              stroke="#00F2FE"
              strokeWidth="1.5"
              strokeDasharray="100 250"
              style={{ filter: "blur(3px)" }}
              initial={{ strokeDashoffset: 440, opacity: 0 }}
              animate={
                isHovered
                  ? { strokeDashoffset: [440, 0], opacity: [0, 0.5, 0.5, 0] }
                  : { strokeDashoffset: 440, opacity: 0 }
              }
              transition={
                isHovered
                  ? {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.8,
                      ease: "easeInOut",
                      delay: path.delay,
                    }
                  : { duration: 0.2 }
              }
            />
          ))}

          {paths.map((path) => (
            <motion.path
              key={`flow-${path.id}`}
              d={path.d}
              fill="none"
              stroke="url(#card-vector-grad)"
              strokeWidth="1.5"
              markerEnd="url(#card-arrowhead)"
              strokeDasharray="90 280"
              initial={{ strokeDashoffset: 440, opacity: 0 }}
              animate={
                isHovered
                  ? { strokeDashoffset: [440, 0], opacity: [0, 0.9, 0.9, 0] }
                  : { strokeDashoffset: 440, opacity: 0 }
              }
              transition={
                isHovered
                  ? {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.8,
                      ease: "easeInOut",
                      delay: path.delay,
                    }
                  : { duration: 0.2 }
              }
            />
          ))}

          <motion.circle
            cx="800"
            cy="200"
            r="115"
            fill="none"
            stroke="#38A3E5"
            strokeWidth="1.5"
            strokeDasharray="30 60"
            initial={{ opacity: 0.08, rotate: 0 }}
            animate={
              isHovered
                ? { rotate: 360, opacity: 0.5 }
                : { rotate: 0, opacity: 0.08 }
            }
            transition={{
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "linear",
              },
              opacity: { duration: 0.3 },
            }}
            style={{ transformOrigin: "800px 200px" }}
          />

          <motion.circle
            cx="800"
            cy="200"
            r="135"
            fill="none"
            stroke="#00F2FE"
            strokeWidth="1.5"
            strokeDasharray="15 50"
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isHovered
                ? { rotate: -360, opacity: 0.4 }
                : { rotate: 0, opacity: 0 }
            }
            transition={{
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "linear",
              },
              opacity: { duration: 0.3 },
            }}
            style={{ transformOrigin: "800px 200px" }}
          />
        </svg>
      </div>

      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-[#38A3E5]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="flex items-center justify-center lg:justify-start gap-2 w-full">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B75BC] bg-[#38A3E5]/10 border border-[#38A3E5]/20 shadow-xs">
              <MessageSquare className="w-3.5 h-3.5 text-[#1B75BC]" />
              <span>BİZİMLE İLETİŞİME GEÇİN</span>
            </span>
          </div>

          <div className="w-full sm:max-w-md p-3 rounded-2xl bg-linear-to-r from-[#0F3866]/5 via-[#38A3E5]/10 to-[#0F3866]/5 border border-[#38A3E5]/20 flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0F3866] text-[#00F2FE] flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#0F3866]">
                Yeni Proje Başlangıcı
              </span>
              <span className="text-[10px] text-slate-500">
                Fikirlerinizi uçtan uca mimariyle buluşturalım.
              </span>
            </div>
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-[#0F3866] tracking-tight">
            Projenizi Birlikte Hayata Geçirelim
          </h3>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl">
            Yapay zeka, web, mobil veya altyapı ihtiyaçlarınız için mühendislik
            odaklı çözümler sunmaya hazırız. İhtiyaçlarınızı konuşmak için
            doğrudan iletişime geçebilirsiniz.
          </p>

          <div className="pt-2 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0F3866] hover:bg-[#38A3E5] text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-[#0F3866]/20 group/btn"
            >
              <span>Bize Ulaşın</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:flex items-center justify-center">
          <div
            className={`relative w-full max-w-xs aspect-16/10 bg-linear-to-br from-white to-slate-100 border rounded-2xl p-6 flex items-center justify-center shadow-md transition-all duration-500 backdrop-blur-xs mx-auto ${
              isHovered
                ? "border-[#00F2FE] shadow-2xl shadow-[#38A3E5]/30 scale-[1.04]"
                : "border-slate-200"
            }`}
          >
            <Image
              src="/arkunsoft.png"
              alt="ArkunSoft Logo"
              width={240}
              height={80}
              className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
