import React, { useEffect } from 'react';

const GobotProject: React.FC = () => {
  useEffect(() => {
    // Set the page title
    document.title = 'GOBOT - Luke Liu';
    
    // Cleanup function to restore original title when component unmounts
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
              I worked with <u><a href="https://www.utmb.edu/spph/muhammad-amith-ms-phd" target="_blank" rel="noopener noreferrer">Professor Muhammad Amith</a></u> on this project in 2023, building <u><a href="https://github.com/UTHealth-Ontology/GOBOT" target="_blank" rel="noopener noreferrer">GOBOT</a></u> to improve the accessibility of <u><a href="https://robot.obolibrary.org/" target="_blank" rel="noopener noreferrer">ROBOT</a></u>.
            </p>
            <p>
              We presented our <u><a href="https://www.computer.org/csdl/proceedings-article/ichi/2024/837300a547/1ZCgVqIb6uY" target="_blank" rel="noopener noreferrer">work</a></u> at IEEE ICHI in June, 2024.
            </p>
            
            <div className="project-image-section">
              <img 
                src="/portfolio/robot_jasmine.jpg" 
                alt="GOBOT Robot Artwork" 
                className="project-image"
              />
              <p className="image-caption">
                Shoutout to my friend Jasmine Park for this awesome artwork!
              </p>
            </div>
          </div>
          
          <div className="project-main-content">
            <h1>GOBOT: A Graphical User Interface for ROBOT</h1>
            
            <p>
              Ontology editing is often done through command-line tools like ROBOT, which can be difficult for researchers without a technical background. GOBOT reimagines this process through an interactive, GUI-based interface designed to make ontology management more intuitive and accessible.
            </p>
            
            <p>
            The interface brings core ROBOT functionalities such as term merging, reasoning, and template management into a clear, task-oriented visual workflow. Each feature is labeled and organized for simplicity, lowering both the technical and cognitive barriers to ontology curation.
            </p>
            
            <p>
            We published a conference paper at IEEE ICHI 2024 describing GOBOT’s design and evaluation process. The system was tested with ontology researchers, whose feedback directly guided iterative improvements in usability and overall user experience.
            </p>
            
            <div className="project-main-image-section">
              <img 
                src="/portfolio/GOBOT.png" 
                alt="GOBOT Interface Screenshot" 
                className="project-main-image"
                loading="lazy"
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>GOBOT UI</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GobotProject;