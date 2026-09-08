import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { ExpandableGallery } from "@/components/ui/gallery-animation";

const gallery = [
  { src: "/images/revamp/nate-composer.jpg", alt: "Dr. Nathanael Adjei, composer" },
  { src: "/images/revamp/nate-stairs.jpg", alt: "Dr. Nathanael Adjei" },
  { src: "/images/revamp/nate-chair.jpg", alt: "Dr. Nathanael Adjei" },
  { src: "/images/revamp/nate-piano.jpg", alt: "Dr. Nathanael Adjei at the piano" },
];

export const metadata = {
  title: "About Dr. Nathanael Adjei · Psalms of Nate",
  description:
    "Dr. Nathanael Adjei is a medical doctor, composer and church musician, and the founder of Psalms of Nate — Scripture-centered sacred and choral music blending Ghanaian heritage with Christian worship.",
};

const roles = [
  ["Founder & Director", "Psalms of Nate"],
  ["Music Director", "Pacific Ghanaian Adventist Fellowship"],
  ["Elder", "Phoenix Ghanaian SDA Church"],
  ["Physician", "Internal Medicine"],
];

const works: [string, string, string?][] = [
  ["Maseda Ni", "My Gratitude · SATB, in Twi (Akan)", "/psalms/maseda-ni"],
  ["We Praise Thee", "English anthem", "/psalms/we-praise-thee"],
  ["Our God Is Good", "English anthem"],
  ["In Heaven’s Courts a Savior Pleads", "English anthem"],
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ab-hero">
        <div className="ab-hero-text">
          <p className="ab-eyebrow">The composer</p>
          <h1>Nathanael <span className="ab-serif">Adjei</span></h1>
          <p className="ab-role">Medical Doctor · Composer · Church Musician</p>
          <p className="ab-lead">A passion for using music to proclaim the gospel and strengthen the faith of believers — Scripture-centered choral music in Twi (Akan) and English.</p>
          <div className="ab-hero-actions">
            <Link href="/#compositions" className="ab-btn"><Play size={15} fill="currentColor" /> Explore the catalogue</Link>
            <Link href="/contact" className="ab-textlink">Get in touch <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <figure className="ab-hero-photo">
          <img src="/images/revamp/nate-about-hero.jpg" alt="Dr. Nathanael Adjei" width="1000" height="1500" fetchPriority="high" />
        </figure>
      </section>

      {/* ── ROLES ────────────────────────────────────────── */}
      <section className="ab-roles" aria-label="Roles and ministry">
        {roles.map(([label, value]) => (
          <div className="ab-role-item" key={label}>
            <span className="ab-role-label">{label}</span>
            <span className="ab-role-value">{value}</span>
          </div>
        ))}
      </section>

      {/* ── BIOGRAPHY ────────────────────────────────────── */}
      <section className="ab-bio" aria-labelledby="ab-bio-title">
        <div className="ab-bio-head">
          <p className="ab-eyebrow">The story</p>
          <h2 id="ab-bio-title">A doctor’s hands, <span className="ab-serif">a worshipper’s heart.</span></h2>
        </div>
        <div className="ab-bio-body">
          <p className="ab-bio-lead">Dr. Nathanael Adjei is a medical doctor, composer and church musician with a passion for using music to proclaim the gospel and strengthen the faith of believers.</p>
          <p>He is the founder and director of <strong>Psalms of Nate</strong>, a music ministry dedicated to creating and promoting Scripture-centered sacred and choral music that blends African musical heritage with rich Christian worship traditions. Through his compositions and ministry, he seeks to inspire worship, discipleship, and a deeper relationship with Christ.</p>
          <p>An Internal Medicine Physician by profession, his love for music began as a young high-school student. What started as a modest introduction to the piano grew, through years of persistence, into a deep and abiding love for music that continues to this day. Today he is an active composer of choral music in both Twi (Akan) and English, collaborating with fellow composers to produce works that celebrate Ghanaian cultural and linguistic heritage.</p>
          <p>Dr. Adjei serves as an <strong>Elder</strong> of the Phoenix Ghanaian SDA Church and as <strong>Music Director</strong> of the Pacific Ghanaian Adventist Fellowship (PaGAF), where he provides leadership for worship and music ministry across the fellowship. He is committed to equipping musicians, nurturing congregational worship, and preserving the rich legacy of Ghanaian Adventist music — reflecting a desire to glorify God and lead others into meaningful worship through the transformative power of music.</p>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <section className="ab-gallery" aria-label="Gallery">
        <ExpandableGallery images={gallery} />
      </section>

      {/* ── SELECTED WORKS ───────────────────────────────── */}
      <section className="ab-works" aria-labelledby="ab-works-title">
        <div className="ab-works-head">
          <p className="ab-eyebrow">Selected works</p>
          <h2 id="ab-works-title">Compositions in Twi <span className="ab-serif">&amp; English.</span></h2>
          <Link href="/#compositions" className="ab-textlink">See the full catalogue <ArrowUpRight size={16} /></Link>
        </div>
        <ul className="ab-works-list">
          {works.map(([title, note, href]) => (
            <li key={title}>
              {href
                ? <Link href={href} className="ab-work-title ab-work-link">{title} <ArrowUpRight size={16} /></Link>
                : <span className="ab-work-title">{title}</span>}
              <span className="ab-work-note">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── ENSEMBLE / WORSHIP ───────────────────────────── */}
      <section className="ab-ensemble">
        <div className="ab-ensemble-head">
          <p className="ab-eyebrow">Worship &amp; collaboration</p>
          <h2>Music made <span className="ab-serif">for the gathered church.</span></h2>
          <p>Every composition is an invitation to worship — voices joined across generations and traditions, giving glory to God through the beauty of Ghanaian choral song. Dr. Adjei composes for and collaborates with fellow Ghanaian musicians and groups, including the Musikteers Ensemble, who produce and perform his works.</p>
          <p className="ab-family">He is married to Rita, and they are blessed with two sons, Nate and Alex.</p>
        </div>
        <div className="ab-ensemble-gallery">
          <figure>
            <img src="/images/revamp/nate-musikteers.jpg" alt="A choral ensemble in performance" width="1800" height="1200" loading="lazy" />
            <figcaption>His works, produced and performed by the Musikteers Ensemble</figcaption>
          </figure>
          <figure>
            <img src="/images/revamp/nate-ensemble.jpg" alt="The vocalists who performed Madesrɛ (My Plea)" width="1800" height="1200" loading="lazy" />
            <figcaption>The voices of Madesrɛ <span className="ab-serif">(My Plea)</span></figcaption>
          </figure>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="ab-cta">
        <h2>Bring these songs <span className="ab-serif">to your choir.</span></h2>
        <div className="ab-hero-actions">
          <Link href="/#manuscripts" className="ab-btn"><Play size={15} fill="currentColor" /> Browse the manuscripts</Link>
          <Link href="/contact" className="ab-textlink">Contact Psalms of Nate <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
