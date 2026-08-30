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
    "Frontend developer with 10+ years of experience building scalable web apps using React, Svelte, and modern UI frameworks. Passionate about clean UI, performance optimization, exploring Node.js for backend, and leveraging AI tools to boost development speed and quality.",
  experiences: [
    {
      title: "Senior Frontend Developer",
      dates: "Aug 2018 - Present",
      company: "Knowledge Platform",
      location: "Islamabad (Remote)",
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
      location: "Denmark (Remote)",
      bullets: [
        "Worked on multiple real-time Danish projects involving complex web and mobile applications.",
        "Designed web and mobile app interfaces with a strong focus on user experience and responsiveness.",
        "Converted PSD designs into clean, semantic HTML using modern frontend standards.",
        "Implemented responsive layouts using media queries for cross-device compatibility.",
        "Developed interactive features using JavaScript, jQuery, and AngularJS (version 4).",
        "Collaborated with cross-functional teams following Scrum methodology.",
        "Communicated daily with Danish clients via email and Skype for requirement gathering and updates.",
      ],
    },
    {
      title: "Frontend Developer",
      dates: "Jan 2015 - Aug 2016",
      company: "Global Bridge Solutions",
      location: "Islamabad, Pakistan",
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
      location: "Islamabad, Pakistan",
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
      label: "Backend & Database (Interested)",
      items: "Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL",
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
