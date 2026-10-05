import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | ArkunSoft",
  description: "ArkunSoft hakkında detaylı bilgi.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-4">Hakkımızda</h1>
      <p className="text-slate-400 text-sm">Bu sayfa yapım aşamasındadır.</p>
    </main>
  );
}
