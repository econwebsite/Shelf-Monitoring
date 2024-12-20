import React from 'react';
import './KeyFeatures.css'; // Importing the custom CSS with unique class names
import twenty from "../../../assets/homepage/20years.svg"
import perfect from "../../../assets/homepage/perfectcomp.svg"
import deep from "../../../assets/homepage/deepexpertice.svg"
import proven from "../../../assets/homepage/proventrack.svg"

const KeyFeatures = () => {
  const cards = [
    { id: 1, title: 'Extensive experience of 20+ years in tuning ISPs from various vendors to deliver top-notch image quality. ', icon: twenty, },
    { id: 2, title: 'Trusted provider of tailored retail solutions for leading global retailers.', icon:perfect,  },
    { id: 3, title: 'Dedicated support with rapid response times, ensuring continuous operational efficiency for our retail clients.', icon: deep, },
    { id: 4, title: 'Proven track record in customization, adapting to unique retail monitoring requirements.', icon:proven, }
  ];

  return (
    <div className="key-featurestot">
      <h1 className="key-features-title">Why choose e-con Systems Smart Cameras for Shelf Monitoring ?</h1>
      <div className='mainContainer'>
      <div className="key-features-grid">
        {cards.map(card => (
          <div className="key-feat-ures-card" key={card.id}>
            <div className="key-features-icon-container">
        <img src={card.icon} alt="icon" className="key-features-icon" />
      </div>
      <p className="key-features-text">{card.title}</p>
    </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
