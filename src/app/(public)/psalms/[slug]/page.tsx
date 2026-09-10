import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PsalmDownloads } from "@/components/psalms/PsalmDownloads";
import { MailingListSignup } from "@/components/psalms/MailingListSignup";
import { PsalmMetadata } from "@/components/psalms/PsalmMetadata";
import { PsalmPreview } from "@/components/psalms/PsalmPreview";
import { mockPsalms } from "@/data/mock-psalms";
import { env } from "@/lib/env";

export function generateStaticParams() {
  return mockPsalms.map((p) => ({ slug: p.slug }));
}

// ponytail: 13 fixed works — any other slug is a real 404, not an on-demand render.
// Also stops loading-stream flush that turned notFound() into a soft 200.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const psalm = mockPsalms.find((item) => item.slug === slug);
  if (!psalm) return {};

  const description = psalm.description ?? psalm.subtitle ?? `${psalm.title} by Dr. Nathanael Adjei.`;
  const url = new URL(`/psalms/${psalm.slug}`, env.siteUrl).toString();
  const image = psalm.coverUrl ?? "/images/revamp/nate-portrait.jpg";

  return {
    title: psalm.title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "music.song", url, title: psalm.title, description, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title: psalm.title, description, images: [image] }
  };
}

export default async function PsalmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const psalm = mockPsalms.find((item) => item.slug === slug);
  if (!psalm) notFound();

  // ponytail: per-song schema so search/answer engines read composer, date, and files.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    name: psalm.title,
    alternativeHeadline: psalm.subtitle,
    description: psalm.description ?? psalm.subtitle,
    composer: { "@type": "Person", name: "Dr. Nathanael Adjei" },
    datePublished: psalm.releaseDate,
    inLanguage: "ak",
    genre: "Sacred choral",
    url: new URL(`/psalms/${psalm.slug}`, env.siteUrl).toString(),
    ...(psalm.streamingUrl && {
      recordedAs: { "@type": "MusicRecording", name: psalm.title, url: psalm.streamingUrl }
    })
  };

  return (
    <Container className="py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PsalmPreview psalm={psalm} />
      <PsalmMetadata psalm={psalm} />
      <PsalmDownloads psalm={psalm} />
      <MailingListSignup />
    </Container>
  );
}
