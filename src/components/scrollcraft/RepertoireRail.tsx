"use client";

import { mockPsalms } from "@/data/mock-psalms";
import { ArrowRight, Download, FileText, Music2 } from "lucide-react";
import Link from "next/link";

export function RepertoireRail() {
  return (
    <section
      id="repertoire"
      data-sc-act="pan"
      data-sc-span="2.5"
      className="relative w-full bg-[#0E0C09] text-[#FBF8F1] overflow-hidden border-t border-[#D4AF37]/15"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 sm:px-12 py-10">
        
        {/* Header Bar */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-2">
              <Music2 className="h-4 w-4" />
              <span>Choral Anthology & Discography</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF8F1]">
              The Sacred Repertoire
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A89F91]">Scroll to pan collection</span>
            <Link
              href="/library"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:underline"
            >
              <span>All 8 Works</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Lateral Pan Rail */}
        <div className="w-full overflow-visible">
          <div
            data-sc-pan="1"
            className="flex gap-6 sm:gap-8 will-change-transform transition-transform duration-75"
            style={{ width: "max-content", paddingRight: "10vw" }}
          >
            {mockPsalms.map((psalm, idx) => (
              <div
                key={psalm.id}
                className="group relative w-[290px] sm:w-[350px] md:w-[380px] rounded-3xl border border-white/10 bg-[#16130F] p-5 shadow-2xl flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                {/* Artwork Box */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-[#0A0908] border border-white/5">
                  <img
                    src={psalm.coverUrl || "/images/scrollcraft/madesre-main.jpg"}
                    alt={psalm.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16130F] via-transparent to-transparent opacity-60" />
                  
                  {/* Status & Index pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#0A0908]/80 text-[#D4AF37] text-[10px] font-mono border border-[#D4AF37]/30 backdrop-blur-md">
                      0{idx + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#0A0908]/80 text-[#FBF8F1] text-[10px] font-semibold uppercase tracking-wider border border-white/10 backdrop-blur-md">
                      {psalm.mood}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FBF8F1] mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {psalm.title}
                  </h3>
                  <p className="text-xs text-[#A89F91] line-clamp-2 leading-relaxed mb-4 font-light">
                    {psalm.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {psalm.instruments.map((inst) => (
                      <span
                        key={inst}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-[#FBF8F1]/70 border border-white/5"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/psalms/${psalm.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FBF8F1] hover:text-[#D4AF37] transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>View Psalm</span>
                  </Link>

                  <a
                    href="#conductors-desk"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Score (PDF)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
