import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Industries } from "@/components/sections/Industries";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Services } from "@/components/sections/Services";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-24 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <Industries />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
