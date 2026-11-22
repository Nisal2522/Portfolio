"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

export default function CopyButton({ text, label = "Copy email" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button type="button" className="btn btn-outline" onClick={copy} aria-live="polite">
      {copied ? <CheckIcon width={16} height={16} /> : <CopyIcon width={16} height={16} />}
      {copied ? "Copied!" : label}
    </button>
  );
}
