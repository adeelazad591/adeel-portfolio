"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@adeel-portfolio/ui";

import { projectsData } from "@/lib/projectData";

// Home page preview carousel (the full listing lives at /projects). Renamed
// from the original `components/Projects.jsx` to avoid clashing with the
// `/projects` route's page component.
export const ProjectsPreview = () => {
  return (
    <section
      id="projects"
      className="bg-navy-light flex min-h-screen items-center px-0 py-8 sm:px-4 md:h-full md:py-16"
    >
      <div className="container mx-auto">
        <motion.h2
          className="heading-section mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects in Action
        </motion.h2>

        <div className="relative px-0 sm:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projectsData.slice(0, 5).map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="bg-navy border-navy-lightest h-full overflow-hidden rounded-lg border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={`/project/${project.id}`}
                      className="relative block h-48 cursor-pointer overflow-hidden"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.images[0].url}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="text-slate-lightest mb-2 text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-slate mb-4">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="text-theme bg-navy-lightest/30 rounded px-2 py-1 font-mono text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-light hover:text-theme transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-light hover:text-theme transition-colors"
                          aria-label="Live Preview"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 sm:-left-12" />
            <CarouselNext className="-right-5 sm:-right-12" />
          </Carousel>
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-theme text-theme hover:bg-theme/10 px-6 py-2 font-mono"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
