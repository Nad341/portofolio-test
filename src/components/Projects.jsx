import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = ({ projects, tags, activeTag, setActiveTag, setSelected }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Projets</h2>
          <div className="tags-container">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`tag-button ${activeTag === tag ? 'active' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => setSelected(project.id)}
              className="project-card"
            >
              <div className="project-image-placeholder">
                <span className="project-placeholder-title">{project.title}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
