import React from 'react';
import './Trackwork.css';
import shelftrack1 from ".././../../assets/productpage/shelftrack1.png"
import shelftrack2 from ".././../../assets/productpage/shelftrack2.png"
import shelftrack3 from ".././../../assets/productpage/shelftrack3.png"

const Trackwork = () => {
  return (
    <div className="Trackwork-main-container">
      <div className="mainContainer">
      <h1 className="Trackwork-main-title">How ShelfTrack Works</h1>

      <h2 className="Trackwork-subtitle">ShelfTrack operates seamlessly to keep your bussiness running smoothly</h2>

      <div className="Trackwork-blue-box">
        <div className="Trackwork-image-container">
          <img src={shelftrack1} alt="Image 1" className="Trackwork-img1" data-aos="fade-right" data-aos-duration="1300"/>
          <img src={shelftrack2} alt="Image 2" className="Trackwork-img2" data-aos="zoom-in" data-aos-duration="1300" />
          <img src={shelftrack3} alt="Image 3" className="Trackwork-img3" data-aos="fade-left" data-aos-duration="1300"/>
        </div>
        <div className="Trackwork-aqua-box">
          <div className="Trackwork-border-box">
            <div className="Trackwork-box">
              <h3>1. Image capture</h3>
              <p>The camera captures high-resolution images at set intervals,providing real-time insights into invertary levels and product placement.</p>
            </div>
            <div className="Trackwork-box">
              <h3>2. Data Transmission </h3>
              <p>Captures images are sent using Wi-Fi to your chosen backend system or cloud platform for further analysis and storage.</p>
            </div>
            <div className="Trackwork-box">
              <h3>3. User Configuration</h3>
              <p>Users can easily adjust setting via the mobile app,enabling swift decision-making and effective stock management from anywhere.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Trackwork;
