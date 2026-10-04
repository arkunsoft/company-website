"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/sanity/image";
import type { ALL_PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export type ProjectItem = ALL_PROJECTS_QUERY_RESULT[number];

interface ProjectsCarouselProps {
  projects: ALL_PROJECTS_QUERY_RESULT;
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const onScroll = useCallback((api: CarouselApi) => {
    if (!api) return;
    const currentProgress = Math.max(0, Math.min(1, api.scrollProgress()));
    setProgress(currentProgress * 100);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api) return;

    onScroll(api);
    api.on("select", onScroll);
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);

    return () => {
      api.off("select", onScroll);
      api.off("scroll", onScroll);
      api.off("reInit", onScroll);
    };
  }, [api, onScroll]);

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400 font-medium bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
        Henüz sergilenecek bir proje bulunmuyor.
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="relative py-12 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#38A3E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F3866]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200/80">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38A3E5]/10 border border-[#38A3E5]/20 text-[#38A3E5] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolyo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F3866] tracking-tight leading-tight">
              Öne Çıkan Projelerimiz
            </h2>
          </div>

          <div className="max-w-md md:text-right">
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Müşterilerimiz için geliştirdiğimiz{" "}
              <span className="text-[#0F3866] font-semibold">
                modern, ölçeklenebilir
              </span>{" "}
              ve yüksek performanslı dijital çözümler.
            </p>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-6 py-6">
            {projects.map((project: ProjectItem) => (
              <CarouselItem
                key={project._id}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative h-full bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#38A3E5]/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden cursor-pointer select-none">
                  {project.slug && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="absolute inset-0 z-20"
                      aria-label={project.title || "Proje Detayı"}
                    />
                  )}

                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden select-none">
                    {project.coverImage ? (
                      <Image
                        src={urlFor(project.coverImage)
                          .width(800)
                          .height(500)
                          .quality(90)
                          .url()}
                        alt={project.title || "Proje Görseli"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none select-none"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-linear-to-br from-slate-100 to-slate-200 text-slate-400 font-medium text-sm select-none">
                        Görsel Bulunmuyor
                      </div>
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {project.industry && (
                      <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/95 backdrop-blur-md text-[#0F3866] shadow-sm border border-slate-200/50 cursor-pointer select-none">
                          {project.industry}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between bg-white cursor-pointer select-none">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3866] group-hover:text-[#38A3E5] transition-colors leading-snug line-clamp-1 cursor-pointer select-none">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed cursor-pointer select-none">
                        {project.summary || "Proje açıklaması bulunmuyor."}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-4">
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <Badge
                              key={`${project._id}-${tech}`}
                              variant="secondary"
                              className="text-[11px] font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 px-2 py-0.5 cursor-pointer select-none"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="inline-flex items-center justify-between text-sm font-bold text-[#0F3866] group-hover:text-[#38A3E5] transition-colors pt-1 cursor-pointer select-none">
                        <span className="cursor-pointer select-none">
                          Detayları İncele
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#38A3E5] group-hover:text-white flex items-center justify-center transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-between mt-10">
            <div className="h-1.5 flex-1 bg-slate-200/80 rounded-full max-w-xs overflow-hidden hidden sm:block">
              <div
                className="h-full bg-[#38A3E5] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.max(10, progress)}%` }}
              />
            </div>

            <div className="flex items-center gap-3 ml-auto">
              {mounted && (
                <>
                  <CarouselPrevious className="static translate-y-0 w-11 h-11 rounded-xl bg-white border border-slate-200 text-[#0F3866] hover:bg-[#0F3866] hover:text-white hover:border-[#0F3866] shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed" />
                  <CarouselNext className="static translate-y-0 w-11 h-11 rounded-xl bg-white border border-slate-200 text-[#0F3866] hover:bg-[#0F3866] hover:text-white hover:border-[#0F3866] shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed" />
                </>
              )}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
