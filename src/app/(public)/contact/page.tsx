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
          <h2 className="max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">Using the music — permissions &amp; copyright</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Requesting scores</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Choir directors and musicians can request full scores and parts for any Psalms of Nate work by email. Please include the title and your choir or church.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Performing &amp; recording</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                You are free to perform Psalms of Nate works in worship — no permission needed. We only ask that you request written permission for recordings, broadcasts, or any commercial use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Copyright</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                All compositions, arrangements, lyrics, and scores are © Nathanael Adjei / Psalms of Nate. They may not be copied, arranged, republished, or sold without permission. Reproducing scores for your singers requires a licence.
              </p>
            </div>
          </div>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Scores & permissions enquiry")}`} className="mt-10 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[hsl(var(--primary))]">
            <Mail size={16} /> Request permission
          </a>
        </Container>
      </section>
    </div>
  );
}
