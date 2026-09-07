import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Psalm } from "@/types/psalm";
import { PsalmStatusBadge } from "./PsalmStatusBadge";
export function PsalmCard({ psalm }: Readonly<{ psalm: Psalm }>) {
  return <article className="group overflow-hidden border-b border-white/10 pb-6">
    <Link href={`/psalms/${psalm.slug}`} className="block aspect-square overflow-hidden rounded-xl bg-white/[0.05]" aria-label={`Explore ${psalm.title}`}>
      {psalm.coverUrl ? <img src={psalm.coverUrl} alt={psalm.title} width={600} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"/> : null}
    </Link>
    <div className="pt-5"><PsalmStatusBadge status={psalm.status}/><h2 className="mt-3 font-serif text-2xl font-normal leading-tight"><Link href={`/psalms/${psalm.slug}`} className="inline-flex items-start gap-3">{psalm.title}<ArrowUpRight className="h-4 w-4 shrink-0"/></Link></h2>{psalm.subtitle ? <p className="mt-3 text-sm leading-7 text-foreground/75">{psalm.subtitle}</p> : null}</div>
  </article>;
}
