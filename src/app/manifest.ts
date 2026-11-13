import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: Software Development & AI Company`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06080d",
    theme_color: "#06080d",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
