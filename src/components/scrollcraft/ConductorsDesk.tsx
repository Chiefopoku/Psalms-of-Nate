"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Download, FileSpreadsheet, Headphones, Music, Volume2 } from "lucide-react";

export function ConductorsDesk() {
  const [activePart, setActivePart] = useState<"ALL" | "S" | "A" | "T" | "B">("ALL");
  const [isPlaying, setIsPlaying] = useState(false);

  const parts = [
    { id: "ALL", label: "Full SATB Choir", desc: "Complete 4-part polyphonic harmony" },
    { id: "S", label: "Soprano", desc: "Melodic soaring theme & text articulation" },
    { id: "A", label: "Alto", desc: "Rich inner harmonic counter-melody" },
    { id: "T", label: "Tenor", desc: "Lyrical vocal lift & Akan sacred phrasing" },
    { id: "B", label: "Bass", desc: "Rhythmic harmonic anchor & foundation" },
  ] as const;

  return (
    <section
      id="conductors-desk"
      className="relative w-full bg-[#080706] text-[#FBF8F1] py-24 sm:py-32 px-6 sm:px-12 border-t border-[#D4AF37]/15"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
            <Music className="h-3.5 w-3.5" />
            <span>The Signature Move</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF8F1]">
            The Conductor&rsquo;s Desk
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89F91] leading-relaxed font-light">
            An interactive choral study station. Solo individual SATB parts, inspect vocal scores, and download official performance editions.
          </p>
        </div>

        {/* Desk Workstation Shell */}
        <div className="rounded-[2.5rem] border border-[#D4AF37]/25 bg-[#12100C] p-6 sm:p-10 md:p-12 shadow-2xl shadow-black/80 backdrop-blur-2xl">
          
          {/* Top Bar: Part Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {parts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setActivePart(part.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    activePart === part.id
                      ? "bg-[#D4AF37] text-[#0A0908] shadow-md shadow-[#D4AF37]/20 scale-105"
                      : "bg-white/5 text-[#FBF8F1]/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {part.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#D4AF37]">
              <span>KEY: F MAJOR</span>
              <span>&bull;</span>
              <span>METER: 4/4</span>
              <span>&bull;</span>
              <span>BPM: 76 LARGO</span>
            </div>
          </div>

          {/* Interactive Score Canvas */}
          <div className="my-8 rounded-2xl bg-[#090807] border border-white/5 p-6 sm:p-8 relative overflow-hidden">
            {/* Visual Musical Stave Representation */}
            <div className="space-y-6 select-none font-mono text-xs">
              
              {/* Soprano Stave */}
              <div
                className={`p-4 rounded-xl transition-all border ${
                  activePart === "ALL" || activePart === "S"
                    ? "bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#FBF8F1]"
                    : "opacity-25 border-transparent text-white/40"
                }`}
              >
                <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-[#D4AF37]">
                  <span>[SOPRANO]</span>
                  <span>Madesr&epsilon; &mdash; Theme A</span>
                </div>
                <div className="tracking-[0.25em] font-light text-xs sm:text-sm overflow-x-auto whitespace-nowrap py-1">
                  &vert;&sim; Gye me kra, O Awrade san bra &sim;&vert;&sim; M&apos;ani da wo so daa &sim;&vert;
                </div>
              </div>

              {/* Alto Stave */}
              <div
                className={`p-4 rounded-xl transition-all border ${
                  activePart === "ALL" || activePart === "A"
                    ? "bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#FBF8F1]"
                    : "opacity-25 border-transparent text-white/40"
                }`}
              >
                <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-[#D4AF37]">
                  <span>[ALTO]</span>
                  <span>Harmonic Counter-Subject</span>
                </div>
                <div className="tracking-[0.25em] font-light text-xs sm:text-sm overflow-x-auto whitespace-nowrap py-1">
                  &vert;&sim; Gye me, gye me, tie me sufre &sim;&vert;&sim; Wo na woy&epsilon; me guank&epsilon;se &sim;&vert;
                </div>
              </div>

              {/* Tenor Stave */}
              <div
                className={`p-4 rounded-xl transition-all border ${
                  activePart === "ALL" || activePart === "T"
                    ? "bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#FBF8F1]"
                    : "opacity-25 border-transparent text-white/40"
                }`}
              >
                <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-[#D4AF37]">
                  <span>[TENOR]</span>
                  <span>Soaring Akan Line</span>
                </div>
                <div className="tracking-[0.25em] font-light text-xs sm:text-sm overflow-x-auto whitespace-nowrap py-1">
                  &vert;&sim; San bra, bra b&epsilon;gye me &sim;&vert;&sim; Me wer&epsilon; hy&epsilon; wo mu &sim;&vert;
                </div>
              </div>

              {/* Bass Stave */}
              <div
                className={`p-4 rounded-xl transition-all border ${
                  activePart === "ALL" || activePart === "B"
                    ? "bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#FBF8F1]"
                    : "opacity-25 border-transparent text-white/40"
                }`}
              >
                <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-[#D4AF37]">
                  <span>[BASS]</span>
                  <span>Organ & Foundation Plinth</span>
                </div>
                <div className="tracking-[0.25em] font-light text-xs sm:text-sm overflow-x-auto whitespace-nowrap py-1">
                  &vert;&sim; O Nyame, san bra &sim;&vert;&sim; Wo nko ara ne me botan &sim;&vert;
                </div>
              </div>

            </div>

            {/* Audio Waveform Simulator */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="h-10 w-10 rounded-full bg-[#D4AF37] text-[#0A0908] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
                <div>
                  <div className="text-xs font-semibold text-[#FBF8F1]">
                    {isPlaying ? "Simulating Audio Playback..." : "Audio Preview: Madesrɛ (Chamber Rehearsal)"}
                  </div>
                  <div className="text-[11px] text-[#A89F91]">
                    Active Focus: {parts.find((p) => p.id === activePart)?.label}
                  </div>
                </div>
              </div>

              {/* Animated Equalizer Waves */}
              <div className="flex items-end gap-1 h-6">
                {[40, 70, 30, 85, 55, 95, 60, 45, 80, 65, 90, 50, 75, 40].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#D4AF37] rounded-full transition-all duration-300"
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : "20%",
                      opacity: isPlaying ? 0.9 : 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Download & Rehearsal Export Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            <a
              href="/scores/madesre-my-plea.pdf"
              download
              className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#D4AF37]/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="h-5 w-5 text-[#D4AF37]" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#FBF8F1] group-hover:text-[#D4AF37]">
                    Full SATB Score (PDF)
                  </div>
                  <div className="text-[11px] text-[#A89F91]">Printable choir octavo</div>
                </div>
              </div>
              <Download className="h-4 w-4 text-[#A89F91] group-hover:text-[#D4AF37]" />
            </a>

            <a
              href="/midi/madesre-my-plea.mid"
              download
              className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#D4AF37]/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Music className="h-5 w-5 text-[#D4AF37]" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#FBF8F1] group-hover:text-[#D4AF37]">
                    Rehearsal MIDI File
                  </div>
                  <div className="text-[11px] text-[#A89F91]">Part-separated practice track</div>
                </div>
              </div>
              <Download className="h-4 w-4 text-[#A89F91] group-hover:text-[#D4AF37]" />
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-between p-4 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition-all group sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-[#D4AF37]" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#D4AF37]">
                    Licensing & Inquiries
                  </div>
                  <div className="text-[11px] text-[#FBF8F1]/70">For choir festivals & recordings</div>
                </div>
              </div>
              <Check className="h-4 w-4 text-[#D4AF37]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
