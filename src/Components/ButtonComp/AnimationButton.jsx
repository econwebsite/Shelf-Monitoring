import React from 'react';
import './AnimationButton.css';
import { Link } from 'react-router-dom';

const AnimationButton = ({
  text = 'Know More',
  className = '',
  backgroundColor = '#344ea1',
  textColor = '#def9fc',
  hoverBackgroundColor = '#def9fc',
  hoverTextColor = '#344ea1',
  onClick,
  to,
  type = 'button',  // default type is button
  ...props
}) => {
  // Handle submit if it's a form
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  const buttonContent = (
    <button
      type={type}
      className={`btn ${className}`}
      style={{
        '--btn-bg-color': backgroundColor,
        '--btn-text-color': textColor,
        '--btn-hover-bg-color': hoverBackgroundColor,
        '--btn-hover-text-color': hoverTextColor,
      }}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );

  // If "to" prop is provided, wrap the button with Link for navigation
  return to ? (
    <div className="btn-container">
      <Link to={to} className="btn-link">
        {buttonContent}
      </Link>
    </div>
  ) : (
    buttonContent
  );
};

export default AnimationButton;
