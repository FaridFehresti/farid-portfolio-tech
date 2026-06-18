import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Experience />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Skills />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
