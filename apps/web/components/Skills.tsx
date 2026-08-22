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
      "Next.Js",
      "Svelte",
      "API Integration",
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
    name: "Backend & Database",
    items: [
      "Nest Js",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "NoSQL",
    ],
  },
  {
    name: "Tools & Workflow",
    items: [
      "Git & GitHub",
      "Github Desktop",
      "Figma",
      "Adobe XD",
      "Webpack",
      "Vite",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHeading number="02." title="Skills & Expertise" />

      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <p className="text-primary mb-4 text-sm font-bold uppercase tracking-widest">
              {group.name}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border-border text-body hover:border-primary hover:bg-primary/5 hover:text-primary cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-colors"
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
