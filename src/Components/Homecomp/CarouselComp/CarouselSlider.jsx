import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewBanner from "./NewBannercomp/NewBanner";
import OldBanner from "./OldBannerComp/OldBanner";

import "./Carouselslider.css";

const Carouselslider = () => {
  return (
    <div id="customBootstrapCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#customBootstrapCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#customBootstrapCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      {/* Carousel Content */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="carousel-slide-content">
            <NewBanner />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="carousel-slide-content">
            <OldBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carouselslider;
