import React from 'react';
import './OldBanner.css';
import productsize from "../../../../assets/homepage/productsize.png";
import Animation from ".././../../ButtonComp/AnimationButton"
import banner2 from "../../../../assets/homepage/mobilebanner2.png"
const OldBanner = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
      <div className="mainContainer" >
        <div className="OldBanner-bannerContainer">
          <div className="OldBanner-bannerLeft">
            <img src={productsize} className="OldBanner-singleImg" alt="Banner" />
            <img
              src={banner2}
              className="OldBanner-placeholderImg"
              alt="Placeholder"
            />
          </div>
          <div className="OldBanner-bannerRight">
            <h3>Smarter Shelves, Stronger Sales</h3>
            <div className="OldBanner-spacer"></div>
            <h2>
Delivers clear visibility of shelf status with 13MP resolution and wide shelf coverage.
            </h2>
            <div className="OldBanner-spacerLarge"></div>
            {/* <button className="OldBanner-bannerButton">Know More</button> */}
            <Animation
              text="Know more"
              backgroundColor="#f9cd47"
              textColor="#131b2d"
              to="/shelfvista"
              hoverTextColor="#344ea1"
              className="NewBanner-bannerButton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldBanner;
