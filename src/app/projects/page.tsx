// src/app/projects/page.tsx

import React from 'react';

interface Project {
  title: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: 'Amazon Clone',
    imageUrl: './amazon.PNG',
    projectUrl: 'https://vercel.com/api/toolbar/link/amazon-clone-by-faria-mustaqeem.vercel.app?via=project-dashboard-alias-list&p=1&page=/',
  },
  {
    title: 'Simple Calculator',
    imageUrl: './calcu.PNG',
    projectUrl: 'https://vercel.com/api/toolbar/link/simple-calculator-design.vercel.app?via=project-dashboard-alias-list&p=1&page=/',
  },
];

export default function Projects() {
  return (
    <div className="projects-section">
      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-content">
          <p className="experience-text">
            As a dedicated and results-oriented junior developer, I'm passionate about crafting innovative and user-friendly web applications. With a strong foundation in coding and design, I strive to continually improve my skills and stay up-to-date with the latest technologies. In my previous role as a web developer, I've successfully contributed to various projects. My ability to quickly learn new technologies and adapt to changing requirements has enabled me to consistently deliver high-quality solutions.
          </p>
          <p className="experience-text">I'm eager to continue expanding my skills and contribute to exciting projects in the field of web development.</p>
        </div>
      </section>

      {/* Projects Section */}
      <div className="projects-container">
        <h1 className="projects-heading"> Here is my creation where you can check my projects ⬇ </h1>
        <div className="projects-button-container">
          <button className="projects-button">
            <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
              Check it out on GitHub!✨
            </a>
          </button>
        </div>
        <div className="projects-card-container">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <button className="project-button">
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </button>
      </div>
    </div>
  );
}