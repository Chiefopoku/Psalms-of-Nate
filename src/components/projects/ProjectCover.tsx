import type { Project } from "@/types/project";
import { CoverSlides } from "./CoverSlides";

export function ProjectCover({ project }: Readonly<{ project: Project }>) {
  const images = project.coverImages ?? [];

  if (images.length > 0) {
    return <CoverSlides images={images} className="aspect-square rounded-3xl shadow-2xl shadow-slate-900/20" />;
  }

  return (
    <div className="flex aspect-square items-end rounded-3xl bg-[hsl(var(--foreground))] p-5 text-white shadow-2xl shadow-slate-900/20">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Collection</p>
        <p className="mt-3 text-2xl font-semibold leading-tight">{project.coverUrl ? project.title : "Cover art"}</p>
      </div>
    </div>
  );
}
