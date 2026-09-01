"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Reflects what's actually in this repo's package.json / README — nothing
// aspirational, nothing added just to pad the list out.
const stack = [
  "Next.js 15 (App Router)",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Turborepo",
  "pnpm Workspaces",
  "Framer Motion",
  "TanStack Query",
  "shadcn/ui",
  "Shared ESLint & Prettier Config",
  "jsPDF",
];

export const BuiltWith = () => {
  return (
    <section
      id="built-with"
      className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* <p className="text-primary mb-4 text-sm">06. Under The Hood</p> */}
        <h2 className="text-foreground mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          The Tech Behind This Portfolio
        </h2>
        <p className="text-muted-foreground mx-auto mb-9 max-w-none text-lg leading-relaxed">
          This portfolio doubles as a sample of how I set up a real codebase — a
          Turborepo + pnpm monorepo on Next.js App Router, already structured so
          a backend app can slot in later without a rewrite.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-9 flex flex-wrap justify-center gap-1.5"
      >
        {stack.map((item) => (
          <span
            key={item}
            className="border-border text-body hover:border-primary hover:bg-primary/5 hover:text-primary cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          >
            {item}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-border bg-card rounded-2xl border p-8"
      >
        <div className="text-foreground mb-3 flex items-center justify-center gap-2 text-base font-bold">
          <Sparkles size={17} className="text-primary" />
          AI-Assisted, Human-Reviewed
        </div>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Claude and Codex helped scaffold components, port content from the
          previous site, and move faster through day-to-day iteration. Every
          diff was read before it landed, and every call on architecture and
          code quality stayed mine — AI sped up the typing, not the thinking.
        </p>
      </motion.div>
    </section>
  );
};
