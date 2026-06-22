import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Psalms of Nate" description="A sanctuary of music where faith meets art through Ghanaian choral writing, sacred hymns, and worship rooted in Scripture." />
      <Container className="grid gap-5 py-10 md:grid-cols-3">
        <section className="rounded-3xl border border-white/75 bg-white/70 p-6 shadow-xl shadow-slate-900/10">
          <h2 className="text-xl font-semibold">The composer</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/68">Dr. Nathanael Adjei is a composer, physician, choral music director, and worshiper shaping songs for the church and the listening soul.</p>
        </section>
        <section className="rounded-3xl border border-white/75 bg-white/70 p-6 shadow-xl shadow-slate-900/10">
          <h2 className="text-xl font-semibold">The sound</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/68">The music draws from Ghanaian choral language, sacred hymnody, Scripture, and expressive harmonies that carry hope and grace.</p>
        </section>
        <section className="rounded-3xl border border-white/75 bg-white/70 p-6 shadow-xl shadow-slate-900/10">
          <h2 className="text-xl font-semibold">The purpose</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/68">Each piece is an invitation to worship: lifting hearts and voices heavenward, one psalm-inspired song at a time.</p>
        </section>
      </Container>
    </>
  );
}
