import type { Metadata } from "next";
import { env } from "@/lib/env";
import "./globals.css";

const description =
  "Original Ghanaian sacred choral music by Dr. Nathanael Adjei — free scores, MIDI, MP3s, and recordings of psalm-inspired worship.";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: "Psalms of Nate — Ghanaian Sacred Choral Music",
    template: "%s | Psalms of Nate"
  },
  description,
  keywords: [
    "Ghanaian choral music",
    "sacred choral",
    "worship music",
    "SATB scores",
    "free choral sheet music",
    "Akan hymns",
    "Dr. Nathanael Adjei",
    "Psalms of Nate"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Psalms of Nate",
    title: "Psalms of Nate — Ghanaian Sacred Choral Music",
    description,
    images: [{ url: "/images/revamp/nate-portrait.jpg" }]
  },
  twitter: { card: "summary_large_image" }
};

// ponytail: site-wide schema for answer engines — Person + WebSite with search action.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Dr. Nathanael Adjei",
      alternateName: "Psalms of Nate",
      jobTitle: "Composer",
      description,
      url: env.siteUrl,
      sameAs: [
        "https://www.youtube.com/@PsalmsofNate",
        "https://www.instagram.com/psalms_of_nate/",
        "https://www.facebook.com/profile.php?id=61576235281747",
        "https://www.tiktok.com/@psalms.of.nate"
      ]
    },
    {
      "@type": "WebSite",
      name: "Psalms of Nate",
      url: env.siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${env.siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
