import type { Metadata } from "next";
import { env } from "@/lib/env";

// ponytail: one helper covers canonical + OG + Twitter for every static page.
export function createPageMetadata(
  title: string,
  description: string,
  path = "/",
  image = "/images/revamp/nate-portrait.jpg"
): Metadata {
  const url = new URL(path, env.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | Psalms of Nate`,
      description,
      siteName: "Psalms of Nate",
      images: [{ url: image }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Psalms of Nate`,
      description,
      images: [image]
    }
  };
}
