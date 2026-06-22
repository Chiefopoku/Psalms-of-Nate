import Link from "next/link";
import { AudioLines, Search } from "lucide-react";
import { routes } from "@/lib/routes";
import { Container } from "./Container";

const navItems = [
  ["Library", routes.library],
  ["Released", "/released"],
  ["Projects", routes.projects],
  ["Search", routes.search],
  ["About", "/about"]
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/82 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href={routes.home} className="flex items-center gap-3 font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--foreground))] text-white shadow-lg shadow-slate-900/15">
            <AudioLines className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base">Psalms of Nate</span>
            <span className="block text-xs font-medium text-foreground/50">Ghanaian choral worship</span>
          </span>
        </Link>
        <nav className="hidden flex-wrap items-center gap-1 rounded-full border border-border/70 bg-white/72 p-1 text-sm font-medium text-foreground/70 shadow-sm md:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-3 py-2 transition hover:bg-[hsl(var(--surface-soft))] hover:text-foreground">{label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href={routes.search} className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/70 text-foreground/70 shadow-sm transition hover:text-foreground md:hidden" aria-label="Search">
            <Search className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </header>
  );
}
