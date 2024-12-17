import React from 'react';
import './ShelfKey.css';
import fourk from "../../../assets/productpage/4k.png";
import wideangle from "../../../assets/productpage/wideangle.png";
import flexible from "../../../assets/productpage/flexible.png";
import lowpower from "../../../assets/productpage/lowpower.png";
import configurable from "../../../assets/productpage/configurable.png";
import gdpr from "../../../assets/productpage/gdpr.png";
import customenclosure from "../../../assets/productpage/customenclosure.png";
import rechargebattery from "../../../assets/productpage/rechargebattery.png";

const ShelfKey = () => {
  const data = [
    { icon: fourk, title: '13MP Resolution', description: 'Captures high-quality images for accurate analysis.' },
    { icon: wideangle, title: 'Wide-Angle Optics', description: 'Covers multiple racks with a wide view, eliminating blind spots.' },
    { icon: flexible, title: 'Flexible Capture Modes', description: 'Supports continuous and scheduled modes.' },
    { icon: lowpower, title: 'Low-Power Wi-Fi', description: 'Drives smooth data transmission without power drain.' },
    { icon: configurable, title: 'Configurable Status LED', description: 'Enables seamless monitoring of camera functionality.' },
    { icon: gdpr, title: 'GDPR Compliance', description: 'Prevents image capture of people for legal safety.' },
    { icon: customenclosure, title: 'Custom Enclosures', description: 'Adapts to various retail environments for more durability.' },
    { icon: rechargebattery, title: 'Rechargeable Battery', description: <>Durable and long-lasting, runs up to one year on a single charge.* <br></br>(*Based on 2 images/day usage)</> },
    { icon: rechargebattery, title: 'On-Camera AI Intelligence', description: 'Focuses solely on shelf images, smartly filtering out interference from people or carts.' },

  ];

  return (
    <div className="key-features-container">
      <h1 className="key-features-title">SHELFVista Camera Highlights</h1>
      <div className='mainContainer'>
      <div className="key-features-staircase">
        {data.map((item, index) => (
          <div className="key-features-card" key={index}>
            <div className="key-features-icon-container">
              <img src={item.icon} alt={item.title} className="key-features-icon" />
            </div>
            <h2 className="key-features-title-text">{item.title}</h2>
            <p className="key-features-text">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ShelfKey;
