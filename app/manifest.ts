import type { MetadataRoute } from "next";
import { profile } from "@/lib/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.brand}`,
    short_name: profile.brand,
    description: profile.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#07070a",
    theme_color: "#07070a",
    icons: [
      { src: "/skull.png", sizes: "192x192", type: "image/png" },
      { src: "/skull.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
