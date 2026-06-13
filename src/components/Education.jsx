import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { school, degree, date, gpa } = portfolioData.education;

  return (
    <section className="education-section section" id="education">
      <div className="section-header">
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">Academic Qualifications</h2>
      </div>

      <div className="education-card-container">
        <div className="education-card">
          <div className="education-icon-box">
            <GraduationCap size={32} />
          </div>

          <div className="education-details">
            <h3 className="education-degree">{degree}</h3>
            <h4 className="education-school">{school}</h4>
            
            <div className="education-meta">
              <div className="education-meta-item">
                <Calendar size={16} />
                <span>{date}</span>
              </div>
              <div className="education-meta-item">
                <Award size={16} />
                <span className="gpa-highlight">{gpa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
