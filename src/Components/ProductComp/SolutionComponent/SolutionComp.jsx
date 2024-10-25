import React from 'react';
import './SolutionComp.css'; 
import ideaimg from "../../../assets/productpage/idea.png"
const SolutionComp = () => {
  return (
    <div className="mainContainer">
    <div className="solution-container">
      
      <div className="solution-left-section">
        <h1>How ShelfTrack help Retailers or Inventory Solution Providers</h1>
        <div className="solution-border-line"></div>
      </div>

      <div className="solution-center-section">
        <img src={ideaimg} alt="Center Image" />
      </div>

      <div className="solution-right-section">
        <h3>Impressive ROI</h3>
        <h3>Superior Accuracy and Consistency</h3>
        <h3>Ease of Integration and Scalability</h3>
        <h3>Unmached Relability and Uptime</h3>
        <h3>Uninterrupted Shopping Experience</h3>
      </div>
    </div>
    </div>
  );
}

export default SolutionComp;
