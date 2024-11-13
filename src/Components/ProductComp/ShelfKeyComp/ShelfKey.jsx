import React from 'react';
import './ShelfKey.css'; 
import fourk from "../../../assets/productpage/4k.png"
import wideangle from "../../../assets/productpage/wideangle.png"
import flexible from "../../../assets/productpage/flexible.png"
import lowpower from "../../../assets/productpage/lowpower.png"
import configurable from "../../../assets/productpage/configurable.png"
import gdbr from "../../../assets/productpage/gdpr.png"
import customenclosure from "../../../assets/productpage/customenclosure.png"
import rechargebattery from "../../../assets/productpage/rechargebattery.png"

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
      description: 'Covers extensive shelf space, monitoring over 300 products upto 5 meters,reducing blind spots',
    },
    {
      icon:flexible,
      title: 'Flexible Capture Modes',
      description: 'Support continuous,scheduled,and motion-triggered modes',
    },
    {
      icon: lowpower,
      title: 'Low-Power Wi-Fi',
      description: 'Ensures smooth data transmission without quick power drain',
    },
  
    {
      icon: configurable,
      title: 'Configurable Status LED',
      description: 'Allows easy monitoring of camera functionality',
    },
    {
      icon: gdbr,
      title: 'GDPR Compliance',
      description: 'Prevents image capture of people/motion to avoid legal issues',
    },
    {
      icon: customenclosure,
      title: 'Custom Enclosures',
      description: 'Adaptable to various retail environments for enhanced durablity',
    }, {
      icon: rechargebattery,
      title: 'Rechargeable Battery',
      description: 'Enables easy installation in the dynamic of retail aisles',
    },
  ];

  return (
    <div className="ShelfKey-container">
       <div className="mainContainer">
      <h2 className="ShelfKey-title">Key Features of SHELFTrack Camera</h2>
      
      <div className="ShelfKey-grid" >
        {data.map((item, index) => (
          <div className={`ShelfKey-item ${index % 4 !== 3 ? 'with-border' : ''}`} key={index}>
            <img src={item.icon} alt={item.title} className="ShelfKey-icon" />
            <h1 dangerouslySetInnerHTML={{ __html: item.title }}></h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ShelfKey;
