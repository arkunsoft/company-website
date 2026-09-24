"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ALL_PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export type ProjectItem = ALL_PROJECTS_QUERY_RESULT[number];

interface ProjectsCarouselProps {
  projects: ALL_PROJECTS_QUERY_RESULT;
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        Henüz sergilenecek bir proje bulunmuyor.
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 border-y border-slate-200/80"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#38A3E5]">
              Portfolyo
            </h2>
            <p className="text-3xl font-extrabold text-[#0F3866] mt-2 tracking-tight">
              Öne Çıkan Projelerimiz
            </p>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
            Müşterilerimiz için geliştirdiğimiz modern, ölçeklenebilir ve yüksek
            performanslı dijital çözümler.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project: ProjectItem) => (
              <CarouselItem
                key={project._id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full bg-white border border-slate-200 hover:border-[#38A3E5] transition-all duration-300 hover:shadow-xl overflow-hidden group flex flex-col justify-between">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Proje Görseli */}
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title || "Proje Görseli"}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-slate-100 text-slate-400 font-medium">
                          Görsel Yok
                        </div>
                      )}
                    </div>

                    {/* Proje Detayları */}
                    <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        {project.industry && (
                          <span className="text-xs font-bold text-[#38A3E5] block mb-1">
                            {project.industry}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-[#0F3866] group-hover:text-[#38A3E5] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                          {project.summary || "Proje açıklaması bulunmuyor."}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-4">
                        {/* Teknolojiler */}
                        {project.techStack && project.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <Badge
                                key={`${project._id}-${tech}`}
                                variant="secondary"
                                className="text-[11px] font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Detay Linki */}
                        {project.slug?.current && (
                          <Link
                            href={`/projects/${project.slug.current}`}
                            className="inline-flex items-center gap-1 text-sm font-bold text-[#0F3866] hover:text-[#38A3E5] transition-colors mt-auto"
                          >
                            İncele <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigasyon Okları */}
          <div className="hidden sm:flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white border-slate-300 text-[#0F3866] hover:bg-[#0F3866] hover:text-white" />
            <CarouselNext className="static translate-y-0 bg-white border-slate-300 text-[#0F3866] hover:bg-[#0F3866] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
