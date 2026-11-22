"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

// Page-wide polish: scroll progress bar, reveal-on-scroll,
// cursor spotlight on cards and a back-to-top button.
export default function Effects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0");
      setShowTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest(".spot") : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <a href="#top" className={`to-top${showTop ? " show" : ""}`} aria-label="Back to top" tabIndex={showTop ? 0 : -1}>
        <ArrowUpIcon width={20} height={20} />
      </a>
    </>
  );
}
