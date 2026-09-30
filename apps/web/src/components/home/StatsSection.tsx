"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle2, Cpu, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

interface StatItemProps {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  icon: React.ElementType;
}

function StatCard({
  numericValue,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  icon: Icon,
}: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, decimals, prefix, suffix]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 text-center group"
    >
      <div className="w-10 h-10 rounded-xl bg-[#1B75BC]/10 flex items-center justify-center text-[#1B75BC] mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>

      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F3866] tracking-tight">
        <span ref={ref}>
          {prefix}0{suffix}
        </span>
      </p>

      <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  const stats: StatItemProps[] = [
    {
      numericValue: 50,
      suffix: "+",
      label: "Tamamlanan Proje",
      icon: CheckCircle2,
    },
    {
      numericValue: 99.9,
      prefix: "%",
      decimals: 1,
      label: "Uptime & Performans",
      icon: Zap,
    },
    {
      numericValue: 15,
      suffix: "+",
      label: "Kurumsal İş Ortağı",
      icon: Cpu,
    },
    {
      numericValue: 24,
      suffix: "/7",
      label: "Kesintisiz Destek",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 bg-linear-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-0 md:divide-x divide-slate-200/80">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
