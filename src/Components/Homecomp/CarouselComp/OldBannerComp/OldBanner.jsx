import React from 'react';
import './OldBanner.css';

const OldBanner = () => {
  return (
    <div className="OldBanner-container">
      {/* Placeholder for mobile */}
      <img
        src="https://placehold.co/600x400"
        alt="Placeholder"
        className="OldBanner-placeholder"
      />
      
      {/* Contact Us Button */}
      <button className="OldBanner-contactButton">
        Contact Us
      </button>
    </div>
  );
};

export default OldBanner;
