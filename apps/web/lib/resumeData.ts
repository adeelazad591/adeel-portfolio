// Single source of truth for resume content, consumed by both the on-page
// resume (app/resume/page.tsx) and the generated PDF (lib/generateResumePdf.ts)
// so the two never drift apart.

export type Experience = {
  title: string;
  dates: string;
  company: string;
  location: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string;
};

export const resumeData = {
  name: "Adeel Azad",
  title: "Senior Frontend Developer",
  contact: {
    phone: "+92 331 5186415",
    email: "adeelaza591@gmail.com",
    website: "www.adeelazad.com",
    linkedin: "linkedin.com/in/adeelazad591",
    github: "github.com/adeelazad591",
  },
  summary:
    "Frontend Engineer with 10+ years of experience crafting scalable, high-performance web applications with React, Svelte, and modern UI technologies. Focused on building clean, intuitive user experiences, optimizing performance, and writing maintainable code. Currently exploring NestJS for backend development and leveraging AI-powered tools to accelerate development, improve code quality, and build smarter products.",
  experiences: [
    {
      title: "Senior Frontend Developer",
      dates: "Aug 2025 - Present",
      company: "Bright Byte Consulting",
      location: "Islamabad, Pakistan - (Hybrid)",
      bullets: [
        "Built reusable and scalable interfaces using React, Tailwind CSS, and Material UI.",
        "Integrated REST APIs using TanStack React Query, managing data fetching, caching, loading, and error states.",
        "Analyzed Jira requirements and translated them into intuitive, responsive UI designs before implementation.",
        "Used Tailwind CSS, Bootstrap, and Material UI to build consistent, scalable, and modern interfaces.",
        "Collaborated closely with backend engineers to clarify requirements, API contracts, and technical solutions.",
        "Contributed to backend development by building and integrating APIs using NestJS.",
        "Managed feature delivery across development and QA environments, including deployment, verification, and issue resolution.",
        "Prepared and managed production builds and releases, ensuring features were stable and production-ready.",
      ],
    },
    {
      title: "Senior Frontend Developer",
      dates: "Aug 2018 - Aug 2025",
      company: "Knowledge Platform",
      location: "Islamabad, Pakistan - (Hybrid)",
      bullets: [
        "Built React and Svelte-based LMS used by 100,000+ users.",
        "Used Tailwind CSS, Bootstrap, and Material UI for fast, consistent UI development.",
        "Improved performance with lazy loading, code splitting, and accessibility best practices.",
        "Converted high-fidelity mockups into pixel-perfect, interactive UIs with designers.",
        "Leveraged AI tools like GitHub Copilot and ChatGPT to accelerate development and improve productivity.",
        "Worked with backend teams and PMs to refine features and optimize user flows.",
        "Mentored junior developers via code reviews, pair programming, and best practices.",
        "Managed code and workflows using Git and GitHub.",
        "Handled deployments and resolved post-release issues based on user feedback.",
      ],
    },
    {
      title: "UI/UX Developer",
      dates: "Aug 2016 - Aug 2018",
      company: "TEO International",
      location: "Islamabad, Pakistan (On Site)",
      bullets: [
        "Worked on multiple real-time Danish projects involving complex web and mobile applications.",
        "Designed web and mobile app interfaces with a strong focus on user experience and responsiveness.",
        "Converted PSD designs into clean, semantic HTML using modern frontend standards.",
        "Implemented responsive layouts using media queries for cross-device compatibility.",
        "Developed interactive features using JavaScript, jQuery, and AngularJS (version 4).",
        "Collaborated with cross-functional teams following Scrum methodology.",
        "Communicated daily with Danish clients via email and Skype for requirement gathering and updates.",
        "Collaborated closely with backend developers to integrate APIs and ensure smooth end-to-end functionality.",
        "Identified and resolved frontend issues to improve application performance, usability, and overall user experience.",
      ],
    },
    {
      title: "Frontend Developer",
      dates: "Jan 2015 - Aug 2016",
      company: "Global Bridge Solutions",
      location: "Islamabad, Pakistan (On Site)",
      bullets: [
        "Developed customer-facing e-commerce features using modern JavaScript frameworks",
        "Implemented responsive designs using HTML5, CSS3, and JavaScript ES6+",
        "Collaborated with backend team to integrate RESTful APIs",
        "Optimized website performance and improved page load times by 35%",
      ],
    },
    {
      title: "Web Designer",
      dates: "Jul 2014 - Dec 2014",
      company: "MediaLinkers",
      location: "Islamabad, Pakistan (On Site)",
      bullets: [
        "Designed and developed websites for small businesses and startups",
        "Created custom WordPress themes and plugins",
        "Managed client relationships and project timelines",
        "Built responsive websites optimized for mobile devices",
      ],
    },
  ] satisfies Experience[],
  education: {
    degree: "BS Software Engineering",
    dates: "2010 - 2014",
    institution: "International Islamic University Islamabad.",
    details: "Islamabad, Pakistan | GPA: 2.9/4.0",
  },
  achievements: [
    "Reduced application load time by 40% through strategic code splitting and optimization",
    "Successfully led and mentored teams of 4+ developers across multiple projects",
    "Built applications serving 100,000+ active users with 99.9% uptime",
    "Implemented comprehensive testing strategies achieving 90%+ code coverage",
  ],
  skillGroups: [
    {
      label: "Frontend",
      items:
        "React, Svelte, JavaScript ES6+, HTML5, CSS3, Node.js (Interested)",
    },
    {
      label: "Styling & UI",
      items:
        "Tailwind CSS, Material UI, Styled Components, Bootstrap, Custom CSS, SCSS",
    },
    {
      label: "Tools & Testing",
      items: "Git, Webpack, Vite, Figma, Adobe XD",
    },
    {
      label: "Backend & Database (Exploring)",
      items: "Nest JS, REST APIs, PostgreSQL, MongoDB, GraphQL",
    },
  ] satisfies SkillGroup[],
  languages: ["English (Fluent)", "Urdu (Native)", "Punjabi (Native)"],
  interests: [
    "Open Source Contributing",
    "UI/UX Design",
    "Technology Blogging",
    "Mentoring Developers",
  ],
};
