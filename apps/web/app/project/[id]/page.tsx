"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import { projectsData, type Project } from "@/lib/projectData";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === parseInt(id, 10));
    setProject(foundProject ?? null);
  }, [id]);

  // Preload all images when project loads
  useEffect(() => {
    if (project && project.images) {
      const loadPromises = project.images.map((image, index) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, [index]: true }));
            resolve();
          };
          img.onerror = () => {
            setImagesLoaded((prev) => ({ ...prev, [index]: true }));
            resolve();
          };
          img.src = image.url;
        });
      });

      Promise.all(loadPromises);
    }
  }, [project]);

  useEffect(() => {
    if (project && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 6000); // Autoplay every 6 seconds

      return () => clearInterval(interval);
    }
  }, [project]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length
      );
    }
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-foreground text-xl">Project not found</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10">
      {/* Breadcrumb */}
      <nav className="text-muted-foreground mb-8 flex items-center gap-2 text-sm">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/projects" className="hover:text-foreground transition-colors">
          Projects
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{project.title}</span>
      </nav>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="mb-4 flex items-center gap-4">
          <h1 className="text-foreground text-2xl font-bold sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <span className="text-muted-foreground text-lg">{project.year}</span>
        </div>
        <div className="mb-6 flex items-center gap-4">
          <span className="bg-primary/15 text-primary rounded-full px-3 py-1 text-sm font-medium">
            {project.category}
          </span>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-muted relative mb-12 overflow-hidden rounded-lg"
      >
        <div className="relative h-auto md:h-[500px]">
          {imagesLoaded[currentImageIndex] ? (
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex].url}
              alt={project.images[currentImageIndex].caption}
              className="h-full w-full rounded-lg object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <div className="bg-muted flex h-full w-full items-center justify-center">
              <div className="text-muted-foreground text-lg">Loading...</div>
            </div>
          )}

          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="bg-background/80 hover:bg-background text-foreground absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="bg-background/80 hover:bg-background text-foreground absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 transform gap-2 md:bottom-4">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-primary"
                        : "bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="text-muted-foreground pt-12 text-center md:p-4">
          {project.images[currentImageIndex].caption}
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {/* Under Construction Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.sections?.underConstruction?.dummyText && (
              <>
                <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                  Project Details Coming Soon
                </h2>

                <div className="space-y-4">
                  {project.sections?.underConstruction?.dummyText && (
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.underConstruction.dummyText}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.section>

          {/* Background Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {(project.sections?.background?.challenge ||
              project.sections?.background?.objective) && (
              <>
                <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                  Background
                </h2>

                <div className="space-y-4">
                  {project.sections?.background?.challenge && (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        Challenge:
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.background.challenge}
                      </p>
                    </div>
                  )}

                  {project.sections?.background?.objective && (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        Objective:
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.background.objective}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {(project.sections?.research?.methods ||
              project.sections?.research?.keyFindings?.length) && (
              <>
                <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                  Research
                </h2>

                <div className="space-y-4">
                  {project.sections?.research?.methods && (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        Methods:
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.research.methods}
                      </p>
                    </div>
                  )}

                  {project.sections?.research?.keyFindings?.length ? (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        Key Findings:
                      </h3>
                      <ul className="text-muted-foreground list-inside list-disc leading-relaxed">
                        {project.sections.research.keyFindings.map(
                          (result, index) => (
                            <li key={index}>{result}</li>
                          )
                        )}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </motion.section>

          {/* Design Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {(project.sections?.designProcess?.ideation ||
              project.sections?.designProcess?.prototyping ||
              project.sections?.designProcess?.testing) && (
              <>
                <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                  Design Process
                </h2>

                <div className="space-y-4">
                  {project.sections?.designProcess?.ideation && (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        Ideation & Wireframing:
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.designProcess.ideation}
                      </p>
                    </div>
                  )}

                  {project.sections?.designProcess?.prototyping && (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        Prototyping:
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.designProcess.prototyping}
                      </p>
                    </div>
                  )}

                  {project.sections?.designProcess?.testing && (
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-medium">
                        User Testing & Iteration:
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.sections.designProcess.testing}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.section>

          {/* Contribution Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.sections?.designProcess?.contributions && (
              <>
                <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                  What I Contributed
                </h2>

                <div className="space-y-4">
                  <div>
                    <ul className="text-muted-foreground list-inside list-disc leading-relaxed">
                      {project.sections.designProcess.contributions.map(
                        (result, index) => (
                          <li key={index}>{result}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {project.sections?.results &&
              project.sections.results.length > 0 && (
                <>
                  <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                    Achievements
                  </h2>

                  <ul className="text-muted-foreground list-inside list-disc leading-relaxed">
                    {project.sections.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </>
              )}
          </motion.section>

          {/* Conclusion Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {project.sections?.conclusion && (
              <>
                <h2 className="text-primary mb-4 text-xl font-semibold md:text-2xl">
                  Conclusion
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {project.sections.conclusion}
                </p>
              </>
            )}
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-border bg-card sticky top-24 rounded-lg border p-6"
          >
            <h3 className="text-foreground mb-4 text-xl font-semibold">
              Technologies Used
            </h3>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-primary bg-muted rounded px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
