import Link from "next/link";
import { Presentation, Mic, PenLine, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Resources",
  "Presentations, podcast, and writings from Dr. Nathanael Adjei — for choirs, churches, singing groups, and worship leaders.",
  "/resources"
);

const resources = [
  {
    href: "/resources/presentations",
    icon: Presentation,
    title: "Presentations",
    description: "Talks and teaching decks for choirs, churches, singing groups, and musical programs — to view or download and use.",
    ready: true,
  },
  {
    icon: Mic,
    title: "Thoughts of Nate",
    description: "A forthcoming podcast — reflections on worship, music, and the choral life.",
    ready: false,
  },
  {
    icon: PenLine,
    title: "Writings",
    description: "Essays and reflections from Nate's writing, adapted for the page.",
    ready: false,
  },
] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHeader title="Resources" description="Teaching, thoughts, and writing beyond the music." />
      <Container className="grid gap-5 py-10 md:grid-cols-2">
        {resources.map((r) => {
          const inner = (
            <>
              <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--accent))] text-white shadow-lg shadow-orange-900/15">
                <r.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h2 className="flex items-center gap-3 text-xl font-semibold leading-tight">
                  {r.title}
                  {r.ready ? (
                    <ArrowRight className="h-4 w-4 text-[hsl(var(--primary))]" aria-hidden="true" />
                  ) : (
                    <span className="rounded-full bg-foreground/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-foreground/55">Coming soon</span>
                  )}
                </h2>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{r.description}</p>
              </div>
            </>
          );
          const className = "grid gap-5 sm:grid-cols-[56px_1fr]";
          return r.ready ? (
            <Link key={r.title} href={r.href} className="block">
              <Card className={className}>{inner}</Card>
            </Link>
          ) : (
            <Card key={r.title} className={`${className} opacity-70 hover:translate-y-0 hover:shadow-xl`}>{inner}</Card>
          );
        })}
      </Container>
    </>
  );
}
