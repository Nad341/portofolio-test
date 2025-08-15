import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../data';
import IconLink from './IconLink';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ isDark, setIsDark }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo">{PROFILE.name}</a>
          <div className="nav-links">
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <IconLink href={PROFILE.github} ariaLabel="GitHub"><Github size={18} /></IconLink>
            <IconLink href={PROFILE.linkedin} ariaLabel="LinkedIn"><Linkedin size={18} /></IconLink>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <a href="#contact" className="contact-button">
              Me contacter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
