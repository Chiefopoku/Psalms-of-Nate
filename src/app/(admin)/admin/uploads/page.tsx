import { Container } from "@/components/layout/Container";
import { UploadWizard } from "@/components/uploads/UploadWizard";

export default function UploadsPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Assets</p>
      <h1 className="mb-6 text-3xl font-semibold">Uploads</h1>
      <UploadWizard />
    </Container>
  );
}
