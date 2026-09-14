"use client";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

const links = [
  ["The music", "/#compositions"],
  ["The composer", "/#composer"],
  ["Manuscripts", "/#manuscripts"],
  ["Library", "/library"],
  ["Resources", "/resources"],
  ["About", "/about"],
];

export function Navbar() {
  return (
    <header className="lb-nav">
      <Link href="/" className="lb-brand" aria-label="Psalms of Nate home">
        <span className="lb-brand-mark" aria-hidden="true" />
        <span className="lb-brand-text"><strong>Psalms of Nate</strong><small>Sacred Ghanaian Choral Music</small></span>
      </Link>
      <nav className="lb-nav-links" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="lb-nav-actions">
        <Link href="/library" className="lb-nav-search" aria-label="Search the library"><Search size={17} /></Link>
        <Link href="/#compositions" className="lb-nav-cta">Catalogue</Link>
        <details className="lb-nav-mobile" onKeyDown={e => { if (e.key === "Escape") { e.currentTarget.open = false; e.currentTarget.querySelector("summary")?.focus(); } }}>
          <summary aria-label="Open navigation"><Menu size={22} /></summary>
          <nav aria-label="Mobile navigation" onClick={e => { if ((e.target as HTMLElement).closest("a")) e.currentTarget.closest("details")?.removeAttribute("open"); }}>
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
