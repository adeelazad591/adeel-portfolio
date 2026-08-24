"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronRight,
  Globe,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { projectsData } from "@/lib/projectData";

// The reference design pairs each card with an icon that reflects the kind
// of project it is. Our category taxonomy doesn't have a dedicated "mobile"
// bucket yet, so this only branches on it if/when one shows up.
function getProjectIcon(category: string) {
  return category.toLowerCase().includes("mobile") ? Smartphone : Globe;
}

const categories = ["All", "Frontend", "HTML/CSS", "WordPress", "UI/UX"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10">
      {/* Breadcrumb */}
      <nav className="text-muted-foreground mb-8 flex items-center gap-2 text-sm">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Projects</span>
      </nav>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-foreground mb-4 text-4xl font-extrabold tracking-tight md:text-5xl"
      >
        All Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-muted-foreground mb-9 max-w-2xl text-lg"
      >
        Selected work showcasing the products, platforms, and experiences I’ve
        helped bring to life through thoughtful design and engineering.
      </motion.p>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12 flex flex-wrap justify-start gap-1 md:gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-5 py-1.5 text-sm transition-all duration-300 md:px-6 md:text-base ${
              selectedCategory === category
                ? "bg-primary border-primary text-white"
                : "text-muted-foreground border-border hover:border-primary hover:text-primary bg-transparent"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => {
          const Icon = getProjectIcon(project.category);
          const isRealRepo = project.github?.includes("github.com");

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-border bg-card hover:border-primary group relative rounded-lg border transition-all duration-300 hover:shadow-md"
            >
              {/* Stretched link: covers the whole card so it's clickable
                  anywhere, without nesting an <a> inside the icon <a>s
                  below (invalid HTML that Next.js flags as a hydration
                  error). The icon links sit in their own stacking context
                  (relative + z-10) so they intercept clicks first. */}
              <Link
                href={`/project/${project.id}`}
                className="absolute inset-0 z-0 rounded-lg"
                aria-label={project.title}
              />

              <div className="flex h-full flex-col p-4 md:p-6">
                <div className="mb-4 flex items-start justify-between">
                  <span className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-lg">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="relative z-10 flex items-center gap-3">
                    {isRealRepo && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-foreground group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-primary bg-muted rounded px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
