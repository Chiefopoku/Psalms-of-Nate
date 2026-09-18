"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export interface Photo {
  src: string;
  alt?: string;
  w: number;
  h: number;
}

// ponytail: matchMedia beats a resize listener + width math — 3 cols on md+, 2 below.
function useColumnCount() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setCols(mq.matches ? 3 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return cols;
}

// Adapted from the 21st.dev scroll-trigger parallax — repointed to framer-motion
// (already installed) and Lenis dropped so we don't hijack scroll site-wide.
export function PhotoWall({ images }: { images: Photo[] }) {
  const cols = useColumnCount();
  const wallRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({ target: wallRef, offset: ["start end", "end start"] });
  // Neighbouring columns drift in opposite directions → parallax. Hooks stay
  // unconditional (always 3) even when only 2 columns render.
  const y0 = useTransform(scrollYProgress, [0, 1], [46, -46]);
  const y1 = useTransform(scrollYProgress, [0, 1], [-38, 38]);
  const y2 = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const colY = [y0, y1, y2];

  // Greedy bin-pack: drop each photo into the currently shortest column (height
  // ∝ h/w at equal width). Keeps the columns ending roughly level so parallax
  // never opens a big empty gap. Each photo keeps its global index for the lightbox.
  const columns: { photo: Photo; index: number }[][] = Array.from({ length: cols }, () => []);
  const heights = new Array(cols).fill(0);
  images.forEach((photo, index) => {
    let shortest = 0;
    for (let i = 1; i < cols; i++) if (heights[i] < heights[shortest]) shortest = i;
    columns[shortest].push({ photo, index });
    heights[shortest] += photo.h / photo.w;
  });

  const close = () => setSelected(null);
  const step = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation();
    setSelected((i) => (i === null ? null : (i + delta + images.length) % images.length));
  };

  return (
    <>
      <div ref={wallRef} className="flex gap-3 sm:gap-4">
        {columns.map((column, ci) => (
          <motion.div
            key={ci}
            style={{ y: colY[ci] }}
            className={`flex-1 flex flex-col gap-3 sm:gap-4 ${ci === 1 ? "mt-6 sm:mt-10" : ""}`}
          >
            {column.map(({ photo, index }, order) => (
              <motion.button
                key={photo.src}
                type="button"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (order % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group block w-full overflow-hidden rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                onClick={() => setSelected(index)}
                aria-label={photo.alt ?? `Open photo ${index + 1}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt ?? `Photo ${index + 1}`}
                  width={photo.w}
                  height={photo.h}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </motion.button>
            ))}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={close}
          >
            <button className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors" onClick={close} aria-label="Close">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {images.length > 1 && (
              <button className="absolute left-4 z-10 text-white/80 hover:text-white transition-colors" onClick={(e) => step(e, -1)} aria-label="Previous">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
            )}

            <motion.div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selected}
                src={images[selected].src}
                alt={images[selected].alt ?? `Photo ${selected + 1}`}
                className="w-full h-full object-contain rounded-md max-h-[90vh]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {images.length > 1 && (
              <button className="absolute right-4 z-10 text-white/80 hover:text-white transition-colors" onClick={(e) => step(e, 1)} aria-label="Next">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-white/15 px-4 py-2 rounded-md">
              {selected + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
