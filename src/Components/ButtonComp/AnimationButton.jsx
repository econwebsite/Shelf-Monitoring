import React from 'react';
import './AnimationButton.css';
import { Link } from 'react-router-dom';

const AnimationButton = ({
  text = 'know more', // Set default text to lowercase
  className = '',
  backgroundColor = '#344ea1',
  hoverColor = '#344ea1',
  onClick,
  to,
  ...props
}) => {
  return (
    <div className="btn-container">
      <Link
        to={to}
        className={`btn ${className}`}
        style={{ backgroundColor }}
        onClick={onClick}
        {...props}
      >
        {text} 
      </Link>
    </div>
  );
};

export default AnimationButton;
