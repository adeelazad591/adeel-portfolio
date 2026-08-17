"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import "glightbox/dist/css/glightbox.min.css";

import { projectsData } from "@/lib/projectData";

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

  useEffect(() => {
    let lightbox: { destroy: () => void } | undefined;

    // GLightbox touches `document` at init time, so it's loaded on the
    // client only, after mount.
    import("glightbox").then(({ default: GLightbox }) => {
      lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
      });
    });

    return () => {
      lightbox?.destroy();
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10">
      {/* Back Button */}
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-foreground mb-9 text-center text-4xl font-extrabold tracking-tight md:text-5xl"
      >
        Projects in Action
      </motion.h1>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 md:px-6 md:text-base ${
              selectedCategory === category
                ? "bg-primary border-primary text-white"
                : "text-muted-foreground border-border hover:border-primary hover:text-primary bg-transparent"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-border bg-card overflow-hidden rounded-lg border transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href={`/project/${project.id}`}>
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[0].url}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute right-3 top-3">
                  <span className="bg-primary/90 rounded-full px-2 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>

                {/* Hidden images for gallery */}
                {project.images.slice(1).map((image, imgIndex) => (
                  <a
                    key={imgIndex}
                    href={image.url}
                    className="glightbox hidden"
                    data-gallery={`gallery-${project.id}`}
                    data-title={image.caption}
                  />
                ))}
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-foreground mb-2 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-primary bg-muted rounded px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <span className="text-primary text-sm font-medium">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
