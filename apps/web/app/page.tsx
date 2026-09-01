import { About } from "@/components/About";
import { BuiltWith } from "@/components/BuiltWith";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { Recommendations } from "@/components/Recommendations";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsPreview />
      <Recommendations />
      <BuiltWith />
      <Contact />
    </>
  );
}
