"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@adeel-portfolio/ui";

import { projectsData } from "@/lib/projectData";
import { SectionHeading } from "./SectionHeading";

// Home page featured-projects section (the full listing lives at
// /projects). The new design presents each project as a large
// screenshot + case-study row instead of a carousel.
const featured = projectsData.slice(0, 3);

export const ProjectsPreview = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHeading number="04." title="Featured Projects" />

      <div className="flex flex-col gap-16 sm:gap-20">
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-9 sm:grid-cols-2"
          >
            <Link
              href={`/project/${project.id}`}
              className={`border-border block aspect-video overflow-hidden rounded-lg border shadow-md ${index % 2 === 1 ? "sm:order-2" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[0].url}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>

            <div className={index % 2 === 1 ? "sm:text-right" : ""}>
              <p className="text-primary mb-3.5 text-sm">Featured Project</p>
              <h3 className="text-foreground mb-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <div className="border-border bg-card mb-5 rounded-lg border p-5">
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div
                className={`text-faint mb-5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs ${index % 2 === 1 ? "sm:justify-end" : ""}`}
              >
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div
                className={`flex items-center gap-5 ${index % 2 === 1 ? "sm:justify-end" : ""}`}
              >
                <Link
                  href={`/project/${project.id}`}
                  className="text-foreground inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                >
                  Case Study <ArrowRight size={16} />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Preview"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Link href="/projects">
          <Button
            variant="outline"
            className="border-border bg-card text-foreground hover:border-primary hover:text-primary group inline-flex cursor-pointer items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};
