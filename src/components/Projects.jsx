import React from 'react';
import { Database, Code, Shield, Layers, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  // Function to return an icon based on project type
  const getProjectIcon = (name) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('database') || lowercaseName.includes('optimization')) {
      return <Database size={24} className="text-primary" />;
    } else if (lowercaseName.includes('chef')) {
      return <Layers size={24} className="text-secondary" />;
    } else if (lowercaseName.includes('agent')) {
      return <Shield size={24} className="text-accent" />;
    } else {
      return <Code size={24} className="text-info" />;
    }
  };

  return (
    <section className="projects-section section" id="projects">
      <div className="section-header">
        <span className="section-eyebrow">Highlighted Work</span>
        <h2 className="section-title">Backend & Database Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const techTags = project.tech.split(',').map(tag => tag.trim());

          return (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <div className="project-icon-box">
                  {getProjectIcon(project.name)}
                </div>
                <div className="project-date">
                  <Calendar size={14} />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.desc}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {techTags.map((tech, idx) => (
                    <span key={idx} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
