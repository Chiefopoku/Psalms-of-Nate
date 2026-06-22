import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { mockProjects } from "@/data/mock-psalms";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" description="Collections, releases, and themed works." />
      <ProjectGrid projects={mockProjects} />
    </>
  );
}
