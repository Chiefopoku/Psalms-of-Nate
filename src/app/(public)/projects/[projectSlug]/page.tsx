import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectTrackList } from "@/components/projects/ProjectTrackList";
import { mockProjects, mockPsalms } from "@/data/mock-psalms";

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectSlug: string }> }) {
  const { projectSlug } = await params;
  const project = mockProjects.find((item) => item.slug === projectSlug);
  if (!project) notFound();

  return (
    <Container className="py-10">
      <ProjectHeader project={project} />
      <ProjectTrackList psalms={mockPsalms.filter((psalm) => project.psalmIds.includes(psalm.id))} />
    </Container>
  );
}
