"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
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
      <div className="bg-navy flex min-h-screen items-center justify-center">
        <div className="text-xl text-white">Project not found</div>
      </div>
    );
  }

  return (
    <div className="bg-navy min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pb-8 pt-24">
        {/* Back Button */}
        <Link
          href="/projects"
          className="text-slate hover:text-theme mb-8 inline-flex items-center transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <span className="text-slate text-lg">{project.year}</span>
          </div>
          <div className="mb-6 flex items-center gap-4">
            <span className="bg-theme/20 text-theme rounded-full px-3 py-1 text-sm font-medium">
              {project.category}
            </span>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-theme flex items-center gap-2 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-theme flex items-center gap-2 transition-colors"
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
          className="bg-lightest-navy relative mb-12 overflow-hidden rounded-lg"
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
              <div className="bg-lightest-navy flex h-full w-full items-center justify-center">
                <div className="text-slate text-lg">Loading...</div>
              </div>
            )}

            {/* Carousel Controls */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="bg-navy/80 hover:bg-navy absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-navy/80 hover:bg-navy absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white transition-colors"
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
                        index === currentImageIndex ? "bg-theme" : "bg-slate/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="text-slate pt-12 text-center md:p-4">
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
                  <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                    Project Details Coming Soon
                  </h2>

                  <div className="space-y-4">
                    {project.sections?.underConstruction?.dummyText && (
                      <div>
                        <p className="text-slate leading-relaxed">
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
                  <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                    Background
                  </h2>

                  <div className="space-y-4">
                    {project.sections?.background?.challenge && (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          Challenge:
                        </h3>
                        <p className="text-slate leading-relaxed">
                          {project.sections.background.challenge}
                        </p>
                      </div>
                    )}

                    {project.sections?.background?.objective && (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          Objective:
                        </h3>
                        <p className="text-slate leading-relaxed">
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
                  <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                    Research
                  </h2>

                  <div className="space-y-4">
                    {project.sections?.research?.methods && (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          Methods:
                        </h3>
                        <p className="text-slate leading-relaxed">
                          {project.sections.research.methods}
                        </p>
                      </div>
                    )}

                    {project.sections?.research?.keyFindings?.length ? (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          Key Findings:
                        </h3>
                        <ul className="text-slate list-inside list-disc leading-relaxed">
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
                  <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                    Design Process
                  </h2>

                  <div className="space-y-4">
                    {project.sections?.designProcess?.ideation && (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          Ideation & Wireframing:
                        </h3>
                        <p className="text-slate leading-relaxed">
                          {project.sections.designProcess.ideation}
                        </p>
                      </div>
                    )}

                    {project.sections?.designProcess?.prototyping && (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          Prototyping:
                        </h3>
                        <p className="text-slate leading-relaxed">
                          {project.sections.designProcess.prototyping}
                        </p>
                      </div>
                    )}

                    {project.sections?.designProcess?.testing && (
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white">
                          User Testing & Iteration:
                        </h3>
                        <p className="text-slate leading-relaxed">
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
                  <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                    What I Contributed
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <ul className="text-slate list-inside list-disc leading-relaxed">
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
                    <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                      Achievements
                    </h2>

                    <ul className="text-slate list-inside list-disc leading-relaxed">
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
                  <h2 className="text-theme mb-4 text-xl font-semibold md:text-2xl">
                    Conclusion
                  </h2>

                  <p className="text-slate leading-relaxed">
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
              className="bg-lightest-navy sticky top-8 rounded-lg p-0 lg:p-6"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                Technologies Used
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-theme bg-navy-lightest/30 rounded px-2 py-1 font-mono text-sm"
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
                  className="text-slate hover:text-theme flex items-center gap-2 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-theme flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
