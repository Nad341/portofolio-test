import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../data';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
          Dites‑moi en plus sur votre projet vitrine (secteur, objectifs, délais). Je reviens vers vous rapidement.
        </p>
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <ul className="contact-links">
          <li>
            <Mail size={16} />
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </li>
          <li>
            <Github size={16} />
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <Linkedin size={16} />
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <span>{PROFILE.location}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
