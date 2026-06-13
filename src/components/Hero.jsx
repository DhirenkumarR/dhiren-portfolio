import { ArrowRight, Briefcase, Database, Server, Zap, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, title, github, linkedin } = portfolioData.profile;

  const highlights = [
    { icon: <Briefcase size={20} />, label: "3.5+ Years Experience" },
    { icon: <Database size={20} />, label: "240M+ Records Handled" },
    { icon: <Server size={20} />, label: "Node.js + MongoDB Specialist" },
    { icon: <Zap size={20} />, label: "Database Performance Tuning" }
  ];

  return (
    <section className="hero-section" id="home">
      {/* Background glow elements */}
      <div className="glow-sphere-1"></div>
      <div className="glow-sphere-2"></div>

      <div className="hero-grid">
        <div className="hero-content">
          <span className="hero-eyebrow">Hi, I'm {name}</span>
          <h1 className="hero-title">
            Backend Developer &<br />
            <span className="gradient-text">MongoDB Specialist</span>
          </h1>
          <p className="hero-desc">
            I build scalable backend systems, optimize databases, and create reliable APIs using Node.js, Express.js, MongoDB, and cloud-based tools.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Dhirenkumar_Rathod_Resume.pdf">
              Download Resume <Download size={18} />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
            <a className="btn btn-icon" href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="social-icon">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a className="btn btn-icon" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="social-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}Dhiren.jpg`} 
              alt={name} 
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <div className="hero-highlights">
        {highlights.map((item, idx) => (
          <div key={idx} className="highlight-card">
            <div className="highlight-icon">{item.icon}</div>
            <span className="highlight-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
