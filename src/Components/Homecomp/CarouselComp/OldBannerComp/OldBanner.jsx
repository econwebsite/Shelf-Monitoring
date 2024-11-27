import React from 'react';
import './OldBanner.css';
import Modelbutton from "../../../ButtonComp/Modelbutton";

const OldBanner = () => {
  return (
    <div className="OldBanner-container">
      <div className='mainContainer'>
        <div className='OldBanner-Rightside'>
           <img
          src="https://placehold.co/600x400"
          alt="Placeholder"
          className="OldBanner-placeholder"
        />
        <h1 className="OldBanner-title">SHELFTrack – Eyes on Every Shelf</h1>
        <p className="OldBanner-paragraph">
        Captures real-time shelf images,turning visibility into actionable insights for smarter retail management
        </p>
       
        <Modelbutton
          text="Know more"
          backgroundColor="#ffc107"
          textColor="#131b2d"
          hoverTextColor="#344ea1"
          className="OldBanner-contactButton"
        />
        </div>
      </div>
    </div>
  );
};

export default OldBanner;
