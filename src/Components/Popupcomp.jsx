import React from 'react';
import './Popupcomp.css';
import { MdClose } from 'react-icons/md';
import { MdLocationOn, MdEvent } from 'react-icons/md'; 
import cesbanner from '../assets/homepage/cesbanner.jpg';

const Popupcomp = ({ isVisible, onClose }) => {
  if (!isVisible) return null; 

  return (
    <div className="popup-overlay">
        
      <div className="popup-container">
        <MdClose className="popup-close-icon" onClick={onClose} />
        <h2 className="popup-title">CES Events -2025</h2>
        <a href='https://www.e-consystems.com/events/ces-2025.asp' style={{textDecoration:"none"}}>
        <img src={cesbanner} alt="CES Banner" className="popup-image-small" />
        </a>
        <p className='popup-content'>AI Powered Vision Solutions</p>

        <div className="popup-row">
  <div className="popup-column">
    <div className="popup-icon-text">
      <div className="popup-icon-row">
        <MdLocationOn className="popup-icon" />
        <span className="popup-text">Booth Number: 9517 <br></br>LVCC, Las Vegas</span>
      </div>
    </div>
  </div>

  <div className="popup-column">
    <div className="popup-icon-text">
      <div className="popup-icon-row">
        <MdEvent className="popup-icon" />
        <span className="popup-text">January 7-10, 2025</span>
      </div>
    </div>
  </div>
</div>


        <a href="https://www.e-consystems.com/events/ces-2025.asp" className="popup-button">
          Know More
        </a>
      </div>
    </div>
  );
};

export default Popupcomp;
