import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectTrackList } from "@/components/projects/ProjectTrackList";
import { mockProjects, mockPsalms } from "@/data/mock-psalms";

export function generateStaticParams() {
  return mockProjects.map((p) => ({ projectSlug: p.slug }));
}

// ponytail: fixed project set — unknown slug is a real 404, and no loading stream to soft-200 it.
export const dynamicParams = false;

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
