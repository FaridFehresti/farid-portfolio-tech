import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}`])),
    },
  }));
}
