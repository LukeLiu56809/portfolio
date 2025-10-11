import React, { useEffect, useState } from 'react';

const EmbeddedProject: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'glasses' | 'ipod'>('glasses');

  useEffect(() => {
    document.title = 'Embedded Systems Projects - Luke Liu';
    return () => {
      document.title = 'lukeliu-react';
    };
  }, []);

  const renderGlassesSection = () => (
    <>
       <div className="project-introduction">
         <p>
           A wearable navigation prototype designed to help visually impaired users detect nearby obstacles and navigate safely using real-time feedback.
         </p>
         
         <div className="project-image-section">
           <img 
             src="/glasses1.jpg" 
             alt="Object Avoidance Glasses Prototype" 
             className="project-image"
           />
           <p className="image-caption">I felt so bad for him</p>
         </div>
       </div>
      
      <div className="project-main-content">
        <h1>Object Avoidance for Visually Impaired Navigation</h1>
        
        <p>
          This project involved building a wearable assistive device capable of detecting obstacles and alerting users through audio feedback. The goal was to enhance spatial awareness and safety for visually impaired individuals in daily navigation tasks.
        </p>
        
        <p>
          The device used an <strong>Arducam Time-of-Flight (ToF) depth sensor</strong> to detect object proximity, a <strong>Raspberry Pi</strong> for onboard processing and running the <strong>YOLOv8 object detection model</strong>, and a <strong>text-to-speech (TTS) module</strong> for real-time audio alerts.
        </p>
        
        <p>
          Data from the ToF sensor and camera were fused to identify obstacles and estimate their distances, triggering context-aware alerts when users approached them. The system was tested across indoor and outdoor environments.
        </p>

         <p>
             We really need to work on the form factor lol...
         </p>

         <div className="project-main-image-section" style={{ textAlign: 'center' }}>
           <video 
             src="/glasses2.mov"
             controls
             className="project-main-image"
             style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
           >
             Your browser does not support the video tag.
           </video>
           <p className="image-caption" style={{ textAlign: 'center' }}>Demo</p>
         </div>
         
       </div>
    </>
  );

  const renderIpodSection = () => (
    <>
      <div className="project-introduction">
        <p>
          A hardware project inspired by early-generation iPods, created using an Arduino to explore task scheduling and embedded control.
        </p>
      </div>
      
      <div className="project-main-content">
        <h1>Arduino-Based iPod</h1>
        
        <p>
          This project involved designing a simple media playback emulator on an Arduino platform.
        </p>
        
          <p>
            The system used <strong>FreeRTOS</strong> to handle multiple tasks, including button input, display updates, and simulated audio control. Hardware components included an <strong>Arduino Uno</strong>, <strong>Liquid Crystal Display</strong>, <strong>IR Remote</strong>, and <strong>Speaker</strong>. The main challenge was achieving responsive multitasking behavior under limited hardware resources while maintaining low power consumption.
          </p>

          <div className="project-main-image-section" style={{ textAlign: 'center' }}>
            <video 
              src="/ipoddemo.MOV"
              controls
              className="project-main-image"
              style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
            >
              Your browser does not support the video tag.
            </video>
            <p className="image-caption" style={{ textAlign: 'center' }}>Demo</p>
          </div>
        </div>
    </>
  );

  return (
    <main className="prose prose-neutral relative mx-auto min-h-[calc(100%-9rem)] max-w-[--w] px-8 pb-16 pt-14 dark:prose-invert">
      <div className="project-detail-container">
        {/* Toggle Navigation - Moved to top */}
        <div className="project-toggle-nav" style={{ marginTop: 0, marginBottom: '2rem', paddingTop: 0, borderTop: 'none' }}>
          <button
            className={`toggle-button ${activeSection === 'glasses' ? 'active' : ''}`}
            onClick={() => setActiveSection('glasses')}
          >
            Object Avoidance
          </button>
          <button
            className={`toggle-button ${activeSection === 'ipod' ? 'active' : ''}`}
            onClick={() => setActiveSection('ipod')}
          >
            Arduino iPod
          </button>
        </div>
        
        <div className="project-detail-layout">
          {activeSection === 'glasses' ? renderGlassesSection() : renderIpodSection()}
        </div>
      </div>
    </main>
  );
};

export default EmbeddedProject;
