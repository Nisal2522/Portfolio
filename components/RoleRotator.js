"use client";

import { useEffect, useState } from "react";

// Types each role, pauses, deletes it, then moves to the next one.
export default function RoleRotator({ roles }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (roles.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let pos = roles[0].length;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = roles[i];
      if (!deleting) {
        if (pos < word.length) {
          pos += 1;
          setText(word.slice(0, pos));
          timer = setTimeout(tick, 65);
        } else {
          deleting = true;
          timer = setTimeout(tick, 2400);
        }
      } else if (pos > 0) {
        pos -= 1;
        setText(word.slice(0, pos));
        timer = setTimeout(tick, 32);
      } else {
        deleting = false;
        i = (i + 1) % roles.length;
        timer = setTimeout(tick, 350);
      }
    };

    timer = setTimeout(tick, 0);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret" />
      </span>
    </>
  );
}
