import Link from "next/link";
import { AudioLines, Mail, Music2 } from "lucide-react";
import { Container } from "./Container";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Library", "/library"],
      ["Released", "/released"],
      ["Unreleased", "/unreleased"],
      ["Projects", "/projects"]
    ]
  },
  {
    title: "Catalog",
    links: [
      ["Psalms", "/psalms"],
      ["Search", "/search"],
      ["About", "/about"],
      ["Contact", "/contact"]
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-[hsl(var(--foreground))] text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[hsl(var(--foreground))] shadow-xl shadow-black/20">
                <AudioLines className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold">Psalms of Nate</span>
                <span className="block text-sm text-white/50">let the praise rise</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/62">
              Original Ghanaian choral music, sacred hymns reimagined, and heartfelt compositions from Dr. Nathanael Adjei.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/42">{group.title}</h2>
              <nav className="mt-4 grid gap-3 text-sm text-white/68">
                {group.links.map(([label, href]) => (
                  <Link key={href} href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--accent))] text-white">
              <Music2 className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-lg font-semibold">Choir, worship, or licensing</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Send a note for choral use, collaborations, publishing details, or new music updates.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[hsl(var(--foreground))] transition hover:bg-white/85">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Psalms of Nate. All rights reserved.</p>
          <p>Ghanaian choral music for worship, inspiration, and Scripture-shaped praise.</p>
        </div>
      </Container>
    </footer>
  );
}
