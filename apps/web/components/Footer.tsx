"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

// Client component so the copyright year is computed in the browser (like
// the original SPA) instead of being frozen at server build time.
export const Footer = () => {
  return (
    <footer className="border-border border-t px-6 py-11 text-center sm:px-10">
      <div className="mb-6 flex justify-center gap-7 text-sm font-semibold">
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Resume
        </Link>
      </div>
      <div className="mb-5 flex justify-center gap-4">
        <a
          href="https://github.com/adeelazad591"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-muted-foreground hover:bg-muted hover:text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
        >
          <Github size={19} />
        </a>
        <a
          href="https://linkedin.com/in/adeelazad591"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-muted-foreground hover:bg-muted hover:text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
        >
          <Linkedin size={19} />
        </a>
      </div>
      <p className="text-muted-foreground text-sm">
        Designed &amp; Built by{" "}
        <span className="text-foreground font-bold">Adeel Azad</span>
      </p>
      <p className="text-faint mt-1.5 text-xs tracking-wide">
        React &middot; TypeScript &middot; Next.js
      </p>
    </footer>
  );
};
