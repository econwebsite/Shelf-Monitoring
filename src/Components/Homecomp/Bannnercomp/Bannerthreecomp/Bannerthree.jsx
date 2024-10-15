import React, { useState, useEffect, useRef } from 'react';import './Bannerthree.css';
import missplacesmall from "../../../../assets/homepage/misplacesmall.png";
import misplacelarge from "../../../../assets/homepage/misplacelarge.png";
import planlight from "../../../../assets/homepage/planlight.png";
import AnimationButton from "../../../ButtonComp/AnimationButton";

const Bannerthree = () => {
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
    }, { threshold: 0.1 }); // Adjust threshold as needed

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
    <div style={{ backgroundColor: "#3d5ba9" }}>
                    <div className='mainContainer'>
      <div ref={bannerRef} className="Bannerthree-container">
        <div className="Bannerthree-left">
          <h2>Planogram <br /> Compliance</h2>
          <div className="Bannerthree-spacer"></div>
          <h3>Ensure high-demand products are always available, boosting customer satisfaction and sales.</h3>
          <div className="Bannerthree-spacer-large"></div>
          <AnimationButton text="Know More" backgroundColor="#003873" textColor="white" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="Bannerthree-button" to="" />
        </div>
        <div className="Bannerthree-right">
          <div className="Bannerthree-image-row">
            <img src={planlight} className={`Bannerthree-planlight-animation ${hasAnimated ? 'animate' : ''}`} alt="Plan Light" />
            <img src={missplacesmall} className={`Bannerthree-missplacesmall-animation ${hasAnimated ? 'animate' : ''}`} alt="Missplace Small" />
            <img src={misplacelarge} className={`Bannerthree-misplacelarge-animation ${hasAnimated ? 'animate' : ''}`} alt="Misplace Large" />
          </div>
        </div>
      </div>
      <div className="HomeBanner-bannerLine-container">
        <div className="HomeBanner-bannerLine"></div>
      </div>
      </div>
    </div>
  );
};

export default Bannerthree;


