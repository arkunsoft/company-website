"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { urlFor } from "@/lib/sanity/image";
import type { ALL_PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

interface ProjectFilterProps {
  projects: ALL_PROJECTS_QUERY_RESULT;
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeIndustry, setActiveIndustry] = useState<string>("all");

  const industries = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((proj) => {
      if (proj.industry) set.add(proj.industry);
    });
    return Array.from(set);
  }, [projects]);

  const industryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((proj) => {
      if (proj.industry) {
        counts[proj.industry] = (counts[proj.industry] || 0) + 1;
      }
    });
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeIndustry === "all") return projects;
    return projects.filter((proj) => proj.industry === activeIndustry);
  }, [activeIndustry, projects]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveIndustry("all")}
          className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none ${
            activeIndustry === "all"
              ? "bg-[#0F3866] text-white shadow-lg shadow-[#0F3866]/20 scale-105"
              : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0F3866] border border-slate-200/80"
          }`}
        >
          <span>Tümü</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
              activeIndustry === "all"
                ? "bg-[#38A3E5] text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {projects.length}
          </span>
        </button>

        {industries.map((ind) => {
          const isActive = activeIndustry === ind;
          const count = industryCounts[ind] || 0;

          return (
            <button
              key={ind}
              type="button"
              onClick={() => setActiveIndustry(ind)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none ${
                isActive
                  ? "bg-[#0F3866] text-white shadow-lg shadow-[#0F3866]/20 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0F3866] border border-slate-200/80"
              }`}
            >
              <span className="capitalize">{ind}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                  isActive
                    ? "bg-[#38A3E5] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Projects Grid (Son satırı ortalayan ve eşit boyutlu Flexbox yapısı) */}
      <div className="flex flex-wrap justify-center gap-8 min-h-100">
        {filteredProjects.map((project, index) => {
          const coverUrl = project.coverImage
            ? urlFor(project.coverImage)
                .width(600)
                .height(400)
                .quality(90)
                .url()
            : "/placeholder-project.png";

          return (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              style={{
                animationDelay: `${(index % 6) * 80}ms`,
              }}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col overflow-hidden animate-fade-in-up fill-mode-backwards w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] grow-0 shrink-0"
            >
              <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={coverUrl}
                  alt={project.title ?? "Proje Görseli"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.industry && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 rounded-full border border-slate-200 shadow-xs capitalize">
                    {project.industry}
                  </span>
                )}
              </div>

              {/* İçerik Alanı - h-full ve flex-col ile Eşit Yükseklik Hizalaması */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.summary && (
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  )}
                </div>

                {/* Teknolojiler & Ok İkonu - Her Zaman Alt Sınırda Hizalı */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.techStack?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-slate-100/50 rounded-2xl border border-dashed border-slate-200">
          <Sparkles className="w-8 h-8 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-500 font-medium text-sm">
            Bu sektörde henüz yayınlanmış bir proje bulunmuyor.
          </p>
        </div>
      )}
    </div>
  );
}
