"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Music, Sparkles } from "lucide-react";

export function DimensionalHero() {
  return (
    <section
      data-sc-act="pin"
      data-sc-span="2.2"
      className="relative w-full overflow-hidden bg-[#070605] text-[#FBF8F1]"
      style={{ height: "220vh" }}
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* ========================================================
            LAYER 1: Cathedral & Sanctuary Architecture (Parallax Rear)
            ======================================================== */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-75 will-change-transform"
          style={{
            transform: "translate3d(0, calc(var(--sc-p, 0) * 50px), 0) scale(calc(1 + var(--sc-p, 0) * 0.06))",
          }}
        >
          {/* Deep sacred gloom ground */}
          <div className="absolute inset-0 bg-[#070605]" />

          {/* High clerestory golden shafts & stained glass warmth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_15%,rgba(212,175,55,0.22),transparent_75%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(180,130,40,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(180,130,40,0.12),transparent_60%)]" />

          {/* Volumetric Sacred Light Rays */}
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <div className="absolute top-0 left-1/4 w-32 h-[85vh] bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent rotate-12 blur-2xl transform-gpu" />
            <div className="absolute top-0 right-1/4 w-32 h-[85vh] bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent -rotate-12 blur-2xl transform-gpu" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-[90vh] bg-gradient-to-b from-[#D4AF37]/35 via-[#FBF8F1]/15 to-transparent blur-3xl transform-gpu" />
          </div>

          {/* Gothic Cathedral Arch Lines & Nave Silhouettes (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15 stroke-[#D4AF37]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Grand central nave arch */}
            <path d="M720 80 Q520 280 400 900" strokeWidth="1.5" strokeDasharray="6 4" />
            <path d="M720 80 Q920 280 1040 900" strokeWidth="1.5" strokeDasharray="6 4" />
            
            {/* Outer gothic rib vaults */}
            <path d="M720 120 Q320 320 160 900" strokeWidth="1" opacity="0.6" />
            <path d="M720 120 Q1120 320 1280 900" strokeWidth="1" opacity="0.6" />
            
            {/* Pipe Organ Staves */}
            <g opacity="0.35" strokeWidth="1">
              <line x1="580" y1="300" x2="580" y2="700" />
              <line x1="610" y1="260" x2="610" y2="700" />
              <line x1="640" y1="230" x2="640" y2="700" />
              <line x1="670" y1="200" x2="670" y2="700" />
              <line x1="770" y1="200" x2="770" y2="700" />
              <line x1="800" y1="230" x2="800" y2="700" />
              <line x1="830" y1="260" x2="830" y2="700" />
              <line x1="860" y1="300" x2="860" y2="700" />
            </g>

            {/* Sacred Rose Window Rosette */}
            <circle cx="720" cy="180" r="70" strokeWidth="1.5" opacity="0.4" />
            <circle cx="720" cy="180" r="40" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
          </svg>

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-[#070605]/80" />
        </div>

        {/* ========================================================
            LAYER 2: Grand Typography Plane (BEHIND Subject, Z-Index 10)
            ======================================================== */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 text-center pointer-events-none px-4 will-change-transform select-none"
          style={{
            transform: "translate3d(0, calc(var(--sc-p, 0) * -75px), 0) scale(calc(1 - var(--sc-p, 0) * 0.05))",
            opacity: "calc(1 - var(--sc-p, 0) * 0.4)",
          }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37] backdrop-blur-md mb-4 shadow-lg shadow-black/40">
            <Sparkles className="h-3 w-3" />
            <span>Sacred Ghanaian Choral Music</span>
          </div>

          {/* Main Title split across flanks so Dr. Nate stands between PSALMS and NATE */}
          <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-8">
            <h1 className="w-full flex items-baseline justify-between font-serif font-bold tracking-tight text-[#FBF8F1] leading-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-left">
                PSALMS
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light tracking-[0.3em] text-[#D4AF37] uppercase opacity-90 mx-auto">
                OF
              </span>
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-right text-[#D4AF37]">
                NATE
              </span>
            </h1>
          </div>

          <p className="mt-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.35em] text-[#A89F91] max-w-2xl font-light drop-shadow">
            Original Choral Suites &bull; Sacred Hymns &bull; Scripture-Rooted Worship
          </p>
        </div>

        {/* ========================================================
            LAYER 3: Focal Subject Plane (Dr. Nate Transparent Cutout, Z-Index 20)
            ======================================================== */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pointer-events-none will-change-transform"
          style={{
            transform: "translate3d(0, calc(var(--sc-p, 0) * 35px), 0) scale(calc(1 + var(--sc-p, 0) * 0.03))",
          }}
        >
          <div className="relative w-full max-w-xl sm:max-w-2xl flex justify-center items-end">
            
            {/* Ambient Gold Rim Glow behind Dr. Nate's silhouette */}
            <div className="absolute bottom-16 w-80 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.25),transparent_70%)] blur-2xl transform-gpu pointer-events-none" />

            {/* Authentic Transparent Alpha Cutout of Dr. Nathanael Adjei */}
            <img
              src="/images/scrollcraft/nate-cutout.png"
              alt="Dr. Nathanael Adjei, Physician and Sacred Music Composer"
              className="relative z-20 h-[58vh] sm:h-[68vh] md:h-[75vh] max-h-[760px] w-auto object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]"
            />

            {/* Seamless Bottom Gradient Blend into Floor */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070605] via-[#070605]/80 to-transparent z-30 pointer-events-none" />
          </div>
        </div>

        {/* ========================================================
            LAYER 4: Foreground Atmosphere & Floating Sacred Particles (Z-Index 30)
            ======================================================== */}
        <div
          className="absolute inset-0 z-30 pointer-events-none overflow-hidden transition-transform duration-75 will-change-transform"
          style={{
            transform: "translate3d(0, calc(var(--sc-p, 0) * -120px), 0)",
          }}
        >
          {/* Floating Sacred Gold Dust Particles */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 rounded-full bg-[#D4AF37] opacity-60 blur-[1px] animate-pulse" style={{ animationDuration: "3s" }} />
          <div className="absolute top-1/2 right-1/5 w-2.5 h-2.5 rounded-full bg-[#FBF8F1] opacity-70 blur-[1px] animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-50 blur-[0.5px] animate-pulse" style={{ animationDuration: "2.5s" }} />
          <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-[#D4AF37] opacity-65 blur-[1px] animate-pulse" style={{ animationDuration: "3.5s" }} />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-[#D4AF37] opacity-40 blur-[2px] animate-pulse" style={{ animationDuration: "5s" }} />
        </div>

        {/* ========================================================
            LAYER 5: Narrative Beat Card & Direct Actions (Z-Index 40)
            ======================================================== */}
        <div className="relative z-40 w-full mt-auto pb-8 sm:pb-12 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
          
          {/* Narrative Beat arriving as user scrolls */}
          <div
            className="max-w-md text-center sm:text-left transition-all duration-150 will-change-transform bg-[#070605]/75 sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none backdrop-blur-md sm:backdrop-blur-none border border-white/5 sm:border-0"
            style={{
              transform: "translate3d(0, calc((1 - var(--sc-p, 0)) * 25px), 0)",
              opacity: "calc((var(--sc-p, 0) - 0.12) * 2.5)",
            }}
          >
            <div className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
              The Dual Calling
            </div>
            <p className="text-xs sm:text-sm text-[#FBF8F1]/90 leading-relaxed font-light">
              Healing the body as a physician. Lifting human hearts heavenward as a composer of Ghanaian sacred choral majesty.
            </p>
          </div>

          {/* Interactive Actions */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 transition-all duration-150 will-change-transform"
            style={{
              transform: "translate3d(0, calc((1 - var(--sc-p, 0)) * 20px), 0)",
              opacity: "calc((var(--sc-p, 0) - 0.15) * 2.2)",
            }}
          >
            <Link
              href="#repertoire"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#070605] px-6 py-3 text-xs sm:text-sm font-bold tracking-wide shadow-xl shadow-[#D4AF37]/20 hover:bg-[#E5C158] transition-all hover:scale-105"
            >
              <Music className="h-4 w-4" />
              <span>Explore Repertoire</span>
            </Link>

            <Link
              href="#masterpiece"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-[#FBF8F1] px-5 py-3 text-xs sm:text-sm font-semibold backdrop-blur-md hover:bg-white/20 transition-all"
            >
              <span>Watch Flagship Video</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Subtle scroll cue indicator */}
          <div
            className="hidden lg:flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#A89F91] transition-opacity duration-150"
            style={{ opacity: "calc(1 - var(--sc-p, 0) * 3)" }}
          >
            <span>Scroll</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#D4AF37]" />
          </div>
        </div>

        {/* Golden Progress Line at base of stage */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/10 z-50">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FBF8F1] to-[#D4AF37] origin-left"
            style={{ transform: "scaleX(var(--sc-p, 0))" }}
          />
        </div>
      </div>
    </section>
  );
}
