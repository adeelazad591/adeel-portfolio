export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ProjectBackground {
  challenge?: string;
  objective?: string;
}

export interface ProjectResearch {
  methods?: string;
  keyFindings?: string[];
}

export interface ProjectDesignProcess {
  ideation?: string;
  prototyping?: string;
  testing?: string;
  contributions?: string[];
}

export interface ProjectSections {
  underConstruction?: { dummyText?: string };
  background?: ProjectBackground;
  research?: ProjectResearch;
  designProcess?: ProjectDesignProcess;
  results?: string[];
  conclusion?: string;
}

export interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  images: ProjectImage[];
  tech: string[];
  github: string;
  live: string;
  sections: ProjectSections;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Coach - (LMS)",
    year: "2023",
    category: "Frontend",
    description:
      "Coach simplifies student learning while empowering teachers and principals with the tools to teach, lead, and manage.",
    images: [
      {
        url: "/images/coach/coach_web1.png",
        caption: "Coach login page",
      },
      {
        url: "/images/coach/coach_web2.png",
        caption: "Learner dashboard",
      },
      {
        url: "/images/coach/coach_web3.png",
        caption: "Learner classes",
      },
      {
        url: "/images/coach/coach_web4.png",
        caption: "Learner performance dashboard",
      },
      {
        url: "/images/coach/coach_web5.png",
        caption: "Learner discussion forum",
      },
      {
        url: "/images/coach/coach_web6.png",
        caption: "Learner lessons listing",
      },
      {
        url: "/images/coach/coach_web7.png",
        caption: "Learner lesson player",
      },
      {
        url: "/images/coach/coach_web8.png",
        caption: "Learner profile settings",
      },
      {
        url: "/images/coach/coach_mobile1.png",
        caption: "Coach mobile app screens",
      },
      {
        url: "/images/coach/coach_mobile2.png",
        caption: "Coach mobile app screens",
      },
    ],
    tech: [
      "Svelte",
      "JavaScript",
      "Bootstrap 5",
      "HTML/CSS",
      "Remix Icon",
      "Ico Moon",
    ],
    github: "https://coach.knowledgeplatform.com/",
    live: "https://coach.knowledgeplatform.com/",
    sections: {
      background: {
        challenge:
          "The existing Learning Management System (LMS) was built on outdated technology, resulting in sluggish performance, confusing navigation, and a poor overall user experience.",
        objective:
          "Redesign the LMS from the ground up, focusing on speed, simplicity, and usability while modernizing the technology stack to improve performance and engagement.",
      },
      research: {
        methods:
          "Conducted stakeholder interviews, analyzed user behavior, and reviewed feedback logs. We also performed a technical audit to identify architectural bottlenecks.",
        keyFindings: [
          "Page load times were significantly high, impacting engagement.",
          "Users struggled with navigating between “Streams,” “Groups,” and “Posts.”",
          "Dashboards were cluttered with irrelevant data.",
          "Campus creation involved too many steps, leading to user drop-off.",
        ],
      },
      designProcess: {
        ideation:
          "Reimagined user journeys with a focus on simplification. Mapped out unified navigation structures and created streamlined workflows for key tasks like campus creation.",
        prototyping:
          "Built high-fidelity prototypes using Svelte.js to ensure a reactive, lightweight interface. Included role-based dashboards and redesigned Discuss tabs to consolidate fragmented features.",
        testing:
          "Conducted usability tests to validate new flows. Refined components like forms, navigation, and dashboards based on user feedback for maximum clarity and speed.",
        contributions: [
          "Worked with design team to gather UI/UX requirements.",
          "Developed responsive layouts using HTML and CSS.",
          "Built reusable frontend components with Svelte.js.",
          "Led UI development for consistency and performance.",
          "Defined typography and added font icons to reduce HTTP requests.",
          "Performed cross-browser testing.",
          "Optimized assets for faster load times.",
          "Integrated UI with backend APIs.",
        ],
      },
      results: [
        "Load times improved by 40%, enabling a much smoother experience.",
        "Unified navigation by merging redundant tabs into a single “Discuss” section.",
        "Simplified campus creation with fewer steps and clearer logic.",
        "Tailored dashboards per user role improved relevance and reduced cognitive load.",
        "Notable increase in user satisfaction and platform engagement.",
      ],
    },
  },
  {
    id: 2,
    title: "Bonzo - (Gamified Learning)",
    year: "2024",
    category: "Frontend",
    description:
      "Bonzo makes learning engaging and fun through games and competitions, building essential 21st-century skills.",
    images: [
      {
        url: "/images/bonzo/bonzo_web1.png",
        caption: "Bonzo landing page",
      },
      {
        url: "/images/bonzo/bonzo_web2.png",
        caption: "Bonzo login page",
      },
      {
        url: "/images/bonzo/bonzo_web3.png",
        caption: "Bonzo competitions page",
      },
      {
        url: "/images/bonzo/bonzo_web4.png",
        caption: "Bonzo competitions home page",
      },
      {
        url: "/images/bonzo/bonzo_web5.png",
        caption: "Bonzo competitions friends page",
      },
      {
        url: "/images/bonzo/bonzo_web6.png",
        caption: "Bonzo competitions leaderboard page",
      },
      {
        url: "/images/bonzo/bonzo_web7.png",
        caption: "Bonzo competitions rewards page",
      },
      {
        url: "/images/bonzo/bonzo_web8.png",
        caption: "Bonzo competitions stats page",
      },
      {
        url: "/images/bonzo/bonzo_mob1.png",
        caption: "Bonzo mobile app screens",
      },
      {
        url: "/images/bonzo/bonzo_mob2.png",
        caption: "Bonzo mobile app screens",
      },
    ],
    tech: ["React", "JavaScript", "Material UI", "HTML/CSS", "Slick Slider"],
    github: "https://bonzo.knowledgeplatform.com/",
    live: "https://bonzo.knowledgeplatform.com/",
    sections: {
      background: {
        challenge:
          "The existing platform used a plain, minimal white design that failed to convey the energy and engagement expected from a gamified learning experience. The visual identity did not align with the platform’s interactive and competitive nature.",
        objective:
          "Redesign the platform’s look and feel to match a true gamified experience, incorporating playful visuals, animations, and an engaging UI. Additionally, upgrade the Material UI library to its latest version for improved performance and modern components.",
      },
      designProcess: {
        ideation:
          "Created wireframes that focused on vibrant visuals, game-inspired elements, and interactive animations. The goal was to make the user interface fun, engaging, and aligned with the gamification theme while maintaining clarity and usability.",
        contributions: [
          "Converted Figma designs to pixel-perfect HTML.",
          "Developed React components with Material UI.",
          "Upgraded Material UI to the latest version for improved performance.",
          "Implemented responsive design for mobile and desktop.",
          "Created animated landing page sections.",
          "Integrated Slick Slider for the carousel functionality.",
          "Added coin animations for gamified effects.",
          "Optimized for cross-browser compatibility.",
          "Tested and improved front-end performance.",
        ],
      },
      results: [
        "Increased the number of student users on the platform.",
        "Attracted more clients for hosting competitions, both public and private.",
        "Secured over two new corporate clients after the redesign.",
        "Improved overall user engagement and time spent on the platform.",
      ],
    },
  },
  {
    id: 3,
    title: "Corporate Website",
    year: "2019",
    category: "WordPress",
    description:
      "A corporate website with a dynamic CMS, service listings, and testimonials to represent the brand.",
    images: [
      {
        url: "/images/corporate/1-corporate-landing.png",
        caption: "Corporate landing page",
      },
      {
        url: "/images/corporate/2-corporate-landing.png",
        caption: "Corporate landing page",
      },
      {
        url: "/images/corporate/3-corporate-website-news-pages.png",
        caption: "Corporate news pages",
      },
    ],
    tech: ["WordPress", "Elementor", "HTML/CSS", "JavaScript"],
    github: "https://knowledgeplatform.com.pk/",
    live: "https://knowledgeplatform.com.pk/",
    sections: {
      background: {
        challenge:
          "The company’s previous website was outdated, lacked visual appeal, and was difficult to update due to a non-flexible CMS. The design did not reflect the brand’s professionalism, and navigation was not intuitive for users.",
        objective:
          "Build a modern, responsive corporate website with a dynamic CMS to represent the brand effectively. Ensure easy content management, clear service listings, and engaging testimonials to strengthen brand trust and online presence.",
      },
      designProcess: {
        ideation:
          "Planned a clean, corporate-focused design that highlighted the brand’s key offerings and client success stories. Created wireframes with a focus on clarity, easy navigation, and a professional aesthetic. The layout prioritized service information, calls to action, and testimonial sections to build credibility.",
        contributions: [
          "Built the website entirely in WordPress using Elementor.",
          "Designed responsive layouts for desktop, tablet, and mobile.",
          "Conducted thorough testing for cross-browser compatibility.",
          "Created SEO-friendly page structures and meta tags.",
          "Integrated testimonial sliders and service showcase sections.",
          "Optimized images and assets for faster load times.",
          "Trained the team on CMS usage for easy updates.",
        ],
      },
    },
  },
  {
    id: 4,
    title: "AI BOT",
    year: "2025",
    category: "Frontend",
    description:
      "Your Intelligent Partner for Solving Business Problems and Driving Sustainable Growth.",
    images: [
      {
        url: "/images/ai_bot/ai_bot_web1.png",
        caption: "AI Bot loading page",
      },
      {
        url: "/images/ai_bot/ai_bot_web2.png",
        caption: "AI Bot intro modal",
      },
      {
        url: "/images/ai_bot/ai_bot_web3.png",
        caption: "AI Engagement Bot",
      },
      {
        url: "/images/ai_bot/ai_bot_web4.png",
        caption: "AI Bot resource modal",
      },
      {
        url: "/images/ai_bot/ai_bot_web5.png",
        caption: "AI Bot insert audio modal",
      },
      {
        url: "/images/ai_bot/ai_bot_web6.png",
        caption: "AI Evaluation Bot",
      },
      {
        url: "/images/ai_bot/ai_bot_web7.png",
        caption: "AI Bot submission modal",
      },
      {
        url: "/images/ai_bot/ai_bot_web8.png",
        caption: "AI Bot result page",
      },
      {
        url: "/images/ai_bot/ai_bot_mob1.png",
        caption: "AI Bot mobile app screens",
      },
    ],
    tech: ["Svelte", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    github:
      "https://studio.knowledgeplatform.com/players/ai_bot/?ct=64618&ins=98&isPlayBonzo=1",
    live: "https://studio.knowledgeplatform.com/players/ai_bot/?ct=64618&ins=98&isPlayBonzo=1",
    sections: {
      background: {
        objective:
          "Create an interactive, accessible AI bot platform for practicing AI concepts like job impact, generative AI, and agentic AI through realistic workplace simulations. Feature Bonzo, the AI bot, to guide users in solving real-world business challenges. Include text/audio input, API-based evaluation, and gamified learning for better engagement.",
      },
      designProcess: {
        ideation:
          "Collaborated with the design team to create a clean, interactive, and accessible interface that encourages participation, featuring conversation-style scenarios, dual input options, and gamified feedback to keep users engaged.",
        contributions: [
          "Worked with the design team to finalize user flows, UI components, and accessibility needs.",
          "Converted mockups into responsive HTML/CSS using Tailwind CSS.",
          "Built reusable Svelte.js components for scenarios, chat, and audio recording.",
          "Integrated REST APIs for scenario loading, responses, and AI evaluations.",
          "Created separate UIs for engagement and evaluation prompts.",
          "Ensured WCAG compliance with screen reader and keyboard support.",
          "Performed cross-browser and cross-device testing.",
          "Optimized performance with Tailwind purge and asset compression.",
          "Documented component usage and API integration.",
          "Collaborated with QA to resolve UI/UX issues before launch.",
        ],
      },
    },
  },
  {
    id: 5,
    title: "21C Client Website",
    year: "2024",
    category: "WordPress",
    description:
      "A product-focused website for 21c with a dynamic CMS to manage and display offerings effectively.",
    images: [
      {
        url: "/images/21c/21c_web1.png",
        caption: "21C landing page",
      },
      {
        url: "/images/21c/21c_web2.png",
        caption: "21C landing page",
      },
      {
        url: "/images/21c/21c_web3.png",
        caption: "21C about us page",
      },
      {
        url: "/images/21c/21c_web4.png",
        caption: "21C school details page",
      },
      {
        url: "/images/21c/21c_web5.png",
        caption: "21C product details page",
      },
      {
        url: "/images/21c/21c_web6.png",
        caption: "21C product details page",
      },
      {
        url: "/images/21c/21c_web7.png",
        caption: "21C blog page",
      },
      {
        url: "/images/21c/21c_web8.png",
        caption: "21C contact us page",
      },
    ],
    tech: ["WordPress", "Elementor"],
    github: "https://www.21c.digital/",
    live: "https://www.21c.digital/",
    sections: {
      background: {
        objective:
          "Redesign and build a responsive, customizable marketing website for 21C to showcase their educational products and services. The goal was to ensure the site is easy for non-technical users to update content using WordPress and Elementor.",
      },
      designProcess: {
        contributions: [
          "Attended multiple client meetings to gather and finalize content and business needs.",
          "Worked closely with the design team to address feedback and apply UI updates.",
          "Recommended and agreed on using WordPress + Elementor for easy content management.",
          "Built the entire website using Elementor for full customization flexibility.",
          "Developed a mobile-responsive site, ensuring strong performance across devices.",
          "Gave a final demo to the client, showing how to manage content via Elementor.",
        ],
      },
    },
  },
  {
    id: 6,
    title: "Home Share Revolution",
    year: "2022",
    category: "HTML/CSS",
    description:
      "Home share helps landlords maximise returns and provides house shares for professionals.",
    images: [
      {
        url: "/images/home_share/home_share_web1.png",
        caption: "Home share landing page",
      },
      {
        url: "/images/home_share/home_share_web2.png",
        caption: "Home share landing page",
      },
      {
        url: "/images/home_share/home_share_web3.png",
        caption: "Home share landing page",
      },
      {
        url: "/images/home_share/home_share_web4.png",
        caption: "Home share landing page",
      },
      {
        url: "/images/home_share/home_share_web5.png",
        caption: "Home share landing page",
      },
      {
        url: "/images/home_share/home_share_web6.png",
        caption: "Home share Invest page",
      },
      {
        url: "/images/home_share/home_share_web7.png",
        caption: "Home share Invest properties page",
      },
      {
        url: "/images/home_share/home_share_web8.png",
        caption: "Home share tenants page",
      },
      {
        url: "/images/home_share/home_share_web9.png",
        caption: "Home share about us page",
      },
      {
        url: "/images/home_share/home_share_web10.png",
        caption: "Home share login page",
      },
      {
        url: "/images/home_share/home_share_mobile1.png",
        caption: "Home share mobile screens",
      },
      {
        url: "/images/home_share/home_share_mobile2.png",
        caption: "Home share mobile screens",
      },
    ],
    tech: ["HTML/CSS", "JavaScript", "Bootstrap 5"],
    github: "https://app.homeshare.co.uk/",
    live: "https://app.homeshare.co.uk/",
    sections: {
      background: {
        objective:
          "Design and implement the front-end for Homeshare’s marketing website, ensuring it is mobile responsive, optimized for search engines, and adheres to accessibility best practices. The platform needed to present information clearly, attract potential clients, and integrate seamlessly with the backend systems.",
      },
      designProcess: {
        contributions: [
          "Built the complete front end using HTML/CSS, JavaScript, and Bootstrap 5.",
          "Made the design fully mobile responsive.",
          "Optimized code for SEO and accessibility.",
          "Applied fixes and improvements after the first release.",
        ],
      },
    },
  },
  // Add more projects as needed
];
