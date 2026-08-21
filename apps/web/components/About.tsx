"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock, Folder, MapPin, Package, Users } from "lucide-react";
import Image from "next/image";

import { projectsData } from "@/lib/projectData";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: Clock, num: "10+", label: "Years" },
  { icon: Briefcase, num: "4", label: "Companies" },
  { icon: Folder, num: "15+", label: "Projects" },
  { icon: Package, num: "3+", label: "Products" },
  { icon: Users, num: "200K+", label: "Users Impacted" },
];

// Derived from the real project/experience mix (LMS + gamified learning
// platforms, corporate/marketing sites, a property-share platform, and
// e-commerce work at Global Bridge Solutions) — not invented client names.
const industries = [
  "EdTech",
  "Corporate & Marketing",
  "Real Estate / PropTech",
  "E-Commerce",
];

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHeading number="01." title="About Me" />

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-body mb-4 max-w-3xl text-lg leading-relaxed">
            I’m Adeel, a Senior Frontend Engineer with 10+ years of experience
            building accessible, high-performance web and mobile applications
            across SaaS, EdTech and E-Commerce.
          </p>
          <p className="text-body mb-4 max-w-3xl text-lg leading-relaxed">
            Since 2014, I’ve worked with startups, agencies, and enterprises,
            designing scalable products and intuitive user experiences using
            JavaScript, TypeScript, React and Svelte. My approach is
            architecture-first, with a strong focus on clean code,
            accessibility, performance, design systems, and well-tested
            software. I also use AI tools throughout my development workflow to
            explore system logic, accelerate implementation, and improve
            productivity while keeping engineering judgment and code quality at
            the center
          </p>
          <p className="text-body max-w-3xl text-lg leading-relaxed">
            Beyond code, I enjoy mentoring engineers, playing cricket,
            traveling, and exploring new cities and cultures.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to
              Opportunities
            </span>
            <span className="text-muted-foreground inline-flex items-center gap-1.5 text-sm">
              <MapPin size={15} /> Islamabad, Pakistan &middot; GMT+5
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative mx-auto w-full max-w-[288px] lg:mx-0"
        >
          <div
            className="border-primary/40 absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2"
            aria-hidden="true"
          />
          <div className="border-border bg-card relative aspect-square overflow-hidden rounded-2xl border shadow-sm">
            <Image
              src="/images/project_images/adeel.jpeg"
              alt="Adeel Azad"
              fill
              sizes="288px"
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-13 grid grid-cols-2 gap-4 sm:grid-cols-5"
      >
        {stats.map(({ icon: Icon, num, label }) => (
          <div
            key={label}
            className="border-border bg-card hover:border-primary/60 rounded-lg border px-3.5 py-6 text-center transition-colors"
          >
            <Icon className="text-primary mx-auto mb-3" size={22} />
            <div className="text-foreground text-2xl font-extrabold tracking-tight">
              {num}
            </div>
            <div className="text-faint mt-1.5 text-xs font-semibold uppercase tracking-widest">
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-9 flex flex-wrap justify-center gap-3"
      >
        {industries.map((industry) => (
          <span
            key={industry}
            className="border-border bg-muted text-body rounded-full border px-5 py-2 text-sm font-medium"
          >
            {industry}
          </span>
        ))}
      </motion.div>
    </section>
  );
};
