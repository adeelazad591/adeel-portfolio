import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <div className="bg-navy">
      <Navbar />

      {/* Hero Section */}
      <section className="py-0 md:py-12">
        <Hero />
      </section>

      {/* About Section */}
      <section className="py-0 md:py-12">
        <About />
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <Experience />
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <ProjectsPreview />
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />

      <ScrollToTop />
    </div>
  );
}
