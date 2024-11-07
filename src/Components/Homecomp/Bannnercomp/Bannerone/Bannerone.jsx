import React from 'react';
import './Bannerone.css';
import mobileimg from "../../../../assets/homepage/mobileimg.png";
import mobilerack from "../../../../assets/homepage/mobilerack.png";
import AnimationButton from "../../../ButtonComp/AnimationButton";
import responsive1 from "../../../../assets/homepage/Responsive1.png"

const Bannerone = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
  <div className="mainContainer">
    <div className="banner-container">
      {/* Placeholder Image First */}
      <img src={responsive1} className="placeholder-one" alt="Placeholder" data-aos="fade-left" data-aos-duration="1300"/>
      
      {/* Text Content Below the Placeholder */}
      <div className="banner-left">
        <h3>ShelfTrack – Eyes on Every Shelf</h3>
        <div className="spacer"></div>
        <h2>ShelfTrack captures real-time shelf images, turning visibility into actionable insights for smarter retail management</h2>
        <div className="spacer-large"></div>
        <AnimationButton 
          text="Contact US" 
          backgroundColor="#ffc107" 
          textColor="#131b2d" 
          hoverBackgroundColor="red" 
          hoverTextColor="#344ea1" 
          className="banner-button" 
          to="" 
        />
      </div>

      {/* Right side content (images) - Hidden on mobile */}
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
