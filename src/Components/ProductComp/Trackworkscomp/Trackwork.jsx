import React from 'react';
import './Trackwork.css';
import shelftrack1 from "../../../assets/productpage/shelftrack1.png";
import shelftrack2 from "../../../assets/productpage/shelftrack2.png";
import shelftrack3 from "../../../assets/productpage/shelftrack3.png";
import shelftrack4 from "../../../assets/productpage/shelftrack4.png";


const Trackwork = () => {
  return (
    <div className="Trackwork-main-container">
      <div className="mainContainer">
        <h1 className="Trackwork-main-title">How SHELFVista Works</h1>
        <h2 className="Trackwork-subtitle">SHELFVista operates seamlessly to keep your business running smoothly</h2>

        <div className="Trackwork-blue-box">
          <div className="Trackwork-image-container">
            <img src={shelftrack1} alt="Image 1" className="Trackwork-img" data-aos="fade-right" data-aos-duration="1000" />
            <img src={shelftrack2} alt="Image 2" className="Trackwork-img" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" />
            <img src={shelftrack3} alt="Image 3" className="Trackwork-img" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000" />
            <img src={shelftrack4} alt="Image 4" className="Trackwork-img" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000" />
          </div>
          <div className="Trackwork-aqua-box">
            <div className="Trackwork-border-box">
              <div className="Trackwork-box">
                <h3>1. Easy Configuration</h3>
                <p>Quickly set up the camera with e-con's Android/iOS app. Configure server details, capture intervals, and use RTSP live preview. This cable-free solution simplifies deployment by eliminating complex wiring.</p>
              </div>
              <div className="Trackwork-box">
                <h3>2. AI-Powered Image Capture </h3>
                <p>Once configured, camera automatically captures high-resolution images at your present intervals, ensuring reliable operations.</p>
              </div>
              <div className="Trackwork-box">
                <h3>3. Image Transfer</h3>
                <p>The captured images are wirelessly sent via Wi-Fi to the backend system or cloud platform for storage, analysis, and retrieval.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trackwork;
