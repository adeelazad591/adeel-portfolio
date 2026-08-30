"use client";

import Link from "next/link";
import {
  Download,
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

import { generateResumePdf } from "@/lib/generateResumePdf";
import { resumeData } from "@/lib/resumeData";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-border text-foreground mb-4 border-b pb-2 text-sm font-bold uppercase tracking-widest">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="text-body space-y-1.5 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="bg-primary mt-[7px] h-1 w-1 shrink-0 rounded-full" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const handleDownload = () => {
    void generateResumePdf();
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:px-10">
        {/* Top bar: breadcrumb + download */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <nav className="text-muted-foreground flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Resume</span>
          </nav>

          <button
            onClick={handleDownload}
            className="bg-primary text-primary-foreground inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold leading-[26px] transition-opacity hover:opacity-90"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>

        <div id="resume-content" className="bg-background">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-foreground mb-2 text-4xl font-bold sm:text-5xl">
              {resumeData.name}
            </h1>
            <h2 className="text-primary mb-5 text-lg font-semibold sm:text-xl">
              {resumeData.title}
            </h2>

            <div className="text-body mb-5 flex flex-nowrap items-center gap-x-6 overflow-x-auto text-sm">
              <span className="flex shrink-0 items-center gap-2">
                <Phone size={15} className="text-muted-foreground" />
                {resumeData.contact.phone}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <Mail size={15} className="text-muted-foreground" />
                {resumeData.contact.email}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <Globe size={15} className="text-muted-foreground" />
                {resumeData.contact.website}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://${resumeData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary/40 text-primary hover:bg-primary/10 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
              >
                <Github size={15} />
                GitHub
                <ExternalLink size={12} />
              </a>
              <a
                href={`https://${resumeData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
              >
                <Linkedin size={15} />
                LinkedIn
                <ExternalLink size={12} className="text-muted-foreground" />
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-10">
            <SectionHeading>Professional Summary</SectionHeading>
            <p className="text-body text-sm leading-relaxed">
              {resumeData.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="space-y-3">
              {resumeData.skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                >
                  <span className="text-foreground w-full shrink-0 text-sm font-bold sm:w-56">
                    {group.label}:
                  </span>
                  <span className="text-body text-sm">{group.items}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-10">
            <SectionHeading>Work Experience</SectionHeading>

            <div className="space-y-8">
              {resumeData.experiences.map((exp) => (
                <div key={exp.title + exp.company}>
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-foreground text-base font-bold">
                      {exp.title}
                    </h4>
                    <span className="text-muted-foreground text-sm tabular-nums">
                      {exp.dates}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-primary font-semibold italic">
                      {exp.company}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {exp.location}
                    </span>
                  </div>
                  <BulletList items={exp.bullets} />
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <SectionHeading>Education</SectionHeading>
            <div>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-foreground text-base font-bold">
                  {resumeData.education.degree}
                </h4>
                <span className="text-muted-foreground text-sm tabular-nums">
                  {resumeData.education.dates}
                </span>
              </div>
              <span className="text-primary font-semibold italic">
                {resumeData.education.institution}
              </span>
              <p className="text-body mt-1 text-sm">
                {resumeData.education.details}
              </p>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-10">
            <SectionHeading>Key Achievements</SectionHeading>
            <BulletList items={resumeData.achievements} />
          </section>

          {/* Languages */}
          <section className="mb-10">
            <SectionHeading>Languages</SectionHeading>
            <p className="text-body text-sm">
              {resumeData.languages.join(" · ")}
            </p>
          </section>

          {/* Interests */}
          <section>
            <SectionHeading>Interests</SectionHeading>
            <BulletList items={resumeData.interests} />
          </section>
        </div>
      </div>
    </div>
  );
}
