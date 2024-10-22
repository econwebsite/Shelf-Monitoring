import React from 'react';
import './Bannerone.css';
import mobileimg from "../../../../assets/homepage/mobileimg.png";
import mobilerack from "../../../../assets/homepage/mobilerack.png";
import AnimationButton from "../../../ButtonComp/AnimationButton";

const Bannerone = () => {
  return (
    <div style={{backgroundColor:"#3d5ba9"}}>
      <div className='mainContainer'>
        <div className="banner-container">
          <div className="banner-left">
          <h3>ShelfTrack – Your Eyes on Every Shelf</h3>

            <div className="spacer"></div>
            <h2>ShelfTrack captures real-time shelf images, turning visibility into actionable insights for smarter retail management</h2>
            <div className="spacer-large"></div>
            <AnimationButton text="Contact US" backgroundColor="#ffc107" textColor="#131b2d" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="banner-button" to="" />
          </div>
          <div className="banner-right">
            <div className="image-row">
              <img src={mobileimg} className="mobileimg" alt="Mobile" />
              <img src={mobilerack} className="mobilerack" alt="Rack" />
            </div>
          </div>
        </div>
        <div className="HomeBanner-bannerLine-container">
          {/* <div className="HomeBanner-bannerLine"></div> */}
        </div>
      </div>
      <img src="https://placehold.co/600x400" className="placeholder-one" alt="Placeholder" />
    </div>
  );
};

export default Bannerone;
