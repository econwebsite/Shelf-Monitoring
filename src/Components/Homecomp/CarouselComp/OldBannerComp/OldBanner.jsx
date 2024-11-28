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
        <h1 className="OldBanner-title">Precision Shelf Management <br></br> Meets Advanced Imaging</h1>
        <p className="OldBanner-paragraph">
        Provides pixel-perfect visibility of shelf conditions with 13 MP resolutions and wide shelf coverage
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
