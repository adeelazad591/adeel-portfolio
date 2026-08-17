"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Knowledge Platform",
    position: "Senior Frontend Developer",
    company_link: "https://knowledgeplatform.com.pk/",
    period: "August 2018 - Present",
    responsibilities: [
      "Built React.js and Svelte LMS platforms used by 200,000+ users globally, deployed in 400+ schools.",
      "Developed and maintained LMS, CMS, and competition platforms for 5+ enterprise clients.",
      "Used Tailwind CSS, Bootstrap, and Material UI to build consistent, scalable, and modern interfaces.",
      "Improved performance via lazy loading, code splitting, and accessibility (WCAG standards).",
      "Boosted productivity with AI tools (GitHub Copilot, ChatGPT) for code suggestions and refactoring.",
      "Mentored 4+ junior developers via code reviews, pair programming, and training sessions.",
      "Managed Git-based workflows, including deployments and post-release issue resolution.",
    ],
  },
  {
    company: "TEO International",
    position: "UI/UX Developer",
    company_link: "https://teo.dk/en/home/",
    period: "August 2016 - August 2018",
    responsibilities: [
      "Worked on multiple real-time Danish projects involving complex web and mobile applications",
      "Contributed to a Team Management web app at TEO, improving workflows and team coordination within Scrum teams",
      "Designed web and mobile app interfaces with a strong focus on user experience and responsiveness",
      "Converted PSD designs into clean, semantic HTML using modern frontend standards",
      "Implemented responsive layouts using media queries for cross-device compatibility",
      "Developed interactive features using JavaScript, jQuery, and AngularJS (version 4)",
      "Collaborated with cross-functional teams following Scrum methodology",
    ],
  },
  {
    company: "Global Bridge Solutions",
    position: "Frontend Developer",
    company_link: "https://globalbridgesol.com/",
    period: "January 2015 - August 2016",
    responsibilities: [
      "Developed customer-facing e-commerce features and CMS using modern JavaScript frameworks",
      "Implemented responsive designs with HTML5, CSS3, and JavaScript ES6+",
      "Integrated RESTful APIs in collaboration with the backend team for seamless functionality",
      "Optimized website performance, improving page load times by 25% to 30%",
      "Performed UI testing and ensured cross-browser compatibility for consistent user experience",
      "Partnered with clients to deliver customized e-commerce solutions and CMS tailored to their business needs",
    ],
  },
  {
    company: "MediaLinkers",
    position: "Web Designer",
    company_link: "https://www.medialinkers.pk/",
    period: "July 2014 - December 2014",
    responsibilities: [
      "Designed web and mobile interfaces for small businesses and startups",
      "Created UI/UX designs in Photoshop tailored for web and mobile platforms",
      "Built functional sites using HTML, CSS, JavaScript, and WordPress",
      "Developed custom WordPress themes and plugins",
      "Delivered responsive, mobile-optimized websites",
      "Collaborated with clients to understand their needs and deliver tailored solutions",
    ],
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="flex h-full items-center px-0 sm:px-6 lg:px-8"
    >
      <div className="experience-section container mx-auto">
        <motion.h2
          className="heading-section mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
          {/* Tabs - Vertical on desktop, horizontal scroll on mobile */}
          <motion.div
            className="mb-8 flex overflow-x-auto md:col-span-2 md:mb-0 md:flex-col md:overflow-x-visible"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex min-w-max md:flex-col">
              {experienceData.map((item, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap border-b-2 px-4 py-3 text-left font-mono transition-all duration-300 md:border-b-0 md:border-l-2 ${
                    activeTab === index
                      ? "text-theme border-theme bg-navy-light md:bg-navy-lightest/10"
                      : "border-navy-lightest text-slate hover:text-theme hover:bg-navy-lightest/5"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.company}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab content */}
          <motion.div
            className="md:col-span-6 md:pl-8"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-slate-lightest mb-1 text-xl font-medium md:text-2xl">
              {experienceData[activeTab].position}
              <span className="text-theme block lg:inline-block">
                {" "}
                <a
                  href={experienceData[activeTab].company_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-0 text-sm hover:underline sm:text-base md:text-lg lg:ps-2 lg:text-2xl"
                >
                  @ {experienceData[activeTab].company}
                </a>
              </span>
            </h3>
            <p className="text-slate mb-4 font-mono text-sm">
              {experienceData[activeTab].period}
            </p>
            <ul className="space-y-4">
              {experienceData[activeTab].responsibilities.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-theme mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
