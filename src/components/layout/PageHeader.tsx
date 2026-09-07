import { Container } from "./Container";

export function PageHeader({ title, description }: Readonly<{ title: string; description?: string }>) {
  return (
    <section className="border-b border-border bg-foreground/[0.03]">
      <Container className="py-12 sm:py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]">Psalms of Nate</p>
        <h1 className="text-balance max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/70">{description}</p> : null}
      </Container>
    </section>
  );
}
