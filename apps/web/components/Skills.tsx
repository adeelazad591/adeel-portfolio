"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "./SectionHeading";

// Every item here already appears in the site's own About/Resume content —
// nothing new was introduced for this redesign.
const skillGroups = [
  {
    name: "Frontend & UI",
    items: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "React",
      "Svelte",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    name: "Accessibility & Performance",
    items: [
      "Accessibility (A11y)",
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
    ],
  },
  {
    name: "Backend & Database (Interested)",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    name: "Tools & Workflow",
    items: [
      "Git & GitHub",
      "Figma",
      "Adobe XD",
      "Webpack",
      "Vite",
      "API Integration",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHeading number="02." title="Skills & Expertise" />

      <div className="grid grid-cols-1 gap-11 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <p className="text-primary mb-4 text-xs font-semibold uppercase tracking-widest">
              {group.name}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border-border bg-muted text-body rounded-full border px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
