import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import HeroIllustration from './HeroIllustration';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <HeroIllustration />
      <div className="hero-gradient" />
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-title"
        >
          {PROFILE.role}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-bio"
        >
          {PROFILE.bio}
        </motion.p>
        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="button-secondary">
            Discutons d’un projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
