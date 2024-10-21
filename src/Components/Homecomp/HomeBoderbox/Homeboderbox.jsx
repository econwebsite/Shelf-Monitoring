import React from 'react';
import './Homeboder.css';
import retailer from "../../../assets/homepage/retailer.jpg" 
const Homeboderbox = () => {
  return (
    <div className="Homeboderbox-container">
            <div className='mainContainer'>
      <div className="Homeboderbox-content-box" data-aos="flip-up" data-aos-duration="1100">
        <div className="Homeboderbox-left-side">
          <h2>How e-con Systems Camera Solution Help Retailers with Shelf Monitoring</h2>
          <p>
            e-con Systems offers smart cameras with Wi-Fi streaming that easily detect and recognize product details while extracting real-time information. This helps streamline shelf monitoring workflows and makes the shopping journey more convenient.
          </p>
        </div>
        <div className="Homeboderbox-right-side">
          <img
            src={retailer}
            alt="Placeholder"
            className="Homeboderbox-placeholder-image"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Homeboderbox;
