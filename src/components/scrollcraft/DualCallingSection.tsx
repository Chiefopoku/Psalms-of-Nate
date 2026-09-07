"use client";

import { Activity, BookOpen, Compass, HeartPulse, Mic2, ShieldCheck } from "lucide-react";

export function DualCallingSection() {
  return (
    <section
      data-sc-act="pin"
      data-sc-span="1.8"
      className="relative w-full bg-[#100E0B] text-[#FBF8F1] overflow-hidden border-t border-[#D4AF37]/15"
      style={{ height: "180vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 sm:px-12 py-16">
        
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.07),transparent_70%)]" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mb-10 z-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-2">
            The Dual Vocation
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF8F1]">
            One Heart. Two Sanctuaries.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89F91] leading-relaxed">
            Where medical healing meets sacred choral composition.
          </p>
        </div>

        {/* Converging Calling Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full z-10 items-stretch">
          
          {/* Wing A: The Physician */}
          <div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between transition-transform duration-100 will-change-transform shadow-2xl"
            style={{
              transform: "translate3d(calc((1 - var(--sc-p, 0)) * -40px), 0, 0)",
            }}
          >
            <div>
              <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-6">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#A89F91] mb-1">
                The Physician
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF8F1] mb-4">
                The Science of Healing
              </h3>
              <p className="text-sm sm:text-base text-[#A89F91] leading-relaxed mb-6 font-light">
                Caring for the physical temple. Grounded in empathy, medical precision, and clinical dedication to human life and restoration.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-[#FBF8F1]/80">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#D4AF37]" />
                <span>Clinical excellence & diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                <span>Compassion-driven patient advocacy</span>
              </div>
            </div>
          </div>

          {/* Wing B: The Composer */}
          <div
            className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.04] p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between transition-transform duration-100 will-change-transform shadow-2xl"
            style={{
              transform: "translate3d(calc((1 - var(--sc-p, 0)) * 40px), 0, 0)",
            }}
          >
            <div>
              <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6">
                <Mic2 className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-1">
                The Sacred Composer
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF8F1] mb-4">
                The Architecture of Praise
              </h3>
              <p className="text-sm sm:text-base text-[#A89F91] leading-relaxed mb-6 font-light">
                Composing polyphonic anthems, sacred hymns, and Highlife medleys that echo Scripture and elevate the spirit into God's presence.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#D4AF37]/20 text-xs text-[#FBF8F1]/80">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#D4AF37]" />
                <span>Scripture-rooted Akan & English text</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#D4AF37]" />
                <span>SATB choral arrangements & orchestra</span>
              </div>
            </div>
          </div>

        </div>

        {/* Harmonizing Epilogue Statement */}
        <div
          className="mt-10 text-center max-w-xl transition-opacity duration-150"
          style={{
            opacity: "calc((var(--sc-p, 0) - 0.4) * 2)",
          }}
        >
          <blockquote className="font-serif italic text-base sm:text-lg text-[#FBF8F1]/90">
            &ldquo;Medicine sustains the breath; music gives that breath its truest song of praise.&rdquo;
          </blockquote>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
            &mdash; Dr. Nathanael Adjei
          </p>
        </div>

      </div>
    </section>
  );
}
