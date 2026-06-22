import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/input";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Edit collection</p>
      <h1 className="mb-6 text-3xl font-semibold">Edit project {id}</h1>
      <Input placeholder="Project title" />
    </Container>
  );
}
