import React from 'react';
import './OldBanner.css';
import Modelbutton from "../../../ButtonComp/Modelbutton"

const OldBanner = () => {
  return (
    <div className="OldBanner-container">
      <div className='mainContainer'>
      {/* Placeholder for mobile */}
      <img
        src="https://placehold.co/600x600"
        alt="Placeholder"
        className="OldBanner-placeholder"
      />
      <Modelbutton
              text="Contact Us"
              backgroundColor="#ffc107"
              textColor="#131b2d"
              hoverTextColor="#344ea1"
              className="OldBanner-contactButton"
            />
      </div>
    </div>
  );
};

export default OldBanner;
