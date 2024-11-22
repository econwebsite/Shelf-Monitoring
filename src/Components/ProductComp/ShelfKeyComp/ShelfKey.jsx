import React from 'react';
import './ShelfKey.css'; 
import fourk from "../../../assets/productpage/4k.png";
import wideangle from "../../../assets/productpage/wideangle.png";
import flexible from "../../../assets/productpage/flexible.png";
import lowpower from "../../../assets/productpage/lowpower.png";
import configurable from "../../../assets/productpage/configurable.png";
import gdbr from "../../../assets/productpage/gdpr.png";
import customenclosure from "../../../assets/productpage/customenclosure.png";
import rechargebattery from "../../../assets/productpage/rechargebattery.png";

const ShelfKey = () => {
  const data = [
    {
      icon: fourk, 
      title: 'High-Resolution <br/> (13 MP Sensor)',
      description: 'Captures high-quality image for accurate analysis.',
    },
    {
      icon: wideangle,
      title: 'Wide-Angle Optics <br>(120-degree FOV)',
      description: 'Expansive view covers multiple product racks from 5 meters, eliminating blind spots. ',
    },
    {
      icon: flexible,
      title: 'Flexible Capture Modes',
      description: 'Supports continuous, scheduled, and motion-triggered modes.',
    },
    {
      icon: lowpower,
      title: 'Low-Power Wi-Fi',
      description: 'Ensures smooth data transmission without quick power drain.',
    },
    {
      icon: configurable,
      title: 'Configurable Status LED',
      description: 'Allows easy monitoring of camera functionality.',
    },
    {
      icon: gdbr,
      title: 'GDPR Compliance',
      description: 'Prevents image capture of people/motion to avoid legal issues.',
    },
    {
      icon: customenclosure,
      title: 'Custom Enclosures',
      description: 'Adaptable to various retail environments for enhanced durability.',
    },
    {
      icon: rechargebattery,
      title: 'Rechargeable Battery',
      description: 'Enables easy installation in the dynamic retail aisles.',
    },
  ];

  return (
    <div className="key-features-container">
      <h1 className="key-features-title">Key Features of SHELFTrack Camera</h1>
      <div className="mainContainer">
        <div className="key-features-grid">
          {data.map((item, index) => (
            <div className="key-features-card" key={index}>
              <div className="key-features-icon-container">
                <img src={item.icon} alt={item.title} className="key-features-icon" />
              </div>
              <h2 className="key-features-title-text" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
              <p className="key-features-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShelfKey;
