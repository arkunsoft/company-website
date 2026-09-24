import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { ReferenceMarquee } from "@/components/home/ReferenceMarquee";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/lib/sanity/fetch";
import { ALL_CLIENTS_QUERY, ALL_PROJECTS_QUERY } from "@/lib/sanity/queries";
import type {
  ALL_CLIENTS_QUERY_RESULT,
  ALL_PROJECTS_QUERY_RESULT,
} from "@/lib/sanity/sanity.types";

export default async function HomePage() {
  const [projects, clients] = await Promise.all([
    sanityFetch<ALL_PROJECTS_QUERY_RESULT>({ query: ALL_PROJECTS_QUERY }),
    sanityFetch<ALL_CLIENTS_QUERY_RESULT>({ query: ALL_CLIENTS_QUERY }),
  ]);

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-slate-50 to-background border-b border-border/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-[#38A3E5]/10 text-[#0F3866] border border-[#38A3E5]/20 mb-6">
            ArkunSoft Teknoloji & Yazılım
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F3866] max-w-4xl mx-auto leading-tight">
            Geleceğin Dijital Sistemlerini <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0F3866] via-[#1B75BC] to-[#38A3E5]">
              Bugünden Mimarlıyoruz
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Yüksek performanslı, güvenli ve modern web platformları ile kurumsal
            süreçlerinizi uçtan uca dijitalleştiriyoruz.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#0F3866] hover:bg-[#1B75BC] text-white px-8 h-12 shadow-md"
            >
              Projeleri İncele
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/80 h-12 px-8"
            >
              Hakkımızda
            </Button>
          </div>
        </div>
      </section>

      {/* PROJELER CAROUSEL */}
      <ProjectsCarousel projects={projects} />

      {/* REFERANSLAR MARQUEE BANDI */}
      <ReferenceMarquee clients={clients} />
    </>
  );
}
