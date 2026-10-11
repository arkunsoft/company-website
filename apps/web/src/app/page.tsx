import { Sparkles } from "lucide-react";
import type { Metadata } from "next";
import {
  DynamicContactSection,
  DynamicProjectsCarousel,
  DynamicReferenceMarquee,
  DynamicServicesSection,
  DynamicStatsSection,
  DynamicTechStackSection,
} from "@/components/common/DynamicComponents";
import { HeroBackground } from "@/components/home/HeroBackground";
import { InView } from "@/components/ui/in-view";
import { SectionIndicator } from "@/components/ui/SectionIndicator";
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

export const metadata: Metadata = {
  description:
    "Yüksek performanslı, güvenli ve modern web platformları ile kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ArkunSoft | Geleceğin Dijital Sistemleri",
    description:
      "Yüksek performanslı, güvenli ve modern web platformları ile kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.",
    images: [
      {
        url: "/arkunsoft.png",
        width: 1200,
        height: 630,
        alt: "ArkunSoft - Geleceğin Dijital Sistemleri",
      },
    ],
  },
};

const HOME_SECTIONS = [
  { id: "hero", label: "Giriş" },
  { id: "references", label: "Referanslar" },
  { id: "services", label: "Çözümler" },
  { id: "projects", label: "Projeler" },
  { id: "tech", label: "Teknolojiler" },
  { id: "contact", label: "İletişim" },
];

export default async function HomePage() {
  const [projects, clients, settings] = await Promise.all([
    sanityFetch<ALL_PROJECTS_QUERY_RESULT>({ query: ALL_PROJECTS_QUERY }),
    sanityFetch<ALL_CLIENTS_QUERY_RESULT>({ query: ALL_CLIENTS_QUERY }),
    sanityFetch<SITE_SETTINGS_QUERY_RESULT>({ query: SITE_SETTINGS_QUERY }),
  ]);

  return (
    <>
      <SectionIndicator sections={HOME_SECTIONS} />
      <section
        id="hero"
        className="relative py-28 md:py-36 overflow-hidden border-b border-white/10 select-none"
      >
        <HeroBackground />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-60 bg-[#38A3E5]/20 blur-3xl rounded-full pointer-events-none" />

        <InView delay={500}>
          <div className="mx-auto w-full max-w-5xl px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>ArkunSoft Teknoloji & Yazılım</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block whitespace-nowrap">
                Geleceğin Dijital Sistemlerini
              </span>
              <span className="block mt-1 pb-3 py-1 font-(family-name:--font-playfair) italic font-normal text-4xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-linear-to-r from-[#00F2FE] via-[#4FACFE] to-white">
                Bugünden Mimarlıyoruz
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-normal">
              Yüksek performanslı, güvenli ve modern web platformları ile
              kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.
            </p>
          </div>
        </InView>
      </section>
      <DynamicReferenceMarquee clients={clients} />
      <DynamicStatsSection />

      <section id="services">
        <DynamicServicesSection />
      </section>
      <section id="projects" className="scroll-mt-20 bg-slate-50">
        <InView delay={500}>
          <DynamicProjectsCarousel projects={projects} />
        </InView>
      </section>
      <section id="tech">
        <DynamicTechStackSection />
      </section>
      <section id="contact" className="scroll-mt-20">
        <DynamicContactSection settings={settings} />
      </section>
    </>
  );
}
