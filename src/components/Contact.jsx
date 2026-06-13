import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, location, github } = portfolioData.profile;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Future backend integration:
    // await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    setSuccessMessage('Thanks for reaching out. Backend integration will be added soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Clear message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 6000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="section-header">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let’s Build Something Scalable</h2>
      </div>

      <div className="contact-container">
        {/* Contact Info Column */}
        <div className="contact-info-panel">
          <h3 className="contact-info-title">Get in Touch</h3>
          <p className="contact-info-subtitle">
            Have an open role, a database optimization query, or a backend API project? Feel free to drop a message or reach out through my channels.
          </p>

          <div className="contact-details-list">
            <div className="contact-item-card">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-label">Email</span>
                <a href={`mailto:${email}`} className="contact-value">{email}</a>
              </div>
            </div>

            <div className="contact-item-card">
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-label">Phone</span>
                <a href={`tel:${phone}`} className="contact-value">{phone}</a>
              </div>
            </div>

            <div className="contact-item-card">
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-label">Location</span>
                <span className="contact-value">{location}</span>
              </div>
            </div>
          </div>

          <a href={github} target="_blank" rel="noreferrer" className="github-contact-btn">
            View GitHub Profile <ExternalLink size={16} />
          </a>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                placeholder="Database Query Optimization / Project Proposal"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Describe your project, timeline, or job requirement..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
              <span>Send Message</span>
              <Send size={16} />
            </button>

            {successMessage && (
              <div className="success-toast animate-fade-in">
                <CheckCircle size={20} className="toast-icon" />
                <p>{successMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
