import React, { useEffect } from 'react';

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = 'CV - Luke Liu';
    return () => {
      document.title = 'lukeliu-react';
    };
  }, []);

  return (
    <main className="prose prose-neutral relative mx-auto min-h-[calc(100%-9rem)] max-w-[--w] px-8 pb-16 pt-14 dark:prose-invert">
      <div className="pdf-container">
        <iframe 
          src="/portfolio/CV.pdf" 
          width="100%" 
          height="800px"
          className="pdf-viewer"
          title="Luke Liu CV"
        />
      </div>
    </main>
  );
};

export default Resume;