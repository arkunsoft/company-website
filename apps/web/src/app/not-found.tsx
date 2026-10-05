import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#1E56A0] via-[#16417C] to-[#0D2B52] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-65 bg-[#38A3E5]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#00F2FE]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-md">
            <FileQuestion className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Sayfa Bulunamadı</span>
          </div>

          <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#00F2FE] via-[#4FACFE] to-white">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Aradığınız Yolculuk Burada Sonlanıyor
          </h2>

          <p className="text-blue-100/80 text-sm leading-relaxed font-normal max-w-sm mx-auto">
            Ulaşmaya çalıştığınız sayfa taşınmış, silinmiş veya hiç var olmamış
            olabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00F2FE] hover:bg-white text-slate-900 text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-[#00F2FE]/20"
          >
            <Home className="w-4 h-4" />
            <span>Anasayfaya Dön</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs sm:text-sm font-semibold backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Projelere Göz At</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
