import React from "react";
import "./Specification.css";
import specimg from "../../../assets/homepage/specimg.png"
import AnimationButton from "../../ButtonComp/AnimationButton"
const Specification = () => {
  return (
   
<div className="spec-totcon">
<div className='mainContainer'>

    <div className="spec-container">
      <div className="spec-left">
        <img
          src={specimg}
          alt="Product"
          className="spec-image"
        />
      </div>

      <div className="spec-right">
        <h1 className="spec-title">Specifications</h1>

        <div className="spec-list">
          <div className="spec-item">
            <span className="spec-label">Width</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">46cm</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Height</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">183cm</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Readers</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">1or2</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Antennas</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">2 or 4 for each side</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Resolution</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">3804x2160</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Max capture height</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">2.4m</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Battery autonomy</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">12 hours continous use </span>
          </div>
        </div>
        <div className="spec-butt">
        <AnimationButton text="Learn more" backgroundColor="#ffc107" textColor="#344ea1" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="spec-button" to="" />
        <AnimationButton text="Download Tech document" backgroundColor="#ffc107" textColor="#344ea1" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="spec-button" to="" />

    </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Specification;
