import React from 'react';
import Header from './components/Header';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  const { name } = portfolioData.profile;
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Background visual layers */}
      <div className="cyber-grid"></div>
      <div className="scanlines"></div>
      <ParticleBackground />

      {/* Main navigation */}
      <Header />

      {/* Content wrapper */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer 
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '40px 20px',
          textAlign: 'center',
          background: 'rgba(8, 9, 13, 0.95)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}
      >
        <p style={{ marginBottom: '8px' }}>
          &copy; {currentYear} <span style={{ color: 'var(--color-neon-cyan)' }}>{name}</span>. All rights reserved.
        </p>
        <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          Designed with Cyberpunk &amp; Glassmorphism Aesthetics. Built using React &amp; Vite.
        </p>
      </footer>
    </>
  );
}

export default App;
