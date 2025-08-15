import React from 'react';
import './IconLink.css';

const IconLink = ({ href, ariaLabel, children }) => {
  return (
    <a href={href} aria-label={ariaLabel} className="icon-link">
      {children}
    </a>
  );
};

export default IconLink;
