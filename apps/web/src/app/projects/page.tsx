import { FolderCheck, Grid, Layers } from "lucide-react";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { InView } from "@/components/ui/in-view";
import { sanityFetch } from "@/lib/sanity/fetch";
import { ALL_PROJECTS_QUERY } from "@/lib/sanity/queries";
import type { ALL_PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export const metadata = {
  title: "Projelerimiz | ArkunSoft",
  description:
    "ArkunSoft tarafından geliştirilen yüksek performanslı projeler ve vaka analizleri.",
};

export default async function ProjectsPage() {
  const projects = await sanityFetch<ALL_PROJECTS_QUERY_RESULT>({
    query: ALL_PROJECTS_QUERY,
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Banner */}
      <section className="relative pt-32 pb-16 bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] border-b border-white/15 overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-65 bg-[#38A3E5]/25 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00F2FE]/15 blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-md">
                <Layers className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>Portfolyo & Vaka Analizleri</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Geliştirdiğimiz Projeler
              </h1>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal">
                Modern teknolojilerle sıfırdan kurguladığımız, modern
                altyapılara sahip ve iş süreçlerine doğrudan değer katan dijital
                dönüşüm projelerimiz.
              </p>
            </div>

            <div className="shrink-0">
              <InView delay={300}>
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-inner">
                  <div className="relative flex items-center justify-center">
                    <FolderCheck className="w-4 h-4 text-[#00F2FE]" />
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>
                  <span>
                    Toplam{" "}
                    <strong className="text-[#00F2FE] text-sm font-bold">
                      {projects.length}
                    </strong>{" "}
                    Canlı Proje
                  </span>
                </div>
              </InView>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Projects Filter & Grid Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600">
                <Grid className="w-3.5 h-3.5" />
                <span>Öne Çıkan Çalışmalar</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Tüm Vaka Analizleri ve Üretimler
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs">
              Detaylı mimari yapı ve kullanılan teknolojileri incelemek için
              kategorileri filtreleyebilir ve kartlara tıklayabilirsiniz.
            </p>
          </div>

          {/* İnteraktif Sektör Filtreleme ve Dinamik Kart Grid Yapısı */}
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </main>
  );
}
