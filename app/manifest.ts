import type { MetadataRoute } from "next";
import { content } from "./content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: content.brand.name,
    short_name: content.brand.name,
    description: content.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf5ff",
    theme_color: "#5A00E3",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
