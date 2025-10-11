import React from 'react';
import Introduction from '../components/Introduction';
import ProjectTiles from '../components/ProjectTiles';

const Home: React.FC = () => {
  return (
    <main className="prose prose-neutral relative mx-auto min-h-[calc(100%-9rem)] max-w-[--w] px-8 pb-16 pt-14 dark:prose-invert">
      <div className="homepage-layout">
        <Introduction />
        <ProjectTiles />
      </div>
    </main>
  );
};

export default Home;
