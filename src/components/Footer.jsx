import React from 'react';
import { PROFILE } from '../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {PROFILE.name} — Portfolio React
      </div>
    </footer>
  );
};

export default Footer;
