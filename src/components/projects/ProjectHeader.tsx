import type { Project } from "@/types/project";
import { ProjectCover } from "./ProjectCover";

export function ProjectHeader({ project }: Readonly<{ project: Project }>) {
  return (
    <section className="grid gap-8 rounded-3xl border border-white/75 bg-white/70 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur md:grid-cols-[240px_1fr] md:p-8">
      <ProjectCover project={project} />
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Project</p>
        <h1 className="text-4xl font-semibold sm:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/70">{project.description}</p>
      </div>
    </section>
  );
}
