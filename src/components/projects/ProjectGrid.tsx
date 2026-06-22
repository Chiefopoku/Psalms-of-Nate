import { Container } from "@/components/layout/Container";
import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: Readonly<{ projects: Project[] }>) {
  return (
    <Container className="grid gap-5 py-10 md:grid-cols-2">
      {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
    </Container>
  );
}
