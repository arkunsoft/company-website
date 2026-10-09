import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { sanityFetch } from "@/lib/sanity/fetch";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export const metadata: Metadata = {
  metadataBase: new URL("https://arkunsoft.com"),
  title: {
    default: "ArkunSoft | Geleceğin Dijital Sistemleri",
    template: "%s | ArkunSoft",
  },
  description:
    "Yüksek performanslı, güvenli ve modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.",
  keywords: [
    "ArkunSoft",
    "Yazılım Şirketi",
    "Özel Yazılım Geliştirme",
    "Web ve Mobil Uygulama",
    "Yapay Zeka Çözümleri",
    "Next.js ve React Native",
  ],
  authors: [{ name: "ArkunSoft" }],
  creator: "ArkunSoft",
  publisher: "ArkunSoft",
  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://arkunsoft.com",
    siteName: "ArkunSoft",
    title: "ArkunSoft | Geleceğin Dijital Sistemleri",
    description:
      "Yüksek performanslı, güvenli ve modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.",
    images: [
      {
        url: "/arkunsoft.png",
        width: 1200,
        height: 630,
        alt: "ArkunSoft Teknoloji & Yazılım",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkunSoft | Geleceğin Dijital Sistemleri",
    description:
      "Yüksek performanslı, güvenli ve modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.",
    images: ["/arkunsoft.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await sanityFetch<SITE_SETTINGS_QUERY_RESULT>({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
