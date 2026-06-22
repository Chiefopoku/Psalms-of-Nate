import { Container } from "@/components/layout/Container";
import { Tabs } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Configuration</p>
      <h1 className="mb-6 text-3xl font-semibold">Settings</h1>
      <Tabs items={["Profile", "Firebase", "Publishing"]} />
    </Container>
  );
}
