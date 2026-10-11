import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { sanityFetch } from "@/lib/sanity/fetch";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export const metadata: Metadata = {
  metadataBase: new URL("https://arkunsoft.com"),
  title: {
    default: "ArkunSoft | Geleceğin Dijital Sistemleri & Yazılım Çözümleri",
    template: "%s | ArkunSoft",
  },
  description:
    "ArkunSoft olarak yüksek performanslı, güvenli, modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi dijitalleştiriyoruz. Bilgi için tıklayın.",
  authors: [{ name: "ArkunSoft" }],
  creator: "ArkunSoft",
  publisher: "ArkunSoft",
  icons: {
    icon: [{ url: "/favicon-v2.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://arkunsoft.com",
    siteName: "ArkunSoft",
    title: "ArkunSoft | Geleceğin Dijital Sistemleri & Yazılım Çözümleri",
    description:
      "ArkunSoft olarak yüksek performanslı, güvenli, modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi dijitalleştiriyoruz. Bilgi için tıklayın.",
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
    title: "ArkunSoft | Geleceğin Dijital Sistemleri & Yazılım Çözümleri",
    description:
      "ArkunSoft olarak yüksek performanslı, güvenli, modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi dijitalleştiriyoruz. Bilgi için tıklayın.",
    images: ["/arkunsoft.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "none",
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
  preload: false,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await sanityFetch<SITE_SETTINGS_QUERY_RESULT>({
    query: SITE_SETTINGS_QUERY,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ArkunSoft",
    url: "https://www.arkunsoft.com",
    logo: "https://www.arkunsoft.com/arkunsoft.png",
    description:
      "Yüksek performanslı, güvenli ve modern web, mobil ve yapay zeka çözümleri ile kurumsal süreçlerinizi uçtan uca dijitalleştiriyoruz.",
    sameAs: [
      "https://www.instagram.com/arkunsoft",
      "https://www.linkedin.com/company/arkunsoft",
      "https://github.com/arkunsoft",
    ],
  };

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased no-scrollbar`}
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
