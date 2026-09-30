import Link from "next/link";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroBackground } from "@/components/home/HeroBackground";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { ReferenceMarquee } from "@/components/home/ReferenceMarquee";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/lib/sanity/fetch";
import {
  ALL_CLIENTS_QUERY,
  ALL_PROJECTS_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/lib/sanity/queries";
import type {
  ALL_CLIENTS_QUERY_RESULT,
  ALL_PROJECTS_QUERY_RESULT,
  SITE_SETTINGS_QUERY_RESULT,
} from "@/lib/sanity/sanity.types";

export default async function HomePage() {
  const [projects, clients] = await Promise.all([
    sanityFetch<ALL_PROJECTS_QUERY_RESULT>({ query: ALL_PROJECTS_QUERY }),
    sanityFetch<ALL_CLIENTS_QUERY_RESULT>({ query: ALL_CLIENTS_QUERY }),
  ]);
  const settings = await sanityFetch<SITE_SETTINGS_QUERY_RESULT>({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-border/40">
        <HeroBackground />
        <div className="mx-auto w-full max-w-sm sm:w-fit sm:max-w-[90vw] px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
            ArkunSoft Teknoloji & Yazılım
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Geleceğin Dijital Sistemlerini <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38A3E5] via-[#5FB8EE] to-white">
              Bugünden Mimarlıyoruz
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-normal">
            Yüksek performanslı, güvenli ve modern web platformları ile kurumsal
            süreçlerinizi uçtan uca dijitalleştiriyoruz.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-[#0F3866] hover:bg-white/90 px-8 h-12 shadow-lg font-semibold cursor-pointer"
            >
              <Link href="#projects">Projeleri İncele</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/30 text-white hover:bg-white/10 h-12 px-8 cursor-pointer"
            >
              <Link href="#about">Hakkımızda</Link>
            </Button>
          </div>
        </div>
      </section>

      <ReferenceMarquee clients={clients} />

      <StatsSection />

      <ServicesSection />

      <section id="projects" className="scroll-mt-20 bg-slate-50 py-12">
        <ProjectsCarousel projects={projects} />
      </section>

      <TechStackSection />

      <section id="contact" className="scroll-mt-20">
        <ContactSection settings={settings} />
      </section>
    </>
  );
}
