import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "The Song That Cheers Us By the Way — How Psalms of Nate Began",
  "In his own words, composer Dr. Nathanael Adjei tells the story of Psalms of Nate — from a boy singing hymns in Ghana to writing sacred choral music in Twi (Akan) and English.",
  "/story"
);

export default function StoryPage() {
  return (
    <div className="story-page">
      <ScrollReveal />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="st-hero">
        <div className="st-hero-text" data-reveal>
          <p className="st-eyebrow">In his own words</p>
          <h1>The Song That Cheers Us <span className="st-serif">By the Way</span></h1>
          <p className="st-sub">How Psalms of Nate began</p>
        </div>
        <figure className="st-hero-photo" data-reveal>
          <img src="/images/revamp/nate-piano.jpg" alt="Dr. Nathanael Adjei at the piano" width="1000" height="1250" fetchPriority="high" />
        </figure>
      </section>

      {/* ── ESSAY ────────────────────────────────────────── */}
      <article className="st-body">
        <p className="st-lead" data-reveal>Before I ever wrote a note, I was a boy marching to class at primary school, singing a hymn I didn&rsquo;t fully understand yet but somehow already trusted: <em>In a little while we&rsquo;re going home&hellip; let us sing a song that will cheer us by the way.</em> I couldn&rsquo;t have told you then why those words lodged themselves so deep. But they did. Decades later, whenever I find myself at my wit&rsquo;s end, that line still returns to me &mdash; not as a memory, but as an instruction. Sing a song that will cheer you by the way. It has become something close to a personal creed, long before I knew it was one.</p>

        <p data-reveal>I was born into a home where music never really stopped. My grandfather played the accordion. My mother and every one of her siblings sang. My mother especially &mdash; she moved between Twi anthems and the classical hymn <em>Jesus, Joy of Man&rsquo;s Desiring</em> as easily as breathing, singing whatever the moment called for. She never sat me down to teach me what made a melody beautiful. She simply lived inside beautiful melodies, all day, every day, and I absorbed the ear for it without either of us noticing it was happening. That is, I think, the quietest and most important inheritance a parent can give a child.</p>

        <p data-reveal>My father gave me something more deliberate. Returning home from peacekeeping duty in Lebanon, he brought back a Casio keyboard for me. It wasn&rsquo;t a grand gesture explained with words &mdash; he simply put an instrument in my hands. Looking back now, I recognize it for what it was: my loved ones giving me, without ever calling it that, the gift of music itself.</p>

        <figure className="st-figure st-figure-wide" data-reveal>
          <img src="/images/revamp/nate-conducting.jpg" alt="Dr. Nathanael Adjei conducting the Phoenix Ghanaian SDA Church choir" width="1600" height="1000" loading="lazy" />
          <figcaption>Conducting the Phoenix Ghanaian SDA Church choir</figcaption>
        </figure>

        <h2 id="a-composer" data-reveal>&ldquo;Nat, you are a composer&rdquo;</h2>
        <p data-reveal>For a long time, I thought of myself as someone who played and sang &mdash; not someone who wrote. That changed in one sentence.</p>
        <p data-reveal>I was at the piano, playing a tune I&rsquo;d half-invented without thinking much of it, when Mr. Sam Asare-Bediako &mdash; a legend in Ghanaian choral music, someone I revered &mdash; stopped and asked whose composition it was. &ldquo;Bishop, it&rsquo;s just a random tune,&rdquo; I told him, genuinely dismissive of it. He looked at me and said, simply: &ldquo;Nat! You are a composer.&rdquo;</p>
        <figure className="st-figure st-figure-portrait" data-reveal>
          <img src="/images/revamp/sam-asare-bediako.jpg" alt="Mr. Sam Asare-Bediako, the mentor who named Nathanael a composer" width="636" height="960" loading="lazy" />
          <figcaption>Mr. Sam Asare-Bediako &mdash; the legend who named him a composer, and later his collaborator on <Link href="/psalms/yewo-nyame">Yɛwɔ Nyame</Link></figcaption>
        </figure>
        <blockquote className="st-pull" data-reveal>&ldquo;Nat! You are a composer.&rdquo;</blockquote>
        <p data-reveal>I don&rsquo;t think he knew, in that moment, what those five words would do. But that was the vote of confidence I didn&rsquo;t know I was waiting for. From a man of his stature, it wasn&rsquo;t flattery &mdash; it was a naming. And once he&rsquo;d named it, I couldn&rsquo;t go back to thinking of myself as merely a player of other people&rsquo;s music. I decided, right there, that I would write.</p>

        <h2 id="the-first-songs" data-reveal>The first songs</h2>
        <p data-reveal>My first real composition, <em>M&rsquo;aseda Ni</em>, came out of an assignment, not inspiration &mdash; Mr. Asare-Bediako had asked me to write something for an upcoming album launch. The melody didn&rsquo;t arrive at a piano or a desk. It came to me while I was driving home after a night call, the kind of bone-tired hour when the mind goes quiet enough for something else to speak. I grabbed my phone and recorded it before it could disappear. When I later scored it and sent it to him for review, he applauded it. I cannot overstate what that felt like &mdash; to have your very first work called excellent by someone whose ear you trust more than your own.</p>
        <p data-reveal><em>Madesrɛ</em> arrived differently, and just as unexpectedly. It was a night after Sabbath, and sleep wouldn&rsquo;t come. I sat at the piano and began playing with my right hand only, the way I had as a boy who could manage just one finger at a time &mdash; a kind of reaching back before I even knew that&rsquo;s what I was doing. In the depth of that night, the melody came. I had been praying for a song &mdash; a prayer set to music &mdash; to give to a mentor who was walking through a difficult season and needed to be reminded that he was not alone in it. That prayer became a piece other people now sing.</p>
        <figure className="st-figure st-figure-pair" data-reveal>
          <Link href="/psalms/maseda-ni"><img src="/images/revamp/maseda-ni.jpg" alt="Maseda Ni cover artwork" width="800" height="800" loading="lazy" /><figcaption>Maseda Ni <span className="st-serif">My Gratitude</span></figcaption></Link>
          <Link href="/psalms/madesre-my-plea"><img src="/images/revamp/madesre.jpg" alt="Madesrɛ (My Plea) cover artwork" width="800" height="800" loading="lazy" /><figcaption>Madesrɛ <span className="st-serif">My Plea</span></figcaption></Link>
        </figure>

        <h2 id="medicine-and-music" data-reveal>Where medicine and music meet</h2>
        <p data-reveal>I am a physician by training, and people sometimes ask how that squares with a life spent writing sacred choral music. I think of it this way: in Greek mythology, the same god presides over healing and over music. I have come to believe that&rsquo;s not a coincidence but a description of something true. I write sacred tunes because I believe melody can do some of the same work as medicine &mdash; it can harmonize the heart and soothe the soul in places a prescription cannot reach.</p>

        <h2 id="why-twi" data-reveal>Why Twi</h2>
        <p data-reveal>I write mostly in Twi, and the reasons run deeper than habit. It is the language I grew up singing the most songs in &mdash; its rhythm carries a melodic quality even in ordinary speech, and that pulled me toward it long before I understood why. It is also, simply, my mother tongue, and I have come to feel that composing in it is a kind of stewardship &mdash; carrying forward something that was given to me rather than inventing something new.</p>
        <p data-reveal>I have also set myself a harder task: writing hymns that can be sung beautifully in either Twi or English, the same tune serving both tongues without compromise to either. It is ambitious, and I won&rsquo;t claim to have mastered it &mdash; but I have succeeded a few times, and each success has felt like building a small bridge between two worlds that don&rsquo;t often meet in a hymnal.</p>
        <p data-reveal>What I want, when someone hears my work, is for it to move through them in layers: first the melody, reaching them before they&rsquo;ve decided anything; then the lyrics, moving them once they&rsquo;ve understood the words; and finally, a kind of resolve &mdash; a hope that outlasts the song itself. I have tried, in whatever way I can, to be God&rsquo;s merchant of hope.</p>

        <h2 id="the-hard-pieces" data-reveal>The hard pieces, and the doubt</h2>
        <p data-reveal>Not everything comes easily. <em>Yɛmfa Aseda</em> was the hardest anthem I have written, because I set out to do something beyond my usual reach &mdash; a full anthem in multiple movements, with real counterpoint, the kind of structural ambition that takes far longer to finish than it does to imagine.</p>
        <p data-reveal>And I would be dishonest if I said the doubt never comes. There have been seasons where I&rsquo;ve questioned this calling entirely &mdash; where the imposter syndrome rears its head and asks, quietly, whether any of this is really mine to do. I have never fully answered that question. I have simply kept writing through it, which I&rsquo;ve come to believe is its own kind of answer.</p>
        <p data-reveal>What has carried me through those seasons has been the people who believed in the music before I fully did &mdash; friends who offered their voices and their time to sing and record these songs so the world could hear them, without being asked twice.</p>
        <figure className="st-figure st-figure-wide" data-reveal>
          <img src="/images/revamp/nate-friends.jpg" alt="Dr. Nathanael Adjei with the friends who lent their voices to his music" width="1600" height="1000" loading="lazy" />
          <figcaption>The friends who lent their voices &mdash; my junior brother, second from right</figcaption>
        </figure>

        <h2 id="carried-further" data-reveal>Being carried further than I imagined</h2>
        <p data-reveal>Working with Musikteers Ensemble GH changed how I understand my own compositions. Seeing a piece I wrote performed by a large choir taught me things about it I hadn&rsquo;t known were there &mdash; how a song built for a big room breathes differently than one built for a small group, and how much a composition&rsquo;s true shape only reveals itself in performance.</p>
        <figure className="st-figure st-figure-pair" data-reveal>
          <span><img src="/images/revamp/nate-musikteers.jpg" alt="A choral ensemble in performance" width="1200" height="800" loading="lazy" /><figcaption>His works, performed by the Musikteers Ensemble</figcaption></span>
          <span><img src="/images/revamp/nate-ensemble.jpg" alt="The vocalists who performed Madesrɛ (My Plea)" width="1200" height="800" loading="lazy" /><figcaption>The voices of Madesrɛ <span className="st-serif">My Plea</span></figcaption></span>
        </figure>
        <p data-reveal>And then came Symphonials Ghana &mdash; one of the finest choral groups in the country &mdash; inviting me to record a live album with them. I think often about the distance between that invitation and the young man who used to give himself every excuse not to be a composer. It is one of the most humbling things that has happened to me, and I don&rsquo;t take a day of it for granted.</p>

        <h2 id="what-comes-next" data-reveal>What comes next, and what I hope outlasts me</h2>
        <p data-reveal>A good next twelve months, to me, looks like this: a website with the full catalogue finally operational, serving the choral music community with the things it actually needs &mdash; full scores, rehearsal parts, edifying songs it can put to immediate use. And it looks like continuing to mentor others the way I was once mentored, by a legend who heard something in a random tune and decided to say so out loud.</p>
        <p data-reveal>And fifty years from now, if someone picks up one of my scores, I hope for one thing above all: that the same spirit which moved me to write the piece moves them, too &mdash; that it carries them past the beauty of its melody and its words into something more lasting. A reason to hope.</p>
      </article>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="st-cta" data-reveal>
        <h2>From this heart, <span className="st-serif">to your choir.</span></h2>
        <div className="st-cta-actions">
          <Link href="/#compositions" className="st-btn"><Play size={15} fill="currentColor" /> Explore the catalogue</Link>
          <Link href="/about" className="st-textlink">Meet the composer <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
