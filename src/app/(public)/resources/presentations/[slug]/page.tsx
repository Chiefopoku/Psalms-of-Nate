import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PresentationViewer } from "@/components/presentations/PresentationViewer";
import { presentations } from "@/data/presentations";
import { env } from "@/lib/env";

export function generateStaticParams() {
  return presentations.map((p) => ({ slug: p.slug }));
}

// ponytail: fixed set from data — any unknown slug is a real 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = presentations.find((item) => item.slug === slug);
  if (!p) return {};
  const url = new URL(`/resources/presentations/${p.slug}`, env.siteUrl).toString();
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: p.title, description: p.summary },
  };
}

export default async function PresentationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = presentations.find((item) => item.slug === slug);
  if (!p) notFound();

  const meta = [p.audience, p.venue, p.date ? new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : null].filter(Boolean);

  return (
    <Container className="py-10">
      <Link href="/resources/presentations" className="text-sm font-semibold text-[hsl(var(--primary))] underline-offset-4 hover:underline">← All presentations</Link>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{p.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/70">{p.summary}</p>
      {meta.length > 0 ? (
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground/55">{meta.join(" · ")}</p>
      ) : null}
      <PresentationViewer presentation={p} />
    </Container>
  );
}
