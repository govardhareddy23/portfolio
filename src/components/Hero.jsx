import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaCode, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { name, title, bio, socials } = portfolioData.profile;
  const roles = [title, "MERN Stack Specialist", "Payment Systems Enthusiast", "Problem Solver"];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    // Toggle typing states
    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-pretitle">System.Initialize()</div>
        <h1 className="hero-name">
          Hi, I am <span>{name}</span>
        </h1>
        <div className="hero-subtitle">
          <span>{displayText}</span>
          <span className="hero-cursor"></span>
        </div>
        <p className="hero-bio">{bio}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn-cyber" onClick={(e) => handleCtaClick(e, 'projects')}>
            <FaCode /> View Projects
          </a>
          <a href="#contact" className="btn-cyber btn-cyber-pink" onClick={(e) => handleCtaClick(e, 'contact')}>
            <FaEnvelope /> Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="terminal-window glass-panel">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">bash --profile.sh</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">govardhan@dev:~$</span>
              <span className="terminal-command">fetch --profile</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-output">Fetching developer parameters...</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-output">Name: </span>
              <span className="terminal-accent">{name}</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-output">Role: </span>
              <span className="terminal-accent">{title}</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-output">Stack: </span>
              <span className="terminal-accent">MERN (Mongo, Express, React, Node)</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-output">Payments: </span>
              <span className="terminal-accent">Razorpay & Custom Wallets</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-output">Status: </span>
              <span className="terminal-accent" style={{ color: 'var(--color-neon-yellow)' }}>Open to Work</span>
            </div>
            <div className="terminal-line" style={{ marginTop: '16px' }}>
              <span className="terminal-prompt">govardhan@dev:~$</span>
              <span className="terminal-cursor">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
