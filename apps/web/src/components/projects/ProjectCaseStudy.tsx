import {
  CheckCircle2,
  Cpu,
  HelpCircle,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { CustomPortableText } from "@/components/sanity/CustomPortableText";

interface ProjectCaseStudyProps {
  caseStudy: unknown;
  title: string;
  coverImageUrl?: string | null;
}

export function ProjectCaseStudy({
  caseStudy,
  title,
  coverImageUrl,
}: ProjectCaseStudyProps) {
  if (!caseStudy) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Bölüm Başlığı */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <Cpu className="w-3.5 h-3.5" />
            <span>Sistem Mimarisi & Mühendislik Süreci</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title} Vaka Analizi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Projenin ortaya çıkışındaki temel zorluklar, uygulanan mimari
            çözümler ve elde edilen somut çıktılar.
          </p>
        </div>

        {/* Ana Vaka Analizi Kartı */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Üst Bilgi Şerit Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/80 border-b border-slate-200/80 p-6 text-slate-800">
            <div className="flex items-start gap-3.5 pb-4 md:pb-0">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Mevcut Problem
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Geleneksel ve verimsiz iş akışları, manuel takip süreçleri.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 py-4 md:py-0 md:px-6">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Uygulanan Çözüm
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ölçeklenebilir, yüksek performanslı ve modüler mimari.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Sonuç & Etki
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Operasyonel hız artışı, anlık veri akışı ve yüksek
                  erişilebilirlik.
                </p>
              </div>
            </div>
          </div>

          {/* Rich Text İçerik & Sağ Kapak Görseli Alanı */}
          <div className="p-8 sm:p-12 text-slate-800 relative">
            {coverImageUrl && (
              <div className="mb-6 md:mb-0 md:float-right md:ml-8 w-full md:w-72 lg:w-80 aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative group">
                <Image
                  src={coverImageUrl}
                  alt={`${title} Kapak Görseli`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
              </div>
            )}

            <article className="prose prose-slate max-w-none font-sans text-slate-700 leading-relaxed">
              <CustomPortableText value={caseStudy} />
            </article>

            {/* Float hizalamasının alt elemanlara taşmaması için clearfix */}
            <div className="clear-both" />
          </div>

          {/* Alt Bilgi Şeridi */}
          <div className="bg-slate-900 px-8 py-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#00F2FE]" />
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                Mühendislik Standartları & En İyi Uygulamalar (Best Practices)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#00F2FE] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sertifikalı Kod Kalitesi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
