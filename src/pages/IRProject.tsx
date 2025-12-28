import React, { useEffect } from 'react';

const IRProject: React.FC = () => {
  useEffect(() => {
    document.title = 'IR Data Synthesis - Luke Liu';
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
              This project was a collaboration between the <u><a href="https://ipl-uw.github.io/index.html" target="_blank" rel="noopener noreferrer">Information Processing Lab (IPL)</a></u> at the University of Washington and <u><a href="https://www.deepmentor.ai/" target="_blank" rel="noopener noreferrer">DeepMentor</a></u>.
            </p>
            <p>
            I worked with PhD student <u><a href="https://jen-haocheng.com/#/" target="_blank" rel="noopener noreferrer">Andy Cheng</a></u> in 2025 to develop a data synthesis pipeline using Vega Prime and Lynx Prime simulators to generate large-scale infrared (IR) imagery for computer vision training.
            </p>
            
            <div className="project-image-section">
              <img 
                src="/portfolio/andy2.png" 
                alt="Andy Cheng" 
                className="project-image"
              />
            </div>
            
            <div className="project-image-section">
              <img 
                src="/portfolio/andy1.png" 
                alt="Andy Cheng" 
                className="project-image"
              />
              <p className="image-caption">
                Andy — the coolest guy ever.
              </p>
            </div>
          </div>
          
          <div className="project-main-content">
            <h1>Infrared Data Synthesis for Computer Vision Using Vega Prime and Lynx Prime</h1>
            
            <p>
              Training robust computer vision models for defense and remote sensing applications requires diverse and well-labeled datasets. However, real-world infrared (IR) imagery is often limited due to cost, security restrictions, and collection constraints. This project addressed that gap by developing a simulator-driven pipeline to generate synthetic IR data using Vega Prime and Lynx Prime.
            </p>
            
            <p>
            I constructed 3D scenes in Vega Prime featuring targets such as vehicles, bridges, and hangars under different environmental settings. Lynx Prime's physics-based IR rendering engine was integrated to simulate realistic thermal emission profiles, reflections, and sensor noise. The resulting data was used to train and evaluate object detection models, improving robustness across variations in lighting, temperature, and viewing angles.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <img 
                src="/portfolio/IRDemo.png" 
                alt="Pipeline Output" 
                className="project-main-image"
                loading="lazy"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>Pipeline Output</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IRProject;
