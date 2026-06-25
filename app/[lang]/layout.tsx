import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Orbitron, Rajdhani, Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { getDictionary, isLocale, locales, dir } from "@/lib/i18n";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

type LayoutParams = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { profile } = getDictionary(lang);
  const title = `${profile.name} — ${profile.brand}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: profile.tagline,
    applicationName: profile.brand,
    authors: [{ name: profile.name }],
    creator: profile.name,
    keywords: [
      "Farid Fehresti",
      "FARIDTECH",
      "Full Stack Developer",
      "Technical Lead",
      "AI Integration",
      "React",
      "Next.js",
      "TypeScript",
    ],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", fa: "/fa" },
    },
    icons: { icon: "/skull.png", apple: "/skull.png" },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      title,
      description: profile.tagline,
      url: `${SITE_URL}/${lang}`,
      siteName: profile.brand,
      locale: lang === "fa" ? "fa_IR" : "en_US",
      images: ["/skull.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.tagline,
      images: ["/skull.png"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dict.profile.name,
    alternateName: dict.profile.brand,
    jobTitle: dict.profile.title,
    description: dict.profile.summary,
    url: `${SITE_URL}/${lang}`,
    email: `mailto:${dict.contact.email}`,
    sameAs: [dict.contact.github, dict.contact.twitter],
  };

  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} min-h-screen antialiased`}
      >
        <a href="#main" className="skip-link">
          {dict.ui.skipToContent}
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
