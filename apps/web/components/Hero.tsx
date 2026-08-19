"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import Link from "next/link";

import { TechMarquee } from "./TechMarquee";

const trustedCompanies = [
  "Bright Byte Consulting",
  "COSMO",
  "Knowledge Platform",
  "TEO International",
  "Global Bridge Solutions",
  "Medialinkers",
];

const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/cv/Adeel_Azad_Senior_Frontend_Developer_Resume.pdf";
  link.download = "Adeel_Azad_Senior_Frontend_Developer_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const Hero = () => {
  return (
    <header
      id="top"
      className="relative overflow-hidden px-6 pb-16 pt-24 text-center sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(680px_360px_at_50%_-6%,color-mix(in_srgb,var(--color-primary)_7%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary mb-5 text-sm sm:text-base"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Adeel Azad<span className="text-primary">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-body text-muted-foreground text-h1 mt-2 font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          I bring ideas to the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-body mx-auto mt-7 max-w-2xl text-balance text-xl leading-relaxed"
        >
          Frontend Engineer crafting accessible, intuitive, and human-centered
          web experiences with AI-augmented development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TechMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3.5"
        >
          <Link
            href="/#projects"
            className="bg-primary hover:bg-primary/90 rounded-full px-8 py-3 text-sm font-semibold leading-[25px] text-white transition-colors"
          >
            View My Work
          </Link>
          <button
            type="button"
            onClick={handleResumeDownload}
            className="border-border bg-card text-foreground hover:border-primary hover:text-primary inline-flex cursor-pointer items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors"
          >
            <FileText size={17} /> Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <div className="border-border/80 dark:border-border/60 dark:bg-muted/35 bg-muted/50 mx-auto max-w-4xl rounded-2xl border px-5 py-6 shadow-sm">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span
                className="bg-border h-px w-10 shrink-0 sm:w-14"
                aria-hidden="true"
              />
              <p className="text-foreground/90 text-center text-[11px] font-semibold uppercase tracking-[0.2em]">
                Trusted by teams at
              </p>
              <span
                className="bg-border h-px w-10 shrink-0 sm:w-14"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
              {trustedCompanies.map((company) => (
                <span
                  key={company}
                  className="text-foreground/85 hover:text-accent text-sm font-semibold tracking-tight transition-colors duration-200 sm:text-base"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-faint mt-10 flex justify-center">
        <ArrowDown className="animate-bob" size={20} />
      </div>
    </header>
  );
};
