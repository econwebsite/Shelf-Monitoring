import React from 'react';
import './OldBanner.css';

const OldBanner = () => {
  return (
    <div className="OldBanner-container">
      <div className='mainContainer'>
      {/* Placeholder for mobile */}
      <img
        src="https://placehold.co/600x400"
        alt="Placeholder"
        className="OldBanner-placeholder"
      />
            <button className="OldBanner-contactButton">
        Contact Us
      </button>
      </div>
    </div>
  );
};

export default OldBanner;
