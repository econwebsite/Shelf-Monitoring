import React, { useState, useEffect, useRef } from 'react';
import './Bannerfour.css';
import energyrack from "../../../../assets/homepage/energyrack.png";
import energydrink from "../../../../assets/homepage/energydrink.png";
import pricinglight from "../../../../assets/homepage/pricinglight.png";
import AnimationButton from "../../../ButtonComp/AnimationButton";

const Bannerfour = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target); // Stop observing after animation has been triggered
        }
      });
    }, { threshold: 0.1 });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div style={{ backgroundColor: "#6978ba" }}>
      <div className='mainContainer'>
        <div ref={bannerRef} className="Bannerfour-container-unique">
          <div className="Bannerfour-left-unique">
            <div className="Bannerfour-image-row-unique">
              <img src={energyrack} className="Bannerfour-empty-unique" alt="Energy Rack" />
              <img
                src={energydrink}
                className={`Bannerfour-lowstocks-unique ${hasAnimated ? 'animate' : ''}`}
                alt="Energy Drink"
              />
              <img
                src={pricinglight}
                className={`Bannerfour-lightimg-unique ${hasAnimated ? 'animate' : ''}`}
                alt="Pricing Light"
              />
              <img
                src="https://placehold.co/600x400/png" // Placeholder image
                className="Bannerfour-placeholder-unique" // Class for placeholder
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="Bannerfour-right-unique">
            <h2>Pricing / Labeling <br /> Discrepancies</h2>
            <div className="Bannerfour-spacer-unique"></div>
            <h3>Prevents pricing and labeling errors, enhancing customer satisfaction and the overall shopping experience</h3>
            <div className="Bannerfour-spacer-large-unique"></div>
            <AnimationButton
              text="Know more"
              backgroundColor="#003873"
              textColor="white"
              hoverBackgroundColor="red"
              hoverTextColor="#344ea1"
              className="Bannerfour-button"
              to=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerfour;
