"use client";
import { useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Play, Search, Youtube } from "lucide-react";
import { mockPsalms } from "@/data/mock-psalms";
import { CoverflowCarousel, type CoverflowHandle } from "@/components/ui/coverflow-carousel";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScrollcraftRuntime } from "./ScrollcraftRuntime";

const intentions = ["All works", "Prayer", "Thanksgiving", "Praise"] as const;
type Intention = typeof intentions[number];
const groups: Record<string, Intention> = {
  "madesre-my-plea": "Prayer", "gye-me-kra": "Prayer", "maseda-ni": "Thanksgiving",
  "nkunimdie-nnwom": "Thanksgiving", "heaven-akwantuo": "Praise", "we-praise-thee": "Praise",
  "yesu-2": "Praise", "yewo-nyame": "Praise",
  // Spirit assigned for the manuscript index filter — adjust if the composer prefers different groupings.
  "aseda-highlife-medley": "Thanksgiving", "onyame-waseda-ni": "Thanksgiving",
  "odo-ben-ni": "Thanksgiving", "ko-pa": "Prayer", "ebeye-yie": "Prayer"
};
const featuredVideo = "https://www.youtube.com/watch?v=vudW7fytO7E";

export function ChoralExperience() {
  const [intention, setIntention] = useState<Intention>("All works");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [scoreSpirit, setScoreSpirit] = useState<Intention>("All works");
  const cover = useRef<CoverflowHandle>(null);
  const selectedWorks = mockPsalms.filter(w => intention === "All works" || groups[w.slug] === intention);
  // Every work with cover artwork gets a card in the catalogue.
  const withCover = (w: typeof mockPsalms[number]) => !!w.coverUrl;
  const catalogueCount = mockPsalms.filter(withCover).length;
  const covered = selectedWorks.filter(withCover);
  const activeWork = covered[Math.min(active, covered.length - 1)] ?? covered[0];
  // Drop filter tabs that would show no covers (e.g. Prayer, whose works have none).
  const availableIntentions = ["All works", ...intentions.filter(v => v !== "All works" && mockPsalms.some(w => withCover(w) && groups[w.slug] === v))] as Intention[];
  // Manuscript index: every work with a downloadable score, filtered on its own spirit + search (independent of the catalogue tabs above).
  const scores = mockPsalms.filter(w => w.scoreUrl);
  const scoreSpirits = ["All works", ...intentions.filter(v => v !== "All works" && scores.some(w => groups[w.slug] === v))] as Intention[];
  const scoreWorks = scores.filter(w =>
    (scoreSpirit === "All works" || groups[w.slug] === scoreSpirit) &&
    `${w.title} ${w.subtitle ?? ""}`.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

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
          <p className="lb-hero-sub">Sacred choral music, rooted in faith. Akan (Twi) &amp; English, for voices gathered together.</p>
          <div className="lb-hero-actions">
            <a className="lb-btn" href="#compositions"><Play size={16} fill="currentColor" /> Explore the catalogue</a>
            <a className="lb-btn-yt" href="https://www.youtube.com/@PsalmsofNate" target="_blank" rel="noopener noreferrer"><Youtube size={18} /> Listen on YouTube</a>
            <span className="lb-hero-meta">{catalogueCount} works · Akan (Twi) &amp; English</span>
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
          style={{ ["--muted" as string]: "44 24% 88%", ["--ring" as string]: "40 45% 55%" } as CSSProperties}
        >
          <CoverflowCarousel
            key={intention}
            ref={cover}
            label="Composition covers"
            cardWidth="clamp(200px, 30vw, 360px)"
            onSelect={setActive}
            slides={covered.map(w => ({ src: w.coverUrl ?? "", alt: `${w.title} cover artwork` }))}
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
          <div className="lb-feature-head">
            <p className="lb-eyebrow">The featured film</p>
            <h2 id="lb-feat-title">Madesrɛ <span className="lb-serif">My Plea</span></h2>
            <p className="lb-feature-lead">A performance film of the prayer that opens the catalogue — SATB choir, piano and strings, sung in Akan (Twi).</p>
          </div>
          <a className="lb-feature-frame" href={featuredVideo} target="_blank" rel="noopener noreferrer" aria-label="Watch Madesrɛ (My Plea) on YouTube">
            <img className="lb-feature-cover" src="/images/revamp/madesre-wide.jpg" alt="Madesrɛ (My Plea) cover artwork" width="1600" height="888" loading="lazy" />
            <span className="lb-feature-play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
            <div className="lb-feature-copy">
              <p className="lb-eyebrow">The featured film</p>
              <h2>Madesrɛ <span className="lb-serif">My Plea</span></h2>
              <span className="lb-textlink">Watch on YouTube <ArrowUpRight size={17} /></span>
            </div>
          </a>
          <p className="lb-feature-hint" aria-hidden="true">Scroll to play</p>
        </div>
      </section>

      {/* ── INTIMACY: the composer (scroll-tilt reveal) ─────────── */}
      <section id="inspiration" className="lb-composer" aria-labelledby="lb-bio-title">
        <ContainerScroll
          titleComponent={
            <div className="lb-composer-head">
              <p className="lb-eyebrow">The composer</p>
              <h2 id="lb-bio-title">A prayer begins with one voice. <span className="lb-serif">Harmony gives it a home.</span></h2>
            </div>
          }
        >
          <div className="lb-composer-card">
            <img src="/images/revamp/nate-composer.jpg" alt="Dr. Nathanael Adjei" width="933" height="1400" loading="lazy" />
            <div className="lb-composer-bio">
              <div className="lb-composer-name">
                <h3>Nathanael Adjei</h3>
                <p className="lb-composer-role">Composer &amp; Physician</p>
              </div>
              <p>Scripture, sacred hymnody and the warmth of Ghanaian choral expression shape the music of Psalms of Nate. Through Akan (Twi) and English, these compositions give voice to prayer, thanksgiving and praise.</p>
              <Link className="lb-textlink" href="/about">Meet the composer <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* ── TRUST: the manuscript index ─────────────────────────── */}
      <section id="manuscripts" className="lb-scores" data-sc-act="flow" aria-labelledby="lb-scores-title">
        <header className="lb-scores-head" data-choral-reveal>
          <div className="lb-scores-headline">
            <p className="lb-eyebrow">The manuscripts</p>
            <h2 id="lb-scores-title">From this heart. <span className="lb-serif">To your choir.</span></h2>
            <p className="lb-scores-sub">Downloadable scores for every voice — for choirs, directors and worship teams to begin.</p>
          </div>
          <div className="lb-scores-tools">
            <div className="lb-scores-filter" role="group" aria-label="Filter scores by spirit">
              {scoreSpirits.map(s => (
                <button key={s} type="button" aria-pressed={scoreSpirit === s} onClick={() => setScoreSpirit(s)}>{s === "All works" ? "All" : s}</button>
              ))}
            </div>
            <label className="lb-search"><Search size={17} /><span className="sr-only">Search manuscripts</span>
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find a composition…" type="search" />
            </label>
          </div>
        </header>
        <p className="lb-scores-count" role="status">{scoreWorks.length} {scoreWorks.length === 1 ? "score" : "scores"}{scoreSpirit !== "All works" ? ` · ${scoreSpirit}` : ""}</p>
        <div aria-live="polite" className="lb-scores-list">
          {scoreWorks.length ? scoreWorks.map(w => (
            <article className="lb-score" key={w.id}>
              <Link href={`/psalms/${w.slug}`} className="lb-score-thumb" tabIndex={-1} aria-hidden="true">
                {w.coverUrl ? <img src={w.coverUrl} alt="" loading="lazy" /> : <span className="lb-score-thumb-fallback"><BookOpen size={18} /></span>}
              </Link>
              <div className="lb-score-main">
                <h3><Link href={`/psalms/${w.slug}`}>{w.title}</Link></h3>
                {w.subtitle ? <p className="lb-score-sub">{w.subtitle}</p> : null}
                <ul className="lb-score-meta">
                  {w.instruments[0] ? <li>{w.instruments[0]}</li> : null}
                  {groups[w.slug] ? <li>{groups[w.slug]}</li> : null}
                  {w.tempo ? <li>{w.tempo}</li> : null}
                </ul>
              </div>
              <div className="lb-score-actions">
                {w.streamingUrl ? <a className="lb-score-listen" href={w.streamingUrl} target="_blank" rel="noopener noreferrer"><Youtube size={15} /> Listen</a> : null}
                {w.scoreUrl
                  ? <a className="lb-score-pdf" href={w.scoreUrl} download aria-label={`Download ${w.title} score PDF`}>PDF <ArrowDownToLine size={15} /></a>
                  : <span className="lb-scores-pending">Score soon</span>}
              </div>
            </article>
          )) : (
            <div className="lb-scores-empty">
              <p>No compositions match “{query}”.</p>
              <button type="button" onClick={() => { setQuery(""); setScoreSpirit("All works"); }}>Clear search and filters</button>
            </div>
          )}
        </div>
        <p className="lb-scores-foot">For performance permissions, arrangements and choir enquiries, <Link href="/contact" className="lb-textlink">contact Psalms of Nate <ArrowUpRight size={15} /></Link></p>
      </section>
    </div>
  );
}
