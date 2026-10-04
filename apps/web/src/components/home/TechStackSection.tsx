import { CheckCircle2, Cpu } from "lucide-react";
import { InView } from "../ui/in-view";

const TECH_ITEMS = [
  {
    name: "Next.js / React / React Native",
    desc: "Web ve mobil platformlarda yüksek performanslı, SEO dostu cross-platform çözümler",
  },
  {
    name: "AI Entegrasyonları",
    desc: "LLM, Python tabanlı veri işleme ve iş süreçlerini otomatize eden yenilikçi AI çözümleri",
  },
  {
    name: "Node.js / PHP",
    desc: "İhtiyaca uygun, esnek, ölçeklenebilir ve yüksek hızlı backend mimarileri",
  },
  {
    name: "PostgreSQL & Redis",
    desc: "Güçlü ilişkisel veri yönetimi, önbellekleme ve yüksek erişilebilirlikli veri katmanı",
  },
  {
    name: "Modern Headless CMS",
    desc: "Sanity ve esnek içerik yönetim sistemleri ile dinamik ve hızlı içerik altyapısı",
  },
  {
    name: "Docker & Cloud Native",
    desc: "Konteynerleştirilmiş mimari, kesintisiz CI/CD süreçleri ve güvenli bulut dağıtımı",
  },
];

const FEATURES = [
  "Uçtan Uca (Full-Stack) Web & Mobil Geliştirme",
  "Yapay Zeka Destekli Akıllı İş Çözümleri",
  "Ölçeklenebilir Mikrohizmet ve API Mimarisi",
  "Yüksek Performans, SEO & Sürekli Entegrasyon (CI/CD)",
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-linear-to-b from-[#0F3866] to-[#0A2545] text-white relative overflow-hidden select-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38A3E5]/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38A3E5]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38A3E5]/10 border border-[#38A3E5]/20 text-[#38A3E5] text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Teknoloji & Mühendislik</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-snug">
              Yenilikçi & Geleceğe Hazır Teknoloji Yığını
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed text-base">
              Web, mobil ve yapay zeka ekosisteminde en güncel standartları
              kullanarak işinize değer katan, ölçeklenebilir ve yüksek
              performanslı dijital ürünler geliştiriyoruz.
            </p>

            <InView delay={500}>
              <div className="mt-8 space-y-3.5">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#38A3E5] shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </InView>
          </div>

          <InView delay={500}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECH_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#38A3E5]/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#38A3E5] group-hover:scale-125 transition-transform" />
                    <h3 className="text-sm font-bold text-white group-hover:text-[#38A3E5] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
