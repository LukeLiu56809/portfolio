import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('dark');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme ? savedTheme === 'true' : prefersDark;
    }
    return false;
  });
  
  const location = useLocation();

  // Get the appropriate title based on the current route
  const getPageTitle = () => {
    if (location.pathname === '/gobot') {
      return 'GOBOT';
    }
    if (location.pathname === '/trf') {
      return 'tRFs in Alzheimer\'s Disease';
    }
    if (location.pathname === '/shark') {
      return 'Shark!!!!';
    }
    if (location.pathname === '/ir') {
      return 'IR Data Synthesis';
    }
    if (location.pathname === '/blv') {
      return 'Accessible Presentation Interfaces';
    }
    if (location.pathname === '/embedded') {
      return 'Silly Embedded Projects';
    }
    if (location.pathname === '/cv') {
      return 'CV';
    }
    return 'luke liu';
  };

  // Render title with wave animation for project pages
  const renderTitle = () => {
    const title = getPageTitle();
    
    // Apply wave animation to all project pages and CV page
    if (['/gobot', '/trf', '/shark', '/ir', '/blv', '/embedded', '/cv'].includes(location.pathname)) {
      // Split into individual letters and spaces
      const letters = title.split('').map((char, index) => (
        <span key={index} className="wave-letter">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
      return letters;
    }
    
    return title;
  };

  useEffect(() => {
    // Sync with DOM
    document.documentElement.classList.toggle('dark', isDark);
    
    // Update meta theme color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#000' : '#faf8f1');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('dark', newIsDark.toString());
  };

  return (
    <header className="mx-auto">
      <header className="relative">
        <div className="header-container">
          <div className="header-left">
            <span className="site-title">{renderTitle()}</span>
            <button
              className="btn-dark ml-4 h-10 w-10 shrink-0 cursor-pointer"
              style={{
                backgroundImage: 'url(./theme.svg)',
                backgroundPosition: isDark ? 'right center' : 'left center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: isDark ? 'invert(1)' : 'none',
                border: 'none',
                outline: 'none',
                minWidth: '2.5rem',
                minHeight: '2.5rem',
                transform: 'translateY(0.2rem)'
              }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDarkMode}
            />
          </div>

          <div className="header-right">
            <nav className="nav-right">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
              >
                home
              </Link>
              <Link 
                to="/cv" 
                className={`nav-link ${location.pathname === '/cv' ? 'nav-link-active' : ''}`}
              >
                CV
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="line"></div>
      </header>

    </header>
  );
};

export default Header;
