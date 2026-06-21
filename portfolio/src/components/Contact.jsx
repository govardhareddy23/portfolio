import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { socials } = portfolioData.profile;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate network latency and connection to server
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Connect</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div>
            <h3 className="contact-subtitle">Get In Touch</h3>
            <p className="contact-para">
              Want to collaborate, discuss full-stack projects, or learn more about my experience with Razorpay and MERN stacks? Drop me a message!
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-label">
                <span className="contact-label-name">Email</span>
                <a href={socials.email} className="contact-label-value">
                  {socials.email.replace('mailto:', '')}
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-label">
                <span className="contact-label-name">GitHub</span>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="contact-label-value">
                  github.com/govardhareddy23
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card glass-panel">
          {status === 'success' ? (
            <div className="transmission-status">
              <span className="transmission-title">&gt; Transmission Received</span>
              <span>Your message has bypassed security and has been successfully queued. I will contact you shortly.</span>
              <button 
                className="btn-cyber" 
                style={{ marginTop: '16px', padding: '8px 20px', fontSize: '0.75rem' }} 
                onClick={() => setStatus(null)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Neo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. hacker@matrix.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Initiate communication protocols..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'error' && (
                <div style={{ color: 'var(--color-neon-pink)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  [ERROR]: All fields are required to secure uplink.
                </div>
              )}

              <button 
                type="submit" 
                className="btn-cyber btn-cyber-pink"
                disabled={status === 'sending'}
              >
                <FaPaperPlane /> {status === 'sending' ? 'Transmitting...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
