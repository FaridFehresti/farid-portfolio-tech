import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Nav dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <About dict={dict} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Experience dict={dict} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Projects dict={dict} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Skills dict={dict} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="divider-glow" />
        </div>
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
