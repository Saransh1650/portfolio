import Hero from '@/components/Hero';
import CurrentlyBuilding from '@/components/CurrentlyBuilding';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navigation />
      <main>
        <Hero />
        <CurrentlyBuilding />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
            Saransh Singhal
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            © 2025 · Built with Next.js
          </span>
        </div>
      </footer>
    </div>
  );
}
