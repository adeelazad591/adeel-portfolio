"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML & CSS",
  "JavaScript (ES6+)",
  "React",
  "Svelte",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "Git & GitHub",
  "Figma",
  "Accessibility (A11y)",
  "Responsive Design",
  "SEO Optimization",
  "Performance Optimization",
  "API Integration",
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center px-0 py-8 sm:px-4 md:h-full md:py-16"
    >
      <div className="container mx-auto">
        <motion.h2
          className="heading-section mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-4 text-base sm:text-lg">
              Hi, I&rsquo;m Adeel — a Software Engineer and front-end specialist
              with over 10 years of experience building accessible,
              high-performance web applications. I started my journey in 2014 by
              exploring front-end development, which led to a strong foundation
              in HTML, CSS, and JavaScript.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              I have a strong passion for UI development — transforming complex
              ideas into clean, intuitive, and responsive interfaces that are
              both pixel-perfect and performant. Over the years, I&rsquo;ve
              worked with startups, agencies, and enterprises to deliver
              scalable digital solutions with a focus on accessibility and user
              experience. My current focus is on JavaScript, React, and Svelte —
              applying clean architecture principles and leveraging AI tools to
              streamline front-end workflows and deliver smarter, more engaging
              user experiences.
            </p>
            <p className="text-base sm:text-lg">
              Outside of tech, I enjoy playing cricket and exploring new cities
              and cultures.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-slate-light mb-4 text-lg font-semibold">
              Technologies I&apos;ve been working with recently:
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="mb-2 flex items-start">
                  <span className="text-theme mr-2">▹</span>
                  <span className="text-base sm:text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
