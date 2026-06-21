import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = portfolioData.projects;

  // Modern tech-gradient banners as high-end visual representations
  const gradientBanners = [
    'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.25) 100%)',
    'linear-gradient(135deg, rgba(254, 1, 154, 0.15) 0%, rgba(127, 0, 255, 0.25) 100%)',
    'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(254, 1, 154, 0.2) 100%)'
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Work</h2>
      
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card glass-panel">
            <div className="project-image-container">
              <div 
                className="project-image-placeholder"
                style={{
                  width: '100%',
                  height: '100%',
                  background: gradientBanners[idx % gradientBanners.length],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <FaCode 
                  size={50} 
                  color={idx % 2 === 0 ? 'var(--color-neon-cyan)' : 'var(--color-neon-pink)'}
                  style={{
                    filter: `drop-shadow(0 0 10px ${idx % 2 === 0 ? 'var(--color-neon-cyan)' : 'var(--color-neon-pink)'})`,
                    opacity: 0.8
                  }}
                />
                
                {/* Scanner/grid sub-effects */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    pointerEvents: 'none'
                  }}
                ></div>
              </div>
              <div className="project-image-overlay"></div>
            </div>
            
            <div className="project-info">
              <div className="project-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              
              <div className="project-links">
                {proj.codeLink && proj.codeLink !== '#' && (
                  <a 
                    href={proj.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    aria-label={`View code for ${proj.title}`}
                  >
                    <FaGithub /> Source
                  </a>
                )}
                {proj.liveLink && proj.liveLink !== '#' && (
                  <a 
                    href={proj.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    aria-label={`Live demo of ${proj.title}`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
