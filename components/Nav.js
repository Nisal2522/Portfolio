"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon, DownloadIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ cv, links }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [links]);

  return (
    <header className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main">
        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {cv && (
            <a className="btn btn-sm btn-outline" href={cv} download>
              <DownloadIcon width={15} height={15} /> Resume
            </a>
          )}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
