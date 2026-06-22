import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/input";

export default function CreateProjectPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">New collection</p>
      <h1 className="mb-6 text-3xl font-semibold">Create project</h1>
      <Input placeholder="Project title" />
    </Container>
  );
}
