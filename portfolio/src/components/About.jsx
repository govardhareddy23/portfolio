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
              Hello! I'm <span className="highlight-text">{name}</span>, a Full-Stack AI Engineer who builds autonomous multi-agent systems and production-grade web applications. My recent work centers on <span className="highlight-text">LangGraph</span> agent orchestration and <span className="highlight-text">RAG (Retrieval-Augmented Generation)</span> pipelines, built on a strong foundation in the <span className="highlight-text">MERN Stack</span> and secure payment processing workflows.
            </p>
          </div>
          <p className="about-para">
            I enjoy architecting systems that combine LLM-powered reasoning with reliable engineering — from a 17-agent career automation platform with a human-in-the-loop approval workflow, to a real-time fraud detection pipeline benchmarking ANN, XGBoost, and Random Forest with SHAP explainability.
          </p>
          <p className="about-para">
            On the full-stack side, I've built e-commerce platforms integrated with payment gateways like <span className="highlight-text">Razorpay</span>, dealing with cart synchronization, transactions, ledger details, and secure authentication — and I bring that same attention to reliability and polish into every AI system I build.
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
