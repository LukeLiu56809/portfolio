import React, { useEffect, useState } from 'react';

const TrfProject: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set the page title
    document.title = 'tRFs in Alzheimer\'s Disease - Luke Liu';
    
    // Cleanup function to restore original title when component unmounts
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
              This project was a collaboration between <u><a href="https://researchexperts.utmb.edu/en/persons/xiaoyong-bao" target="_blank" rel="noopener noreferrer">UTMB</a></u> and <u><a href="https://www.mircore.org/" target="_blank" rel="noopener noreferrer">miRCore</a></u>.
            </p>
            <p>
              I worked under <u><a href="https://www.mircore.org/" target="_blank" rel="noopener noreferrer">Dr. Inhan Lee</a></u>, focusing on the role of tRNA-derived fragments (tRFs) in Alzheimer's disease and their regulation of microglial gene expression.
            </p>
            <p>
              We presented our work at <u><a href="https://aaic.alz.org/" target="_blank" rel="noopener noreferrer">AAIC</a></u> in July, 2025.
            </p>
            
            <div className="project-image-section">
              <img 
                src="/portfolio/inhan.png" 
                alt="Dr. Inhan Lee" 
                className="project-image"
              />
              <p className="image-caption">
                Look how awesome and intelligent my PI looks!
              </p>
            </div>
          </div>
          
          <div className="project-main-content">
            <h1>tRF Expression and Gene Regulation in Alzheimer's Microglia</h1>
            
            <p>
              Alzheimer's disease involves complex cellular interactions in the brain, with growing evidence pointing to neurotoxic microglial activity in disease progression. This project explored how tRNA-derived fragments (tRFs) regulate gene expression within microglia, offering new insights into molecular signaling pathways that influence neuroinflammation.
            </p>
            
            <p>
              Induced pluripotent stem cells (iPSCs) from both Alzheimer's patients and healthy controls were differentiated into microglia. We analyzed their small RNA, mRNA, and protein expression profiles using RNA sequencing and MALDI-TOF proteomics. Our bioinformatics pipeline combined <u><a href="http://bowtie-bio.sourceforge.net/bowtie2/index.shtml" target="_blank">Bowtie2</a></u> for read mapping, <u><a href="https://bioconductor.org/packages/release/bioc/html/DESeq2.html" target="_blank">DESeq2</a></u> for differential expression analysis, and <u><a href="https://bibiserv.cebitec.uni-bielefeld.de/rnahybrid/" target="_blank">RNAhybrid</a></u> for interaction prediction.
            </p>
            
            <p>
              The analysis revealed that multiple tRF5s were significantly upregulated in Alzheimer's microglia, while several key immune-related genes, such as HLA-DRA and WDR1, were downregulated at both mRNA and protein levels. These genes showed strong predicted binding interactions with upregulated tRF5s, suggesting a negative regulatory relationship.
            </p>
            
            <p>
              These findings highlight a potential post-transcriptional regulatory role of tRF5s in microglial gene networks and suggest that dysregulated tRF expression may contribute to altered immune responses in Alzheimer's disease.
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
                aria-label="Open AAIC poster in full view"
              >
                <div className="poster-tile-image">
                  <img 
                    src="/portfolio/PNGAAICposter.png" 
                    alt="AAIC Poster Preview" 
                    className="poster-preview"
                  />
                  <div className="poster-overlay">
                    <div className="poster-overlay-text">Click to view full poster</div>
                  </div>
                </div>
                <div className="poster-tile-content">
                  <h3 className="poster-tile-title">AAIC Conference Poster</h3>
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
              aria-label="Close poster view"
            >
              ×
            </button>
            <iframe 
              src="/portfolio/AAIC Poster Final.pdf" 
              width="100%" 
              height="100%"
              className="poster-modal-pdf"
              title="AAIC Poster"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default TrfProject;
