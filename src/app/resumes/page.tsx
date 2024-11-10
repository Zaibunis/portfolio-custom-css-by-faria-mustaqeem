import React from 'react';

interface ResumeProject {
  title: string;
  imageUrl: string;
  projectUrl: string;
}

const resumeProjects: ResumeProject[] = [
  {
    title: 'Static Resume Builder',
    imageUrl: './mile 1.PNG', // Adjust the path as needed
    projectUrl: 'https://mile-1-2-by-faria-mustaqeem.vercel.app/',
  },
  {
    title: 'Dynamic Resume Builder',
    imageUrl: './mile 2.PNG', // Adjust the path as needed
    projectUrl: 'https://mile-3-by-faria-mustaqeem.vercel.app/',
  },
  {
    title: 'Editable Resume Builder',
    imageUrl: './mile 3.PNG', // Adjust the path as needed
    projectUrl: 'https://mile-4-by-faria-mustaqeem.vercel.app/',
  },
];

export default function Resume() {
  return (
    <div className="resume-section">
      <h1 className="resume-title"><i>Here is my creation where you can check my Resumes ⬇ </i></h1>

      <div className="resume-button-container">
        <button className="resume-button">
          <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
            Check it out on GitHub!✨
          </a>
        </button>
      </div>

      <div className="resume-card-container">
        {resumeProjects.map((project) => (
          <ResumeCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ResumeCard({ project }: { project: ResumeProject }) {
  return (
    <div className="resume-card">
      <img src={project.imageUrl} alt={project.title} className="resume-image" />

      <h2 className={`resume-card-title ${project.title === 'Static Resume Builder' ? 'static-title' : ''}`}>
        {project.title}
      </h2>

      <button className="resume-card-button">
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </button>
    </div>
  );
}