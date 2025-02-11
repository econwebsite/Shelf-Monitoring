import React from 'react';
import './Bannerone.css';
import mobileimg from "../../../../assets/homepage/mobileimg.png";
import mobilerack from "../../../../assets/homepage/mobilerack.png";
import AnimationButton from "../../../ButtonComp/AnimationButton";
import Modelbutton from "../../../ButtonComp/Modelbutton";

import responsive1 from "../../../../assets/homepage/Responsive1.png"

const Bannerone = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
  <div className="mainContainer">
    <div className="banner-container">
      <img src={responsive1} className="placeholder-one" alt="Placeholder" data-aos="fade-left" data-aos-duration="1300"/>
      
      <div className="banner-left">
        <h3>SHELFTrack – Eyes on Every Shelf</h3>
        <div className="spacer"></div>
        <h2>Captures real-time shelf images, turning visibility into actionable insights for smarter retail management</h2>
        <div className="spacer-large"></div>
       
    <Modelbutton text="Contact Us" 
          backgroundColor="#ffc107" 
          textColor="#131b2d" 
          hoverTextColor="#344ea1" 
          className="banner-button" />

      </div>

      <div className="banner-right">
        <div className="image-row">
          <img src={mobileimg} className="mobileimg" alt="Mobile" />
          <img src={mobilerack} className="mobilerack" alt="Rack" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Bannerone;
