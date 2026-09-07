"use client";

import { Disc3, ExternalLink, Play } from "lucide-react";
import Link from "next/link";

export function MasterpieceScrub() {
  return (
    <section
      id="masterpiece"
      data-sc-act="scrub"
      data-sc-span="2.2"
      className="relative w-full bg-[#070605] text-[#FBF8F1] overflow-hidden border-t border-[#D4AF37]/15"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* Full-bleed Scrub Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            data-sc-scrub
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-60"
            src="/videos/madesre-scrub.mp4"
          />
          {/* Subtle cinematic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-[#070605]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070605]/80 via-transparent to-[#070605]/80" />
        </div>

        {/* Top Masthead Info */}
        <div className="relative z-10 pt-16 px-6 sm:px-12 max-w-7xl mx-auto w-full flex justify-between items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-md mb-3">
              <Disc3 className="h-3.5 w-3.5 animate-spin text-[#D4AF37]" style={{ animationDuration: "8s" }} />
              <span>Interactive Performance Scrub</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FBF8F1] drop-shadow-lg">
              Madesrɛ <span className="font-sans text-xl sm:text-2xl font-light text-[#A89F91]">(My Plea)</span>
            </h2>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A89F91]">Choral Movement</span>
            <p className="font-serif text-lg font-bold text-[#D4AF37]">SATB &bull; Akan Sacred Suite</p>
          </div>
        </div>

        {/* Dynamic Lyric / Movement Overlay keyed to Scroll Progress */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center my-auto">
          {/* Phase 1 (Entry) */}
          <div
            className="transition-all duration-150"
            style={{
              display: "block",
              opacity: "calc(1 - var(--sc-p, 0) * 2.5)",
              transform: "translate3d(0, calc(var(--sc-p, 0) * -30px), 0)",
            }}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FBF8F1]/90 mb-2">
              &ldquo;In the secret place, the soul breathes its petition.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#A89F91]">Scroll to scrub performance</p>
          </div>

          {/* Phase 2 (Crescendo / Midpoint) */}
          <div
            className="transition-all duration-150 absolute inset-x-0 top-0"
            style={{
              opacity: "calc(1 - abs(var(--sc-p, 0) - 0.5) * 3)",
              transform: "translate3d(0, calc((var(--sc-p, 0) - 0.5) * -20px), 0)",
            }}
          >
            <p className="font-serif italic text-2xl sm:text-4xl font-bold text-[#D4AF37] mb-2 drop-shadow-md">
              &ldquo;Gye me kra... O Lord, redeem my soul.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#FBF8F1]/80">Polyphonic choir counterpoint swells</p>
          </div>

          {/* Phase 3 (Resolution / Climax) */}
          <div
            className="transition-all duration-150 absolute inset-x-0 top-0"
            style={{
              opacity: "calc((var(--sc-p, 0) - 0.7) * 3.3)",
              transform: "translate3d(0, calc((1 - var(--sc-p, 0)) * 20px), 0)",
            }}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FBF8F1] mb-2">
              &ldquo;The dawn breaks; the praise ascends.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Peace installed through sacred harmony</p>
          </div>
        </div>

        {/* Bottom Timeline & Controls */}
        <div className="relative z-10 pb-12 px-6 sm:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D4AF37]">LIVE SCRUBBER</span>
            <div className="w-32 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D4AF37] origin-left"
                style={{ transform: "scaleX(var(--sc-p, 0))" }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/library"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0A0908] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-all shadow-lg"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Full Song Library</span>
            </Link>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-medium text-white backdrop-blur hover:bg-white/20 transition-all"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
