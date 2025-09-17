import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">📚</span>
              <span className="logo-text">StemMinds</span>
            </div>
            <p className="footer-description">
              Empowering rural education through gamified STEM learning
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#features" className="footer-link">Features</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#support" className="footer-link">Support</a>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <div className="footer-links">
              <a href="#download" className="footer-link">Download</a>
              <a href="#docs" className="footer-link">Documentation</a>
              <a href="#tutorials" className="footer-link">Tutorials</a>
              <a href="#community" className="footer-link">Community</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 StemMinds. Built for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;