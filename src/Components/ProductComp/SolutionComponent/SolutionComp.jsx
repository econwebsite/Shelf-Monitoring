import React from 'react';
import './SolutionComp.css'; 
import ideaimg from "../../../assets/productpage/idea.png";

const SolutionComp = () => {
  return (
    <div className="mainContainer">
      <div className="solution-container">
        <h1>How ShelfTrack helps Retailers or Inventory <br /> Solution Providers?</h1>

        <div className="solution-content">
          <div className="solution-left-section">
            <div className="solution-image">
              <img src={ideaimg} alt="Center Image" className="bulb-image" />
            </div>
          </div>

          <div className="solution-right-section">
            <div className="solution-list">
              <div className="solution-item">
                <h3> <span className="checkmark">✓</span>Impressive ROI</h3>
              </div>
              <div className="solution-item">
                <h3> <span className="checkmark">✓</span>Superior Accuracy and Consistency</h3>
              </div>
              <div className="solution-item">
               
                <h3> <span className="checkmark">✓</span>Ease of Integration and Scalability</h3>
              </div>
              <div className="solution-item">
                
                <h3><span className="checkmark">✓</span>Unmatched Reliability and Uptime</h3>
              </div>
              <div className="solution-item">
                <h3> <span className="checkmark">✓</span>Uninterrupted Shopping Experience</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionComp;
