import React, { useEffect } from 'react';

const SharkProject: React.FC = () => {
  useEffect(() => {
    document.title = 'Shark!!!! - Luke Liu';
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
              This project was a collaboration between <u><a href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA</a></u> and the <u><a href="https://ipl-uw.github.io/index.html" target="_blank" rel="noopener noreferrer">Information Processing Lab</a></u> at the University of Washington.
            </p>
            <p>
              I began working under <u><a href="https://ipl-uw.github.io/people.html" target="_blank" rel="noopener noreferrer">Professor Jenq-Neng Hwang</a></u> in 2024 on developing computer vision systems to automate length estimation and species recognition in real-world marine environments.
            </p>
            
            <div className="project-image-section">
              <img 
                src="/portfolio/hwang_grad.png" 
                alt="Professor Jenq-Neng Hwang" 
                className="project-image"
              />
              <p className="image-caption">
                Waw PI so handsome
              </p>
            </div>
          </div>
          
          <div className="project-main-content">
            <h1>Automated Fish Measurement for Electronic Monitoring</h1>
            
            <p>
              Electronic monitoring systems on fishing vessels capture thousands of hours of underwater footage, requiring significant manual effort to review. This project applied computer vision and deep learning to automate the identification and measurement of fish species, aiming to improve efficiency and consistency in fisheries analysis.
            </p>
            
            <p>
              I developed a segmentation pipeline using <u><a href="https://docs.ultralytics.com/" target="_blank" rel="noopener noreferrer">YOLO</a></u> to detect and isolate sharks from video frames collected aboard NOAA-monitored vessels. Once segmented, I applied a custom PCA-based midline estimation algorithm to estimate body length. The algorithm erodes the binary mask iteratively to reveal internal body structure, then applies principal component analysis to extract the overall orientation. A midline is traced along the principal axis, smoothed to reduce local curvature noise, and measured in pixel units.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <video 
                src="/portfolio/Midline.mp4"
                controls
                preload="metadata"
                className="project-main-image"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              >
                Your browser does not support the video tag.
              </video>
              <p className="image-caption" style={{ textAlign: 'center' }}>Midline Algorithm Demo</p>
            </div>
            
            <p>
              Pixel lengths are converted to real-world measurements using camera calibration and onboard reference markers.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <img 
                src="/portfolio/calibration.jpg" 
                alt="Camera Calibration" 
                className="project-main-image"
                loading="lazy"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>Camera Calibration</p>
            </div>
            
            <p>
              The system was evaluated on multiple species, including Pacific sleeper sharks, where low contrast and variable illumination challenged standard models. These findings motivate multimodal integration (e.g., IR imaging or sensor metadata) to improve robustness in low-light conditions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SharkProject;
