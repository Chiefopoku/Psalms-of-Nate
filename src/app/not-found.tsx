import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-foreground/70">The requested page is not available.</p>
    </Container>
  );
}
