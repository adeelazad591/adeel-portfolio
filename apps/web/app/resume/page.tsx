"use client";

import Link from "next/link";
import {
  Download,
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Github,
} from "lucide-react";

export default function ResumePage() {
  const handleDownload = async () => {
    const element = document.getElementById("resume-content");
    if (!element) return;

    // Loaded on demand: html2canvas/jsPDF are only needed for this one
    // click handler, so keep them out of the page's initial bundle.
    const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const canvas = await html2canvas(element, {
      scale: 1.5, // Reduced scale to decrease file size
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.8); // Use JPEG with 80% quality to reduce size
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const pageHeight = 297; // Corrected A4 height
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add subsequent pages if content overflows
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Adeel_Azad_Resume.pdf");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-slate hover:text-theme flex items-center transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <button
            onClick={handleDownload}
            className="bg-theme text-navy flex items-center rounded px-4 py-2 font-medium transition-colors hover:bg-opacity-80"
          >
            <Download size={18} className="mr-2" />
            Download PDF
          </button>
        </div>

        <div
          id="resume-content"
          className="mx-auto max-w-5xl border border-gray-200 bg-white text-gray-900 shadow-2xl"
        >
          <header className="bg-gray-800 p-6 text-white">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="mb-2 text-3xl font-bold">ADEEL AZAD</h1>
                <h2 className="mb-4 text-xl font-semibold text-blue-300">
                  Senior Frontend Developer
                </h2>
                <p className="text-sm leading-relaxed text-gray-300">
                  Frontend developer with 10+ years of experience building
                  scalable web apps using React, Svelte, and modern UI
                  frameworks. Passionate about clean UI, performance
                  optimization, exploring Node.js for backend, and leveraging AI
                  tools to boost development speed and quality.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-300" />
                  <span>+92 331 5186415</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-300" />
                  <span>adeelaza591@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-300" />
                  <span>www.adeelazad.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-blue-300" />
                  <span>linkedin.com/in/adeelazad591</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-blue-300" />
                  <span>github.com/adeelazad591</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="lg:col-span-3">
                <section className="mb-8">
                  <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide text-gray-800">
                    PROFESSIONAL EXPERIENCE
                  </h3>

                  <div className="mb-6">
                    <div className="mb-1 flex flex-wrap items-start justify-between">
                      <h4 className="text-base font-bold text-gray-900">
                        Senior Frontend Developer
                      </h4>
                      <span className="text-sm font-medium text-gray-600">
                        Aug 2018 - Present
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-between">
                      <span className="font-semibold text-blue-600">
                        Knowledge Platform
                      </span>
                      <span className="text-sm text-gray-600">
                        Islamabad (Remote)
                      </span>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      <li>
                        Built React and Svelte-based LMS used by 100,000+ users.
                      </li>
                      <li>
                        Used Tailwind CSS, Bootstrap, and Material UI for fast,
                        consistent UI development.
                      </li>
                      <li>
                        Improved performance with lazy loading, code splitting,
                        and accessibility best practices.
                      </li>
                      <li>
                        Converted high-fidelity mockups into pixel-perfect,
                        interactive UIs with designers.
                      </li>
                      <li>
                        Leveraged AI tools like GitHub Copilot and ChatGPT to
                        accelerate development and improve productivity.
                      </li>
                      <li>
                        Worked with backend teams and PMs to refine features and
                        optimize user flows.
                      </li>
                      <li>
                        Mentored junior developers via code reviews, pair
                        programming, and best practices.
                      </li>
                      <li>Managed code and workflows using Git and GitHub.</li>
                      <li>
                        Handled deployments and resolved post-release issues
                        based on user feedback.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="mb-1 flex flex-wrap items-start justify-between">
                      <h4 className="text-base font-bold text-gray-900">
                        UI/UX Developer
                      </h4>
                      <span className="text-sm font-medium text-gray-600">
                        Aug 2016 - Aug 2018
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-between">
                      <span className="font-semibold text-blue-600">
                        TEO International
                      </span>
                      <span className="text-sm text-gray-600">
                        Denmark (Remote)
                      </span>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      <li>
                        Worked on multiple real-time Danish projects involving
                        complex web and mobile applications.
                      </li>
                      <li>
                        Designed web and mobile app interfaces with a strong
                        focus on user experience and responsiveness.
                      </li>
                      <li>
                        Converted PSD designs into clean, semantic HTML using
                        modern frontend standards.
                      </li>
                      <li>
                        Implemented responsive layouts using media queries for
                        cross-device compatibility.
                      </li>
                      <li>
                        Developed interactive features using JavaScript, jQuery,
                        and AngularJS (version 4).
                      </li>
                      <li>
                        Collaborated with cross-functional teams following Scrum
                        methodology.
                      </li>
                      <li>
                        Communicated daily with Danish clients via email and
                        Skype for requirement gathering and updates.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="mb-1 flex flex-wrap items-start justify-between">
                      <h4 className="text-base font-bold text-gray-900">
                        Frontend Developer
                      </h4>
                      <span className="text-sm font-medium text-gray-600">
                        Jan 2015 - Aug 2016
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-between">
                      <span className="font-semibold text-blue-600">
                        Global Bridge Solutions
                      </span>
                      <span className="text-sm text-gray-600">
                        Islamabad, Pakistan
                      </span>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      <li>
                        Developed customer-facing e-commerce features using
                        modern JavaScript frameworks
                      </li>
                      <li>
                        Implemented responsive designs using HTML5, CSS3, and
                        JavaScript ES6+
                      </li>
                      <li>
                        Collaborated with backend team to integrate RESTful APIs
                      </li>
                      <li>
                        Optimized website performance and improved page load
                        times by 35%
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="mb-1 flex flex-wrap items-start justify-between">
                      <h4 className="text-base font-bold text-gray-900">
                        Web Designer
                      </h4>
                      <span className="text-sm font-medium text-gray-600">
                        Jul 2014 - Dec 2014
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-between">
                      <span className="font-semibold text-blue-600">
                        MediaLinkers
                      </span>
                      <span className="text-sm text-gray-600">
                        Islamabad, Pakistan
                      </span>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      <li>
                        Designed and developed websites for small businesses and
                        startups
                      </li>
                      <li>Created custom WordPress themes and plugins</li>
                      <li>
                        Managed client relationships and project timelines
                      </li>
                      <li>
                        Built responsive websites optimized for mobile devices
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-6">
                  <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide text-gray-800">
                    EDUCATION
                  </h3>

                  <div>
                    <div className="mb-1 flex flex-wrap items-start justify-between">
                      <h4 className="text-base font-bold text-gray-900">
                        BS Software Engineering
                      </h4>
                      <span className="text-sm font-medium text-gray-600">
                        2010 - 2014
                      </span>
                    </div>
                    <span className="font-semibold text-blue-600">
                      International Islamic University Islamabad.
                    </span>
                    <p className="mt-1 text-sm text-gray-700">
                      Islamabad, Pakistan | GPA: 2.9/4.0
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide text-gray-800">
                    KEY ACHIEVEMENTS
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>
                      Reduced application load time by 40% through strategic
                      code splitting and optimization
                    </li>
                    <li>
                      Successfully led and mentored teams of 4+ developers
                      across multiple projects
                    </li>
                    <li>
                      Built applications serving 100,000+ active users with
                      99.9% uptime
                    </li>
                    <li>
                      Implemented comprehensive testing strategies achieving
                      90%+ code coverage
                    </li>
                  </ul>
                </section>
              </div>

              <div className="lg:col-span-1">
                <section className="mb-6">
                  <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide text-gray-800">
                    TECHNICAL SKILLS
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-bold text-gray-800">
                        Frontend
                      </h4>
                      <div className="space-y-1 text-xs text-gray-700">
                        <div>• React, Svelte, JavaScript ES6+</div>
                        <div>• HTML5, CSS3</div>
                        <div>• Node.Js (Interested) </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-bold text-gray-800">
                        Styling & UI
                      </h4>
                      <div className="space-y-1 text-xs text-gray-700">
                        <div>• Tailwind CSS, Material UI</div>
                        <div>• Styled Components, Bootstrap</div>
                        <div>• Custom CSS, SCSS</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-bold text-gray-800">
                        Tools & Testing
                      </h4>
                      <div className="space-y-1 text-xs text-gray-700">
                        <div>• Git, Webpack, Vite</div>
                        <div>• Figma, Adobe XD</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-bold text-gray-800">
                        Backend & Database <small>(Interested)</small>
                      </h4>
                      <div className="space-y-1 text-xs text-gray-700">
                        <div>• Node.js, Express</div>
                        <div>• MongoDB, PostgreSQL</div>
                        <div>• REST APIs, GraphQL</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-6">
                  <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide text-gray-800">
                    LANGUAGES
                  </h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>English (Fluent)</div>
                    <div>Urdu (Native)</div>
                    <div>Punjabi (Native)</div>
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide text-gray-800">
                    INTERESTS
                  </h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>• Open Source Contributing</div>
                    <div>• UI/UX Design</div>
                    <div>• Technology Blogging</div>
                    <div>• Mentoring Developers</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
