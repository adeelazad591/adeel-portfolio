"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import "glightbox/dist/css/glightbox.min.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
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
    <div className="bg-navy min-h-screen">
      <Navbar />

      <section className="">
        <div className="container mx-auto px-4 pb-8 pt-24">
          {/* Back Button */}
          <Link
            href="/"
            className="text-slate hover:text-theme mb-8 inline-flex items-center transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
          >
            Projects in Action
          </motion.h1>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 md:px-6 md:text-base lg:text-lg ${
                  selectedCategory === category
                    ? "bg-theme text-navy border-theme"
                    : "text-slate border-slate hover:text-theme hover:border-theme bg-transparent"
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
                className="border-navy-lightest overflow-hidden rounded-lg border bg-[#112240] transition-all duration-300 hover:scale-105 hover:transform"
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
                      <span className="bg-theme/90 text-navy rounded-full px-2 py-1 text-xs font-medium">
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
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-theme bg-navy-lightest/30 rounded px-2 py-1 font-mono text-xs"
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
                          className="text-slate hover:text-theme transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-theme transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                      <span className="text-theme text-sm font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
