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
import aipower from "../../../assets/productpage/aipowericon.png"

const ShelfKey = () => {
  const data = [
    { icon: fourk, title: '13MP Resolution', description: 'Captures high-quality images for precise shelf analysis in real time. (Upgradable to 20MP) ' },
    { icon: wideangle, title: 'Multi-Rack Optics Coverage', description: 'Monitors 18-20 feet of shelf space with a single camera, reducing costs and simplifying setup.' },
    { icon: flexible, title: 'On-Camera AI Intelligence', description: 'Focuses solely on shelf images, smartly filtering out interference from people or carts. ' },
    { icon: lowpower, title: 'Dual-Band Wi-Fi (2.4/5 GHz)', description: 'Seamlessly connect with dual-band Wi-Fi, supporting 2.4 GHz and 5 GHz. ' },
    { icon: configurable, title: 'AI- Powered Privacy Compliance', description: 'Ensure privacy with AI that prevents image capture when people are in the frame.' },
    { icon: gdpr, title: 'Rechargeable Battery', description: <>Durable and long-lasting, operates for up to a year on a single charge.*<br></br> *Depends on image capture per day.</> },
    { icon: customenclosure, title: 'Secure, Cloud-Enabled Solution', description: 'Protects data with end-to-end encryption, enabling secure cloud transfers. ' },
    { icon: customenclosure, title: 'Mobile Application', description: 'Simplifies setup with quick installation, live preview, and easy configuration' },
    { icon: rechargebattery, title: 'Flexible Capture Modes', description: "Supports continuous and scheduled modes." },
    { icon: aipower, title: 'Custom Enclosures', description: 'Adapts to various retail environments, offering enhanced protection and durability.' },

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
