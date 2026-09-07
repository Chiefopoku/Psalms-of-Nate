"use client";
import { useEffect } from "react";

/** Lifecycle-safe React adapter for scrollcraft's data-attribute vocabulary. */
export function ScrollcraftRuntime() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".choral-home");
    if (!root) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const compact = matchMedia("(max-width: 760px)");
    const acts = Array.from(root.querySelectorAll<HTMLElement>("[data-sc-act]"));
    const video = root.querySelector<HTMLVideoElement>("[data-sc-scrub]");
    let frame = 0, targetTime = 0;
    let videoVisible = false, stopped = false;
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const update = () => {
      frame = 0;
      if (stopped) return;
      const vh = innerHeight;
      const measurements = acts.map(act => ({ act, rect: act.getBoundingClientRect() }));
      for (const { act, rect } of measurements) {
        const pinned = (act.dataset.scAct === "scrub" || act.dataset.scAct === "pin") && !compact.matches && !motion.matches;
        const progress = pinned ? clamp(-rect.top / (rect.height - vh)) : clamp((vh - rect.top) / (rect.height + vh));
        act.style.setProperty("--sc-p", String(motion.matches ? 0.5 : progress));
        if (act.dataset.scAct === "scrub") {
          videoVisible = rect.top < vh && rect.bottom > 0;
          if (video && Number.isFinite(video.duration)) targetTime = clamp((vh - rect.top) / (rect.height + vh)) * Math.max(0, video.duration - 0.05);
        }
      }
      if (video && !motion.matches && videoVisible && video.readyState >= 2 && !video.error) {
        const delta = targetTime - video.currentTime;
        if (Math.abs(delta) > 0.035) {
          if (!video.seeking) video.currentTime += delta * (compact.matches ? 0.4 : 0.24);
          frame = requestAnimationFrame(update);
        }
      }
    };
    const schedule = () => { if (!frame && !stopped) frame = requestAnimationFrame(update); };
    const reveal = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); reveal.unobserve(entry.target); }
    }, { threshold: 0.08 });
    root.querySelectorAll("[data-choral-reveal]").forEach(el => reveal.observe(el));
    root.classList.add("motion-ready");
    document.documentElement.classList.add("sc-ready");
    const showVideo = () => {
      if (video && video.readyState >= 2) {
        video.classList.add("is-decoded");
        video.closest("[data-sc-act]")?.classList.add("sc-has-clip");
      }
      schedule();
    };
    const hideVideo = () => {
      video?.classList.remove("is-decoded");
      video?.closest("[data-sc-act]")?.classList.remove("sc-has-clip");
    };
    const configureVideo = () => {
      if (!video) return;
      if (motion.matches) { video.pause(); video.removeAttribute("src"); video.load(); hideVideo(); }
      else {
        let src = compact.matches ? video.dataset.mobileSrc : video.dataset.src;
        if (!video.canPlayType('video/mp4; codecs="avc1.42E01E"')) src = src?.replace('.mp4', '.webm');
        if (src && video.getAttribute("src") !== src) { video.src = src; video.load(); }
      }
      schedule();
    };
    video?.addEventListener("loadeddata", showVideo);
    video?.addEventListener("seeked", showVideo);
    video?.addEventListener("error", hideVideo);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", configureVideo);
    compact.addEventListener("change", configureVideo);
    const resize = new ResizeObserver(schedule);
    resize.observe(root);
    // ponytail: pointer parallax, hero only, hover pointers, off under reduced motion
    const hero = root.querySelector<HTMLElement>("[data-sc-hero]");
    const fine = matchMedia("(hover:hover) and (pointer:fine)");
    const onPointer = (e: PointerEvent) => {
      if (!hero || motion.matches || !fine.matches) return;
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
      hero.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
    };
    const clearPointer = () => { hero?.style.setProperty("--mx", "0"); hero?.style.setProperty("--my", "0"); };
    hero?.addEventListener("pointermove", onPointer, { passive: true });
    hero?.addEventListener("pointerleave", clearPointer);
    configureVideo();
    return () => {
      stopped = true; cancelAnimationFrame(frame); reveal.disconnect(); resize.disconnect();
      root.classList.remove("motion-ready");
      document.documentElement.classList.remove("sc-ready");
      removeEventListener("scroll", schedule); removeEventListener("resize", schedule);
      motion.removeEventListener("change", configureVideo); compact.removeEventListener("change", configureVideo);
      video?.removeEventListener("loadeddata", showVideo); video?.removeEventListener("seeked", showVideo);
      video?.removeEventListener("error", hideVideo); video?.pause();
      hero?.removeEventListener("pointermove", onPointer); hero?.removeEventListener("pointerleave", clearPointer);
    };
  }, []);
  return null;
}
