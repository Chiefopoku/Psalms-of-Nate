import type { Project } from "@/types/project";

export function searchProjects(projects: Project[], query: string) {
  const normalized = query.toLowerCase();
  return projects.filter((project) => project.title.toLowerCase().includes(normalized));
}
