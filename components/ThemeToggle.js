"use client";

import { SunIcon, MoonIcon } from "./Icons";

// Both icons are rendered; CSS shows the right one for the current theme,
// so there is no flash or hydration mismatch.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button className="theme-btn" onClick={toggle} aria-label="Toggle light / dark mode" title="Toggle theme">
      <MoonIcon width={19} height={19} className="icon-moon" />
      <SunIcon width={19} height={19} className="icon-sun" />
    </button>
  );
}
