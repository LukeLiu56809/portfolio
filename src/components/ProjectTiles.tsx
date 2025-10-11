import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Accessible Presentation Interfaces',
    description: 'Accessibility Focused Interfaces for Blind and Low-Vision Presenters',
    imageUrl: '/bear.png',
    link: '/projects/blv'
  },
  {
    id: '2',
    title: 'IR Data Synthesis',
    description: 'Infrared Data Synthesis for Computer Vision using Vega Prime and Lynx Prime',
    imageUrl: '/andy3.jpg',
    link: '/projects/ir'
  },
  {
    id: '3',
    title: 'Shark!!!!',
    description: 'Automated Fish Measurement for Electronic Monitoring',
    imageUrl: '/hwang.jpg',
    link: '/projects/shark'
  },
  {
    id: '4',
    title: 'tRFs in Alzheimer\'s Disease',
    description: 'tRNA-derived Fragments in Alzheimer\'s Microglia',
    imageUrl: '/tRFtile.png',
    link: '/projects/trf'
  },
  {
    id: '5',
    title: 'GOBOT',
    description: 'Graphical Interface for the OBO ROBOT Library',
    imageUrl: '/robot_jasmine.jpg',
    link: '/projects/gobot'
  },
  {
    id: '6',
    title: 'Silly Embedded Projects',
    description: 'Object Avoidance & Arduino iPod',
    imageUrl: '/embeddedtile.jpg',
    link: '/projects/embedded'
  }
];

const ProjectTiles: React.FC = () => {
  return (
    <div className="project-tiles-container">
      <div className="project-tiles-grid">
        {mockProjects.map((project, index) => (
          <Link
            key={project.id}
            to={project.link}
            className="project-tile"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="project-tile-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
              <div className="project-tile-content">
                <h3 className="project-tile-title">{project.title}</h3>
                <p className="project-tile-description">{project.description}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectTiles;
