"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import Link from "next/link";

const stack = [
  "HTML & CSS",
  "JavaScript (ES6+)",
  "React",
  "Svelte",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "Git & GitHub",
  "Figma",
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
          className="text-foreground text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Adeel Azad<span className="text-primary">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-body mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-body mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed"
        >
          Frontend developer focused on crafting engaging and intuitive web
          experiences. Currently building accessible, human-centered products at{" "}
          <a
            href="https://www.knowledgeplatform.com.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Knowledge Platform
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-border bg-card shadow-xs mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5 rounded-full border px-5 py-4"
        >
          {stack.map((tech) => (
            <span key={tech} className="text-muted-foreground px-1.5 text-sm">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3.5"
        >
          <Link
            href="/#projects"
            className="bg-primary hover:bg-primary/90 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors"
          >
            View My Work
          </Link>
          <button
            type="button"
            onClick={handleResumeDownload}
            className="border-border bg-card text-foreground hover:border-primary hover:text-primary inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors"
          >
            <FileText size={17} /> Download Resume
          </button>
        </motion.div>
      </div>

      <div className="text-faint mt-10 flex justify-center">
        <ArrowDown className="animate-bob" size={20} />
      </div>
    </header>
  );
};
