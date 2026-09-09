import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { mockProjects } from "@/data/mock-psalms";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Collections and albums of Ghanaian sacred choral music from Psalms of Nate.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" description="Collections, releases, and themed works." />
      <ProjectGrid projects={mockProjects} />
    </>
  );
}
