import React from 'react';
import './OldBanner.css';
import Animation from "../../../ButtonComp/AnimationButton";

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
        <h1 className="OldBanner-title">SHELFVista – Eyes on Every Shelf</h1>
        <p className="OldBanner-paragraph">
        Captures real-time shelf images,turning visibility into actionable insights for smarter retail management
        </p>
       
        <Animation
          text="Know more"
          backgroundColor="#f9cd47"
          textColor="#131b2d"
          to="/SHELFVista"
          hoverTextColor="#344ea1"
          className="OldBanner-contactButton"
        />
        </div>
      </div>
    </div>
  );
};

export default OldBanner;
