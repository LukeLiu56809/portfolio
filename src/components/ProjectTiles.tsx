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
    imageUrl: '/portfolio/bear.png',
    link: '/blv'
  },
  {
    id: '2',
    title: 'RoomSense',
    description: 'AR-Enhanced Classroom Engagement System',
    imageUrl: '/portfolio/snap_spectacles.JPG',
    link: '/roomsense'
  },
  {
    id: '3',
    title: 'IR Data Synthesis',
    description: 'Infrared Data Synthesis for Computer Vision using Vega Prime and Lynx Prime',
    imageUrl: '/portfolio/andy3.jpg',
    link: '/ir'
  },
  {
    id: '4',
    title: 'Shark!!!!',
    description: 'Automated Fish Measurement for Electronic Monitoring',
    imageUrl: '/portfolio/hwang.jpg',
    link: '/shark'
  },
  {
    id: '5',
    title: 'tRFs in Alzheimer\'s Disease',
    description: 'tRNA-derived Fragments in Alzheimer\'s Microglia',
    imageUrl: '/portfolio/tRFtile.png',
    link: '/trf'
  },
  {
    id: '6',
    title: 'GOBOT',
    description: 'Graphical Interface for the OBO ROBOT Library',
    imageUrl: '/portfolio/robot_jasmine.jpg',
    link: '/gobot'
  },
  {
    id: '7',
    title: 'Silly Embedded Projects',
    description: 'Object Avoidance & Arduino iPod',
    imageUrl: '/portfolio/embeddedtile.jpg',
    link: '/embedded'
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
