import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/psalms/ContactForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Reach out for choral collaborations, worship use, and licensing — plus how permission and copyright work for Psalms of Nate scores.",
  "/contact"
);

const EMAIL = "psalmsofnate@gmail.com";

const socials: [string, string][] = [
  ["YouTube", "https://www.youtube.com/@PsalmsofNate"],
  ["Instagram", "https://www.instagram.com/psalms_of_nate/"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61576235281747"],
  ["TikTok", "https://www.tiktok.com/@psalms.of.nate"],
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact" description="Reach out for choral collaborations, worship use, licensing questions, or updates on new Psalms of Nate music." />

      <Container className="grid gap-16 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr]">
        {/* ── WAYS TO REACH ─────────────────────────── */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Get in touch</h2>
          <p className="mt-3 max-w-md text-foreground/70">
            The quickest way to reach Psalms of Nate is by email. You can also follow along and message on social.
          </p>
          <a href={`mailto:${EMAIL}`} className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]">
            <Mail size={16} /> {EMAIL}
          </a>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-foreground/70 transition hover:text-foreground">
                {label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* ── FORM ──────────────────────────────────── */}
        <div>
          <h2 className="mb-5 text-2xl font-semibold text-foreground">Send a message</h2>
          <ContactForm />
        </div>
      </Container>

      {/* ── PERMISSIONS & COPYRIGHT ───────────────── */}
      <section id="permissions" className="scroll-mt-24 border-t border-border bg-foreground/[0.03]">
        <Container className="py-12 sm:py-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]">Scores &amp; permissions</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">Using this music</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70">Psalms of Nate music is written for the church, and it is meant to be sung.</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Free to use — no permission needed</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-7 text-foreground/70">
                <li>Perform any work — in worship, at a concert, at a convention, in a competition</li>
                <li>Print or photocopy as many scores as your singers, instrumentalists, and accompanist need</li>
                <li>Record your performance and share it — YouTube, Facebook, WhatsApp, your church&apos;s channel</li>
                <li>Project the text for the congregation</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                All I ask: credit the composer (&ldquo;Music by Nathanael Adjei — Psalms of Nate&rdquo;) in your programme, video description, or announcement. Don&apos;t sell copies of the score. Don&apos;t arrange for publication or resell a modified version.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Tell me when you sing one</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Not a requirement — an invitation. I keep a record of every performance of these works and would genuinely love to know. Video is welcome but entirely optional.
              </p>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("We performed a Psalms of Nate work")}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--primary))] underline underline-offset-4">
                Tell me about your performance <ArrowUpRight size={14} />
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Write to me first for</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-7 text-foreground/70">
                <li>A commercial recording — Spotify, Apple Music, CD, paid download</li>
                <li>Arranging, re-orchestrating, or translating the work</li>
                <li>Publishing the score in a hymnal, collection, or anthology</li>
                <li>Film, television, or advertising</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-xs leading-6 text-foreground/60">
            © Nathanael Adjei / Psalms of Nate. Permission granted above; all other rights reserved. These are the current terms for scores on this site — any future change applies only to newly published works, not to scores you&apos;ve already downloaded.
          </p>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Scores & permissions enquiry")}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[hsl(var(--primary))]">
            <Mail size={16} /> Ask about a licence
          </a>
        </Container>
      </section>
    </div>
  );
}
