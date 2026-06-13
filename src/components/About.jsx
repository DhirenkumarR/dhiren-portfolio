import React from 'react';
import { Server, Database, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { summary } = portfolioData.profile;

  const corePillars = [
    {
      icon: <Server className="pillar-icon text-primary" />,
      title: "Backend Development",
      description: "Designing scalable backend services, RESTful APIs, and business logic using Node.js, Express.js, and TypeScript."
    },
    {
      icon: <Database className="pillar-icon text-secondary" />,
      title: "MongoDB Performance",
      description: "Specialized in indexing strategies, query optimization, Atlas monitoring, and schema designs for high-throughput databases."
    },
    {
      icon: <Code2 className="pillar-icon text-accent" />,
      title: "Production Mindset",
      description: "Experienced in managing high-volume data, analyzing production logs, database upgrades, and cloud infrastructure integrations."
    }
  ];

  return (
    <section className="about-section section" id="about">
      <div className="section-header">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">Backend Expertise & Scaling Systems</h2>
      </div>

      <div className="about-content">
        <div className="about-summary-card">
          <p className="about-summary-text">{summary}</p>
        </div>

        <div className="pillars-grid">
          {corePillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon-container">{pillar.icon}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
