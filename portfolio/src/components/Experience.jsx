import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Journey</h2>
      
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="timeline-card glass-panel glass-panel-hover">
              <span className="timeline-date">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <span className="timeline-company">{exp.company}</span>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
