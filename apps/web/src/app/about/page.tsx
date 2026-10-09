import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Focus,
  GitFork,
  Globe2,
  Layers,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AboutContactCard } from "@/components/about/AboutContactCard";
import { InView } from "@/components/ui/in-view";

export const metadata: Metadata = {
  title: "Hakkımızda | ArkunSoft",
  description:
    "ArkunSoft; akıllı AI sistemleri, kesintisiz otomasyon süreçleri, yüksek performanslı backend altyapıları ve mobil çözümlerle modern dijital ürünler inşa eder.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Hakkımızda | ArkunSoft",
    description:
      "ArkunSoft'un modern yazılım vizyonu, mimari disiplini ve çözümleri.",
    url: "https://arkunsoft.com/about",
    type: "website",
  },
};

const techCapabilities = [
  {
    icon: BrainCircuit,
    title: "Yapay Zeka ve Otomasyon",
    desc: "İş süreçlerinizi akıllandıran yapay zeka entegrasyonları ve verimlilik odaklı otomasyon çözümleri.",
  },
  {
    icon: GitFork,
    title: "Sürdürülebilir ve Kesintisiz Sistemler",
    desc: "Yazılım güncellemelerinin sistem duraksaması yaşanmadan güvenle canlıya alınmasını sağlayan altyapılar.",
  },
  {
    icon: Cpu,
    title: "Ölçeklenebilir Altyapı Mimarisi",
    desc: "Yüksek kullanıcı trafiği altında dahi hızlı, güvenli ve esnek çalışan sunucu mimarileri.",
  },
  {
    icon: Smartphone,
    title: "Çoklu Platform Mobil Çözümler",
    desc: "iOS ve Android cihazlarda tek merkezden yüksek performansla çalışan modern mobil uygulamalar.",
  },
];

const values = [
  {
    icon: Code2,
    title: "Mühendislik Disiplini",
    description:
      "Gelecekte kolayca büyütülebilecek, standartlara uygun ve temiz bir kod mimarisi sunuyoruz.",
  },
  {
    icon: Zap,
    title: "Hız ve Performans",
    description:
      "Sistemlerin yanıt sürelerini ve verimliliğini anlık olarak izliyor, sürekli optimize ediyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilirlik ve Güvenlik",
    description:
      "Veri güvenliğini ve sistem kararlılığını projenin ilk aşamasından itibaren merkeze alıyoruz.",
  },
  {
    icon: Globe2,
    title: "İhtiyaca Özel Çözümler",
    description:
      "Hazır kalıplar yerine, projenizin gerçek ihtiyaçlarına en uygun mimariyi seçip uyguluyoruz.",
  },
];

