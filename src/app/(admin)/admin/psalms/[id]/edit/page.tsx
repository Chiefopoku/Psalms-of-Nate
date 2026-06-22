import { Container } from "@/components/layout/Container";
import { MetadataForm } from "@/components/uploads/MetadataForm";

export default async function EditPsalmPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Edit work</p>
      <h1 className="mb-6 text-3xl font-semibold">Edit psalm {id}</h1>
      <MetadataForm />
    </Container>
  );
}
