import React from 'react';
import { Server, Database, Zap, Cloud, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Backend Development",
      icon: <Server size={22} className="skill-cat-icon text-primary" />,
      items: skills.backend
    },
    {
      title: "Databases & ORMs",
      icon: <Database size={22} className="skill-cat-icon text-secondary" />,
      items: skills.databases
    },
    {
      title: "MongoDB Specialization",
      icon: <Zap size={22} className="skill-cat-icon text-accent" />,
      items: skills.mongodbSpecialization
    },
    {
      title: "Cloud & Dev Tools",
      icon: <Cloud size={22} className="skill-cat-icon text-info" />,
      items: skills.cloudTools
    },
    {
      title: "Soft Skills",
      icon: <Users size={22} className="skill-cat-icon text-warning" />,
      items: skills.softSkills
    }
  ];

  return (
    <section className="skills-section section" id="skills">
      <div className="section-header">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Technical Competence & Specialization</h2>
      </div>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skills-category-card">
            <div className="skills-category-header">
              {cat.icon}
              <h3>{cat.title}</h3>
            </div>
            <div className="skills-chips-container">
              {cat.items.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
