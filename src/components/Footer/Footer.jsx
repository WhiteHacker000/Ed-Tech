import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <footer className = 'footer'>
      <div className = 'footer-container'>
        <div className = 'footer-content'>
          {/*Logo and description*/}
          <div className = 'footer-section'>
            <div className = 'footer-logo'>
              <span classname = 'logo-icon'>{/*Logo pic */}</span>
              <span className = 'logo-text'>SteMinds</span>
            </div>
            <p className = 'footer-descrption'>
              Empowering rural Education through gamified STEM learning
            </p>
        </div>
        
      

        {/*Quick links */}
        <div className = 'footer-section'>
          <h4 className = 'footer-heading'>Quick Links</h4>
          <div className = 'footer-links'>
            <a href = '#features' className = 'footer-link'>Features</a>
            <a href = '#about' className = 'footer-link'>About</a>
            <a href = '#contact' className = 'footer-link'>Contact</a>
            <a href = '#support' className = 'footer-link'>Support</a>
          </div>
        </div>

        {/*Resources Part */}
        <div className = 'footer-section'>
          <h4 className = 'footer-heading'>Resources</h4>
          <div className = 'footer-links'>
            <a href= '#download' className = 'fotter-link'>Download</a>
            <a href= '#docs' className = 'fotter-link'>Docs</a>
            <a href= '#tutorials' className = 'fotter-link'>Tutorials</a>
            <a href= '#community' className = 'fotter-link'>Community</a>
          </div>
        </div>
      </div>
    
      </div>
    </footer>
  )
}

