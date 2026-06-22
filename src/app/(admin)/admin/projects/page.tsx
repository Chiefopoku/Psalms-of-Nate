import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { mockProjects } from "@/data/mock-psalms";

export default function AdminProjectsPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Collections</p>
      <h1 className="mb-6 text-3xl font-semibold">Manage projects</h1>
      <ProjectGrid projects={mockProjects} />
    </Container>
  );
}
