import React from 'react';
import './ShelfVisible.css'; 
import bottle from "../../../assets/productpage/bottleimg.png";
import camera from "../../../assets/productpage/camera.png";
import productrespon from "../../../assets/productpage/productresponsive.png"

const ShelfVisible = () => {
  return (
    <div className="shelfVisible-container">
      <div className="mainContainer">
        <div className="shelfVisible-image-wrapper">
          <img src={bottle} alt="Image 1" className="visiblebottle" />
          <img src={camera} alt="Image 2" className="visiblecamera" />
          {/* Placeholder image for mobile */}
          <img src={productrespon} alt="Placeholder"className="mobile-placeholder"/>
        </div>
        <h1 className="shelfVisible-title">Achieve Complete Shelf Visibility in Real Time</h1>
        <p className="shelfVisible-paragraph">e-con System's ShelfTrack is compact, battery-powered Wi-Fi camera that offers a smart and efficient solution for monitoring shelves and retail displays in environments such as retail stores, warehouses, and distribution centers.</p>
      </div>
    </div>
  );
};

export default ShelfVisible;
