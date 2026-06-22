import { Container } from "@/components/layout/Container";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";
import { ArrowRight, Headphones, Music2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/70 bg-[hsl(var(--foreground))] text-white">
        <img
          src="/images/nate-performance.jpg"
          alt="Psalms of Nate live music performance"
          className="absolute inset-0 h-full w-full object-cover opacity-48"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground))_0%,hsl(var(--foreground)/0.88)_38%,hsl(var(--foreground)/0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(var(--foreground))] to-transparent" />
        <Container className="relative grid min-h-[calc(100vh-74px)] items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/78 backdrop-blur">
              Ghanaian choral worship
            </p>
            <h1 className="mt-7 text-balance text-6xl font-semibold leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
              Psalms of Nate
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/78">
              Original Ghanaian choral music, sacred hymns reimagined, and Scripture-rooted worship from Dr. Nathanael Adjei.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/library" className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[hsl(var(--foreground))] shadow-2xl shadow-black/20 transition hover:bg-white/86">
                Explore music
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/22 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/18">
                About Nathanael
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-md rounded-[2rem] border border-white/16 bg-white/12 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <img src="/images/nate-portrait.jpg" alt="Dr. Nathanael Adjei" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  ["Composer", "Sacred works"],
                  ["Physician", "Care & calling"],
                  ["Worshiper", "Let praise rise"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/45">{label}</p>
                    <p className="mt-1 text-sm font-semibold leading-tight">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid gap-6 py-12 lg:grid-cols-3">
        {[
          [Sparkles, "Faith meets art", "A sanctuary of music where worship, harmony, and sacred imagination meet."],
          [Music2, "Ghanaian choral sound", "Original compositions shaped by Ghanaian musical language and expressive choir writing."],
          [Headphones, "For worship and inspiration", "Songs for listening, study, choir use, and hearts lifted heavenward."]
        ].map(([Icon, title, text]) => (
          <section key={String(title)} className="rounded-[1.75rem] border border-white/75 bg-white/72 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-white shadow-lg shadow-teal-900/15">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{title as string}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/65">{text as string}</p>
          </section>
        ))}
      </Container>

      <section className="py-8">
        <Container className="overflow-hidden rounded-[2rem] bg-[hsl(var(--foreground))] text-white shadow-2xl shadow-slate-900/20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <img src="/images/nate-portrait.jpg" alt="Dr. Nathanael Adjei directing or performing music" className="h-full min-h-80 w-full object-cover" />
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--gold))]">Composer & musician</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Let the praise rise, one psalm at a time.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                Join Dr. Nathanael Adjei on a journey of lifting hearts and voices to heaven through music that echoes with hope, grace, and the glory of God.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/75">
                <span className="rounded-full bg-white/10 px-4 py-2">Sacred hymns</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Choral direction</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Scripture-rooted worship</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pt-12">
        <div className="flex flex-col gap-4 border-t border-border/60 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Featured music</p>
            <h2 className="mt-3 text-4xl font-semibold">Listen, study, sing.</h2>
          </div>
          <Link href="/library" className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">
            View full library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
      <PsalmGrid psalms={mockPsalms.slice(0, 3)} />
    </>
  );
}
