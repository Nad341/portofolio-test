import React from 'react';
import './HeroIllustration.css';

const HeroIllustration = () => {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rg1" gradientUnits="userSpaceOnUse" cx="280" cy="80" r="300">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rg2" gradientUnits="userSpaceOnUse" cx="960" cy="420" r="340">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
      <circle cx="280" cy="80" r="300" fill="url(#rg1)" filter="url(#blur)" />
      <circle cx="960" cy="420" r="340" fill="url(#rg2)" filter="url(#blur)" />
    </svg>
  );
};

export default HeroIllustration;
