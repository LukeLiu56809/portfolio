import React, { useEffect, useState } from 'react';

const RoomSenseProject: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'RoomSense - Luke Liu';
    return () => {
      document.title = 'lukeliu';
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <main className="prose prose-neutral relative mx-auto min-h-[calc(100%-9rem)] max-w-[--w] px-8 pb-16 pt-14 dark:prose-invert">
      <div className="project-detail-container">
        <div className="project-detail-layout">
          <div className="project-introduction">
            <p>
              This project was a collaboration between <u><a href="https://www.library.rochester.edu/spaces/studio-x" target="_blank" rel="noopener noreferrer">Studio X</a></u> and Snap Inc. (Snapchat).
            </p>
            <p>
              RoomSense is an AR + web system that shows real-time engagement signals during live lectures. Here's the <u><a href="https://youtu.be/s9QGlE7tImY" target="_blank" rel="noopener noreferrer">demo video</a></u> and <u><a href="https://roomsense-web.vercel.app/" target="_blank" rel="noopener noreferrer">web app</a></u> (please check your spam folder if you try to verify your email hehe).
            </p>
          </div>
          
          <div className="project-main-content">
            <h1>RoomSense: AR-Enhanced Classroom Engagement</h1>
            
            <p>
              <strong>Motivation.</strong> During fast-paced lectures, it's hard for instructors to notice subtle signals such as confusion, disengagement, or hesitation. RoomSense augments in-the-moment awareness without interrupting teaching. Color-coded bars appear above detected faces in the instructor's view, and a companion dashboard supports session setup, live Q&A, and lightweight note taking.
            </p>
            
            <p>
              <strong>System overview.</strong> RoomSense consists of (1) on-device AR overlays on <u><a href="https://www.spectacles.com/" target="_blank" rel="noopener noreferrer">Snap Spectacles</a></u>, and (2) a web dashboard for creating sessions, monitoring questions, and reviewing summaries. Instructors start a session on the web, students join with a short code, and the instructor sees ambient overlays in-glasses while presenting.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <img 
                src="/portfolio/RoomSenseArchitecture.png" 
                alt="System Architecture" 
                className="project-main-image"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>System architecture</p>
            </div>
            
            <p>
              <strong>On-glasses signals.</strong> The heads-up display condenses multiple cues into a single per-person bar that updates smoothly in real time. Cues include head pose (yaw/pitch/tilt), gaze direction proxies, and facial-landmark activity (e.g., brow movement, mouth openness) as indicators of attention and potential confusion. To balance clarity and motion stability, the bar uses exponential smoothing and rate-limited updates. Up to three faces are tracked concurrently to avoid visual overload.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <img 
                src="/portfolio/roomSenseLandmarks.png" 
                alt="Facial Landmarks Extracted From Head Bindings to Calculate Metrics" 
                className="project-main-image"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>Facial landmarks extracted from Head Bindings to calculate metrics</p>
            </div>
            
            <p>
              <strong>Scoring & colors.</strong> Each cue contributes small positive/negative deltas to a normalized "engagement score." The score maps to a green→yellow→red bar with subtle animation so changes are noticeable but not distracting. Thresholds are conservative to reduce false alarms; transient motions decay quickly, while sustained cues (e.g., prolonged looking away) have stronger effects.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <img 
                src="/portfolio/barPenalization.png" 
                alt="Engagement Bar Penalties as Student Attention Decreases (Shoutout to my buddy Ertugrul!!!)" 
                className="project-main-image"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>Engagement Bar Penalties as Student Attention Decreases</p>
            </div>
            
            <p>
              <strong>Workflow.</strong> Instructors create sessions on the dashboard, set basic options, and begin presenting. Students join with a code from laptops or phones to submit anonymous questions, which are shown to the instructor through the AR spectacles. The instructor can glance at the AR bars to decide when to slow down, recap, or address incoming questions.
            </p>
            
            <div className="project-main-image-section" style={{ textAlign: 'center' }}>
              <img 
                src="/portfolio/workflow.png" 
                alt="RoomSense Workflow" 
                className="project-main-image"
                style={{ maxWidth: '80%', display: 'block', margin: '0 auto' }}
              />
              <p className="image-caption" style={{ textAlign: 'center' }}>RoomSense Workflow</p>
            </div>
            
            <p>
              <strong>Privacy.</strong> RoomSense avoids face storage and does not record raw video by default. Overlays and scores are transient and remain on-device; only anonymized session metadata and student-submitted text are retained for review.
            </p>
            
            <p>
              <strong>Pilot study.</strong> In a small class pilot, all participants completed core tasks. Questionnaire responses highlighted easy navigation on the dashboard and strong preference for the "at-a-glance" bars. Average satisfaction was 8.75/10. Observations suggested the bars helped instructors time recaps and Q&A transitions without pausing to check a screen.
            </p>
            
            <p>
              <strong>Limitations.</strong> Performance depends on lighting and seating geometry; side profiles and occlusions reduce cue confidence. The three-face cap simplifies visuals but may miss activity in larger rooms. Scoring thresholds are heuristic and may require per-class tuning.
            </p>
            
            <div className="project-main-image-section">
              <div 
                className="poster-thumbnail"
                onClick={openModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal();
                  }
                }}
                aria-label="Open RoomSense documentation in full view"
              >
                <div className="poster-tile-image">
                  <iframe 
                    src="/portfolio/roomSenseReport.pdf#page=1&view=FitH"
                    className="poster-preview"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="RoomSense Documentation Preview"
                  />
                  <div className="poster-overlay">
                    <div className="poster-overlay-text">Click to view full report</div>
                  </div>
                </div>
                <div className="poster-tile-content">
                  <h3 className="poster-tile-title">RoomSense Documentation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="poster-modal-overlay" onClick={closeModal}>
          <div className="poster-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="poster-modal-close"
              onClick={closeModal}
              aria-label="Close documentation view"
            >
              ×
            </button>
            <iframe 
              src="/portfolio/roomSenseReport.pdf" 
              width="100%" 
              height="100%"
              className="poster-modal-pdf"
              title="RoomSense Documentation"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default RoomSenseProject;

