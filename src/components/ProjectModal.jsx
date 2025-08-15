import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'; // Import Chevron icons
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Assuming 3 placeholder images

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        key="modal"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-description">{project.description}</p>
          </div>
          <button
            aria-label="Fermer"
            onClick={onClose}
            className="close-button"
          >
            <X size={16} />
            <span className="sr-only">Fermer</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="carousel-wrapper"> {/* New wrapper for carousel and controls */}
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}> {/* Dynamic transform */}
                <div className="carousel-slide">
                  <div className="carousel-image-placeholder">Image 1</div>
                </div>
                <div className="carousel-slide">
                  <div className="carousel-image-placeholder">Image 2</div>
                </div>
                <div className="carousel-slide">
                  <div className="carousel-image-placeholder">Image 3</div>
                </div>
              </div>
            </div>
            <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
              <ChevronRight size={24} />
            </button>
            <div className="carousel-bullets">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  className={`bullet ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="project-details-text">
            <p>{project.details}</p>
          </div>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <ExternalLink size={16} /> Aperçu
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                <Github size={16} /> Code source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