const milestones = [
  {
    title: "Otomatize Dağıtım İş Akışları",
    desc: "Sistem güncellemelerini risk oluşturmadan, otomatik testlerle hızlıca yayına alıyoruz.",
  },
  {
    title: "Yapay Zeka Destekli Web ve Mobil",
    desc: "Güncel akıllı servisleri web ve mobil uygulamalarınıza doğrudan entegre ediyoruz.",
  },
  {
    title: "Geleceğe Hazır Modüler Yapı",
    desc: "Büyüyen iş hacminize kolayca uyum sağlayan esnek yazılım mimarileri kuruyoruz.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <section className="relative min-h-svh flex flex-col justify-center pt-32 pb-20 bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] border-b border-white/15 overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-162.5 h-65 bg-[#38A3E5]/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#00F2FE]/15 blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <InView
            delay={100}
            className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 backdrop-blur-md">
              <Bot className="w-3.5 h-3.5 text-[#00F2FE]" />
              Yapay Zeka, Web ve Mobil Çözümleri
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Yapay Zeka ve Güvenilir <br />
              <span className="text-[#00F2FE]">Mühendislik Yaklaşımı</span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal">
              ArkunSoft; akıllı yapay zeka entegrasyonları, kesintisiz otomasyon
              süreçleri ve ölçeklenebilir altyapılarla işletmenizi geleceğin
              dijital dünyasına taşır.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00F2FE] hover:bg-white text-slate-900 text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-[#00F2FE]/20"
              >
                <Rocket className="w-4 h-4" />
                <span>Projelerimizi İnceleyin</span>
              </Link>
            </div>
          </InView>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden select-none">
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(#0F3866 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <InView
            delay={150}
            className="text-center space-y-3 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#38A3E5] bg-[#38A3E5]/10 border border-[#38A3E5]/20">
              <Compass className="w-3.5 h-3.5 text-[#38A3E5]" />
              <span>PUSULAMIZ</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3866] tracking-tight">
              Misyon & Vizyon
            </h2>
          </InView>

          <InView delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-100 flex flex-col justify-between space-y-6 hover:border-[#38A3E5] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F3866] text-white flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F3866]">
                    Misyonumuz
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    İşletmelerin dijital dönüşüm süreçlerini; akıllı
                    otomasyonlar, güvenli altyapılar ve kesintisiz çalışma
                    prensibiyle en hızlı ve verimli şekilde hayata geçirmektir.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 text-xs font-bold text-[#38A3E5]">
                  <Zap className="w-4 h-4" />
                  <span>Kesintisiz Süreçler & Hızlı Entegrasyon</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-100 flex flex-col justify-between space-y-6 hover:border-[#38A3E5] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F3866] text-white flex items-center justify-center shadow-md">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F3866]">
                    Vizyonumuz
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Gelişmiş yapay zeka teknolojilerini web ve mobil
                    platformlarda en doğru mimariyle buluşturarak, global
                    standartlarda güven duyulan bir teknoloji ortağı olmaktır.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2.5 text-xs font-bold text-[#0F3866]">
                  <Globe2 className="w-4 h-4 text-[#38A3E5]" />
                  <span>Çoklu Platform & Global Mühendislik Standartları</span>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </section>

      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#071D38] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-b from-[#0A2545] to-[#0F3866] pointer-events-none z-0 hidden lg:block"
          style={{
            clipPath:
              "polygon(calc(100% - 32vw) 0, 100% 0, calc(32vw) 100%, 0 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[#38A3E5]/5 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#38A3E5_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 pointer-events-none" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(#38A3E5_1px,transparent_1px)] bg-size-[24px_24px] opacity-15 pointer-events-none lg:hidden" />

        <div className="mx-auto max-w-6xl relative z-10 space-y-16">
          <InView
            delay={250}
            className="text-center space-y-3 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/20">
              <Focus className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>ODAK ALANLARIMIZ</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Uzmanlık Alanlarımız
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base">
              Yazılım, yapay zeka ve sistem mimarisi dikeyinde sunduğumuz temel
              yetkinlikler.
            </p>
          </InView>

          <InView delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCapabilities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:border-[#00F2FE]/50 hover:-translate-y-1 transition-all duration-300 space-y-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#00F2FE]/15 border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </InView>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-6xl space-y-20">
          <InView delay={350} className="space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#38A3E5]">
                <Layers className="w-4 h-4" />
                PRENSİPLERİMİZ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F3866] tracking-tight">
                Çalışma İlkelerimiz
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#0F3866]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </InView>

          <InView delay={400}>
            <div className="p-8 sm:p-12 bg-linear-to-br from-[#16417C] to-[#0D2B52] rounded-3xl text-white space-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F2FE]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="max-w-2xl space-y-3 relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00F2FE]">
                  <Sparkles className="w-4 h-4" />
                  YAKLAŞIMIMIZ
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Projelere Sadece Kod Değil, Kalıcı Değer Kazandırıyoruz
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {milestones.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-[#00F2FE]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h4 className="font-bold text-sm text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </InView>

          <InView delay={450}>
            <AboutContactCard />
          </InView>
        </div>
      </section>
    </main>
  );
}
