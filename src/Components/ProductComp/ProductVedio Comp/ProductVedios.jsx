import React, { useState } from 'react';
import './ProductVedios.css';
import Vediothumbnail from "../../../assets/productpage/productvideothump.jpg";

import FsLightbox from "fslightbox-react";

function ProductVedios() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="product-vedios-container">
        <div className='product-main-container'>
          <h2>Video</h2>
          <div className="product-video-title-container">
            <div className="product-home-thumbnail">
              <img
                src={Vediothumbnail}
                alt="Left Thumbnail"
                className="product-homeside-img"
                onClick={() => setToggler(!toggler)}
              />
            </div>

            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/embed/g6rJBSUpMYE?autoplay=1"
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductVedios;
