import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-slate-900/50 scroll-mt-16 md:scroll-mt-20">
          <Hero />
        </section>
        
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900/50 to-gray-900/50 backdrop-blur-sm scroll-mt-16 md:scroll-mt-20">
          <Experience />
        </section>
        
        <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900/50 to-slate-900/50 backdrop-blur-sm scroll-mt-16 md:scroll-mt-20">
          <Projects />
        </section>
        
        <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900/50 to-gray-900/50 backdrop-blur-sm scroll-mt-16 md:scroll-mt-20">
          <Skills />
        </section>
        
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900/50 to-black/70 backdrop-blur-sm scroll-mt-16 md:scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}
