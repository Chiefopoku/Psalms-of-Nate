import Link from "next/link";
import { Disc3 } from "lucide-react";
import type { Project } from "@/types/project";
import { Card } from "@/components/ui/card";
import { CoverSlides } from "./CoverSlides";

export function ProjectCard({ project }: Readonly<{ project: Project }>) {
  const images = project.coverImages ?? [];
  return (
    <Card className="grid gap-5 sm:grid-cols-[88px_1fr]">
      {images.length > 0 ? (
        <CoverSlides images={images} className="aspect-square rounded-2xl shadow-lg shadow-orange-900/15" />
      ) : (
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-[hsl(var(--accent))] text-white shadow-lg shadow-orange-900/15">
          <Disc3 className="h-8 w-8" />
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold leading-tight"><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
        <p className="mt-2 text-sm leading-6 text-foreground/70">{project.description}</p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--primary))]">{project.psalmIds.length} tracks</p>
      </div>
    </Card>
  );
}
