import React from 'react';
import './Keyfeatures.css';

const KeyFeatures = () => {
  // Array of feature data with left and right content
  const features = [
    {
      left: {
        title: 'High-Resolution (13 MP Sensor)',
        description: 'Captures high-quality image for accurate analysis',
        icon: 'icon-left-1.png',
      },
      right: {
        title: 'Wide-Angle Optics (120-degree FOV)',
        description: 'covers extensive shelf space,monitoring over 300 products up to 5 meters,reducing blind sports',
        icon: 'icon-right-1.png',
      },
    },
    {
      left: {
        title: 'Flexible Captures Modes',
        description: 'Supports continous,scheduled and motion-triggred modes',
        icon: 'icon-left-2.png',
      },
      right: {
        title: 'Low-Power Wi-Fi',
        description: 'Ensure smooth data transmission without quick power drain',
        icon: 'icon-right-2.png',
      },
    },
    {
      left: {
        title: 'Configurable Status LED',
        description: 'Allows easy monitoring of camera functionality',
        icon: 'icon-left-3.png',
      },
      right: {
        title: 'GDPR Complience',
        description: 'Prevents image capture of people/motion to avoid legal issues',
        icon: 'icon-right-3.png',
      },
    },
    {
      left: {
        title: 'Custom Enclosures',
        description: 'Adapatable to varoius retail environment for enhanced durablity',
        icon: 'icon-left-4.png',
      },
      right: {
        title: 'Rechargable Battery',
        description: 'Enables easy installation in the dynamic of retail aisles',
        icon: 'icon-right-4.png',
      },
    },
  ];

  const imageContainerClasses = [
    'image-container-blue',
    'image-container-green',
    'image-container-yellow',
    'image-container-pink',
  ];

  return (
    <div className='keyfeatures-container'>
      <div className="keyfeatures-content">
        {/* Centered Text */}
        <div className="keyfeatures-centered-text">
          <h2 className="keyfeatures-main-title">e-con Systems'</h2>
          <h3 className="keyfeatures-sub-title">Key Wi-Fi Camera Features for Shelf Monitoring</h3>
        </div>

        {/* Grid Layout */}
        <div className="keyfeatures-grid-layout">
          {features.map((feature, index) => (
            <div className="keyfeatures-grid-row" key={index}>
              {/* Left Column Rectangle Box */}
              <div className="keyfeatures-rectangle-box">
                <div className={imageContainerClasses[index % imageContainerClasses.length]}>
                  {/* Image Icon */}
                  <img src={feature.left.icon} alt="Left Icon" className="keyfeatures-icon" />
                </div>
                <div className="keyfeatures-text-container">
                  <h4>{feature.left.title}</h4>
                  <p>{feature.left.description}</p>
                </div>
              </div>

              {/* Right Column Rectangle Box */}
              <div className="keyfeatures-rectangle-box">
                <div className={imageContainerClasses[(index + 1) % imageContainerClasses.length]}>
                  {/* Image Icon */}
                  <img src={feature.right.icon} alt="Right Icon" className="keyfeatures-icon" />
                </div>
                <div className="keyfeatures-text-container">
                  <h4>{feature.right.title}</h4>
                  <p>{feature.right.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
