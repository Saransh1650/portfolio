import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 relative">
      {/* Tech pattern background */}
      <div className="tech-bg"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10 pt-16 md:pt-20">
        <section id="home" className="scroll-mt-16 md:scroll-mt-20">
          <Hero />
        </section>
        
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-dark-900 scroll-mt-16 md:scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>
        
        <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-dark-950 scroll-mt-16 md:scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </section>
        
        <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-dark-900 scroll-mt-16 md:scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Skills />
          </div>
        </section>
        
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-dark-950 scroll-mt-16 md:scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
