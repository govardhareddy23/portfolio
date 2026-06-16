import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { name, bio } = portfolioData.profile;
  const skills = portfolioData.skills;

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-container">
        <div className="about-text">
          <div className="about-intro-card glass-panel">
            <p className="about-para">
              Hello! I'm <span className="highlight-text">{name}</span>, a dedicated developer who loves writing clean code and building scalable applications. My tech journey focuses on the <span className="highlight-text">MERN Stack</span> (MongoDB, Express, React, Node.js) and integrating secure payment processing workflows.
            </p>
          </div>
          <p className="about-para">
            I enjoy taking on challenges that require both frontend creativity and backend architecture. One of my key experiences is building e-commerce websites integrated with payment options like <span className="highlight-text">Razorpay</span>, dealing with cart synchronization, transactions, ledger details, and secure authentication.
          </p>
          <p className="about-para">
            I strive to build websites that aren't just functional, but also look premium and load instantly. I pay close attention to accessibility, responsiveness, and polished interactive micro-interactions.
          </p>
        </div>

        <div className="skills-container">
          {skills.map((cat, idx) => (
            <div key={idx} className="skill-category-card glass-panel glass-panel-hover">
              <h3 className="skill-category-title">
                <span>&gt;</span> {cat.category}
              </h3>
              <div className="skills-list">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
