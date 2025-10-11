import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="introduction-section">
      <div className="introduction-content">
        <h2>Hullo</h2>
        <p>
        I’m a first-year MSc Computer Science student at the University of Rochester, exploring how human-computer interaction and AI can make technology more accessible and intuitive for everyone.
        </p>
      </div>
      
      <div className="social-buttons-vertical">
        <a
          href="https://github.com/LukeLiu56809"
          target="_blank"
          rel="me"
          className="social-button-vertical"
          aria-label="GitHub"
        >
          <div className="social-icon-vertical github-icon"></div>
          <span>GitHub</span>
        </a>
        
        <a
          href="https://linkedin.com/in/lukel7"
          target="_blank"
          rel="me"
          className="social-button-vertical"
          aria-label="LinkedIn"
        >
          <div className="social-icon-vertical linkedin-icon"></div>
          <span>LinkedIn</span>
        </a>
        
        <a
          href="mailto:lukeliu56809@gmail.com"
          className="social-button-vertical"
          aria-label="Email"
        >
          <div className="social-icon-vertical email-icon"></div>
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
