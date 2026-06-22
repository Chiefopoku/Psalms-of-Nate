import { Container } from "@/components/layout/Container";
import { MetadataForm } from "@/components/uploads/MetadataForm";

export default function CreatePsalmPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">New work</p>
      <h1 className="mb-6 text-3xl font-semibold">Create psalm</h1>
      <MetadataForm />
    </Container>
  );
}
