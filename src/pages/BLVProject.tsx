import React, { useEffect } from 'react';

const BLVProject: React.FC = () => {
  useEffect(() => {
    document.title = 'Accessible Presentation Interfaces - Luke Liu';
    return () => {
      document.title = 'lukeliu';
    };
  }, []);

  return (
    <main className="prose prose-neutral relative mx-auto min-h-[calc(100%-9rem)] max-w-[--w] px-8 pb-16 pt-14 dark:prose-invert">
      <div className="project-detail-container">
        <div className="project-detail-layout">
          <div className="project-introduction">
            <p>
              Currently working with <u><a href="https://www.cs.rochester.edu/people/faculty/yan_yukang/index.html" target="_blank" rel="noopener noreferrer">Professor Yukang Yan</a></u> and <u><a href="https://tasiinn.github.io/" target="_blank" rel="noopener noreferrer">Tasin Khan</a></u> to develop accessibility-focused interfaces for blind and low-vision (BLV) presenters in video conference environments.
            </p>
          </div>
          
          <div className="project-main-content">
            <h1>Accessibility Focused Interfaces for Blind and Low-Vision Presenters</h1>
            <p>Currently working on this project hehe...</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BLVProject;
