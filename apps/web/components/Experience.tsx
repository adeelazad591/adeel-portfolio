"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "Knowledge Platform",
    companyLink: "https://knowledgeplatform.com.pk/",
    period: "August 2018 - Present",
    location: "Islamabad (Remote)",
    type: "Full-time",
    bullets: [
      "Built React.js and Svelte LMS platforms used by 200,000+ users globally, deployed in 400+ schools.",
      "Developed and maintained LMS, CMS, and competition platforms for 5+ enterprise clients.",
      "Used Tailwind CSS, Bootstrap, and Material UI to build consistent, scalable, and modern interfaces.",
      "Improved performance via lazy loading, code splitting, and accessibility (WCAG standards).",
      "Boosted productivity with AI tools (GitHub Copilot, ChatGPT) for code suggestions and refactoring.",
      "Mentored 4+ junior developers via code reviews, pair programming, and training sessions.",
      "Managed Git-based workflows, including deployments and post-release issue resolution.",
    ],
    tech: [
      "React",
      "Svelte",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Git",
    ],
  },
  {
    title: "UI/UX Developer",
    company: "TEO International",
    companyLink: "https://teo.dk/en/home/",
    period: "August 2016 - August 2018",
    location: "Denmark (Remote)",
    type: "Full-time",
    bullets: [
      "Worked on multiple real-time Danish projects involving complex web and mobile applications.",
      "Contributed to a Team Management web app, improving workflows and team coordination within Scrum teams.",
      "Designed web and mobile app interfaces with a strong focus on user experience and responsiveness.",
      "Converted PSD designs into clean, semantic HTML using modern frontend standards.",
      "Developed interactive features using JavaScript, jQuery, and AngularJS (version 4).",
    ],
    tech: ["JavaScript", "jQuery", "AngularJS", "HTML", "CSS"],
  },
  {
    title: "Frontend Developer",
    company: "Global Bridge Solutions",
    companyLink: "https://globalbridgesol.com/",
    period: "January 2015 - August 2016",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    bullets: [
      "Developed customer-facing e-commerce features and CMS using modern JavaScript frameworks.",
      "Implemented responsive designs with HTML5, CSS3, and JavaScript ES6+.",
      "Integrated RESTful APIs in collaboration with the backend team for seamless functionality.",
      "Optimized website performance, improving page load times by 25% to 30%.",
    ],
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs"],
  },
  {
    title: "Web Designer",
    company: "MediaLinkers",
    companyLink: "https://www.medialinkers.pk/",
    period: "July 2014 - December 2014",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    bullets: [
      "Designed web and mobile interfaces for small businesses and startups.",
      "Built functional sites using HTML, CSS, JavaScript, and WordPress.",
      "Developed custom WordPress themes and plugins.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHeading number="03." title="Where I've Worked" />

      <div className="relative pl-9 sm:pl-11">
        <span className="bg-border absolute bottom-2 left-[5px] top-2 w-0.5 sm:left-[7px]" />

        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              <span className="border-primary bg-background absolute -left-9 top-[26px] h-3 w-3 rounded-full border-2 sm:-left-11" />
              <div className="border-border bg-card rounded-lg border p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-foreground text-xl font-bold">
                      {job.title}
                    </h3>
                    <a
                      href={job.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary mt-0.5 inline-block text-base font-semibold hover:underline"
                    >
                      {job.company}
                    </a>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {job.period}
                  </span>
                </div>

                <div className="text-muted-foreground my-3.5 flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="bg-muted rounded-full px-3 py-0.5 text-xs font-semibold">
                    {job.type}
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-body flex text-[15px] leading-relaxed"
                    >
                      <span className="text-primary mr-2">&#9656;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border-border bg-muted text-primary rounded-full border px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
