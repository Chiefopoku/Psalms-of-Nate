import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PsalmDownloads } from "@/components/psalms/PsalmDownloads";
import { MailingListSignup } from "@/components/psalms/MailingListSignup";
import { PsalmMetadata } from "@/components/psalms/PsalmMetadata";
import { PsalmPreview } from "@/components/psalms/PsalmPreview";
import { PsalmStreamingLinks } from "@/components/psalms/PsalmStreamingLinks";
import { mockPsalms } from "@/data/mock-psalms";

export default async function PsalmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const psalm = mockPsalms.find((item) => item.slug === slug);
  if (!psalm) notFound();

  return (
    <Container className="py-10">
      <PsalmPreview psalm={psalm} />
      <PsalmMetadata psalm={psalm} />
      <PsalmDownloads psalm={psalm} />
      <MailingListSignup />
      <PsalmStreamingLinks psalm={psalm} />
    </Container>
  );
}
