import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="experience-section section" id="experience">
      <div className="section-header">
        <span className="section-eyebrow">Work Journey</span>
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experience.map((job, index) => (
          <div key={index} className="timeline-item">
            {/* Timeline indicator circle */}
            <div className="timeline-dot-container">
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <h4 className="timeline-company">{job.company}</h4>
                </div>
                <div className="timeline-date-badge">
                  <Calendar size={14} />
                  <span>{job.date}</span>
                </div>
              </div>

              <ul className="timeline-points">
                {job.points.map((point, idx) => (
                  <li key={idx} className="timeline-point">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
