import type { Project } from "@/types/project";

export function getProjectTrackCount(project: Project) {
  return project.psalmIds.length;
}
