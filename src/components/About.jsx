import React from 'react';
import './About.css';

const About = () => {
  const skills = ["React", "UI", "SEO", "Accessibilité", "Formulaires", "Performance"];

  return (
    <section id="about" className="about-section">
      <div className="container about-grid"> {/* Add about-grid class */}
        <div className="about-text-content"> {/* New div for text content */}
          <h2 className="about-title">À propos de moi</h2>
          <p className="about-text">
            Je conçois des sites vitrines élégants, performants et orientés objectifs. Stack : <span className="font-medium">React</span>.<br />J’apporte un soin particulier au référencement naturel, aux micro‑interactions utiles et à la clarté du contenu.
          </p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-image-container"> {/* New div for image */}
          <img src="https://placehold.co/250x300?text=Portrait" alt="Portrait" className="about-portrait" />
        </div>
      </div>
    </section>
  );
};

export default About;
