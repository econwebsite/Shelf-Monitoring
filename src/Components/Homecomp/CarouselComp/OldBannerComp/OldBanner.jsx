import React from 'react';
import './OldBanner.css';
// import singleImage from "../../../../assets/homepage/singleImage.png";

const OldBanner = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
      <div className="mainContainer" >
        <div className="OldBanner-bannerContainer">
          <div className="OldBanner-bannerLeft">
            {/* Single Image for Desktop */}
            <img src="https://placehold.co/600x400" className="OldBanner-singleImg" alt="Banner" />
            {/* Placeholder Image for Mobile */}
            <img
              src="https://placehold.co/600x400"
              className="OldBanner-placeholderImg"
              alt="Placeholder"
            />
          </div>
          <div className="OldBanner-bannerRight">
            <h3>SHELFVista – Eyes on Every Shelf</h3>
            <div className="OldBanner-spacer"></div>
            <h2>
              Captures real-time shelf images, turning visibility into actionable insights for smarter retail management
            </h2>
            <div className="OldBanner-spacerLarge"></div>
            <button className="OldBanner-bannerButton">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldBanner;
