import { ArrowLeft, Cpu, ExternalLink, Layers, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ProjectHeroGallery } from "@/components/projects/ProjectHeroGallery";
import { InView } from "@/components/ui/in-view";
import { SectionIndicator } from "@/components/ui/SectionIndicator";
import { sanityFetch } from "@/lib/sanity/fetch";
import { urlFor } from "@/lib/sanity/image";
import { PROJECT_BY_SLUG_QUERY } from "@/lib/sanity/queries";
import type { PROJECT_BY_SLUG_QUERY_RESULT } from "@/lib/sanity/sanity.types";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await sanityFetch<PROJECT_BY_SLUG_QUERY_RESULT>({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!project) {
    return {
      title: "Proje Bulunamadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectTitle = project.title ?? "Proje Detayı";
  const projectDescription =
    project.summary ??
    `${projectTitle} projesinin detaylı incelemesi ve teknik mimarisi.`;

  const ogImageUrl = project.coverImage
    ? urlFor(project.coverImage).width(1200).height(630).quality(90).url()
    : undefined;

  return {
    title: projectTitle,
    description: projectDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${projectTitle} | ArkunSoft Projeleri`,
      description: projectDescription,
      url: `https://arkunsoft.com/projects/${slug}`,
      type: "article",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: projectTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectTitle} | ArkunSoft Projeleri`,
      description: projectDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

const PROJECT_DETAIL_SECTIONS = [
  { id: "hero", label: "Giriş" },
  { id: "case-study", label: "Vaka Analizi" },
];

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = await sanityFetch<PROJECT_BY_SLUG_QUERY_RESULT>({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!project) {
    notFound();
  }

  const galleryList =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.coverImage
        ? [project.coverImage]
        : [];

  return (
    <main className="min-h-screen bg-slate-50 relative">
      <SectionIndicator sections={PROJECT_DETAIL_SECTIONS} />

      <section
        id="hero"
        className="relative min-h-svh sm:min-h-[90vh] lg:min-h-svh flex flex-col justify-between pt-24 pb-8 sm:pt-32 sm:pb-12 bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] border-b border-white/15 overflow-hidden select-none"
      >
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-162.5 h-65 bg-[#38A3E5]/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#00F2FE]/15 blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <InView
                delay={100}
                className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6 w-full"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 hover:text-[#00F2FE] transition-colors mb-1 sm:mb-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Tüm Projelere Dön</span>
                </Link>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  {project.industry && (
                    <span className="py-1 px-3.5 rounded-full text-xs font-bold bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 backdrop-blur-md capitalize">
                      {project.industry}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-md">
                    <Layers className="w-3.5 h-3.5 text-[#00F2FE]" />
                    Vaka Analizi
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 w-full">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    {project.title}
                  </h1>

                  {project.summary && (
                    <p className="text-blue-100 text-xs sm:text-base leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                      {project.summary}
                    </p>
                  )}
                </div>

                {project.liveUrl && (
                  <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start w-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00F2FE] hover:bg-white text-slate-900 text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-[#00F2FE]/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Canlı Projeyi İncele</span>
                    </a>
                  </div>
                )}
              </InView>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <InView delay={200} className="w-full flex justify-center">
                <ProjectHeroGallery
                  gallery={galleryList}
                  title={project.title ?? "Proje"}
                />
              </InView>
            </div>
          </div>
        </div>
      </section>

      <section
        id="case-study"
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
          {project.techStack && project.techStack.length > 0 && (
            <InView delay={300} className="w-full">
              <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-5 relative overflow-hidden group hover:border-[#38A3E5] transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#38A3E5]/5 blur-2xl rounded-full pointer-events-none" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F3866] text-[#00F2FE] flex items-center justify-center shadow-md">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0F3866]">
                      Mimaride Kullanılan Teknolojiler
                    </h3>
                    <p className="text-xs text-slate-500">
                      Bu projenin geliştirilmesinde tercih edilen modern
                      teknoloji yığını
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold bg-slate-100/80 hover:bg-[#0F3866] text-slate-700 hover:text-white rounded-xl border border-slate-200/80 transition-all duration-300 shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#38A3E5]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </InView>
          )}

          {project.caseStudy && (
            <InView delay={400} className="w-full">
              <ProjectCaseStudy
                caseStudy={project.caseStudy}
                title={project.title ?? "Proje"}
                coverImageUrl={
                  project.coverImage
                    ? urlFor(project.coverImage)
                        .width(800)
                        .height(500)
                        .quality(90)
                        .url()
                    : null
                }
              />
            </InView>
          )}
        </div>
      </section>
    </main>
  );
}
