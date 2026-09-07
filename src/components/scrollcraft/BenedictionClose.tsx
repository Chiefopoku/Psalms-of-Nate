"use client";

import { ArrowRight, Heart, Mail, Music, Youtube } from "lucide-react";
import Link from "next/link";

export function BenedictionClose() {
  return (
    <section className="relative w-full bg-[#070605] text-[#FBF8F1] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background Sacred Bloom */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
          <Heart className="h-3.5 w-3.5 fill-current" />
          <span>The Benediction</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FBF8F1] leading-tight mb-6">
          Let Praise Rise, <br className="hidden sm:inline" />
          <span className="text-[#D4AF37] italic font-normal">One Psalm at a Time.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#A89F91] leading-relaxed font-light mb-12">
          From the sanctuary of choral harmony to the sanctuary of your daily devotion. Stream the works, introduce these hymns to your choir, or reach out to Dr. Nathanael Adjei.
        </p>

        {/* Major Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0A0908] px-8 py-4 text-sm font-bold tracking-wide shadow-xl shadow-[#D4AF37]/20 hover:bg-[#E5C158] transition-all hover:scale-105"
          >
            <Music className="h-4 w-4" />
            <span>Explore Complete Music Catalog</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-[#FBF8F1] px-7 py-4 text-sm font-semibold backdrop-blur-md hover:bg-white/15 transition-all"
          >
            <Mail className="h-4 w-4 text-[#D4AF37]" />
            <span>Commission or Invite Dr. Nate</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Direct Platform Links */}
        <div className="pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#A89F91]">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <Youtube className="h-4 w-4" />
            <span>YouTube Music</span>
          </a>
          <a
            href="https://music.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <Music className="h-4 w-4" />
            <span>Apple Music</span>
          </a>
          <Link
            href="/about"
            className="hover:text-[#D4AF37] transition-colors"
          >
            <span>About Dr. Nate</span>
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#D4AF37] transition-colors"
          >
            <span>Scores & Licensing</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
