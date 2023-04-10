import React from 'react';
import ProjectCard from '../components/ProjectCard';

const list_projects = [
  {
    imageUrl: 'https://ghadeer-doba.github.io/portfolio-app/static/media/photo1.76b22eb753ddc88e0626.jpg',
    title: 'React Space',
    content: 'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
  },
  {
    imageUrl: 'https://ghadeer-doba.github.io/portfolio-app/static/media/photo2.7d510936625768642967.jpg',
    title: 'React Infinite Scroll',
    content: 'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
  },
  {
    imageUrl: 'https://ghadeer-doba.github.io/portfolio-app/static/media/photo3.9a32dfac129b20149889.jpg',
    title: 'Photo Gallery',
    content: 'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
  },
  {
    imageUrl: 'https://ghadeer-doba.github.io/portfolio-app/static/media/photo4.4c7907d15dd9ea0be97c.jpg',
    title: 'Event Planner',
    content: 'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-sky-200 flex flex-col justify-center items-center pb-20">
      <h1 className="my-10 text-4xl">Featured projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {list_projects.map((project, id) => (
          <ProjectCard key={id} imageUrl={project.imageUrl} title={project.title} content={project.content} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
