"use client";
import { useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Play, Search, Youtube } from "lucide-react";
import { mockPsalms } from "@/data/mock-psalms";
import { CoverflowCarousel, type CoverflowHandle } from "@/components/ui/coverflow-carousel";
import { ScrollcraftRuntime } from "./ScrollcraftRuntime";

const intentions = ["All works", "Prayer", "Thanksgiving", "Praise"] as const;
type Intention = typeof intentions[number];
const groups: Record<string, Intention> = {
  "madesre-my-plea": "Prayer", "gye-me-kra": "Prayer", "maseda-ni": "Thanksgiving",
  "nkunimdie-nnwom": "Thanksgiving", "heaven-akwantuo": "Praise", "we-praise-thee": "Praise",
  "yesu-2": "Praise", "yewo-nyame": "Praise"
};
const featuredVideo = "https://drive.google.com/file/d/1wFdaYPH9F8_KBIf0YUJiMJ6IRmJasuZB/view";
// Works with correct square cover artwork shown in the visual catalogue.
const COVERED = new Set(["madesre-my-plea", "gye-me-kra", "heaven-akwantuo", "maseda-ni", "we-praise-thee", "yesu-2", "nkunimdie-nnwom", "yewo-nyame"]);

export function ChoralExperience() {
  const [intention, setIntention] = useState<Intention>("All works");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const cover = useRef<CoverflowHandle>(null);
  const selectedWorks = mockPsalms.filter(w => intention === "All works" || groups[w.slug] === intention);
  // Only works whose real square cover art exists get a card in the catalogue.
  const withCover = (w: typeof mockPsalms[number]) => COVERED.has(w.slug);
  const covered = selectedWorks.filter(withCover);
  const activeWork = covered[Math.min(active, covered.length - 1)] ?? covered[0];
  // Drop filter tabs that would show no covers (e.g. Prayer, whose works have none).
  const availableIntentions = ["All works", ...intentions.filter(v => v !== "All works" && mockPsalms.some(w => withCover(w) && groups[w.slug] === v))] as Intention[];
  const manuscripts = selectedWorks.filter(w => `${w.title} ${w.subtitle ?? ""}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const available = mockPsalms.filter(w => w.scoreUrl).length;

  return (
    <div className="label-home choral-home">
      <ScrollcraftRuntime />

      {/* ── ARRIVAL ─────────────────────────────────────────────── */}
      <section id="composer" className="lb-hero" data-sc-act="flow" data-sc-hero aria-labelledby="lb-hero-title">
        <div className="lb-hero-media" aria-hidden="true">
          <img src="/images/revamp/nate-portrait.jpg" alt="" width="2048" height="1366" fetchPriority="high" />
        </div>
        <div className="lb-hero-inner">
          <p className="lb-eyebrow">Ghanaian composer &amp; physician</p>
          <h1 id="lb-hero-title">Nathanael<br />Adjei</h1>
          <p className="lb-hero-sub">Sacred choral music, rooted in faith. Akan &amp; English, for voices gathered together.</p>
          <div className="lb-hero-actions">
            <a className="lb-btn" href="#compositions"><Play size={16} fill="currentColor" /> Explore the catalogue</a>
            <a className="lb-btn-yt" href="https://www.youtube.com/@PsalmsofNate" target="_blank" rel="noopener noreferrer"><Youtube size={18} /> Listen on YouTube</a>
            <span className="lb-hero-meta">{COVERED.size} works · Akan &amp; English</span>
          </div>
        </div>
      </section>

      {/* ── BROWSE: the catalogue (primary) ─────────────────────── */}
      <section id="compositions" className="lb-catalogue" data-sc-act="flow" aria-labelledby="lb-cat-title">
        <header className="lb-cat-head" data-choral-reveal>
          <div>
            <p className="lb-eyebrow">The catalogue</p>
            <h2 id="lb-cat-title">Every work,<br />in one place.</h2>
          </div>
          <div className="lb-filter" role="group" aria-label="Filter by spirit of the music">
            {availableIntentions.map(v => (
              <button key={v} type="button" aria-pressed={intention === v} onClick={() => { setIntention(v); setActive(0); }}>{v}</button>
            ))}
          </div>
        </header>
        <p className="lb-cat-count" role="status">{covered.length} {covered.length === 1 ? "work" : "works"}{intention !== "All works" ? ` · ${intention}` : ""}</p>
        <div
          className="lb-cf"
          style={{ ["--muted" as string]: "260 6% 12%", ["--ring" as string]: "40 45% 68%" } as CSSProperties}
        >
          <CoverflowCarousel
            key={intention}
            ref={cover}
            label="Composition covers"
            cardWidth="clamp(200px, 30vw, 360px)"
            onSelect={setActive}
            slides={covered.map(w => ({ src: w.coverUrl, alt: `${w.title} cover artwork` }))}
          />
          {activeWork ? (
            <div className="lb-cf-caption" key={activeWork.id}>
              <span className="lb-card-group">{groups[activeWork.slug]}{activeWork.status !== "released" ? " · Coming 2026" : ""}</span>
              <h3>{activeWork.title}</h3>
              <p>{activeWork.subtitle}</p>
              <div className="lb-cf-controls">
                <button type="button" aria-label="Previous cover" onClick={() => cover.current?.prev()}><ArrowLeft size={18} /></button>
                <Link href={`/psalms/${activeWork.slug}`} className="lb-btn lb-btn-sm"><Play size={14} fill="currentColor" /> Open this work</Link>
                <button type="button" aria-label="Next cover" onClick={() => cover.current?.next()}><ArrowRight size={18} /></button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── PEAK: a cover opens into the film ───────────────────── */}
      <section id="performance" className="lb-feature" data-sc-act="scrub" data-sc-span="3.2" aria-labelledby="lb-feat-title">
        <div className="lb-feature-stage">
          <div className="lb-feature-frame">
            <img className="lb-feature-cover" src="/images/revamp/madesre.jpg" alt="Madesrɛ (My Plea) cover artwork" width="1200" height="1200" loading="lazy" />
            <video data-sc-scrub data-src="/videos/choral-scrub.mp4" data-mobile-src="/videos/choral-scrub-m.mp4" muted playsInline preload="none" aria-label="Silent excerpt from the Madesrɛ performance film" />
            <div className="lb-feature-copy">
              <p className="lb-eyebrow">The featured film</p>
              <h2 id="lb-feat-title">Madesrɛ <span className="lb-serif">My Plea</span></h2>
              <a href={featuredVideo} target="_blank" rel="noopener noreferrer" className="lb-textlink">Watch the film <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTIMACY: the composer ──────────────────────────────── */}
      <section id="inspiration" className="lb-bio" data-sc-act="flow" aria-labelledby="lb-bio-title">
        <figure className="lb-bio-photo" data-choral-reveal>
          <img src="/images/scrollcraft/nate-calling.jpg" alt="Dr. Nathanael Adjei" width="1800" height="1200" loading="lazy" />
        </figure>
        <div className="lb-bio-text" data-choral-reveal>
          <p className="lb-eyebrow">The composer</p>
          <h2 id="lb-bio-title">A prayer begins with one voice. <span className="lb-serif">Harmony gives it a home.</span></h2>
          <p>Scripture, sacred hymnody and the warmth of Ghanaian choral expression shape the music of Psalms of Nate. Through Akan and English, these compositions give voice to prayer, thanksgiving and praise.</p>
          <Link className="lb-textlink" href="/about">Meet the composer <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      {/* ── TRUST: the scores ───────────────────────────────────── */}
      <section id="manuscripts" className="lb-scores" data-sc-act="flow" aria-labelledby="lb-scores-title">
        <div className="lb-scores-intro" data-choral-reveal>
          <BookOpen size={30} strokeWidth={1.25} />
          <h2 id="lb-scores-title">From this heart. <span className="lb-serif">To your choir.</span></h2>
          <p>The manuscript collection, for every voice to begin.</p>
          <Link href="/contact" className="lb-textlink">Ask about a score <ArrowUpRight size={16} /></Link>
        </div>
        <div className="lb-scores-index">
          <div className="lb-scores-bar">
            <span>{available} PDF{available === 1 ? "" : "s"} available</span>
            <label className="lb-search"><Search size={17} /><span className="sr-only">Search manuscripts</span>
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find a composition…" type="search" />
            </label>
          </div>
          {available === 0 ? <p className="lb-scores-notice">PDF manuscripts are not yet available. For a score, please get in touch.</p> : null}
          <div aria-live="polite" className="lb-scores-rows">
            {manuscripts.length ? manuscripts.map(w => (
              <div className="lb-scores-row" key={w.id}>
                <div><Link href={`/psalms/${w.slug}`}>{w.title}</Link><span>{groups[w.slug]}</span></div>
                {w.scoreUrl
                  ? <a href={w.scoreUrl} download className="lb-scores-dl" aria-label={`Download ${w.title} PDF`}>PDF <ArrowDownToLine size={15} /></a>
                  : <span className="lb-scores-pending">Coming soon</span>}
              </div>
            )) : (
              <div className="lb-scores-empty">
                <p>No compositions match “{query}”.</p>
                <button type="button" onClick={() => { setQuery(""); setIntention("All works"); }}>Clear search and filters</button>
              </div>
            )}
          </div>
          <p className="lb-scores-foot">For performance permissions, arrangements and choir enquiries, <Link href="/contact">contact Psalms of Nate</Link>.</p>
        </div>
      </section>
    </div>
  );
}
