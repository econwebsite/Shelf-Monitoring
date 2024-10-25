import React, { useState } from "react";
import "./ShelfImpact.css";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ShelfImpact = () => {
  const [countnow, setCountnow] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCountnow(true)} onExit={() => setCountnow(false)}>
       <div className="mainContainer">
      <div className="shelfImpact-outer-container">
     
        <div className="shelfImpact-inner-box">
          <h1 className="shelfImpact-title">ShelfTrack Impact</h1>
          <div className="shelfImpact-grid-container">
            <div className="shelfImpact-glass-box">
              <h1>
                {countnow && (
                  <CountUp duration={4} start={0} end={54} style={{ color: "#69ba2f" }} />
                )}
              </h1>
              <p>Countries where the ShelfWatch is deployed</p>
            </div>
            <div className="shelfImpact-glass-box">
              <h1>
                {countnow && (
                  <CountUp duration={4} start={0} end={95} style={{ color: "#69ba2f" }} />
                )}
                .5%
              </h1>
              <p>Accuracy achieved in SKU recognition</p>
            </div>
            {/* Box 4 */}
            <div className="shelfImpact-glass-box">
              <h1>
                {countnow && (
                  <>
                    {">"}
                    <CountUp duration={4} start={0} end={55} style={{ color: "#69ba2f" }} />
                    %
                  </>
                )}
              </h1>
              <p>Reduction in store audit <br/> time</p>
            </div>
            {/* Box 4 */}
            <div className="shelfImpact-glass-box">
              <h1>
                {countnow && (
                  <>
                    <CountUp duration={4} start={0} end={40} style={{ color: "#69ba2f" }} />
                    %-
                    <CountUp duration={4} start={0} end={60} style={{ color: "#69ba2f" }} />
                    %
                  </>
                )}
              </h1>
              <p>Improvement in SOS,OSA,Planogram and other KPIs</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default ShelfImpact;
