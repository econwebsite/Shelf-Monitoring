import React from 'react';
import './NewBanner.css';
import newmobile from "../../../../assets/homepage/newhandimg.png";
import mobilerack from "../../../../assets/homepage/mobilerack.png";
import Animation from "../../../ButtonComp/AnimationButton";
import mobilebanner1 from "../../../../assets/homepage/mobilebanner1.png"

const NewBanner = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
      <div className="mainContainer">
        <div className="NewBanner-bannerContainer">
          <div className="NewBanner-bannerLeft">
            <div className="NewBanner-imageRow">
              <img src={newmobile} className="NewBanner-mobileImg" alt="Mobile" />
              <img src={mobilerack} className="NewBanner-mobileRack" alt="Rack" />
              <img
                src={mobilebanner1}
                className="NewBanner-placeholderImg"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="NewBanner-bannerRight">
            <h3>SHELFVista – Eyes on Every Shelf</h3>
            <div className="NewBanner-spacer"></div>
            <h2>
              Captures real-time shelf images, turning visibility into actionable insights for smarter retail management
            </h2>
            <div className="NewBanner-spacerLarge"></div>
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

export default NewBanner;
