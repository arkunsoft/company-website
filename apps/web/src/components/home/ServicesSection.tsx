import { Bot, Code2, Cpu, Layers, Smartphone } from "lucide-react";
import { InView } from "../ui/in-view";

const SERVICES = [
  {
    icon: Smartphone,
    title: "Özel Web & Mobil Uygulamalar",
    description:
      "Next.js, React ve React Native mimarileriyle cross-platform, SEO uyumlu ve yüksek hızlı dijital ürünler.",
  },
  {
    icon: Bot,
    title: "Yapay Zeka & Akıllı Otomasyonlar",
    description:
      "Python tabanlı veri işleme, LLM/AI entegrasyonları ve iş süreçlerinizi otomatize eden akıllı çözümler.",
  },
  {
    icon: Cpu,
    title: "Çoklu Backend & API Mimarisi",
    description:
      "Node.js, Python ve PHP tabanlı yüksek ölçeklenebilir mikrohizmetler, PostgreSQL ve Redis veri mimarisi.",
  },
  {
    icon: Code2,
    title: "Kurumsal Sistemler & Bulut",
    description:
      "İş süreçlerinize özel ERP/CRM çözümleri, Docker konteynerleştirme ve kesintisiz CI/CD süreçleri.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-linear-to-b from-[#0F3866] to-[#0A2545] text-white overflow-hidden select-none"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38A3E5]/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B75BC]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38A3E5]/10 border border-[#38A3E5]/20 text-[#38A3E5] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-[#38A3E5]" />
            <span>ÇÖZÜMLERİMİZ</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-snug">
            Geleceğin Teknolojileriyle Uçtan Uca Yazılım
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            Web, mobil, backend ve yapay zeka ekosisteminde işletmenizin
            ihtiyaçlarına özel, ölçeklenebilir ve yenilikçi çözümler üretiyoruz.
          </p>
        </div>

        <InView delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#38A3E5]/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#38A3E5]/10 border border-[#38A3E5]/20 flex items-center justify-center text-[#38A3E5] mb-5 group-hover:scale-110 group-hover:bg-[#38A3E5] group-hover:text-white transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38A3E5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}
