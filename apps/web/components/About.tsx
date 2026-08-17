"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock, Folder, MapPin, Users } from "lucide-react";

import { projectsData } from "@/lib/projectData";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: Clock, num: "10+", label: "Years" },
  { icon: Briefcase, num: "4", label: "Companies" },
  { icon: Folder, num: `${projectsData.length}`, label: "Projects" },
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-body max-w-3xl text-lg leading-relaxed">
          Hi, I&rsquo;m Adeel — a Software Engineer and front-end specialist
          with over 10 years of experience building accessible, high-performance
          web applications. Since 2014, I&rsquo;ve worked with startups,
          agencies, and enterprises to deliver scalable digital solutions with a
          focus on accessibility and user experience. My current focus is
          JavaScript, React, and Svelte — applying clean architecture principles
          and leveraging AI tools to streamline front-end workflows. Outside of
          tech, I enjoy playing cricket and exploring new cities and cultures.
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
        className="mt-13 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map(({ icon: Icon, num, label }) => (
          <div
            key={label}
            className="border-border bg-card rounded-lg border px-3.5 py-6 text-center"
          >
            <Icon className="text-primary mx-auto mb-3" size={22} />
            <div className="text-foreground text-3xl font-extrabold tracking-tight">
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
