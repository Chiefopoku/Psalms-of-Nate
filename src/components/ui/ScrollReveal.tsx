"use client";
import { useEffect } from "react";

// ponytail: one IntersectionObserver reveals any [data-reveal] on the page.
// Adds `reveal-ready` so CSS only hides elements once JS is here (no-JS safe).
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("reveal-ready");
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -12% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => { io.disconnect(); root.classList.remove("reveal-ready"); };
  }, []);
  return null;
}
