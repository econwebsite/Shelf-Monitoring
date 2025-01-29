import React, { useState } from 'react';
import './ProductVedios.css';
import LeftThumbnail from "../../../assets/productpage/productvideothump-1.jpg";
import RightThumbnail from "../../../assets/productpage/productvideothump-2.jpg";

import FsLightbox from "fslightbox-react";

function ProductVedios() {
  const [leftToggler, setLeftToggler] = useState(false);
  const [rightToggler, setRightToggler] = useState(false);

  return (
    <>
      <div className="product-vedios-container">
        <div className='product-main-container'>
          <h2>Videos</h2>
          <div className="product-thumbnail-row">
            <img
              src={LeftThumbnail}
              alt="Left Thumbnail"
              className="product-thumbnail"
              onClick={() => setLeftToggler(!leftToggler)}
            />
            <img
              src={RightThumbnail}
              alt="Right Thumbnail"
              className="product-thumbnail"
              onClick={() => setRightToggler(!rightToggler)}
            />
          </div>

          <FsLightbox
            toggler={leftToggler}
            sources={["https://www.youtube.com/embed/g6rJBSUpMYE?autoplay=1"]}
          />
          <FsLightbox
            toggler={rightToggler}
            sources={["https://www.youtube.com/embed/kfyMM11ny1M?autoplay=1"]}
          />
        </div>
      </div>
    </>
  );
}

export default ProductVedios;
