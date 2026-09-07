"use client";

// Site-wide magnetic-button effect. Mount once; it applies the same cursor-pull
// as <MagneticButton> to every button-like element by selector, so bespoke CTAs
// (hero, nav) and pill buttons all get it without wrapping each one.
// Opt out by putting an element (or an ancestor) behind [data-no-magnetic].
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = [
  ".lb-btn",
  ".lb-btn-yt",
  ".lb-btn-sm",
  ".lb-nav-cta",
  ".lb-nav-search",
  ".choral-button",
  "a[download]",
  'button[type="submit"]',
  "[data-magnetic]",
].join(",");

export function MagneticButtons({ distance = 0.3 }: { distance?: number }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Note: the transform transition lives in CSS (globals.css), not set here —
    // mutating inline styles on React-owned nodes triggers hydration warnings.
    // This controller only writes `transform`, and only on mousemove.
    let els: HTMLElement[] = [];
    const scan = () => {
      els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.closest("[data-no-magnetic]")
      );
    };
    // Re-scan shortly after mount/navigation so client-rendered buttons are caught.
    scan();
    const t = window.setTimeout(scan, 300);

    const onMove = (e: MouseEvent) => {
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (!r.width) continue;
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const radius = Math.max(r.width, r.height) * 0.9 + 40;
        el.style.transform =
          Math.hypot(dx, dy) < radius ? `translate(${dx * distance}px, ${dy * distance}px)` : "";
      }
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("mousemove", onMove);
      for (const el of els) el.style.transform = "";
    };
  }, [distance, pathname]);

  return null;
}
